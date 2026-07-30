import React from 'react';
import { motion } from 'framer-motion';
import { GridPattern } from '@/components/ui/grid-pattern';

type Testimonial = {
	name: string;
	role: string;
	image: string;
	company: string;
	quote: string;
};

const testimonials: Testimonial[] = [
	{
		quote:
			'Their custom website development completely transformed our brand online. The speed optimization alone increased our conversion rates by 45%. Highly recommended!',
		name: 'Aarav Sharma',
		role: 'Founder',
		company: 'Vedic Roots',
		image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80',
	},
	{
		quote:
			'Our organic traffic has grown by 300% since they took over our SEO campaigns. We now rank on the first page of Google for all our major high-intent keywords.',
		name: 'Priya Patel',
		role: 'Marketing Director',
		company: 'Ziva Jewels',
		image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=150&h=150&q=80',
	},
	{
		quote:
			'Their Meta Ads strategy is outstanding. Our Facebook and Instagram ad campaigns have achieved a consistent 4.2x ROAS, scaling our monthly revenue significantly.',
		name: 'Vikram Singh',
		role: 'E-commerce Head',
		company: 'Nurture Organics',
		image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=150&h=150&q=80',
	},
	{
		quote:
			'We got a stunning, fast, and fully responsive website that is perfectly optimized for search engines right out of the box. Incredible execution from their dev team!',
		name: 'Ananya Iyer',
		role: 'Operations Manager',
		company: 'Apex Wellness',
		image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=150&h=150&q=80',
	},
	{
		quote:
			'They designed a custom high-converting landing page and managed our Meta ad campaigns. Within the first month, we saw a massive surge in qualified leads at half the acquisition cost.',
		name: 'Rohan Gupta',
		role: 'Co-Founder',
		company: 'GearUp Fitness',
		image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80',
	},
	{
		quote:
			'The Google Business Profile optimization and local SEO strategy brought a steady stream of foot traffic and online inquiries. Absolutely phenomenal work!',
		name: 'Meera Nair',
		role: 'Founder',
		company: 'The Spice Atelier',
		image: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&w=150&h=150&q=80',
	},
];

export function TestimonialsSection() {
	return (
		<section className="relative w-full pt-10 pb-20 px-4">
			<div aria-hidden className="absolute inset-0 isolate z-0 contain-strict">
				<div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full" />
				<div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />
				<div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full" />
			</div>
			<div className="mx-auto max-w-5xl space-y-8">
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold tracking-wide text-balance md:text-3xl lg:text-4xl">
						Trusted by Businesses, Loved by Clients
					</h1>
					<p className="text-muted-foreground text-sm md:text-base lg:text-lg">
						Client satisfaction is our greatest achievement. Here's what our clients have to say about working with us.
					</p>
				</div>
				<div className="relative grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
					{testimonials.map(({ name, role, company, quote, image }, index) => (
						<motion.div
							initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
							whileInView={{
								filter: 'blur(0px)',
								translateY: 0,
								opacity: 1,
							}}
							viewport={{ once: true }}
							transition={{ delay: 0.1 * index + 0.1, duration: 0.8 }}
							key={index}
							className="border-foreground/25 relative grid grid-cols-[auto_1fr] gap-x-3 overflow-hidden border border-dashed p-4"
						>
							<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
								<div className="from-foreground/5 to-foreground/2 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
									<GridPattern
										width={25}
										height={25}
										x={-12}
										y={4}
										strokeDasharray="3"
										className="stroke-foreground/20 absolute inset-0 h-full w-full mix-blend-overlay"
									/>
								</div>
							</div>
							<img
								alt={name}
								src={image}
								loading="lazy"
								referrerPolicy="no-referrer"
								className="size-9 rounded-full"
							/>
							<div>
								<div className="-mt-0.5 -space-y-0.5">
									<p className="text-sm md:text-base">{name}</p>
									<span className="text-muted-foreground block text-[11px] font-light tracking-tight">
										{role} at {company}
									</span>
								</div>
								<blockquote className="mt-3">
									<p className="text-foreground text-sm font-light tracking-wide">
										{quote}
									</p>
								</blockquote>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
