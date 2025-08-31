"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { generateColorPaletteFromMood } from "@/ai/flows/generate-color-palette-from-mood";
import { Loader, Palette, Wand2 } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const [mood, setMood] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [paletteResult, setPaletteResult] = useState<{ palette: string[]; description: string } | null>(null);
  const { toast } = useToast();

  const handlePaletteGeneration = async () => {
    if (!mood.trim()) {
      toast({
        title: "Mood is empty",
        description: "Please enter a mood or style to generate a palette.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    setPaletteResult(null);
    try {
      const result = await generateColorPaletteFromMood({ mood });
      setPaletteResult({ palette: result.palette, description: result.description });
    } catch (error) {
      console.error("Error generating color palette:", error);
      toast({
        title: "AI Error",
        description: "Sorry, we couldn't generate a palette. Please try another mood.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
         <Image 
          src="/FFBG.jpg"
          alt="Background with paint splashes on a wall"
          data-ai-hint="paint splash"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-800/60" />
      </div>
     
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Transform Your Space With{" "}
              <span
                className="bg-gradient-to-r from-accent to-purple-400 text-transparent bg-clip-text"
                style={{ animation: 'gradient 8s ease infinite', backgroundSize: '400% 400%' }}
              >
                Color
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-xl mx-auto md:mx-0">
              Professional painting and decoration services that bring life and personality to your walls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <Link href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="#gallery" onClick={(e) => handleLinkClick(e, '#gallery')}>View Our Work</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Card className="w-full max-w-md bg-background/20 backdrop-blur-lg border-white/20 text-white shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white"><Palette /> AI Color Palette Generator</CardTitle>
                <CardDescription className="text-slate-300">Describe a mood or style to get a custom palette.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="mood" className="text-white">Enter a mood (e.g., cozy, modern, vibrant)</Label>
                    <Input 
                      id="mood" 
                      placeholder="A serene coastal morning..." 
                      value={mood}
                      onChange={(e) => setMood(e.target.value)}
                      className="bg-white/10 border-white/30 text-white placeholder:text-slate-400 focus:bg-white/20"
                      onKeyDown={(e) => e.key === 'Enter' && handlePaletteGeneration()}
                    />
                  </div>
                  <Button onClick={handlePaletteGeneration} disabled={isLoading} className="w-full">
                    {isLoading ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                    Generate Palette
                  </Button>
                  {paletteResult && (
                    <div className="pt-4 border-t border-white/20 space-y-3">
                      <div className="flex space-x-2">
                        {paletteResult.palette.map((color, index) => (
                          <div
                            key={index}
                            className="w-full h-12 rounded-md transition-all hover:scale-105"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-slate-200">{paletteResult.description}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
