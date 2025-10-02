import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { features } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Core Features</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Discover the powerful features that make EcoCredit a next-generation platform for environmental finance.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <Card key={index} className="glass-card flex flex-col items-center text-center p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                    <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
                        <feature.icon className="w-8 h-8" />
                    </div>
                    <CardHeader className="p-0">
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardDescription className="mt-2 text-muted-foreground">
                        {feature.description}
                    </CardDescription>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
