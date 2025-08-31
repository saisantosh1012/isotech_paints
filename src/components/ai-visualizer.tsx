"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { generateDesignIdeas } from "@/ai/flows/generate-design-ideas";
import type { GenerateDesignIdeasOutput } from "@/ai/flows/generate-design-ideas";
import { UploadCloud, Bot, Sparkles, Wand2 } from "lucide-react";

export function AiVisualizer() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GenerateDesignIdeasOutput | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setResult(null);
    }
  };

  const fileToDataUri = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      toast({
        title: "No Photo Selected",
        description: "Please upload a photo of your room first.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const photoDataUri = await fileToDataUri(file);
      const aiResult = await generateDesignIdeas({ photoDataUri });
      setResult(aiResult);
    } catch (error) {
      console.error("Error generating design ideas:", error);
      toast({
        title: "AI Error",
        description:
          "Sorry, we couldn't generate design ideas. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="visualizer" className="bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            AI Design <span className="text-primary">Visualizer</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Stuck for ideas? Upload a photo of your room and let our AI provide
            you with stunning color schemes and design concepts.
          </p>
          <div className="mt-4 w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Bot className="w-8 h-8 text-primary" />
              Visualize Your Future Space
            </h3>
            <p className="text-muted-foreground">
              Our AI analyzes your room's lighting, layout, and existing
              elements to suggest complementary styles. It's like having a
              personal interior designer at your fingertips, ready to spark
              your next great idea.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-accent mt-1 shrink-0" />
                <span>
                  Get instant, personalized design and color palette suggestions.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-accent mt-1 shrink-0" />
                <span>
                  Experiment with different looks before picking up a paintbrush.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-accent mt-1 shrink-0" />
                <span>
                  Powered by cutting-edge generative AI technology.
                </span>
              </li>
            </ul>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Try Our AI Visualizer</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="roomPhoto">Upload Room Photo</Label>
                  <div className="relative">
                    <Input
                      id="roomPhoto"
                      type="file"
                      className="hidden"
                      accept="image/png, image/jpeg, image/webp"
                      onChange={handleFileChange}
                      disabled={isLoading}
                    />
                     <Label htmlFor="roomPhoto" className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors block">
                      <UploadCloud className="w-10 h-10 mx-auto text-muted-foreground mb-2"/>
                      <span className="text-primary font-semibold">Click to upload</span> or drag and drop
                      <p className="text-xs text-muted-foreground mt-1">PNG, JPG, WEBP (Max 5MB)</p>
                     </Label>
                  </div>
                </div>

                {previewUrl && (
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Image Preview:</p>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border">
                      <Image
                        src={previewUrl}
                        alt="Room preview"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                )}
                
                <Button type="submit" className="w-full" disabled={isLoading || !file}>
                  {isLoading ? (
                    <>
                      <Wand2 className="w-4 h-4 mr-2 animate-pulse" />
                      Generating Ideas...
                    </>
                  ) : (
                    <>
                     <Wand2 className="w-4 h-4 mr-2" />
                      Generate Design Ideas
                    </>
                  )}
                </Button>
              </form>

              {result && (
                <div className="mt-6 border-t pt-6">
                  <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-accent" />
                    AI Design Suggestions
                  </h4>
                  <div className="prose prose-sm max-w-none text-card-foreground">
                    {result.designIdeas.split('\n').map((line, index) => {
                      if (line.startsWith('*')) {
                        return <p key={index} className="pl-4">{line}</p>;
                      }
                      return <p key={index}>{line}</p>
                    })}
                  </div>
                </div>
              )}
              </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}