
import { Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const team = [
  {
    name: "John Doe",
    role: "Lead Developer",
    bio: "Full-stack developer with 5+ years of experience in React.js and Node.js.",
    avatar: "https://placehold.co/200/2563eb/FFFFFF?text=JD",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    bio: "Designer with a passion for creating beautiful and intuitive user interfaces.",
    avatar: "https://placehold.co/200/2563eb/FFFFFF?text=JS",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Michael Johnson",
    role: "Mobile Developer",
    bio: "React Native specialist with experience in building cross-platform mobile applications.",
    avatar: "https://placehold.co/200/2563eb/FFFFFF?text=MJ",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-muted/50 dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our <span className="text-gradient">Team</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Meet the talented individuals who make our projects possible.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {team.map((member, index) => (
            <Card key={member.name} className="border-2 hover:border-primary transition-all duration-300 animate-scale-in glass-card dark:bg-black/30 dark:border-white/5" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="flex flex-col items-center gap-4 pt-6">
                <Avatar className="h-24 w-24 ring-2 ring-primary/20 dark:ring-primary/40">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-primary/10 text-primary dark:bg-primary/20">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{member.bio}</p>
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                <Button variant="ghost" size="icon" asChild className="dark:hover:bg-white/5">
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="dark:hover:bg-white/5">
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="dark:hover:bg-white/5">
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-4 w-4" />
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
