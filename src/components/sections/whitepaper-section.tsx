import { Button } from "@/components/ui/button";
import { BookOpen, Github } from "lucide-react";

export function WhitepaperSection() {
  return (
    <section id="docs" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center p-8 lg:p-12 rounded-lg bg-muted/40 border border-dashed">
            <div className="inline-block p-4 rounded-full bg-primary/10 text-primary mb-4">
                <BookOpen className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Dive Deeper</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Our comprehensive documentation on GitHub covers everything from the whitepaper to step-by-step usage guides. Explore the technical details that power EcoCredit.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href="https://github.com/mirmohmmadluqman/Eco-Credit" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
