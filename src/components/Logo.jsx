export default function Logo({ compact = false }) {
	return (
		<img
			src="/bergsuite-logo.png"
			alt="Bergsuite Infotech Pvt Ltd"
			className={compact ? "h-10 w-auto max-w-[58vw] object-contain sm:max-w-none" : "h-14 w-auto max-w-[80vw] object-contain"}
		/>
	);
}
