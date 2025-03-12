
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-muted-foreground md:text-xl">
                I'm a passionate developer with expertise in creating responsive web and mobile applications. I specialize in React.js, React Native, and Shopify custom app development.
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  With over 5 years of experience in the industry, I've worked on a variety of projects from e-commerce platforms to mobile applications. I'm dedicated to writing clean, efficient code and creating user-friendly interfaces.
                </p>
                <p className="text-muted-foreground">
                  My goal is to build products that not only meet client requirements but also provide an exceptional user experience. I stay up-to-date with the latest technologies and best practices to ensure that my work is of the highest quality.
                </p>
              </div>
              <div className="pt-4">
                <Button asChild>
                  <a href="/cv.pdf" download>
                    <Download className="mr-2 h-4 w-4" /> Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out to me</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <p>contact@example.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <p>+1 (123) 456-7890</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <p>San Francisco, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Professional Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Senior Frontend Developer</h3>
                    <p className="text-sm text-muted-foreground">TechCorp Inc. • 2020 - Present</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Mobile Developer</h3>
                    <p className="text-sm text-muted-foreground">App Solutions • 2018 - 2020</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Web Developer</h3>
                    <p className="text-sm text-muted-foreground">WebTech • 2016 - 2018</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
