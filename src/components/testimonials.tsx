"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, StarHalf } from "lucide-react";

const testimonials = [
  {
    name: "Sarah L.",
    avatar: "SL",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    rating: 5,
    title: "Absolutely Transformed Our Home!",
    comment:
      "The attention to detail was incredible. Our house feels brand new. The team was professional, clean, and finished right on schedule. We couldn't be happier with the result and have been getting so many compliments!",
  },
  {
    name: "Michael B.",
    avatar: "MB",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    rating: 5,
    title: "Professional, Punctual, and Perfect",
    comment:
      "From the initial consultation to the final walkthrough, the process was seamless. They helped us choose the perfect colors and the quality of the work is outstanding. Our exterior looks fantastic and has amazing curb appeal now.",
  },
  {
    name: "Jessica P.",
    avatar: "JP",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    rating: 4.5,
    title: "Stunning Decorative Finishes",
    comment:
      "I was looking for something unique for my dining room and their team delivered a stunning Venetian plaster accent wall. It's a true work of art and the centerpiece of our home. Highly recommend for any custom decorative work.",
  },
    {
    name: "David R.",
    avatar: "DR",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704a",
    rating: 5,
    title: "Our Office Space is Re-energized",
    comment:
      "We needed to refresh our office without disrupting our workflow. Their team was incredibly efficient and accommodating, working after hours. The new color scheme has completely re-energized our workspace. Great job!",
  },
];

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full_${i}`} className="w-5 h-5 text-yellow-400 fill-yellow-400" />);
  }
  if (halfStar) {
    stars.push(<StarHalf key="half" className="w-5 h-5 text-yellow-400 fill-yellow-400" />);
  }
  return stars;
};

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Real stories from satisfied customers who have experienced our quality and craftsmanship.
          </p>
          <div className="mt-4 w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                      <Avatar className="w-20 h-20 border-4 border-primary/20">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <div className="flex justify-center">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      <h4 className="font-semibold text-primary">{testimonial.title}</h4>
                      <p className="text-muted-foreground text-sm">"{testimonial.comment}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
