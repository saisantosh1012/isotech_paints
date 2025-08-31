import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Paintbrush, Home, Wand2 } from "lucide-react";

const services = [
  {
    icon: <Paintbrush className="w-8 h-8 text-primary" />,
    title: "Interior Painting",
    description:
      "Transform your indoor spaces with our premium interior painting services, from single rooms to full homes.",
  },
  {
    icon: <Home className="w-8 h-8 text-primary" />,
    title: "Exterior Painting",
    description:
      "Protect and beautify your home's exterior with our durable, weather-resistant paints and expert application.",
  },
  {
    icon: <Wand2 className="w-8 h-8 text-primary" />,
    title: "Decorative Finishes",
    description:
      "Add a unique touch with custom textures, faux finishes, and accent walls that make your space stand out.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Delivering high-quality painting and decorating solutions tailored to your needs.
          </p>
           <div className="mt-4 w-24 h-1 bg-primary mx-auto rounded-full"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                    {service.icon}
                </div>
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
