import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { CtaBand, SectionPhoto } from "@/components/PageHero";
import PageHero from "@/components/PageHero";
import { company, pageImages, stats } from "@/data/site";
import { Icon } from "@/components/Icons";

const beliefs = [
	{
		title: "Innovation",
		body: "A new system is justified when it changes a decision, a service, or a day of work. We would rather ship a narrow product than a wide promise.",
		image: "/images/service-product.jpg",
		imageAlt: "A workshop bench with a matte device shell and blue models",
	},
	{
		title: "Technology",
		body: "AI, data platforms, cloud, and applications are the tools. We pick them after the problem is clear, and we leave behind something a team can operate.",
		image: "/images/section-platform.jpg",
		imageAlt: "A control desk with abstract blue light on dark glass",
	},
	{
		title: "People",
		body: "Delivery depends on who is in the room. Our consultants and engineers stay accountable past the launch, and we hire for judgment as much as skill.",
		image: "/images/section-hiring.jpg",
		imageAlt: "A conversation across a navy table in blue daylight",
	},
];

export default function About() {
	return (
		<>
			<Helmet>
				<title>About · Bergsuite Infotech Pvt Ltd</title>
				<meta name="description" content={company.summary} />
			</Helmet>
			<PageHero
				eyebrow={company.tagline}
				title="A product company with a consulting practice."
				lede={company.summary}
				crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
				image={pageImages.about[0]}
				imageAlt={pageImages.about[1]}
			/>
			<section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
				<SectionPhoto src={pageImages.aboutPractice[0]} alt={pageImages.aboutPractice[1]} />
			</section>
			<section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
				<div>
					<h2 className="text-3xl font-extrabold tracking-tight">What we are here to do</h2>
					<p className="mt-4 leading-7 text-[#3d516c]">
						Bergsuite Infotech Pvt Ltd helps businesses and institutions move from a pile of tools to software that people rely on. Some of that work is a product we run ourselves. Some of it is a team embedded with a client. The standard is the same: the outcome should be visible, the architecture should be explainable, and the handover should be real.
					</p>
					<p className="mt-4 leading-7 text-[#3d516c]">
						We keep partnerships few and long. Ten and more organizations work with us across product builds, data platforms, and cloud programs. We do not decorate this site with logos. If a partnership is public, it can be told properly. Until then, the work speaks through the products and the industries we serve.
					</p>
					<p className="mt-4 leading-7 text-[#3d516c]">
						The practice is based in India and works with institutions that need overlap with that day, plus teams farther away when the engagement calls for it. Fifty-plus professionals cover application engineering, data, cloud, design, and delivery leadership.
					</p>
				</div>
				<ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
					{stats.map((stat) => (
						<li key={stat.label}>
							<Link to={stat.to} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
								<span className={`grid h-11 w-11 place-items-center rounded-full ${stat.tint}`}>
									<Icon name={stat.icon} className="h-5 w-5" />
								</span>
								<span>
									<span className="block text-2xl font-extrabold">{stat.value}</span>
									<span className="text-sm text-[#5c6d84]">{stat.label}</span>
								</span>
							</Link>
						</li>
					))}
				</ul>
			</section>
			<section className="bg-white px-4 py-16 sm:px-6">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-3xl font-extrabold tracking-tight">Innovation, technology, people</h2>
					<ul className="mt-8 grid gap-5 md:grid-cols-3">
						{beliefs.map((item) => (
							<li key={item.title} className="overflow-hidden rounded-3xl border border-[#e6eef6]">
								<img src={item.image} alt={item.imageAlt} className="aspect-[16/10] w-full object-cover" />
								<div className="p-6">
									<h3 className="text-xl font-extrabold">{item.title}</h3>
									<p className="mt-3 text-sm leading-6 text-[#3d516c]">{item.body}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>
			<section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
				<h2 className="text-3xl font-extrabold tracking-tight">How an engagement usually runs</h2>
				<ol className="mt-8 grid gap-5 md:grid-cols-3">
					{[
						["Listen for the constraint", "We start with the outcome, the users, and what must not break. A proposal that skips this is a guess."],
						["Build in the open", "Working software, reviewed with the people who will use it. Decisions are written down so they survive a change of staff."],
						["Leave it running", "Documentation, access, and a support window. Products we run ourselves stay with us. Client systems are handed over cleanly."],
					].map(([title, body], index) => (
						<li key={title} className="rounded-3xl bg-white p-6 shadow-sm">
							<p className="text-sm font-bold text-[#ff7a18]">0{index + 1}</p>
							<h3 className="mt-2 text-xl font-extrabold">{title}</h3>
							<p className="mt-2 text-sm leading-6 text-[#3d516c]">{body}</p>
						</li>
					))}
				</ol>
			</section>
			<CtaBand title="Work with Bergsuite Infotech Pvt Ltd." body="Tell us about the institution, the product, or the team you need. We will reply with a clear next step." />
		</>
	);
}
