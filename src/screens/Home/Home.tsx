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
      title: "Zerodha Portfolio Viewer and MCP Trading Bot",
      description:
        "Built a Zerodha portfolio dashboard that fetches live holdings and market data using Kite APIs. Implemented MCP trading logic enabling bulk buy/sell based on LLM prompts from Calude. Users can visualize asset allocation and instantly execute trades. Focus was on seamless UX, high accuracy, and minimizing latency for real-time trading needs.",
      date: "May, 2025",
      image: "/zerodha.png",
    },
    {
      title: "AI Travel Suggestion Agent using LangGraph",
      description:
        "Developed an AI agent that suggests personalized travel plans using LangGraph’s multi-step reasoning framework. It gives you suggestions based on the user input. It helps you plan a day by day iternary for your next trip",
      date: "June, 2025",
      image: "/travel.png",
    },
  ];

  // Social media links
  const socialLinks = [
    { text: "mrksht@mail.com" },
    { text: "https://x.com/mRakshit_" },
    { text: "behance.com/johndoe" },
  ];

  return (
    <div className="bg-[#fbf8cc] flex flex-row justify-center w-full">
      <div className="bg-light-yellow w-full max-w-[1440px] relative">
        {/* Header/Navigation */}
        <header className="flex justify-between items-center pt-8 px-24">
          <h1 className="font-['Poppins',Helvetica] font-semibold text-dark-blue text-2xl">
            Rakshit
          </h1>

          <nav className="flex gap-14">
            <a
              href="#"
              className="font-['Poppins',Helvetica] font-normal text-dark-blue text-lg"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-['Poppins',Helvetica] font-normal text-dark-blue text-lg"
            >
              About
            </a>
            <a
              href="#work"
              className="font-['Poppins',Helvetica] font-normal text-dark-blue text-lg"
            >
              Work
            </a>
          </nav>

          <div className="flex gap-6">
            <img
              className="w-[26px] h-[15px]"
              alt="Medium"
              src="/medium-4-1.svg"
            />
            <img
              className="w-[26px] h-4"
              alt="Behance"
              src="/behance-2-1.svg"
            />
            <img
              className="w-[26px] h-[18px]"
              alt="Twitter"
              src="/twitter-6-1.svg"
            />
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex justify-between items-center px-24 mt-32">
          <div className="flex flex-col gap-4">
            <p className="font-['Poppins',Helvetica] font-medium text-dark-blue text-[28px]">
              Hello, I&apos;m Rakshit,
            </p>
            <h2 className="font-['Poppins',Helvetica] font-extrabold text-dark-blue text-[100px] leading-[116px] max-w-[616px]">
              Software Engineer
            </h2>
            <p className="font-['Poppins',Helvetica] font-medium text-dark-blue text-[28px] mt-2">
              based in India.
            </p>

            <Button className="mt-8 w-[158px] h-[61px] bg-yellow hover:bg-yellow/90 rounded-md border border-solid border-[#474306] text-dark-brown text-xl font-normal font-['Poppins',Helvetica]">
              Resume
            </Button>
          </div>

          <div className="relative w-[514px] h-[526px]">
            <img
              className="absolute w-[506px] h-[509px] top-[17px] left-2 rounded-full"
              alt="Profile"
              src="/profile.jpeg"
            />

            {/* Decorative elements */}
            <div className="absolute w-[104px] h-[29px] top-[390px] left-0 flex gap-[10px]">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div
                  key={index}
                  className="w-[5px] h-[30px] bg-dark-brown rotate-[24deg]"
                />
              ))}
            </div>

            <div className="absolute w-[50px] h-14 top-0 left-[423px]">
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
        <section id="about" className="px-24 mt-32">
          <h2 className="font-['Poppins',Helvetica] font-extrabold text-too-light-yellow text-[100px] leading-[116px]">
            about.
          </h2>

          <p className="font-['Poppins',Helvetica] font-normal text-dark-blue text-2xl leading-[44px] max-w-[900px] mt-8">
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

          <div className="mt-16">
            {experienceData.map((experience, index) => (
              <div key={index} className="flex mt-16 first:mt-0">
                <div className="relative mr-10">
                  <div className="w-[13px] h-[13px] bg-dark-blue rounded-full" />
                </div>

                <Card className="border-none shadow-none">
                  <CardContent className="p-0">
                    <h3 className="font-['Poppins',Helvetica] font-semibold text-dark-blue text-2xl leading-10">
                      {experience.period}
                    </h3>
                    <p className="font-['Poppins',Helvetica] font-normal text-dark-blue text-2xl leading-[44px] max-w-[900px] mt-[50px]">
                      {experience.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="px-24 mt-32">
          <h2 className="font-['Poppins',Helvetica] font-extrabold text-too-light-yellow text-[100px] leading-[116px]">
            work.
          </h2>

          <p className="font-['Poppins',Helvetica] font-normal text-dark-blue text-2xl leading-[44px] max-w-[900px] mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            vulputate tristique quam felis. Id phasellus dui orci vulputate
            consequat nulla proin. Id sit scelerisque neque, proin bibendum
            diam.
          </p>

          <div className="flex gap-[120px] mt-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-none shadow-none w-[560px]">
                <CardContent className="p-0">
                  <div
                    className="w-full h-[400px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${study.image})` }}
                  />
                  <p className="font-['Poppins',Helvetica] font-normal italic text-dark-blue text-[15px] leading-[44px] mt-4">
                    {study.date}
                  </p>
                  <h3 className="font-['Poppins',Helvetica] font-semibold text-dark-blue text-2xl leading-[44px]">
                    {study.title}
                  </h3>
                  <p className="font-['Poppins',Helvetica] font-normal text-dark-blue text-lg leading-8 mt-2">
                    {study.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-24 mt-32 pb-32 flex gap-16">
          <div>
            <h2 className="font-['Poppins',Helvetica] font-extrabold text-too-light-yellow text-[100px] leading-[116px]">
              contact.
            </h2>

            <img
              className="w-[440px] h-[314px] mt-8 object-cover"
              alt="Contact"
              src="/unsplash-2xht5d22y0i.svg"
            />
          </div>

          <div className="mt-32">
            <p className="font-['Poppins',Helvetica] font-normal text-dark-blue text-2xl leading-[44px] max-w-[640px]">
              Feel free to reach out if you'd like to collaborate, discuss an
              opportunity, or just chat about design systems, React magic, or
              scuba diving. I’m always up for meaningful conversations and new
              challenges. You can connect with me through the platforms below.
            </p>

            <div className="mt-8">
              {socialLinks.map((link, index) => (
                <p
                  key={index}
                  className="font-['Poppins',Helvetica] font-normal text-dark-blue text-2xl leading-[44px]"
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
