"use client";

import { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Bot, MessageSquare, Trash2, X, Info, Sparkles } from 'lucide-react';
import { askAi } from '@/ai/flows/ask-ai-flow';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type Message = {
  text: string;
  sender: 'user' | 'ai';
};

const exampleQuestions = [
    "What is EcoCredit?",
    "How do I trade carbon credits?",
    "Show me the roadmap.",
];

export function AskAiSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
        // Using `lastElementChild` to scroll to the newest message
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if(viewport && viewport.lastElementChild) {
          (viewport.lastElementChild as HTMLElement).scrollIntoView({ behavior: 'smooth' });
        }
    }
  }, [messages]);

  const handleSend = async (question?: string) => {
    const userMessage = question || input;
    if (!userMessage.trim()) return;

    setMessages((prev) => [...prev, { text: userMessage, sender: 'user' }]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponse = await askAi({ query: userMessage });
      setMessages((prev) => [...prev, { text: aiResponse, sender: 'ai' }]);
    } catch (error) {
      setMessages((prev) => [...prev, { text: "The AI is temporarily unavailable. Please try again later.", sender: 'ai' }]);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  const handleClearChat = () => {
    setMessages([]);
  }

  return (
    <section id="ask-ai" className="relative py-16 md:py-24 overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ask Our AI Assistant</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Get instant insights about Eco-Credit, blockchain, and sustainability.
            </p>
        </div>

        <Card className="max-w-3xl mx-auto glass-card shadow-2xl shadow-primary/10 border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between">
             <div className="flex items-center gap-3">
                <div className="relative">
                    <Image
                      src="https://github.com/mirmohmmadluqman/Eco-Credit/blob/main/2535590b-964d-4daf-b914-51459549fd9e.png?raw=true"
                      alt="EcoCredit AI"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-primary/50 animate-glow"
                    />
                     <Sparkles className="absolute -top-1 -right-1 text-yellow-400 w-4 h-4"/>
                </div>
                <div>
                    <h3 className="font-semibold">EcoCredit AI</h3>
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Online
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleClearChat}>
                                <Trash2 className="h-4 w-4"/>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent><p>Clear Chat</p></TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96 pr-4 -mr-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                    <AnimatePresence>
                    {messages.map((message, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                            "flex items-end gap-2",
                            message.sender === 'user' ? 'justify-end' : 'justify-start'
                        )}
                        >
                        {message.sender === 'ai' && (
                            <Image
                                src="https://github.com/mirmohmmadluqman/Eco-Credit/blob/main/2535590b-964d-4daf-b914-51459549fd9e.png?raw=true"
                                alt="AI Avatar"
                                width={24}
                                height={24}
                                className="rounded-full"
                            />
                        )}
                        <div
                            className={cn(
                            "max-w-md rounded-xl px-4 py-2.5 text-sm",
                            message.sender === 'user'
                                ? "bg-primary/10 text-primary-foreground rounded-br-none"
                                : "bg-muted text-muted-foreground rounded-bl-none"
                            )}
                        >
                            <p className="whitespace-pre-wrap">{message.text}</p>
                        </div>
                        </motion.div>
                    ))}
                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-end gap-2 justify-start"
                        >
                             <Image
                                src="https://github.com/mirmohmmadluqman/Eco-Credit/blob/main/2535590b-964d-4daf-b914-51459549fd9e.png?raw=true"
                                alt="AI Avatar"
                                width={24}
                                height={24}
                                className="rounded-full"
                            />
                            <div className="bg-muted text-muted-foreground rounded-xl px-4 py-2.5 rounded-bl-none">
                                <div className="flex items-center gap-1.5">
                                    <span className="h-1.5 w-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="h-1.5 w-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="h-1.5 w-1.5 bg-primary rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                    </AnimatePresence>

                    {messages.length === 0 && (
                        <div className="text-center text-muted-foreground py-8">
                            <p className="mb-4">Ask me anything about EcoCredit!</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                {exampleQuestions.map((q, i) => (
                                    <Button key={i} variant="outline" size="sm" onClick={() => handleSend(q)}>
                                        {q}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </ScrollArea>
            <form onSubmit={handleSubmit} className="relative mt-4">
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything about Eco-Credit..."
                    className="pr-12 h-11"
                    disabled={isLoading}
                />
                <Button type="submit" size="icon" className="absolute top-1/2 right-1.5 -translate-y-1/2 h-8 w-8 rounded-full" disabled={isLoading}>
                    <ArrowUp className="h-4 w-4" />
                </Button>
            </form>
             <div className="text-xs text-muted-foreground mt-2 text-center flex items-center justify-center gap-1">
                <Info className="h-3 w-3" />
                <span>AI can make mistakes. Consider checking important information. This project is under development.</span>
             </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
