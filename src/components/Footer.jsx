import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { company, industries, products, services } from "@/data/site";

function Column({ title, children }) {
	return (
		<div>
			<h2 className="text-xs font-bold tracking-[0.18em] text-white/60">{title}</h2>
			<ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
		</div>
	);
}

function FooterLink({ to, children }) {
	return (
		<li>
			<Link to={to} className="text-slate-300 hover:text-white">
				{children}
			</Link>
		</li>
	);
}

export default function Footer() {
	return (
		<footer className="bg-[#071633] text-slate-300">
			<div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:grid-cols-2 lg:grid-cols-6">
				<div className="sm:col-span-2">
					<Link to="/" aria-label="Kriyzen Technologies, home">
						<Logo variant="light" />
					</Link>
					<p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">{company.summary}</p>
					<p className="mt-4 text-xs font-semibold tracking-[0.18em] text-sky-300">{company.tagline}</p>
				</div>
				<Column title="COMPANY">
					<FooterLink to="/about">About</FooterLink>
					<FooterLink to="/careers">Careers</FooterLink>
					<FooterLink to="/contact">Contact</FooterLink>
					<FooterLink to="/company-video">Company video</FooterLink>
					<FooterLink to="/quote">Get a Quote</FooterLink>
				</Column>
				<Column title="SERVICES">
					<FooterLink to="/services">All services</FooterLink>
					{services.map((item) => (
						<FooterLink key={item.slug} to={`/services/${item.slug}`}>
							{item.name}
						</FooterLink>
					))}
				</Column>
				<Column title="PRODUCTS">
					<FooterLink to="/products">All products</FooterLink>
					{products.map((item) => (
						<FooterLink key={item.slug} to={`/products/${item.slug}`}>
							{item.name}
						</FooterLink>
					))}
				</Column>
				<Column title="INDUSTRIES">
					<FooterLink to="/industries">All industries</FooterLink>
					{industries.map((item) => (
						<FooterLink key={item.slug} to={`/industries/${item.slug}`}>
							{item.name}
						</FooterLink>
					))}
				</Column>
			</div>
			<div className="border-t border-white/10">
				<div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
					<p>© {new Date().getFullYear()} Kriyzen Technologies. All rights reserved.</p>
					<p>Product engineering, data, cloud, and consulting.</p>
				</div>
			</div>
		</footer>
	);
}
