import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { AiVisualizer } from "@/components/ai-visualizer";
import { Gallery } from "@/components/gallery";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Process />
        <AiVisualizer />
        <Gallery />
        <Faq />
        <Contact />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
