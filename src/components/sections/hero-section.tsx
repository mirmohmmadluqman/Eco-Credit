import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm text-primary font-medium">
            <Leaf className="inline-block w-4 h-4 mr-2" />
            Decentralizing The Green Economy
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            The Future of Carbon Credits is Here.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            EcoCredit leverages blockchain technology to create a transparent, efficient, and accessible marketplace for carbon credits.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button asChild size="lg">
              <Link href="#dapp">
                Launch dApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#docs">Read Docs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
