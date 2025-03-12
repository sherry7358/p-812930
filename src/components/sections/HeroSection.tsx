
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 hero-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in">
            Hi, I'm <span className="text-gradient">Developer</span>
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl animate-fade-in" style={{ animationDelay: "200ms" }}>
            Specialized in building custom web and mobile solutions with React.js, React Native, and Shopify.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button asChild size="lg" className="glass-btn">
              <a href="#projects">View My Work <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button variant="outline" size="lg" asChild className="glass">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
