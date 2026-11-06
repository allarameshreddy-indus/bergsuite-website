import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import VideoPlayer from "@/components/VideoPlayer";
import { pageImages, videoSlides } from "@/data/site";

export default function CompanyVideo() {
	return (
		<>
			<Helmet>
				<title>Company video · Kriyzen Technologies</title>
				<meta name="description" content="A short introduction to Kriyzen Technologies: products, consulting, and how an engagement starts." />
			</Helmet>
			<PageHero
				eyebrow="COMPANY VIDEO"
				title="Watch how Kriyzen works."
				lede="A short introduction. Press play, or read the chapters if you would rather not watch."
				crumbs={[{ label: "Home", to: "/" }, { label: "Company video" }]}
				image={pageImages.video[0]}
				imageAlt={pageImages.video[1]}
			/>
			<section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
				<VideoPlayer />
				<h2 className="mt-10 text-2xl font-extrabold">Transcript</h2>
				<ol className="mt-4 space-y-4">
					{videoSlides.map((slide, index) => (
						<li key={slide.kicker} className="overflow-hidden rounded-2xl bg-white shadow-sm sm:grid sm:grid-cols-[180px_1fr]">
							<img src={slide.image} alt={slide.imageAlt} className="aspect-[16/9] h-full w-full object-cover sm:aspect-auto" />
							<div className="p-5">
								<p className="text-xs font-bold tracking-[0.16em] text-[#5c6d84]">
									CHAPTER {index + 1} · {slide.kicker.toUpperCase()}
								</p>
								<h3 className="mt-2 text-lg font-extrabold">{slide.title}</h3>
								<p className="mt-2 text-sm leading-6 text-[#3d516c]">{slide.body}</p>
							</div>
						</li>
					))}
				</ol>
				<p className="mt-8">
					<Link to="/contact" className="font-bold text-[#1563d6]">
						Talk to the team
					</Link>
				</p>
			</section>
		</>
	);
}
