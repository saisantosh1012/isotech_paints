import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, Palette, Brush, Search, Star } from "lucide-react";

const processSteps = [
    {
        icon: <Check className="w-8 h-8 text-accent" />,
        title: "Consultation",
        description: "We start by understanding your vision, requirements, and the unique aspects of your space.",
    },
    {
        icon: <Palette className="w-8 h-8 text-accent" />,
        title: "Color Selection",
        description: "Our experts help you choose the perfect palette from premium, high-quality paint options.",
    },
    {
        icon: <Search className="w-8 h-8 text-accent" />,
        title: "Surface Preparation",
        description: "We meticulously prepare all surfaces—cleaning, sanding, and priming—to ensure a flawless, long-lasting finish.",
    },
    {
        icon: <Brush className="w-8 h-8 text-accent" />,
        title: "Expert Painting",
        description: "Our skilled painters use professional techniques and top-tier materials to bring your vision to life.",
    },
    {
        icon: <Star className="w-8 h-8 text-accent" />,
        title: "Final Inspection",
        description: "We conduct a thorough quality check and a final walkthrough with you to guarantee your complete satisfaction.",
    }
]

export function Process() {
  return (
    <section id="process" className="bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            A proven, step-by-step approach to ensure a perfect result every time.
          </p>
          <div className="mt-4 w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0"></div>
            {processSteps.map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center text-center">
                   <div className="bg-background rounded-full p-4 border-4 border-muted/50 shadow-md mb-4 flex items-center justify-center w-20 h-20">
                       {step.icon}
                   </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
