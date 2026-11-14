import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import InquiryForm from "@/components/InquiryForm";
import PageHero, { SectionPhoto } from "@/components/PageHero";
import { budgets, pageImages, quoteProducts, quoteServices, timelines } from "@/data/site";

export default function Quote() {
	return (
		<>
			<Helmet>
				<title>Get a Quote · Bergsuite Infotech Pvt Ltd</title>
				<meta name="description" content="Request a quote from Bergsuite Infotech Pvt Ltd for a product, a build, or a consulting engagement." />
			</Helmet>
			<PageHero
				eyebrow="GET A QUOTE"
				title="Tell us what you want to change."
				lede="A useful quote starts with the outcome, who it is for, and the constraint you already know. Budget and timeline can be approximate."
				crumbs={[{ label: "Home", to: "/" }, { label: "Get a Quote" }]}
				image={pageImages.quote[0]}
				imageAlt={pageImages.quote[1]}
			/>
			<section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.7fr_1.3fr]">
				<div>
					<SectionPhoto src={pageImages.services[0]} alt={pageImages.services[1]} />
					<h2 className="mt-6 text-2xl font-extrabold">What we send back</h2>
					<ul className="mt-4 space-y-3 text-sm leading-6 text-[#3d516c]">
						<li className="rounded-2xl bg-white p-4 shadow-sm">Whether the work looks like a product, a delivery team, or advice.</li>
						<li className="rounded-2xl bg-white p-4 shadow-sm">A suggested first release, not a catalogue of everything we could do.</li>
						<li className="rounded-2xl bg-white p-4 shadow-sm">The questions we still need answered before a number would be honest.</li>
					</ul>
					<p className="mt-4 text-sm text-[#5c6d84]">
						Just want to talk? <Link to="/contact" className="font-bold text-[#1563d6]">Use the contact form</Link>.
					</p>
				</div>
				<InquiryForm
					id="quote-form"
					intent="quote"
					submitLabel="Request quote"
					successTitle="Quote request received"
					successDetail={(values) => `Thank you, ${values.name}. We have the request from ${values.organization} and will reply at ${values.email}.`}
					fields={[
						{ name: "name", label: "Full name", required: true, autoComplete: "name" },
						{ name: "email", label: "Work email", type: "email", required: true, autoComplete: "email" },
						{ name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
						{ name: "organization", label: "Organization", required: true, autoComplete: "organization" },
						{ name: "service", label: "Service", type: "select", required: true, options: quoteServices },
						{ name: "product", label: "Product", type: "select", options: quoteProducts },
						{ name: "timeline", label: "Timeline", type: "select", options: timelines },
						{ name: "budget", label: "Engagement shape", type: "select", options: budgets },
						{
							name: "message",
							label: "What are you hoping to achieve",
							type: "textarea",
							required: true,
							minLength: 20,
							full: true,
						},
					]}
				/>
			</section>
		</>
	);
}
