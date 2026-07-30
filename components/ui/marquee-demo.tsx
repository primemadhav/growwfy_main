import React from "react";
import { Marquee } from "@/components/ui/marquee";

const techLogos = [
  {
    name: "Next.js",
    url: "https://svgl.app/library/nextjs_wordmark_light.svg",
    heightClass: "h-6 sm:h-7"
  },
  {
    name: "AWS",
    url: "https://svgl.app/library/aws.svg",
    heightClass: "h-7 sm:h-8"
  },
  {
    name: "Tailwind CSS",
    url: "https://svgl.app/library/tailwindcss_wordmark_light.svg",
    heightClass: "h-5 sm:h-6"
  },
  {
    name: "Framer Motion",
    url: "https://svgl.app/library/framer.svg",
    heightClass: "h-6 sm:h-7"
  },
  {
    name: "React",
    url: "https://svgl.app/library/react.svg",
    heightClass: "h-6 sm:h-7"
  }
];

export function MarqueeDemo() {
  return (
    <Marquee className="py-4">
      {techLogos.map((logo, index) => (
        <div
          key={index}
          className="relative h-full w-fit mx-[3.5rem] flex items-center justify-start group"
        >
          <img
            src={logo.url}
            alt={logo.name}
            referrerPolicy="no-referrer"
            className={`${logo.heightClass} w-auto object-contain opacity-50 dark:opacity-40 hover:opacity-100 dark:hover:opacity-100 brightness-0 dark:invert transition-all duration-300 ease-in-out cursor-pointer`}
          />
        </div>
      ))}
    </Marquee>
  );
}

export default MarqueeDemo;
