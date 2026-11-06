import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import InquiryForm from "@/components/InquiryForm";
import PageHero, { SectionPhoto } from "@/components/PageHero";
import { jobs, pageImages } from "@/data/site";

const roleOptions = [
	{ value: "", label: "Select a role" },
	...jobs.map((job) => ({ value: job.title, label: job.title })),
	{ value: "Open application", label: "Open application" },
];

export default function Careers() {
	return (
		<>
			<Helmet>
				<title>Careers · Kriyzen Technologies</title>
				<meta name="description" content="Open roles at Kriyzen Technologies across engineering, data, design, and consulting." />
			</Helmet>
			<PageHero
				eyebrow="50+ PROFESSIONALS"
				title="Careers"
				lede="We hire people who can do the work and explain it. Roles are full-time and hybrid, with overlap for a day based in India."
				crumbs={[{ label: "Home", to: "/" }, { label: "Careers" }]}
				image={pageImages.careers[0]}
				imageAlt={pageImages.careers[1]}
			/>
			<section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
				<h2 className="text-3xl font-extrabold tracking-tight">Open roles</h2>
				<ul className="mt-6 grid gap-4 md:grid-cols-2">
					{jobs.map((job) => (
						<li key={job.slug}>
							<Link to={`/careers/${job.slug}`} className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#e6eef6] bg-white hover:shadow-md sm:flex-row">
								<img src={job.image} alt={job.imageAlt} className="aspect-[16/10] w-full object-cover sm:aspect-auto sm:w-40" />
								<span className="flex flex-1 flex-col justify-center gap-2 px-5 py-5">
									<span className="block text-lg font-extrabold">{job.title}</span>
									<span className="block text-sm text-[#5c6d84]">
										{job.team} · {job.location} · {job.type}
									</span>
									<span className="text-sm font-bold text-[#1563d6]">View and apply</span>
								</span>
							</Link>
						</li>
					))}
				</ul>
				<div className="mt-10">
					<SectionPhoto src={pageImages.hiring[0]} alt={pageImages.hiring[1]} />
				</div>
				<div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
					<h2 className="text-2xl font-extrabold">How we hire</h2>
					<ol className="mt-4 grid gap-4 md:grid-cols-4">
						{[
							["Application", "A short note on the role and the work you have already done."],
							["Conversation", "A talk with the people who do this work, not a script."],
							["Working session", "A practical problem close to the role. No puzzle gauntlet."],
							["Offer", "A clear description of the team, the work, and how we will support you."],
						].map(([title, body], index) => (
							<li key={title}>
								<p className="text-sm font-bold text-[#ff7a18]">0{index + 1}</p>
								<h3 className="mt-1 font-extrabold">{title}</h3>
								<p className="mt-1 text-sm leading-6 text-[#3d516c]">{body}</p>
							</li>
						))}
					</ol>
				</div>
			</section>
			<section className="bg-white px-4 py-16 sm:px-6" id="apply">
				<div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
					<div>
						<img src={pageImages.contact[0]} alt={pageImages.contact[1]} className="mb-5 aspect-[16/9] w-full rounded-3xl object-cover" />
						<h2 className="text-3xl font-extrabold tracking-tight">Apply</h2>
						<p className="mt-3 leading-7 text-[#3d516c]">
							Use this form for any open role, or send an open application if none of them is quite right. We read every one.
						</p>
						<p className="mt-3 text-sm text-[#5c6d84]">
							Prefer a specific role? Open it from the list and the form will start with that title.
						</p>
					</div>
					<InquiryForm
						id="careers-apply"
						intent="application"
						submitLabel="Submit application"
						successTitle="Application received"
						successDetail={(values) =>
							`Thank you, ${values.name}. We have your application${values.role ? ` for ${values.role}` : ""} and will reply at ${values.email}.`
						}
						fields={[
							{ name: "name", label: "Full name", required: true, autoComplete: "name" },
							{ name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
							{ name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel" },
							{ name: "role", label: "Role", type: "select", required: true, options: roleOptions },
							{ name: "linkedin", label: "LinkedIn or portfolio URL", type: "url", autoComplete: "url", full: true },
							{
								name: "message",
								label: "Why this work, and what should we know",
								type: "textarea",
								required: true,
								minLength: 30,
								full: true,
							},
						]}
					/>
				</div>
			</section>
		</>
	);
}
