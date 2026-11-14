import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import Globe from "@/components/Globe";
import { Icon } from "@/components/Icons";
import { CtaBand } from "@/components/PageHero";
import { useCompanyVideo } from "@/components/VideoModal";
import { company, heroChips, industries, pageImages, products, services, stats } from "@/data/site";

const pillars = [
	{
		title: "Innovation",
		body: "We look for the change that is worth building, then keep the first release small enough to learn from.",
		image: "/images/service-product.jpg",
		imageAlt: "A workshop bench with a device shell and blue models under warm light",
	},
	{
		title: "Technology",
		body: "AI, data, cloud, and applications, chosen because they fit the problem. The stack is a means.",
		image: "/images/service-ai.jpg",
		imageAlt: "Blue glass nodes and orange filaments on a dark table",
	},
	{
		title: "People",
		body: "Fifty-plus engineers, designers, and consultants who stay close to the work after go-live.",
		image: "/images/careers-team.jpg",
		imageAlt: "A hybrid workspace with navy panels and daylight across the desks",
	},
];

export default function Home() {
	const { openVideo } = useCompanyVideo();
	const core = services.slice(0, 4);

	return (
		<>
			<Helmet>
				<title>Bergsuite Infotech Pvt Ltd · Building Intelligent Solutions for a Better Tomorrow</title>
				<meta name="description" content={company.summary} />
			</Helmet>

			<section className="hero-sky relative overflow-hidden text-white">
				<img
					src={pageImages.homeHero[0]}
					alt={pageImages.homeHero[1]}
					className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35"
				/>
				<div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.15fr)] lg:py-16">
					<div>
						<p className="flex flex-wrap items-center gap-3 text-[0.78rem] font-bold tracking-[0.28em] text-white/85">
							<span>{company.tagline}</span>
							<span className="h-0.5 w-10 rounded-full bg-[#ff7a18]" />
						</p>
						<h1 className="mt-5 max-w-xl text-[2.55rem] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-[3.35rem]">
							<span className="block">Building Intelligent</span>
							<span className="block">Solutions for a</span>
							<span className="block">
								<span className="text-[#3ec6ff]">Better</span> <span className="text-[#ff8a1a]">Tomorrow</span>
							</span>
						</h1>
						<p className="mt-6 max-w-md text-[15.5px] leading-7 text-slate-200">{company.summary}</p>
						<div className="mt-8 flex flex-wrap gap-3">
							<Link to="/services" className="btn btn-orange">
								Our Services
								<ArrowRight className="h-4 w-4" aria-hidden="true" />
							</Link>
							<button type="button" className="btn btn-ghost" onClick={openVideo}>
								<span className="grid h-7 w-7 place-items-center rounded-full border border-white/70">
									<Play className="ml-0.5 h-3.5 w-3.5" aria-hidden="true" />
								</span>
								Watch Company Video
							</button>
						</div>
					</div>

					<div className="relative mx-auto w-full max-w-[740px]">
						<div className="relative z-0 mx-auto w-[min(76%,460px)]">
							<Globe />
						</div>
						<ul className="relative z-10 mt-4 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 lg:absolute lg:inset-0 lg:mt-0 lg:block">
							{heroChips.map((chip) => (
								<li key={chip.slug} className={`lg:absolute lg:w-[228px] ${chip.place}`}>
									<Link to={`/services/${chip.slug}`} className="chip">
										<span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-sky-200">
											<Icon name={chip.icon} className="h-5 w-5" />
										</span>
										<span className="text-[13px] font-semibold leading-5 sm:text-sm">{chip.label}</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			<section aria-label="Company figures" className="relative z-10 border-y border-[#e7eef6] bg-white">
				<ul className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
					{stats.map((stat, index) => (
						<li key={stat.label} className={index > 0 ? "lg:border-l lg:border-[#e7eef6]" : ""}>
							<Link to={stat.to} className="flex h-full items-center gap-4 px-6 py-7 hover:bg-[#f8fbff]">
								<span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${stat.tint}`}>
									<Icon name={stat.icon} className="h-6 w-6" />
								</span>
								<span>
									<span className="block text-[1.7rem] font-extrabold leading-none tracking-tight text-[#142033]">{stat.value}</span>
									<span className="mt-1 block text-sm text-[#5c6d84]">{stat.label}</span>
								</span>
							</Link>
						</li>
					))}
				</ul>
			</section>

			<section className="px-4 py-16 sm:px-6 sm:py-20">
				<div className="mx-auto max-w-6xl">
					<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<p className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-[#5c6d84]">
								<span className="h-0.5 w-8 rounded-full bg-[#ff7a18]" />
								WHAT WE DO
							</p>
							<h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#142033] sm:text-4xl">Our Core Services</h2>
						</div>
						<Link to="/services" className="inline-flex items-center gap-1 text-sm font-bold text-[#1563d6]">
							Explore All Services
							<ArrowRight className="h-4 w-4" aria-hidden="true" />
						</Link>
					</div>
					<ul className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
						{core.map((service) => (
							<li key={service.slug}>
								<Link
									to={`/services/${service.slug}`}
									className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#e6eef6] bg-white shadow-[0_10px_30px_rgba(16,40,80,0.04)] transition hover:-translate-y-1 hover:border-[#c9def8] hover:shadow-[0_16px_40px_rgba(16,40,80,0.08)]"
								>
									<img src={service.image} alt={service.imageAlt} className="aspect-[4/3] w-full object-cover" />
									<span className="p-6">
										<span className={`grid h-12 w-12 place-items-center rounded-2xl ${service.tint}`}>
											<Icon name={service.icon} className="h-6 w-6" />
										</span>
										<h3 className="mt-5 text-lg font-extrabold tracking-tight">{service.name}</h3>
										<p className="mt-2 text-sm leading-6 text-[#5c6d84]">{service.blurb}</p>
									</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="bg-white px-4 py-16 sm:px-6">
				<div className="mx-auto max-w-6xl">
					<p className="text-xs font-bold tracking-[0.22em] text-[#5c6d84]">HOW WE PRACTICE</p>
					<h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">A product company that also delivers.</h2>
					<p className="mt-4 max-w-2xl text-[#3d516c]">
						Bergsuite Infotech Pvt Ltd builds its own software and works alongside clients. The consulting is not a separate story from the products. Pulse, Atlas, Harbor, and Forge are how we package what the teams already know how to run.
					</p>
					<ul className="mt-8 grid gap-5 md:grid-cols-3">
						{pillars.map((pillar) => (
							<li key={pillar.title} className="overflow-hidden rounded-3xl border border-[#e6eef6] bg-[#f8fbff]">
								<img src={pillar.image} alt={pillar.imageAlt} className="aspect-[16/10] w-full object-cover" />
								<div className="p-6">
									<h3 className="text-xl font-extrabold">{pillar.title}</h3>
									<p className="mt-2 text-sm leading-6 text-[#3d516c]">{pillar.body}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="px-4 py-16 sm:px-6">
				<div className="mx-auto max-w-6xl">
					<div className="flex items-end justify-between gap-4">
						<div>
							<h2 className="text-3xl font-extrabold tracking-tight">Industries we know from the inside of the work</h2>
							<p className="mt-3 max-w-2xl text-[#3d516c]">Five areas where institutions ask us to modernize operations, data, and the products around them.</p>
						</div>
						<Link to="/industries" className="hidden shrink-0 text-sm font-bold text-[#1563d6] sm:inline-flex">
							All industries
						</Link>
					</div>
					<ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
						{industries.map((industry) => (
							<li key={industry.slug}>
								<Link to={`/industries/${industry.slug}`} className="block h-full overflow-hidden rounded-2xl bg-white shadow-sm hover:-translate-y-0.5 hover:shadow-md">
									<img src={industry.image} alt={industry.imageAlt} className="aspect-[4/3] w-full object-cover" />
									<span className="block p-5">
										<span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e8f2ff] text-[#1d7af0]">
											<Icon name={industry.icon} className="h-5 w-5" />
										</span>
										<h3 className="mt-4 font-bold">{industry.name}</h3>
										<p className="mt-2 text-sm leading-6 text-[#5c6d84]">{industry.summary}</p>
									</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="bg-white px-4 py-16 sm:px-6">
				<div className="mx-auto max-w-6xl">
					<div className="flex items-end justify-between gap-4">
						<div>
							<p className="text-xs font-bold tracking-[0.22em] text-[#5c6d84]">LIVE PRODUCTS</p>
							<h2 className="mt-3 text-3xl font-extrabold tracking-tight">Four products, in use</h2>
						</div>
						<Link to="/products" className="text-sm font-bold text-[#1563d6]">
							Explore products
						</Link>
					</div>
					<ul className="mt-8 grid gap-5 md:grid-cols-2">
						{products.map((product) => (
							<li key={product.slug}>
								<Link to={`/products/${product.slug}`} className="block h-full overflow-hidden rounded-3xl border border-[#e6eef6] hover:border-[#c9def8]">
									<img src={product.image} alt={product.imageAlt} className="aspect-[16/9] w-full object-cover" />
									<span className="block p-6">
										<p className="text-xs font-bold tracking-[0.16em] text-[#e06a00]">{product.eyebrow.toUpperCase()}</p>
										<h3 className="mt-2 text-2xl font-extrabold">{product.name}</h3>
										<p className="mt-2 text-sm leading-6 text-[#3d516c]">{product.summary}</p>
									</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>

			<CtaBand
				title="Tell us what you want to build."
				body="A quote starts with the outcome, the people who will use the work, and the constraint you already know about."
			/>
		</>
	);
}
