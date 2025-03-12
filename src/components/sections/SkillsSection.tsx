
import { Code, Laptop, LayoutGrid, ShoppingBag, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  {
    name: "HTML & CSS",
    description: "Creating responsive and pixel-perfect designs with modern CSS techniques.",
    icon: LayoutGrid,
  },
  {
    name: "React.js",
    description: "Building interactive user interfaces with React, Redux, and modern hooks.",
    icon: Code,
  },
  {
    name: "React Native",
    description: "Developing cross-platform mobile applications with native performance.",
    icon: Smartphone,
  },
  {
    name: "Shopify Custom Apps",
    description: "Creating custom Shopify applications and themes for e-commerce solutions.",
    icon: ShoppingBag,
  },
  {
    name: "Web Development",
    description: "Full-stack web development with focus on performance and accessibility.",
    icon: Laptop,
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Specialized technical skills that I bring to every project.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((skill, index) => (
            <Card key={skill.name} className="border-2 hover:border-primary transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <skill.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{skill.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{skill.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
