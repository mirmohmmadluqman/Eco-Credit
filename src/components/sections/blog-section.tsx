import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/lib/data";
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

export function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">News & Updates</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Stay up to date with the latest developments from the EcoCredit team.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <a href={post.link} key={index} className="block group" target="_blank" rel="noopener noreferrer">
                <Card className="h-full glass-card transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10 flex flex-col">
                    <CardHeader className="flex-grow">
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-sm text-muted-foreground">{post.date}</p>
                          <post.icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{post.title}</CardTitle>
                        <p className="text-xs text-muted-foreground pt-2">This project is under development.</p>
                    </CardHeader>
                    <div className="p-6 pt-0">
                      <div className="flex items-center text-sm text-primary font-medium">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                </Card>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
