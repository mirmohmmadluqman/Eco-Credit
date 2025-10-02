import { Github, Twitter, Mail, Code, BarChart, Leaf, Recycle, Users, Milestone, Newspaper, HelpCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#dapp", label: "dApp" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export const features = [
  {
    icon: BarChart,
    title: "Transparent Tokenomics",
    description: "Our tokenomics are designed for sustainable growth and community incentives. Full transparency is ensured through on-chain data.",
  },
  {
    icon: Leaf,
    title: "Carbon Credit Trading",
    description: "A decentralized marketplace to buy, sell, and trade tokenized carbon credits, making environmental impact accessible to everyone.",
  },
  {
    icon: Recycle,
    title: "Verifiable Eco-Benefits",
    description: "Each Eco-Credit is backed by real-world, verified carbon offsetting projects. Track the impact of your contributions on the blockchain.",
  },
];

export const smartContracts = [
  {
    name: "EcoCredit Token (ECT)",
    network: "Ethereum Mainnet",
    address: "0x1234...5678",
    explorerUrl: "https://etherscan.io/token/0x1234...5678",
  },
  {
    name: "Staking Contract",
    network: "Polygon",
    address: "0xabcd...ef01",
    explorerUrl: "https://polygonscan.com/address/0xabcd...ef01",
  },
  {
    name: "Marketplace Contract",
    network: "Arbitrum",
    address: "0x5678...9012",
    explorerUrl: "https://arbiscan.io/address/0x5678...9012",
  },
];

export const roadmap = [
  {
    date: "Q1 2024",
    title: "Project Inception & Whitepaper",
    description: "Concept development and initial whitepaper release.",
    status: "completed",
  },
  {
    date: "Q2 2024",
    title: "Smart Contract Development & Audit",
    description: "Development and security audit of the core EcoCredit token contract.",
    status: "completed",
  },
  {
    date: "Q3 2024",
    title: "dApp Launch & Wallet Integration",
    description: "Launch of the initial decentralized application for token interaction.",
    status: "current",
  },
  {
    date: "Q4 2024",
    title: "Carbon Credit Marketplace Beta",
    description: "Launch the beta version of the decentralized carbon credit trading platform.",
    status: "upcoming",
  },
  {
    date: "Q1 2025",
    title: "DAO Governance",
    description: "Introduce community governance through a Decentralized Autonomous Organization (DAO).",
    status: "upcoming",
  },
];

export const team = [
  {
    name: "Mirmohmmad Luqman",
    role: "Founder & Lead Developer",
    avatarUrl: "https://avatars.githubusercontent.com/u/196279479?v=4",
    social: {
      github: "https://github.com/mirmohmmadluqman",
      twitter: "https://twitter.com/mirmohmmadluqman",
    },
  },
  {
    name: "Ibraheem Rashid Khaja",
    role: "Contributor",
    avatarUrl: "https://avatars.githubusercontent.com/u/124373237?v=4",
    social: {
      github: "https://github.com/ibraheemrashidkhaja",
      twitter: "#",
    },
  },
  {
    name: "FuzaanX",
    role: "Contributor",
    avatarUrl: "https://avatars.githubusercontent.com/u/233793574?u=65932790179777ef649a2941640638d8b05b1840&v=4&size=80",
    social: {
      github: "https://github.com/fuzaanx",
      twitter: "#",
    },
  },
];

export const blogPosts = [
  {
    title: "The Vision for EcoCredit: A New Era of Carbon Trading",
    date: "October 2, 2025",
    link: "https://github.com/mirmohmmadluqman/Eco-Credit",
    icon: Milestone,
  },
  {
    title: "Our Smart Contracts Have Been Audited",
    date: "October 2, 2025",
    link: "https://github.com/mirmohmmadluqman/Eco-Credit",
    icon: Newspaper,
  },
  {
    title: "How to Use the EcoCredit dApp: A Step-by-Step Guide",
    date: "October 2, 2025",
    link: "https://github.com/mirmohmmadluqman/Eco-Credit",
    icon: HelpCircle,
  },
];

export const faqs = [
  {
    question: "What is EcoCredit?",
    answer: "EcoCredit is a decentralized platform that tokenizes carbon credits, allowing for transparent and efficient trading on the blockchain. Our goal is to make positive environmental impact accessible to everyone.",
  },
  {
    question: "How can I connect my wallet?",
    answer: "In the dApp section, click the 'Connect Wallet' button. This will prompt you to connect with a compatible Web3 wallet like MetaMask. Ensure you have the MetaMask browser extension installed.",
  },
  {
    question: "What blockchain is EcoCredit on?",
    answer: "Our primary token and contracts are deployed on multiple networks for scalability and low transaction fees, including Ethereum, Polygon, and Arbitrum. You can find the specific contract addresses in the 'Smart Contracts' section.",
  },
  {
    question: "How are the carbon credits verified?",
    answer: "We partner with reputable third-party organizations that verify and certify carbon offset projects. Each tokenized credit has a verifiable link to its source project, ensuring legitimacy and real-world impact.",
  },
];

export const contactLinks: { label: string; url: string; icon: LucideIcon }[] = [
    { label: "Email", url: "mailto:contact@ecocredit.com", icon: Mail },
    { label: "GitHub", url: "https://github.com/mirmohmmadluqman/Eco-Credit", icon: Github },
    { label: "Twitter / X", url: "https://twitter.com/mirmohmmadluqman", icon: Twitter },
    { label: "Discord", url: "https://discord.gg/madm9yVs", icon: Users },
];
