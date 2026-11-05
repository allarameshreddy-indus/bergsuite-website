import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Icon } from "@/components/Icons";
import PageHero, { CtaBand } from "@/components/PageHero";
import { products } from "@/data/site";

export default function Products() {
	return (
		<>
			<Helmet>
				<title>Products · Kriyzen Technologies</title>
				<meta name="description" content="Kriyzen Pulse, Atlas, Harbor, and Forge. Four live products for operations, data, cloud, and delivery." />
			</Helmet>
			<PageHero
				eyebrow="4+ PRODUCTS LIVE"
				title="Products"
				lede="Four products we run and keep improving. They are also the patterns we bring into client work."
				crumbs={[{ label: "Home", to: "/" }, { label: "Products" }]}
			/>
			<section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
				<ul className="grid gap-5 md:grid-cols-2">
					{products.map((product) => (
						<li key={product.slug}>
							<Link to={`/products/${product.slug}`} className="block h-full rounded-3xl border border-[#e6eef6] bg-white p-6 hover:-translate-y-0.5 hover:shadow-md">
								<span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e8f2ff] text-[#1d7af0]">
									<Icon name={product.icon} className="h-6 w-6" />
								</span>
								<p className="mt-5 text-xs font-bold tracking-[0.16em] text-[#e06a00]">{product.eyebrow.toUpperCase()}</p>
								<h2 className="mt-2 text-2xl font-extrabold">{product.name}</h2>
								<p className="mt-2 text-[#3d516c]">{product.summary}</p>
								<p className="mt-4 text-sm font-bold text-[#1563d6]">View product</p>
							</Link>
						</li>
					))}
				</ul>
			</section>
			<CtaBand title="Want a product in your environment?" body="We deploy Pulse, Atlas, Harbor, and Forge with the teams who will live in them, and we can build the pieces around them." />
		</>
	);
}
