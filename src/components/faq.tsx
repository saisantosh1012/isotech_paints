import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "How do I prepare my home for painting?",
    answer: "We recommend moving furniture to the center of the room and covering it. Please remove wall hangings and clear the work area. Our professional team will handle all surface preparation, including cleaning, sanding, and priming for a flawless finish.",
  },
  {
    question: "What type of paint do you recommend for high-humidity areas?",
    answer: "For bathrooms, kitchens, and other humid areas, we recommend premium mold-resistant acrylic latex paints with a semi-gloss or satin finish. These paints contain antimicrobial agents that prevent mold growth and are exceptionally durable and easy to clean.",
  },
  {
    question: "How often should exterior paint be refreshed?",
    answer: "Typically, a quality exterior paint job lasts 5-10 years, depending on climate conditions, sun exposure, and the quality of the previous paint job. We offer free evaluations to determine if your exterior needs refreshing to protect and beautify your home.",
  },
  {
    question: "Can you paint over wallpaper?",
    answer: "While possible, we don't recommend it for the best, long-lasting results. Our standard process includes professional wallpaper removal. If removal isn't feasible, we can apply a special oil-based primer to seal the wallpaper before painting.",
  },
  {
    question: "What's the difference between latex and oil-based paints?",
    answer: "Latex (water-based) paints are eco-friendly, dry faster, have low odor, and are more flexible, preventing cracking. Oil-based paints provide a harder finish but are less common for walls now due to VOCs and yellowing over time. We primarily use high-quality acrylic-latex paints for most applications.",
  },
  {
    question: "How do I choose the right paint sheen?",
    answer: "Sheen affects both appearance and durability. Flat/matte is great for hiding imperfections on ceilings. Eggshell/Satin is perfect for most walls, offering a soft glow and washability. Semi-gloss is ideal for trim, doors, and high-moisture areas like bathrooms.",
  },
  {
    question: "Do you offer color consultation services?",
    answer: "Yes! We offer professional color consultation to help you choose the perfect colors for your space. Our experts consider your lighting, furniture, and personal style to create a cohesive and beautiful palette.",
  },
  {
    question: "What safety measures do you take during painting?",
    answer: "Our team follows strict safety protocols. We use drop cloths and plastic to protect your belongings, ensure proper ventilation, and use low-VOC or zero-VOC paints whenever possible to maintain a healthy indoor air quality.",
  },
  {
    question: "How long until I can use the room after painting?",
    answer: "Latex paint is typically dry to the touch in about an hour and you can move furniture back (carefully) after 24 hours. However, paint takes about 2-4 weeks to fully cure, so we recommend being gentle with the walls during that time.",
  },
  {
    question: "What warranty do you offer on your work?",
    answer: "We stand behind our work with a comprehensive 2-year warranty on all interior projects and a 5-year warranty on exterior projects. This covers any issues related to workmanship, such as peeling, blistering, or cracking."
  }
];

export function Faq() {
  return (
    <section id="faq" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Find answers to common questions about our professional painting services.
          </p>
          <div className="mt-4 w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="text-left font-semibold text-lg">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
