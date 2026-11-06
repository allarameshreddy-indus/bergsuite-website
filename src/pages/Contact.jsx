import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import InquiryForm from "@/components/InquiryForm";
import PageHero, { SectionPhoto } from "@/components/PageHero";
import { pageImages, services } from "@/data/site";

const topics = [
	{ value: "", label: "Select a topic" },
	...services.map((service) => ({ value: service.name, label: service.name })),
	{ value: "Products", label: "Products" },
	{ value: "Careers", label: "Careers" },
	{ value: "Something else", label: "Something else" },
];

export default function Contact() {
	return (
		<>
			<Helmet>
				<title>Contact · Kriyzen Technologies</title>
				<meta name="description" content="Contact Kriyzen Technologies about a product, a consulting engagement, or a role." />
			</Helmet>
			<PageHero
				eyebrow="CONTACT"
				title="Contact"
				lede="Write with the outcome you have in mind. A person on the relevant team reads it."
				crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
				image={pageImages.contact[0]}
				imageAlt={pageImages.contact[1]}
			/>
			<section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.75fr_1.25fr]">
				<div>
					<SectionPhoto src={pageImages.quote[0]} alt={pageImages.quote[1]} />
					<h2 className="mt-6 text-2xl font-extrabold">What happens next</h2>
					<ul className="mt-4 space-y-3 text-sm leading-6 text-[#3d516c]">
						<li className="rounded-2xl bg-white p-4 shadow-sm">We reply to the email you give us, usually within two business days.</li>
						<li className="rounded-2xl bg-white p-4 shadow-sm">If the work is a fit, we propose a short call and the people who should be on it.</li>
						<li className="rounded-2xl bg-white p-4 shadow-sm">
							For a scoped estimate, use <Link to="/quote" className="font-bold text-[#1563d6]">Get a Quote</Link>.
						</li>
					</ul>
				</div>
				<InquiryForm
					id="contact-form"
					intent="contact"
					submitLabel="Send message"
					successTitle="Message received"
					successDetail={(values) => `Thank you, ${values.name}. We have your message and will reply at ${values.email}.`}
					fields={[
						{ name: "name", label: "Full name", required: true, autoComplete: "name" },
						{ name: "email", label: "Work email", type: "email", required: true, autoComplete: "email" },
						{ name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
						{ name: "organization", label: "Organization", autoComplete: "organization" },
						{ name: "topic", label: "Topic", type: "select", required: true, options: topics, full: true },
						{ name: "message", label: "How can we help", type: "textarea", required: true, minLength: 20, full: true },
					]}
				/>
			</section>
		</>
	);
}
