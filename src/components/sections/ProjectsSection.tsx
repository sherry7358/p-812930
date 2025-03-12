
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with React.js and Shopify API.",
    technologies: ["React.js", "Shopify API", "Tailwind CSS"],
    image: "https://placehold.co/600x400/2563eb/FFFFFF?text=E-commerce+Platform",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Mobile Banking App",
    description: "A cross-platform mobile banking application built with React Native.",
    technologies: ["React Native", "TypeScript", "Redux"],
    image: "https://placehold.co/600x400/2563eb/FFFFFF?text=Mobile+Banking+App",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Shopify Custom Theme",
    description: "A custom Shopify theme built for a high-end fashion brand.",
    technologies: ["Shopify", "Liquid", "JavaScript"],
    image: "https://placehold.co/600x400/2563eb/FFFFFF?text=Shopify+Theme",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React.js and Tailwind CSS.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    image: "https://placehold.co/600x400/2563eb/FFFFFF?text=Portfolio+Website",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            A showcase of my recent web and mobile development projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden border-2 hover:border-primary transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs bg-secondary/10 text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" /> Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
