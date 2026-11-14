import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import PageHero, { CtaBand, SectionPhoto } from "@/components/PageHero";
import NotFound from "@/pages/NotFound";
import { findBySlug, pageImages, products, services } from "@/data/site";

export default function ProductDetail() {
	const { slug } = useParams();
	const product = findBySlug(products, slug);
	if (!product) return <NotFound />;
	const others = products.filter((item) => item.slug !== product.slug);

	return (
		<>
			<Helmet>
				<title>{`${product.name} · Bergsuite Infotech Pvt Ltd`}</title>
				<meta name="description" content={product.summary} />
			</Helmet>
			<PageHero
				eyebrow={product.eyebrow.toUpperCase()}
				title={product.name}
				lede={product.lede}
				crumbs={[{ label: "Home", to: "/" }, { label: "Products", to: "/products" }, { label: product.name }]}
				image={product.image}
				imageAlt={product.imageAlt}
			/>
			<section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
				<SectionPhoto src={pageImages.platform[0]} alt={pageImages.platform[1]} />
			</section>
			<section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
				<div>
					<h2 className="text-3xl font-extrabold tracking-tight">What it does</h2>
					<p className="mt-4 leading-7 text-[#3d516c]">{product.summary}</p>
					<h3 className="mt-8 text-xl font-extrabold">Who it is for</h3>
					<p className="mt-3 leading-7 text-[#3d516c]">{product.audience}</p>
				</div>
				<div className="rounded-3xl bg-white p-6 shadow-sm">
					<h2 className="text-xl font-extrabold">Capabilities</h2>
					<ul className="mt-4 space-y-3">
						{product.capabilities.map((item) => (
							<li key={item} className="rounded-2xl bg-[#f5f7fb] px-4 py-3 text-sm leading-6">
								{item}
							</li>
						))}
					</ul>
				</div>
			</section>
			<section className="bg-white px-4 py-14 sm:px-6">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-2xl font-extrabold">Consulting around the product</h2>
					<p className="mt-3 max-w-2xl text-[#3d516c]">
						A license is rarely the whole job. The same practices that built {product.name} can stand up the data, the cloud, and the workflow around it.
					</p>
					<ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
						{services.slice(0, 4).map((service) => (
							<li key={service.slug}>
								<Link to={`/services/${service.slug}`} className="block overflow-hidden rounded-2xl border border-[#e6eef6] font-semibold hover:border-[#c9def8]">
									<img src={service.image} alt={service.imageAlt} className="aspect-[16/9] w-full object-cover" />
									<span className="block px-4 py-3">{service.name}</span>
								</Link>
							</li>
						))}
					</ul>
					<h2 className="mt-12 text-2xl font-extrabold">Other products</h2>
					<ul className="mt-4 grid gap-3 md:grid-cols-3">
						{others.map((item) => (
							<li key={item.slug}>
								<Link to={`/products/${item.slug}`} className="block overflow-hidden rounded-2xl bg-[#f5f7fb] font-semibold">
									<img src={item.image} alt={item.imageAlt} className="aspect-[16/9] w-full object-cover" />
									<span className="block px-4 py-3">{item.name}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>
			<CtaBand title={`Ask about ${product.name}.`} body="Tell us the environment it would live in and who needs the view. We will say plainly whether it fits." />
		</>
	);
}
