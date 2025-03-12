
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Construct mailto link with form data
    const mailtoLink = `mailto:contact@example.com?subject=${encodeURIComponent(
      formData.subject || "Contact from Portfolio"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "Your email client has been opened.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>
        
        <div className="max-w-[800px] mx-auto">
          <div className="glass-card p-6 sm:p-8 shadow-lg dark:bg-black/40 dark:border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="w-full">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="glass backdrop-blur-sm border-primary/20 dark:bg-black/30 dark:border-white/10 w-full"
                  />
                </div>
                <div className="w-full">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="glass backdrop-blur-sm border-primary/20 dark:bg-black/30 dark:border-white/10 w-full"
                  />
                </div>
              </div>
              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="glass backdrop-blur-sm border-primary/20 dark:bg-black/30 dark:border-white/10 w-full"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="glass backdrop-blur-sm border-primary/20 dark:bg-black/30 dark:border-white/10 w-full resize-none"
                />
              </div>
              <div className="flex justify-center sm:justify-start">
                <Button
                  type="submit"
                  size="lg"
                  className="glass-btn dark:bg-primary/70 dark:hover:bg-primary/80 px-8 py-6 h-auto"
                  disabled={isSubmitting}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
