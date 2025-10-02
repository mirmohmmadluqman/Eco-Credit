import { roadmap } from "@/lib/data";
import { cn } from "@/lib/utils";
import { CheckCircle2, Loader, CircleDot } from "lucide-react";

export function RoadmapSection() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-primary" />;
      case "current":
        return <Loader className="h-5 w-5 text-yellow-400 animate-spin" />;
      case "upcoming":
        return <CircleDot className="h-5 w-5 text-muted-foreground" />;
      default:
        return null;
    }
  };
  
  return (
    <section id="roadmap" className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Roadmap</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Our journey towards a decentralized green future.
            </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-3 top-0 h-full w-0.5 bg-border/50" aria-hidden="true"></div>
          {roadmap.map((item, index) => (
            <div key={index} className="relative pl-10 pb-12">
              <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-background border-2 border-primary/50">
                  {getStatusIcon(item.status)}
              </div>
              <div className={cn(
                  "p-4 rounded-lg",
                  item.status === 'completed' && "opacity-60",
                  item.status === 'current' && "border-2 border-primary/50 bg-primary/5"
              )}>
                <p className="text-sm font-semibold text-primary">{item.date}</p>
                <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
