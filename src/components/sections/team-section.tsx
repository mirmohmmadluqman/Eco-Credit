import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { team } from "@/lib/data";
import { Github, Twitter } from "lucide-react";
import Image from "next/image";

export function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Contributors</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                The passionate individuals building the future of green finance.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
                <Card key={index} className="text-center glass-card">
                    <CardContent className="p-6">
                       <Image 
                         src={member.avatarUrl}
                         alt={member.name}
                         width={96}
                         height={96}
                         className="rounded-full mx-auto mb-4 border-2 border-primary/50"
                       />
                        <CardTitle className="text-xl">{member.name}</CardTitle>
                        <CardDescription className="text-primary">{member.role}</CardDescription>
                        <div className="flex justify-center gap-2 mt-4">
                           <Button variant="ghost" size="icon" asChild>
                               <a href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                   <Github className="h-5 w-5" />
                               </a>
                           </Button>
                           <Button variant="ghost" size="icon" asChild>
                               <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                   <Twitter className="h-5 w-5" />
                               </a>
                           </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
