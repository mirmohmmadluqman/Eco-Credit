import Link from "next/link";
import { contactLinks } from "@/lib/data";
import { EcoCreditLogo } from "@/components/icons";

export function Footer() {
  return (
    <footer id="contact" className="bg-muted/40 border-t">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <EcoCreditLogo className="h-8 w-8" />
              <span className="font-bold text-lg">EcoCredit</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Decentralizing the green economy for a sustainable future.
            </p>
             <p className="text-sm text-muted-foreground">
                <a href="https://mirmohmmadluqman.github.io/portfolio/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Portfolio of mirmohmmadluqman
                </a>
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Navigate</h4>
              <ul className="space-y-2">
                <li><Link href="#about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link href="#features" className="text-sm text-muted-foreground hover:text-primary">Features</Link></li>
                <li><Link href="#roadmap" className="text\sm text-muted-foreground hover:text-primary">Roadmap</Link></li>
                <li><Link href="#blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="#docs" className="text-sm text-muted-foreground hover:text-primary">Docs</Link></li>
                <li><Link href="#faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Audit</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <div className="flex flex-col space-y-2">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-4 text-center">
            <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} EcoCredit. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
