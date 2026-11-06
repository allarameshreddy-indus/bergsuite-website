import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { Icon } from "@/components/Icons";
import PageHero, { CtaBand, SectionPhoto } from "@/components/PageHero";
import NotFound from "@/pages/NotFound";
import { findBySlug, products, services } from "@/data/site";

export default function ServiceDetail() {
	const { slug } = useParams();
	const service = findBySlug(services, slug);
	if (!service) return <NotFound />;
	const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

	return (
		<>
			<Helmet>
				<title>{`${service.name} · Kriyzen Technologies`}</title>
				<meta name="description" content={service.summary} />
			</Helmet>
			<PageHero
				eyebrow="SERVICES"
				title={service.name}
				lede={service.lede}
				crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: service.name }]}
				image={service.image}
				imageAlt={service.imageAlt}
			/>
			<section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
				<SectionPhoto src={service.sectionImage} alt={service.sectionImageAlt} />
			</section>
			<section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
				<div>
					<h2 className="text-3xl font-extrabold tracking-tight">What this practice delivers</h2>
					<p className="mt-4 leading-7 text-[#3d516c]">{service.summary}</p>
					<ul className="mt-6 space-y-3">
						{service.outcomes.map((item) => (
							<li key={item} className="rounded-2xl bg-white px-4 py-3 text-sm leading-6 shadow-sm">
								{item}
							</li>
						))}
					</ul>
				</div>
				<ol className="space-y-4">
					{service.steps.map((step, index) => (
						<li key={step.title} className="rounded-3xl border border-[#e6eef6] bg-white p-5">
							<p className="text-sm font-bold text-[#ff7a18]">0{index + 1}</p>
							<h3 className="mt-1 text-lg font-extrabold">{step.title}</h3>
							<p className="mt-2 text-sm leading-6 text-[#3d516c]">{step.body}</p>
						</li>
					))}
				</ol>
			</section>
			<section className="bg-white px-4 py-14 sm:px-6">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-2xl font-extrabold">Often paired with</h2>
					<ul className="mt-6 grid gap-4 md:grid-cols-3">
						{products.slice(0, 3).map((product) => (
							<li key={product.slug}>
								<Link to={`/products/${product.slug}`} className="block overflow-hidden rounded-2xl border border-[#e6eef6] hover:border-[#c9def8]">
									<img src={product.image} alt={product.imageAlt} className="aspect-[16/9] w-full object-cover" />
									<span className="block p-5">
										<h3 className="font-bold">{product.name}</h3>
										<p className="mt-2 text-sm text-[#5c6d84]">{product.summary}</p>
									</span>
								</Link>
							</li>
						))}
					</ul>
					<h2 className="mt-12 text-2xl font-extrabold">Other services</h2>
					<ul className="mt-4 grid gap-3 md:grid-cols-3">
						{related.map((item) => (
							<li key={item.slug}>
								<Link to={`/services/${item.slug}`} className="block overflow-hidden rounded-2xl bg-[#f5f7fb] font-semibold">
									<img src={item.image} alt={item.imageAlt} className="aspect-[16/9] w-full object-cover" />
									<span className="flex items-center gap-3 px-4 py-3">
										<span className={`grid h-9 w-9 place-items-center rounded-xl ${item.tint}`}>
											<Icon name={item.icon} className="h-4 w-4" />
										</span>
										{item.name}
									</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>
			<CtaBand title={`Talk to us about ${service.name}.`} body="Share the context and the deadline you already have. We will answer with a sensible shape for the work." />
		</>
	);
}
