import { Project, Skill, SocialLink } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: "1",
    title: "WhatsApp Terminal",
    description:
      "A CLI tool to use WhatsApp right from your terminal. Published on npm as whatsapp-terminal.",
    githubUrl: "https://github.com/mrksht/whats-cli",
    demoUrl: "https://www.npmjs.com/package/whatsapp-terminal",
    featured: true,
    tags: ["npm", "CLI", "Node.js"],
  },
  {
    id: "2",
    title: "Assistant Axis – Anthropic",
    description:
      "An interactive demo exploring Anthropic's research paper on Assistant Axis — visualizing how AI assistants navigate trade-offs.",
    githubUrl: "https://github.com/mrksht/assistant-axis-anthropic",
    featured: true,
    tags: ["AI", "Experiment"],
  },
  {
    id: "3",
    title: "OpenClaw Mini",
    description:
      "A lightweight open-source clone of OpenClaw — the AI-powered legal contract analyzer. Built as a learning experiment.",
    githubUrl: "https://github.com/mrksht/openclaw-mini",
    featured: true,
    tags: ["AI", "Open Source"],
  },
  {
    id: "4",
    title: "Meet Over Coffee",
    description:
      "Platform to connect professionals for meaningful coffee meetups — built end-to-end from design to deployment.",
    demoUrl: "https://www.meetovercoffee.in",
    featured: true,
    tags: ["Fullstack", "Product"],
  },
  {
    id: "5",
    title: "AI Code Reviewer",
    description:
      "Automated code review system powered by Gemini, triggered via GitHub and GitLab webhooks for internal tooling.",
    githubUrl: "https://github.com/mrksht/ai-code-reviewer",
    featured: true,
    tags: ["AI", "DevTools"],
  },
  {
    id: "6",
    title: "Best Coffee Shops",
    description:
      "Discover and suggest the best coffee shops in your city — a community-driven platform for coffee lovers.",
    demoUrl: "https://www.bestcoffeeshopsincity.com/",
    featured: false,
    tags: ["Fullstack", "Community"],
  },
  {
    id: "7",
    title: "Peak Growth Community",
    description:
      "Networking platform connecting startups and CXOs, built for We Founders Circle.",
    demoUrl: "https://network.peakgrowthstudio.com/signin",
    featured: false,
    tags: ["Freelance", "React"],
  },
  {
    id: "8",
    title: "Zerodha Portfolio Viewer",
    description:
      "Dashboard to view and analyze Zerodha stock portfolios with real-time insights.",
    demoUrl: "https://zerodha-dashboard-mu.vercel.app/login",
    githubUrl: "https://github.com/mrksht/zerodha-dashboard",
    featured: false,
    tags: ["Fullstack", "Finance"],
  },
  {
    id: "9",
    title: "Travel Agent with Agentic AI",
    description:
      "AI-powered travel platform using agentic workflows to automate bookings, recommendations, and itinerary generation.",
    demoUrl: "https://travel-agent-ui.vercel.app/",
    githubUrl: "https://github.com/mrksht/Travel-Agent---UI",
    featured: false,
    tags: ["AI", "Agentic", "Fullstack"],
  },
  {
    id: "10",
    title: "MCP Server for Zerodha",
    description:
      "Backend server to automate buying and selling of stocks on Zerodha via MCP protocol.",
    featured: false,
    githubUrl: "https://github.com/mrksht/zerodha-backend",
    tags: ["Backend", "Finance"],
  },
];

export const skills: Skill[] = [
  { name: "React", category: "frontend", icon: "Component" },
  { name: "TypeScript", category: "frontend", icon: "Code2" },
  { name: "Tailwind CSS", category: "frontend", icon: "Palette" },
  { name: "Node.js", category: "backend", icon: "Server" },
  { name: "LLMs", category: "ai", icon: "Brain" },
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
