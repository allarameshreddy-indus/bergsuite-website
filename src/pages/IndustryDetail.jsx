import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import PageHero, { CtaBand } from "@/components/PageHero";
import NotFound from "@/pages/NotFound";
import { findBySlug, industries, products, services } from "@/data/site";

export default function IndustryDetail() {
	const { slug } = useParams();
	const industry = findBySlug(industries, slug);
	if (!industry) return <NotFound />;

	return (
		<>
			<Helmet>
				<title>{`${industry.name} · Kriyzen Technologies`}</title>
				<meta name="description" content={industry.summary} />
			</Helmet>
			<PageHero
				eyebrow="INDUSTRIES"
				title={industry.name}
				lede={industry.lede}
				crumbs={[{ label: "Home", to: "/" }, { label: "Industries", to: "/industries" }, { label: industry.name }]}
			/>
			<section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
				<div>
					<h2 className="text-3xl font-extrabold tracking-tight">Where we help</h2>
					<ul className="mt-6 space-y-3">
						{industry.help.map((item) => (
							<li key={item} className="rounded-2xl bg-white px-4 py-3 leading-7 shadow-sm">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="space-y-6">
					<div className="rounded-3xl bg-white p-6 shadow-sm">
						<h2 className="text-lg font-extrabold">Services that show up here</h2>
						<ul className="mt-3 space-y-2">
							{services.slice(0, 4).map((service) => (
								<li key={service.slug}>
									<Link to={`/services/${service.slug}`} className="font-semibold text-[#1563d6]">
										{service.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="rounded-3xl bg-white p-6 shadow-sm">
						<h2 className="text-lg font-extrabold">Products that fit</h2>
						<ul className="mt-3 space-y-2">
							{products.map((product) => (
								<li key={product.slug}>
									<Link to={`/products/${product.slug}`} className="font-semibold text-[#1563d6]">
										{product.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
			<CtaBand title={`Planning work in ${industry.name}?`} body="Tell us the institution, the users, and the constraint. We will propose a first release rather than a transformation slogan." />
		</>
	);
}
