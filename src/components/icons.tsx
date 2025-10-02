import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  isDark?: boolean;
}

export const EcoCreditLogo = ({ className, isDark=false }: { className?: string; isDark?: boolean;}) => {
  const logoUrl = isDark 
    ? "https://github.com/mirmohmmadluqman/Eco-Credit/blob/main/756d19a7-5027-49c1-87c1-2d05787bb0ec.png?raw=true"
    : "https://github.com/mirmohmmadluqman/Eco-Credit/blob/main/2535590b-964d-4daf-b914-51459549fd9e.png?raw=true";
    
  return (
    <Image
      src={logoUrl}
      alt="EcoCredit Logo"
      width={40}
      height={40}
      className={cn("h-10 w-auto", className)}
      priority
    />
  );
};
