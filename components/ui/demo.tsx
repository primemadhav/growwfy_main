import FlowArt, { FlowSection } from './story-scroll';

export default function FlowArtDefaultDemo() {
  return (
    <FlowArt aria-label="Présentation Flow Art">
      <FlowSection aria-label="Qui nous sommes" style={{ backgroundColor: '#fd5200', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — Who we are</p>
        <hr className="my-[2vw] border-none border-t border-white/30" />
        <div>
          <h1
            className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          >
            SCALE
            <br />
            YOUR
            <br />
            BUSINESS
          </h1>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/30" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          We build websites that convert, rank businesses on Google, and run profitable advertising campaigns that help brands grow faster.
        </p>
      </FlowSection>

      <FlowSection aria-label="La mission" style={{ backgroundColor: '#000', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — Our Philosophy</p>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          >
            RESULTS
            <br />
            FIRST
            <br />
            ALWAYS
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          We help businesses build a powerful online presence through professional websites, SEO, Google Ads, Meta Ads, branding, and AI-powered digital marketing strategies that generate real leads and measurable growth.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-emerald-400">Website Development</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Custom, responsive websites that convert visitors into customers.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-emerald-400">SEO Optimization</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Improve your Google rankings and attract long-term organic traffic.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-emerald-400">Google & Meta Ads</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Generate quality leads with high-performing paid advertising.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-emerald-400">Branding</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Build a memorable and trustworthy brand identity.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-emerald-400">Social Media Marketing</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Grow your audience with engaging content and social strategies.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-emerald-400">AI Automation</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Automate customer support and business workflows using AI.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <p className="mt-auto ml-auto max-w-[50ch] text-right text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Every strategy we create starts with one question — <span className="font-bold text-emerald-400">Will this grow your business?</span>
        </p>
      </FlowSection>

      <FlowSection aria-label="Comment ça marche" style={{ backgroundColor: '#F5F0E8', color: '#000' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — Process</p>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          >
            Start.
            <br />
            Grow.
            <br />
            Scale.
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          A simple, transparent process designed to grow your business. From strategy and website development to SEO and paid advertising, we handle everything while you focus on running your business.
        </p>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-emerald-700">01 — DISCOVERY</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              We understand your business, audience, and goals.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-emerald-700">02 — STRATEGY</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Create a custom roadmap for growth.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-emerald-700">03 — DESIGN & DEVELOPMENT</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Build a modern, high-converting website.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-emerald-700">04 — LAUNCH</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Go live with complete SEO and analytics setup.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-emerald-700">05 — MARKETING</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Generate leads using SEO, Google Ads, Meta Ads, and social media.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-emerald-700">06 — OPTIMIZE & SCALE</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Continuously improve performance and grow your revenue.
            </p>
          </div>
        </div>
      </FlowSection>

      <FlowSection aria-label="La vision" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — The Vision</p>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          >
            FUTURE
            <br />
            OF DIGITAL
            <br />
            GROWTH
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          We&apos;re not just building websites—we&apos;re building businesses. Every strategy, campaign, and digital experience is designed to generate measurable growth and long-term success.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-emerald-300">100%</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Custom strategies tailored to every client.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-emerald-300">24/7</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Dedicated support and campaign monitoring.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-emerald-300">ROI Focused</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Every decision is made to maximize leads and revenue.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Most businesses struggle online because they lack the right strategy. We combine website development, SEO, Google Ads, Meta Ads, and AI-powered marketing to turn visitors into loyal customers.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-emerald-300">Website Development</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Fast, responsive, SEO-friendly websites that convert.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-emerald-300">Digital Marketing</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              SEO, Google Ads, Meta Ads, and social media campaigns that generate leads.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-emerald-300">Long-Term Growth</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Continuous optimization and data-driven strategies that scale your business.
            </p>
          </div>
        </div>
      </FlowSection>

      <FlowSection aria-label="Join us" style={{ backgroundColor: '#000', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">05 — Get Started</p>
        <hr className="my-[2vw] border-none border-t border-white/30" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          >
            Ready
            <br />
            To
            <br />
            Grow?
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/30" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Ready to grow your business? Let's build a high-converting website,
          improve your Google rankings, and generate quality leads through
          SEO, Google Ads, Meta Ads, and AI-powered digital marketing.
        </p>
      </FlowSection>
    </FlowArt>
  );
}
