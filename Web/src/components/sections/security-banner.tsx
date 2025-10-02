import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function SecurityBanner() {
  return (
    <section className="bg-muted/40 py-4 border-y">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-4">
          <ShieldCheck className="w-8 h-8 text-primary" />
          <div className="flex-grow">
            <h3 className="font-semibold">Security You Can Trust</h3>
            <p className="text-sm text-muted-foreground">
              Our smart contracts have been independently audited.
            </p>
          </div>
          <Button asChild variant="link" className="text-primary">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              View Audit Report
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
