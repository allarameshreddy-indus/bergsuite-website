import { Link } from "react-router-dom";

export function Breadcrumbs({ items }) {
	return (
		<nav aria-label="Breadcrumb" className="text-sm text-sky-100/80">
			<ol className="flex flex-wrap items-center gap-2">
				{items.map((item, index) => {
					const last = index === items.length - 1;
					return (
						<li key={`${item.label}-${index}`} className="flex items-center gap-2">
							{index > 0 ? <span aria-hidden="true">/</span> : null}
							{last || !item.to ? (
								<span aria-current="page" className="font-semibold text-white">
									{item.label}
								</span>
							) : (
								<Link to={item.to} className="hover:text-white">
									{item.label}
								</Link>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
}

export default function PageHero({ eyebrow, title, lede, crumbs, image, imageAlt }) {
	return (
		<section className="relative overflow-hidden bg-[#071633] text-white">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(46,140,255,0.35),transparent_50%)]" />
			<div className={`relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 sm:py-16 ${image ? "lg:grid-cols-[1.15fr_0.85fr]" : ""}`}>
				<div>
					{crumbs ? <Breadcrumbs items={crumbs} /> : null}
					{eyebrow ? <p className="mt-5 text-xs font-bold tracking-[0.22em] text-sky-300">{eyebrow}</p> : null}
					<h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
					{lede ? <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">{lede}</p> : null}
				</div>
				{image ? (
					<img
						src={image}
						alt={imageAlt || ""}
						className="aspect-[16/10] w-full rounded-3xl object-cover shadow-[0_24px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/15"
					/>
				) : null}
			</div>
		</section>
	);
}

export function SectionPhoto({ src, alt }) {
	return <img src={src} alt={alt} className="aspect-[16/8] w-full rounded-3xl object-cover" />;
}

export function CtaBand({ title, body }) {
	return (
		<section className="px-4 py-16 sm:px-6">
			<div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl bg-[#071633] px-6 py-10 text-white sm:flex-row sm:items-center sm:px-10">
				<div>
					<h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h2>
					<p className="mt-2 max-w-xl text-slate-300">{body}</p>
				</div>
				<div className="flex flex-wrap gap-3">
					<Link to="/quote" className="btn btn-orange">
						Get a Quote
					</Link>
					<Link to="/contact" className="btn btn-ghost">
						Contact
					</Link>
				</div>
			</div>
		</section>
	);
}
