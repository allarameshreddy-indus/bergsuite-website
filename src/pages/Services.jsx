import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Icon } from "@/components/Icons";
import PageHero, { CtaBand, SectionPhoto } from "@/components/PageHero";
import { pageImages, services } from "@/data/site";

export default function Services() {
	return (
		<>
			<Helmet>
				<title>Services · Kriyzen Technologies</title>
				<meta name="description" content="Application development, AI and data, cloud and DevOps, product engineering, analytics, and staffing from Kriyzen Technologies." />
			</Helmet>
			<PageHero
				eyebrow="WHAT WE DO"
				title="Services"
				lede="Six practices. One standard: the work should be usable by the people it was built for, and operable by the team that keeps it."
				crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
				image={pageImages.services[0]}
				imageAlt={pageImages.services[1]}
			/>
			<section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
				<ul className="grid gap-5 md:grid-cols-2">
					{services.map((service) => (
						<li key={service.slug}>
							<Link to={`/services/${service.slug}`} className="block h-full overflow-hidden rounded-3xl border border-[#e6eef6] bg-white hover:-translate-y-0.5 hover:shadow-md">
								<img src={service.image} alt={service.imageAlt} className="aspect-[16/9] w-full object-cover" />
								<span className="block p-6">
									<span className={`grid h-12 w-12 place-items-center rounded-2xl ${service.tint}`}>
										<Icon name={service.icon} className="h-6 w-6" />
									</span>
									<h2 className="mt-5 text-2xl font-extrabold">{service.name}</h2>
									<p className="mt-2 text-[#3d516c]">{service.summary}</p>
									<p className="mt-4 text-sm font-bold text-[#1563d6]">View service</p>
								</span>
							</Link>
						</li>
					))}
				</ul>
				<div className="mt-10">
					<SectionPhoto src={pageImages.delivery[0]} alt={pageImages.delivery[1]} />
				</div>
			</section>
			<CtaBand title="Not sure which practice you need?" body="Describe the outcome. We will tell you whether it is a product, a build, a data program, or a person on your team." />
		</>
	);
}
