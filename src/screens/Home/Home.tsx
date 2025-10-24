import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Home = (): JSX.Element => {
  // Data for experience timeline
  const experienceData = [
    {
      period: "2023–present",
      description:
        "Worked as a Frontend focussed Fullstack Engineer at VistaPrint. I led projects like Promobar, Ratings & Reviews, Tile Authoring and their entire Contentful ecosystem. I also got into backend systems here and started working on Node, Serverless environment.",
    },
    {
      period: "2022–2023",
      description:
        "Worked as a Frontend Engineer at Dremio, leading UI design updates, collaborating closely with UX teams, and redesigning their entire table ecosystem. Handled high-priority tasks and was part of major feature decisions.",
    },
    {
      period: "2020–2022",
      description:
        "Served as a Senior Frontend Engineer at Esper, led the Blueprints feature from architecture to delivery, built the Esper Settings App, revamped the onboarding flow, mentored interns, and contributed to integration testing.",
    },
    {
      period: "2020",
      description:
        "Interned at Bluejeans Networks, where I developed UI components for their internal dashboard displaying global meeting data, contributing to a smoother internal monitoring experience.",
    },
  ];

  // Data for case studies
  const caseStudies = [
    {
      title: "An app for people to meet over coffee",
      description:
        "I and two of my friends built an app that helps you match with a person daily. It is gender agnostic. We have around 500 users currently(June, 2025) and are in talks with some cafes to collaborate with us for offers and group activities like ocffee making sessions.",
      date: "Jan, 2025 - Present",
      image: "/moc.png",
      href: "https://www.meetovercoffee.in",
    },
    {
      title: "Zerodha Portfolio Viewer and MCP Trading Bot",
      description:
        "Built a Zerodha portfolio dashboard that fetches live holdings and market data using Kite APIs. Implemented MCP trading logic enabling bulk buy/sell based on LLM prompts from Calude. Users can visualize asset allocation and instantly execute trades. Focus was on seamless UX, high accuracy, and minimizing latency for real-time trading needs.",
      date: "May, 2025",
      image: "/zerodha.png",
      href: "https://zerodha-dashboard-mu.vercel.app/",
    },
    {
      title: "AI Travel Suggestion Agent using LangGraph",
      description:
        "Developed an AI agent that suggests personalized travel plans using LangGraph’s multi-step reasoning framework. It gives you suggestions based on the user input. It helps you plan a day by day iternary for your next trip",
      date: "June, 2025",
      image: "/travel.png",
      href: "https://travel-agent-ui.vercel.app/",
    },
  ];

  // Social media links
  const socialLinks = [
    { text: "mrksht@gmail.com" },
    { text: "https://x.com/mRakshit_" },
    // { text: "behance.com/johndoe" },
  ];

  return (
    <div className="bg-[#fbf8cc] flex flex-row justify-center w-full">
      <div className="bg-light-yellow w-full max-w-[1440px] relative">
        {/* Header/Navigation */}
        <header className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-8 px-4 sm:px-8 lg:px-24 gap-4 sm:gap-0">
          <h1 className="font-['Poppins',Helvetica] font-semibold text-dark-blue text-xl sm:text-2xl">
            Rakshit
          </h1>

          {/* Mobile menu button - you could add hamburger menu here */}
          <nav className="flex gap-6 sm:gap-14 order-3 sm:order-2">
            <a
              href="#"
              className="font-['Poppins',Helvetica] font-normal text-dark-blue text-base sm:text-lg hover:opacity-70 transition-opacity"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-['Poppins',Helvetica] font-normal text-dark-blue text-base sm:text-lg hover:opacity-70 transition-opacity"
            >
              About
            </a>
            <a
              href="#work"
              className="font-['Poppins',Helvetica] font-normal text-dark-blue text-base sm:text-lg hover:opacity-70 transition-opacity"
            >
              Work
            </a>
          </nav>

          <div className="flex gap-4 sm:gap-6 order-2 sm:order-3">
            {/* <img
              className="w-5 h-3 sm:w-[26px] sm:h-[15px] hover:opacity-70 transition-opacity cursor-pointer"
              alt="Medium"
              src="/medium-4-1.svg"
            />
            <img
              className="w-5 h-3 sm:w-[26px] sm:h-4 hover:opacity-70 transition-opacity cursor-pointer"
              alt="Behance"
              src="/behance-2-1.svg"
            /> */}
            <a
              href={"https://x.com/mRakshit_"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-5 h-4 sm:w-[26px] sm:h-[18px] hover:opacity-70 transition-opacity cursor-pointer"
                alt="Twitter"
                src="/twitter-6-1.svg"
              />
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-24 mt-8 sm:mt-16 lg:mt-32 gap-8 lg:gap-0">
          <div className="flex flex-col gap-2 sm:gap-4 text-center lg:text-left order-2 lg:order-1">
            <p className="font-['Poppins',Helvetica] font-medium text-dark-blue text-lg sm:text-xl lg:text-[28px]">
              Hello, I&apos;m Rakshit,
            </p>
            <h2 className="font-['Poppins',Helvetica] font-extrabold text-dark-blue text-4xl sm:text-6xl lg:text-[100px] leading-tight lg:leading-[116px] max-w-full lg:max-w-[616px]">
              Software Engineer
            </h2>
            <p className="font-['Poppins',Helvetica] font-medium text-dark-blue text-lg sm:text-xl lg:text-[28px] mt-1 sm:mt-2">
              based in India.
            </p>

            {/* <Button className="mt-4 sm:mt-6 lg:mt-8 w-32 h-12 sm:w-[158px] sm:h-[61px] bg-yellow hover:bg-yellow/90 rounded-md border border-solid border-[#474306] text-dark-brown text-lg sm:text-xl font-normal font-['Poppins',Helvetica] transition-colors self-center lg:self-start">
              Resume
            </Button> */}
          </div>

          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[514px] lg:h-[526px] order-1 lg:order-2">
            <img
              className="absolute w-full h-full object-cover lg:w-[425px] lg:h-[509px] lg:top-[17px] lg:left-2 rounded-full"
              alt="Profile"
              src="/profile.jpeg"
            />

            {/* Decorative elements - hidden on mobile for cleaner look */}
            <div className="hidden lg:block absolute w-[104px] h-[29px] top-[390px] left-0">
              <div className="flex gap-[10px]">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div
                    key={index}
                    className="w-[5px] h-[30px] bg-dark-brown rotate-[24deg]"
                  />
                ))}
              </div>
            </div>

            <div className="hidden lg:block absolute w-[50px] h-14 top-0 left-[423px]">
              {[
                { top: "1rem", left: "0" },
                { top: "2rem", left: "1.625rem" },
                { top: "0", left: "1.625rem" },
              ].map((position, index) => (
                <div
                  key={index}
                  className={`absolute w-6 h-6`}
                  style={{ top: position.top, left: position.left }}
                >
                  <div className="relative h-6">
                    <div className="absolute w-1.5 h-6 top-0 left-[9px] bg-dark-brown rounded-md" />
                    <div className="absolute w-1.5 h-6 top-0 left-[9px] bg-dark-brown rounded-md -rotate-90" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="px-4 sm:px-8 lg:px-24 mt-16 sm:mt-24 lg:mt-32"
        >
          <h2 className="font-['Poppins',Helvetica] font-extrabold text-too-light-yellow text-4xl sm:text-6xl lg:text-[100px] leading-tight lg:leading-[116px]">
            about.
          </h2>

          <p className="font-['Poppins',Helvetica] font-normal text-dark-blue text-lg sm:text-xl lg:text-2xl leading-relaxed lg:leading-[44px] max-w-full lg:max-w-[900px] mt-4 sm:mt-6 lg:mt-8">
            I'm a Frontend Engineer with 5 years of hands-on experience building
            responsive, scalable, and user-centric web applications using React,
            Redux, and TypeScript. I’ve led key initiatives at companies like
            Dremio and Esper, contributing to design systems, frontend
            architecture, and feature-rich UIs. My background in engineering
            from IIIT Allahabad fuels my strong problem-solving approach, and I
            bring a detail-oriented mindset to every project. Outside of tech,
            I’m a certified scuba diver, free diver and avid cricketer who
            thrives on collaboration, clean code, and continuous learning.
          </p>

          <div className="mt-8 sm:mt-12 lg:mt-16">
            {experienceData.map((experience, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row mt-8 sm:mt-12 lg:mt-16 first:mt-0"
              >
                <div className="relative mb-4 sm:mb-0 sm:mr-6 lg:mr-10 flex sm:block justify-center">
                  <div className="w-[13px] h-[13px] bg-dark-blue rounded-full" />
                </div>

                <Card className="border-none shadow-none flex-1">
                  <CardContent className="p-0 text-center sm:text-left">
                    <h3 className="font-['Poppins',Helvetica] font-semibold text-dark-blue text-xl sm:text-2xl leading-8 sm:leading-10">
                      {experience.period}
                    </h3>
                    <p className="font-['Poppins',Helvetica] font-normal text-dark-blue text-lg sm:text-xl lg:text-2xl leading-relaxed lg:leading-[44px] max-w-full lg:max-w-[900px] mt-4 sm:mt-8 lg:mt-[50px]">
                      {experience.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Work Section */}
        <section
          id="work"
          className="px-4 sm:px-8 lg:px-24 mt-16 sm:mt-24 lg:mt-32"
        >
          <h2 className="font-['Poppins',Helvetica] font-extrabold text-too-light-yellow text-4xl sm:text-6xl lg:text-[100px] leading-tight lg:leading-[116px]">
            work.
          </h2>

          <p className="font-['Poppins',Helvetica] font-normal text-dark-blue text-lg sm:text-xl lg:text-2xl leading-relaxed lg:leading-[44px] max-w-full lg:max-w-[900px] mt-4 sm:mt-6 lg:mt-8">
            Here’s a glimpse into some of the products I’ve built—from fintech
            tools to AI-powered assistants. Each project reflects thoughtful
            design, clean architecture, and a focus on solving real-world
            problems with modern web technologies.
          </p>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-[120px] mt-8 sm:mt-12 lg:mt-16">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="border-none shadow-none w-full lg:w-[560px] group hover:transform hover:scale-105 transition-transform duration-300"
              >
                <CardContent className="p-0">
                  <a
                    href={study.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      style={{ backgroundImage: `url(${study.image})` }}
                      className="w-full h-64 sm:h-80 lg:h-[400px] bg-cover bg-center rounded-lg overflow-hidden"
                    />
                  </a>
                  <p className="font-['Poppins',Helvetica] font-normal italic text-dark-blue text-sm sm:text-[15px] leading-8 lg:leading-[44px] mt-3 sm:mt-4">
                    {study.date}
                  </p>
                  <h3 className="font-['Poppins',Helvetica] font-semibold text-dark-blue text-xl sm:text-2xl leading-8 lg:leading-[44px]">
                    {study.title}
                  </h3>
                  <p className="font-['Poppins',Helvetica] font-normal text-dark-blue text-base sm:text-lg leading-6 sm:leading-8 mt-2">
                    {study.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className="px-4 sm:px-8 lg:px-24 mt-16 sm:mt-24 lg:mt-32 pb-16 sm:pb-24 lg:pb-32 flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16"
        >
          <div className="flex-1">
            <h2 className="font-['Poppins',Helvetica] font-extrabold text-too-light-yellow text-4xl sm:text-6xl lg:text-[100px] leading-tight lg:leading-[116px]">
              contact.
            </h2>

            <img
              className="w-full max-w-md lg:w-[440px] h-48 sm:h-64 lg:h-[314px] mt-4 sm:mt-6 lg:mt-8 object-cover rounded-lg mx-auto lg:mx-0"
              alt="Contact"
              src="/unsplash-2xht5d22y0i.svg"
            />
          </div>

          <div className="flex-1 lg:mt-16 xl:mt-32">
            <p className="font-['Poppins',Helvetica] font-normal text-dark-blue text-lg sm:text-xl lg:text-2xl leading-relaxed lg:leading-[44px] max-w-full lg:max-w-[640px]">
              Feel free to reach out if you'd like to collaborate, discuss an
              opportunity, or just chat about design systems, React magic, or
              scuba diving. I’m always up for meaningful conversations and new
              challenges. You can connect with me through the platforms below.
            </p>

            <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-0">
              {socialLinks.map((link, index) => (
                <p
                  key={index}
                  className="font-['Poppins',Helvetica] font-normal text-dark-blue text-lg sm:text-xl lg:text-2xl leading-8 lg:leading-[44px] hover:opacity-70 transition-opacity cursor-pointer"
                >
                  {link.text}
                </p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
