import React from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x border-zinc-200 dark:border-zinc-800 md:grid-cols-4",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-zinc-200 dark:border-zinc-800" />

      <LogoCard
        className="relative border-r border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10"
        logo={{
          src: "https://svgl.app/library/nvidia-wordmark-light.svg",
          alt: "Nvidia Logo",
        }}
      >
        <PlusIcon
          className="-right-[12px] -bottom-[12px] absolute z-10 size-6 text-zinc-300 dark:text-zinc-700"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b md:border-r border-zinc-200 dark:border-zinc-800"
        logo={{
          src: "https://svgl.app/library/supabase_wordmark_light.svg",
          alt: "Supabase Logo",
        }}
      />

      <LogoCard
        className="relative border-r border-b border-zinc-200 dark:border-zinc-800 md:bg-zinc-50/50 md:dark:bg-zinc-900/10"
        logo={{
          src: "https://svgl.app/library/github_wordmark_light.svg",
          alt: "GitHub Logo",
        }}
      >
        <PlusIcon
          className="-right-[12px] -bottom-[12px] absolute z-10 size-6 text-zinc-300 dark:text-zinc-700"
          strokeWidth={1}
        />
        <PlusIcon
          className="-bottom-[12px] -left-[12px] absolute z-10 hidden size-6 md:block text-zinc-300 dark:text-zinc-700"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="relative border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10 md:bg-white md:dark:bg-zinc-950"
        logo={{
          src: "https://svgl.app/library/openai_wordmark_light.svg",
          alt: "OpenAI Logo",
        }}
      />

      <LogoCard
        className="relative border-r border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10 md:border-b-0 md:bg-white md:dark:bg-zinc-950"
        logo={{
          src: "https://svgl.app/library/turso-wordmark-light.svg",
          alt: "Turso Logo",
        }}
      >
        <PlusIcon
          className="-right-[12px] -bottom-[12px] md:-left-[12px] absolute z-10 size-6 md:hidden text-zinc-300 dark:text-zinc-700"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b bg-white dark:bg-zinc-950 md:border-r md:border-b-0 md:bg-zinc-50/50 md:dark:bg-zinc-900/10 border-zinc-200 dark:border-zinc-800"
        logo={{
          src: "https://svgl.app/library/clerk-wordmark-light.svg",
          alt: "Clerk Logo",
        }}
      />

      <LogoCard
        className="border-r border-zinc-200 dark:border-zinc-800"
        logo={{
          src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
          alt: "Claude AI Logo",
        }}
      />

      <LogoCard
        className="bg-zinc-50/50 dark:bg-zinc-900/10"
        logo={{
          src: "https://svgl.app/library/vercel_wordmark.svg",
          alt: "Vercel Logo",
        }}
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-zinc-200 dark:border-zinc-800" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-white dark:bg-zinc-950 px-4 py-8 md:p-8 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors duration-200",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none h-4 select-none md:h-5 brightness-0 dark:invert opacity-45 hover:opacity-100 transition-opacity duration-300"
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
      {children}
    </div>
  );
}
