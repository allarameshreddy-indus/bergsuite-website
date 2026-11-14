import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import InquiryForm from "@/components/InquiryForm";
import PageHero, { SectionPhoto } from "@/components/PageHero";
import NotFound from "@/pages/NotFound";
import { findBySlug, jobs, pageImages } from "@/data/site";

const roleOptions = [
	{ value: "", label: "Select a role" },
	...jobs.map((job) => ({ value: job.title, label: job.title })),
	{ value: "Open application", label: "Open application" },
];

export default function JobDetail() {
	const { slug } = useParams();
	const job = slug ? findBySlug(jobs, slug) : null;
	if (slug && !job) return <NotFound />;

	const title = job ? job.title : "Open application";
	const lede = job
		? job.summary
		: "Tell us what you do best. If there is a fit with a team or a client engagement, we will write back.";

	return (
		<>
			<Helmet>
				<title>{`${title} · Careers · Bergsuite Infotech Pvt Ltd`}</title>
				<meta name="description" content={lede} />
			</Helmet>
			<PageHero
				eyebrow="CAREERS"
				title={title}
				lede={lede}
				crumbs={[
					{ label: "Home", to: "/" },
					{ label: "Careers", to: "/careers" },
					{ label: title },
				]}
				image={job?.image || pageImages.careers[0]}
				imageAlt={job?.imageAlt || pageImages.careers[1]}
			/>
			<section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
				<SectionPhoto src={pageImages.hiring[0]} alt={pageImages.hiring[1]} />
			</section>
			<section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
				<div>
					{job ? (
						<>
							<p className="text-sm font-semibold text-[#5c6d84]">
								{job.team} · {job.location} · {job.type}
							</p>
							<h2 className="mt-6 text-2xl font-extrabold">What you will do</h2>
							<ul className="mt-3 list-disc space-y-2 pl-5 text-[#3d516c]">
								{job.responsibilities.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
							<h2 className="mt-8 text-2xl font-extrabold">What you bring</h2>
							<ul className="mt-3 list-disc space-y-2 pl-5 text-[#3d516c]">
								{job.requirements.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</>
					) : (
						<p className="leading-7 text-[#3d516c]">
							This is for people whose work does not sit neatly in one posting. Name the craft, the kind of team you want, and a piece of work you are proud of.
						</p>
					)}
					<p className="mt-8">
						<Link to="/careers" className="font-bold text-[#1563d6]">
							All open roles
						</Link>
					</p>
				</div>
				<InquiryForm
					key={job?.slug || "open"}
					id="job-apply"
					intent="application"
					initialValues={{ role: job?.title || "Open application" }}
					submitLabel="Submit application"
					successTitle="Application received"
					successDetail={(values) => `Thank you, ${values.name}. We have your application for ${values.role} and will reply at ${values.email}.`}
					fields={[
						{ name: "name", label: "Full name", required: true, autoComplete: "name" },
						{ name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
						{ name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel" },
						{ name: "role", label: "Role", type: "select", required: true, options: roleOptions },
						{ name: "linkedin", label: "LinkedIn or portfolio URL", type: "url", full: true },
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
			</section>
		</>
	);
}
