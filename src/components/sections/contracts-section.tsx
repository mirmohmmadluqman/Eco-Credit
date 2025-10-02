"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { smartContracts } from "@/lib/data";
import { Copy, ExternalLink, Network, Info } from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export function ContractsSection() {
  return (
    <section id="contracts" className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter flex items-center justify-center gap-2">
              Smart Contracts
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="text-muted-foreground hover:text-foreground">
                      <Info className="h-5 w-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>
                      The smart contracts are not yet deployed to mainnet as they are undergoing a formal verification and auditing process. However, our contract code is functional and can be reviewed on GitHub.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Our audited and deployed smart contract addresses across various networks.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartContracts.map((contract, index) => (
                <Card key={index} className="glass-card">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                           <Network className="text-primary"/> {contract.name}
                        </CardTitle>
                        <CardDescription>{contract.network}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="font-mono text-sm break-all text-muted-foreground">{contract.address}</p>
                        <div className="flex gap-2 mt-4">
                           <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(contract.address)}>
                               <Copy className="h-4 w-4 mr-2"/> Copy
                           </Button>
                           <Button variant="outline" size="sm" asChild>
                               <a href={contract.explorerUrl} target="_blank" rel="noopener noreferrer">
                                   <ExternalLink className="h-4 w-4 mr-2"/> Explorer
                               </a>
                           </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
             <Card className="glass-card md:col-span-2 lg:col-span-1 flex flex-col justify-center items-center">
                  <Image 
                    src="https://media1.tenor.com/m/bzUDKuR8Vb8AAAAd/hacker-hackerman.gif"
                    width={150}
                    height={150}
                    alt="Hacker GIF"
                    unoptimized
                    className="rounded-lg mix-blend-screen"
                  />
                  <p className="mt-2 text-sm text-muted-foreground font-mono">Secured & Audited</p>
             </Card>
        </div>
      </div>
    </section>
  );
}
