import { Project, Skill, SocialLink } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: "1",
    title: "Meet Over Coffee",
    description:
      "Platform to connect professionals for meaningful coffee meetups.",
    demoUrl: "https://www.meetovercoffee.in",
    featured: true,
  },
  {
    id: "2",
    title: "AI Code Reviewer",
    description:
      "Automated code review system using Gemini with GitHub and GitLab webhooks for internal tooling.",
    githubUrl: "https://github.com/mrksht/ai-code-reviewer",
    featured: true,
  },
  {
    id: "3",
    title: "Best Coffee Shops in your city",
    description:
      "A platform to find the Best Coffee Shops in your city and suggest the ones you know",
    demoUrl: "https://www.bestcoffeeshopsincity.com/",
    featured: true,
  },
  {
    id: "4",
    title: "Peak Growth Community",
    description:
      "Platform connecting startups and CXOs, powered by We Founders Circle.",
    demoUrl: "https://network.peakgrowthstudio.com/signin",
    featured: true,
  },
  {
    id: "5",
    title: "Zerodha Portfolio Viewer",
    description:
      "Tool to view and analyze Zerodha portfolios with real-time insights.",
    demoUrl: "https://zerodha-dashboard-mu.vercel.app/login",
    githubUrl: "https://github.com/mrksht/zerodha-dashboard",
    featured: true,
  },
  {
    id: "6",
    title: "Travel Agent with Agentic AI",
    description:
      "AI-powered travel platform that automates bookings, recommendations, and itineraries.",
    demoUrl: "https://travel-agent-ui.vercel.app/",
    githubUrl: "https://github.com/mrksht/Travel-Agent---UI",
    featured: true,
  },
  {
    id: "7",
    title: "MCP Server for Zerodha",
    description:
      "Backend server to automate buying and selling of stocks on Zerodha.",
    featured: false,
    githubUrl: "https://github.com/mrksht/zerodha-backend/commit/dda0fd423b11947fc32d33a73078019f4386d831",
  },
];

export const skills: Skill[] = [
  { name: "React", category: "frontend", icon: "Component" },
  { name: "TypeScript", category: "frontend", icon: "Code2" },
  { name: "Tailwind CSS", category: "frontend", icon: "Palette" },
  { name: "Node.js", category: "backend", icon: "Server" },
  { name: "Serverless", category: "backend", icon: "Layers" },
  { name: "Git", category: "tools", icon: "GitBranch" },
  { name: "AWS", category: "tools", icon: "Cloud" },
  { name: "UI/UX Design", category: "design", icon: "Sparkles" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/mrksht", icon: "Github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mrakshit/",
    icon: "Linkedin",
  },
  { name: "Twitter", url: "https://x.com/mRakshit_", icon: "Twitter" },
  { name: "Email", url: "mailto:mrksht29@gmail.com", icon: "Mail" },
];
