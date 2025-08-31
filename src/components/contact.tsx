"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Ready to start your project or have a question? We'd love to hear from you.
          </p>
          <div className="mt-4 w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form action="https://formspree.io/f/mvojdewb" method="POST" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input id="email" type="email" name="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="e.g., Interior Painting Quote" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell us about your project..." rows={5} required />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Our Location</h3>
                  <p className="text-muted-foreground">Bouda Nagar Colony, Plot no 91, Suchitra X Rd, Quthbullapur, Jeedimetla, Hyderabad, Telangana 500067</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <Link href="tel:+919398624736" className="text-muted-foreground hover:text-primary transition-colors">+91 93986 24736</Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <Link href="mailto:info@isotechpaints.com" className="text-muted-foreground hover:text-primary transition-colors">info@isotechpaints.com</Link>
                </div>
              </CardContent>
            </Card>
            <div className="rounded-lg overflow-hidden h-64 shadow-md">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bouda%20Nagar%20Colony,%20Plot%20no%2091,%20Suchitra%20X%20Rd,%20Quthbullapur,%20Jeedimetla,%20Hyderabad,%20Telangana%20500067+(ISOTECH%20INTERIORS)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}