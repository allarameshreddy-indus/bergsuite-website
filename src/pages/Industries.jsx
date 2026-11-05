import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Icon } from "@/components/Icons";
import PageHero, { CtaBand } from "@/components/PageHero";
import { industries } from "@/data/site";

export default function Industries() {
	return (
		<>
			<Helmet>
				<title>Industries · Kriyzen Technologies</title>
				<meta name="description" content="Kriyzen Technologies works with education, healthcare, financial services, manufacturing, and the public sector." />
			</Helmet>
			<PageHero
				eyebrow="5+ INDUSTRIES"
				title="Industries"
				lede="We work where software has to respect an institution: education, healthcare, financial services, manufacturing, and the public sector."
				crumbs={[{ label: "Home", to: "/" }, { label: "Industries" }]}
			/>
			<section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
				<ul className="grid gap-5 md:grid-cols-2">
					{industries.map((industry) => (
						<li key={industry.slug}>
							<Link to={`/industries/${industry.slug}`} className="block h-full rounded-3xl border border-[#e6eef6] bg-white p-6 hover:-translate-y-0.5 hover:shadow-md">
								<span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e8f2ff] text-[#1d7af0]">
									<Icon name={industry.icon} className="h-6 w-6" />
								</span>
								<h2 className="mt-5 text-2xl font-extrabold">{industry.name}</h2>
								<p className="mt-2 text-[#3d516c]">{industry.summary}</p>
							</Link>
						</li>
					))}
				</ul>
			</section>
			<CtaBand title="Your sector may not be on this list." body="If the problem is a product, a data platform, or a team that can deliver, write to us anyway. We will say if we are the right firm." />
		</>
	);
}
