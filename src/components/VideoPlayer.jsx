import { useEffect, useState } from "react";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { videoSlides } from "@/data/site";

const TICK = 100;
const SLIDE_MS = 5200;

export default function VideoPlayer({ labelledBy }) {
	const [index, setIndex] = useState(0);
	const [playing, setPlaying] = useState(false);
	const [elapsed, setElapsed] = useState(0);
	const slide = videoSlides[index];
	const progress = Math.min(100, ((index * SLIDE_MS + elapsed) / (videoSlides.length * SLIDE_MS)) * 100);

	useEffect(() => {
		if (!playing) return undefined;
		const timer = window.setInterval(() => {
			setElapsed((value) => {
				if (value + TICK >= SLIDE_MS) {
					setIndex((current) => (current + 1) % videoSlides.length);
					return 0;
				}
				return value + TICK;
			});
		}, TICK);
		return () => window.clearInterval(timer);
	}, [playing]);

	useEffect(() => {
		function onHide() {
			if (document.hidden) setPlaying(false);
		}
		document.addEventListener("visibilitychange", onHide);
		return () => document.removeEventListener("visibilitychange", onHide);
	}, []);

	function go(next) {
		setIndex((next + videoSlides.length) % videoSlides.length);
		setElapsed(0);
	}

	return (
		<div className="overflow-hidden rounded-3xl border border-white/10 bg-[#07101f] text-white shadow-2xl">
			<div className="relative aspect-video bg-[radial-gradient(ellipse_at_70%_40%,rgba(40,120,220,0.45),transparent_55%),linear-gradient(160deg,#0a1d4a,#07101f)]">
				<div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
					<p className="text-xs font-bold tracking-[0.22em] text-sky-300">{slide.kicker}</p>
					<h2 id={labelledBy} className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
						{slide.title}
					</h2>
					<p className="mt-3 max-w-xl text-sm leading-6 text-slate-200 sm:text-base" aria-live="polite">
						{slide.body}
					</p>
				</div>
				{!playing && (
					<button
						type="button"
						className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-[70%] place-items-center rounded-full bg-white text-[#071633] shadow-lg"
						onClick={() => setPlaying(true)}
						aria-label="Play company video"
					>
						<Play className="ml-1 h-7 w-7" aria-hidden="true" />
					</button>
				)}
			</div>
			<div className="space-y-3 bg-[#0b1730] px-4 py-3 sm:px-5">
				<div
					className="h-1.5 overflow-hidden rounded-full bg-white/10"
					role="progressbar"
					aria-valuemin={0}
					aria-valuemax={100}
					aria-valuenow={Math.round(progress)}
					aria-label="Company video progress"
				>
					<div className="h-full rounded-full bg-gradient-to-r from-[#1d7af0] via-[#3ec6ff] to-[#ff7a18]" style={{ width: `${progress}%` }} />
				</div>
				<div className="flex flex-wrap items-center gap-2">
					<button type="button" className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#071633]" onClick={() => setPlaying((value) => !value)} aria-label={playing ? "Pause company video" : "Play company video"}>
						{playing ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
					</button>
					<button type="button" className="grid h-10 w-10 place-items-center rounded-full text-white hover:bg-white/10" onClick={() => go(index - 1)} aria-label="Previous chapter">
						<SkipBack className="h-4 w-4" />
					</button>
					<button type="button" className="grid h-10 w-10 place-items-center rounded-full text-white hover:bg-white/10" onClick={() => go(index + 1)} aria-label="Next chapter">
						<SkipForward className="h-4 w-4" />
					</button>
					<p className="ml-1 text-sm text-slate-300">
						Chapter {index + 1} of {videoSlides.length}
					</p>
				</div>
				<ol className="grid gap-2 sm:grid-cols-5">
					{videoSlides.map((item, itemIndex) => (
						<li key={item.kicker}>
							<button
								type="button"
								className={`w-full rounded-xl px-2 py-2 text-left text-xs font-semibold ${itemIndex === index ? "bg-white text-[#071633]" : "bg-white/5 text-slate-300 hover:bg-white/10"}`}
								aria-current={itemIndex === index ? "true" : undefined}
								onClick={() => go(itemIndex)}
							>
								{item.kicker}
							</button>
						</li>
					))}
				</ol>
			</div>
		</div>
	);
}
