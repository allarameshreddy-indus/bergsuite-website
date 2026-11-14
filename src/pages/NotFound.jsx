import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<>
			<Helmet>
				<title>Page not found · Bergsuite Infotech Pvt Ltd</title>
				<meta name="description" content="This page is not on the Bergsuite Infotech Pvt Ltd site." />
			</Helmet>
			<section className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
				<p className="text-xs font-bold tracking-[0.2em] text-[#e06a00]">404</p>
				<h1 className="mt-3 text-4xl font-extrabold tracking-tight">We could not find that page.</h1>
				<p className="mt-4 text-[#3d516c]">The address may be mistyped, or the page may have moved. The rest of the site is still here.</p>
				<div className="mt-8 flex flex-wrap gap-3">
					<Link to="/" className="btn btn-navy">
						Back to home
					</Link>
					<Link to="/contact" className="btn btn-line">
						Contact
					</Link>
				</div>
			</section>
		</>
	);
}
