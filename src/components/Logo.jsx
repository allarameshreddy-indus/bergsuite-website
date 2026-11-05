import { useId } from "react";

export function LogoMark({ className = "h-10 w-10" }) {
	const id = useId().replace(/:/g, "");
	const blue = `${id}-blue`;
	const orange = `${id}-orange`;

	return (
		<svg className={className} viewBox="0 0 64 64" aria-hidden="true">
			<defs>
				<linearGradient id={blue} x1="8" y1="48" x2="56" y2="12" gradientUnits="userSpaceOnUse">
					<stop stopColor="#1a6dff" />
					<stop offset="1" stopColor="#3ec6ff" />
				</linearGradient>
				<linearGradient id={orange} x1="10" y1="20" x2="58" y2="40" gradientUnits="userSpaceOnUse">
					<stop stopColor="#ffb020" />
					<stop offset="1" stopColor="#ff6a00" />
				</linearGradient>
			</defs>
			<path
				d="M10 44c4-20 18-30 42-22"
				fill="none"
				stroke={`url(#${blue})`}
				strokeWidth="7"
				strokeLinecap="round"
			/>
			<path
				d="M12 30c14 12 26 13 40 2"
				fill="none"
				stroke={`url(#${orange})`}
				strokeWidth="7"
				strokeLinecap="round"
			/>
			<circle cx="50" cy="18" r="4" fill="#ff7a18" />
		</svg>
	);
}

export default function Logo({ variant = "dark", compact = false }) {
	const name = variant === "light" ? "text-white" : "text-[#10203a]";
	const sub = variant === "light" ? "text-white/75" : "text-[#5d6d84]";

	return (
		<span className="inline-flex items-center gap-2.5">
			<LogoMark className={compact ? "h-9 w-9" : "h-11 w-11"} />
			<span className="leading-none">
				<span className={`block text-[1.35rem] font-extrabold tracking-[-0.03em] ${name}`}>Kriyzen</span>
				<span className={`mt-1 flex items-center gap-1.5 text-[0.62rem] font-semibold tracking-[0.22em] ${sub}`}>
					<span className="hidden h-px w-3 bg-current opacity-70 sm:block" />
					TECHNOLOGIES
					<span className="hidden h-px w-3 bg-current opacity-70 sm:block" />
				</span>
			</span>
		</span>
	);
}
