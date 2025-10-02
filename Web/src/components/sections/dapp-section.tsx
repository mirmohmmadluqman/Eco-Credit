"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Leaf } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function DappSection() {
    const [account, setAccount] = useState<string | null>(null);
    const [balance, setBalance] = useState<string>('0.00');
    const { toast } = useToast();

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
                // In a real app, you'd fetch the balance from the contract
                setBalance((Math.random() * 10000).toFixed(2));
                toast({
                    title: "Wallet Connected",
                    description: `Connected with address: ${accounts[0].substring(0, 6)}...${accounts[0].substring(accounts[0].length - 4)}`,
                });
            } catch (error) {
                console.error("Failed to connect wallet", error);
                toast({
                    title: "Connection Failed",
                    description: "User rejected the connection request.",
                    variant: "destructive",
                });
            }
        } else {
            toast({
                title: "MetaMask Not Found",
                description: "Please install the MetaMask browser extension to connect your wallet.",
                variant: "destructive",
            });
        }
    };
    
    return (
        <section id="dapp" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-4xl text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Launch the dApp</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Connect your wallet to interact with the EcoCredit ecosystem.
                    </p>
                </div>

                <Card className="max-w-xl mx-auto glass-card shadow-lg shadow-primary/10">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                           <Leaf className="text-primary"/> EcoCredit Balance
                        </CardTitle>
                        <CardDescription>
                            {account 
                                ? `Connected: ${account.substring(0, 6)}...${account.substring(account.length - 4)}`
                                : "Connect your wallet to see your balance."}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center gap-6">
                        {account ? (
                            <div className="text-center">
                                <p className="text-5xl font-bold tracking-tighter">{balance}</p>
                                <p className="text-muted-foreground">ECT</p>
                            </div>
                        ) : (
                            <div className="text-center p-8 border-2 border-dashed rounded-lg">
                                <p className="text-muted-foreground">Your balance will appear here.</p>
                            </div>
                        )}
                        
                        <Button size="lg" onClick={connectWallet} disabled={!!account}>
                            <Wallet className="mr-2 h-5 w-5" />
                            {account ? 'Connected' : 'Connect Wallet'}
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
