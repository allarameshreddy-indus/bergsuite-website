import { createContext, useContext, useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";

const VideoContext = createContext(null);

export function useCompanyVideo() {
	const value = useContext(VideoContext);
	if (!value) throw new Error("Company video is only available inside the site layout.");
	return value;
}

export function VideoProvider({ children }) {
	const [open, setOpen] = useState(false);
	const triggerRef = useRef(null);

	function openVideo(event) {
		triggerRef.current = event?.currentTarget ?? document.activeElement;
		setOpen(true);
	}

	function closeVideo() {
		setOpen(false);
		window.requestAnimationFrame(() => triggerRef.current?.focus?.());
	}

	return (
		<VideoContext.Provider value={{ openVideo, closeVideo, open }}>
			{children}
			{open ? <VideoDialog onClose={closeVideo} /> : null}
		</VideoContext.Provider>
	);
}

function VideoDialog({ onClose }) {
	const titleId = useId();
	const dialogRef = useRef(null);

	useEffect(() => {
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const root = dialogRef.current;
		const focusable = () =>
			[...root.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])')].filter(
				(node) => !node.disabled && node.offsetParent !== null
			);
		focusable()[0]?.focus();

		function onKey(event) {
			if (event.key === "Escape") {
				event.preventDefault();
				onClose();
				return;
			}
			if (event.key !== "Tab") return;
			const items = focusable();
			if (!items.length) return;
			const first = items[0];
			const last = items[items.length - 1];
			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		}

		document.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = previous;
			document.removeEventListener("keydown", onKey);
		};
	}, [onClose]);

	return (
		<div className="fixed inset-0 z-[70] flex items-end justify-center p-3 sm:items-center sm:p-6">
			<button type="button" className="absolute inset-0 bg-[#06101f]/75" aria-label="Close company video" onClick={onClose} />
			<div
				ref={dialogRef}
				role="dialog"
				aria-modal="true"
				aria-labelledby={titleId}
				className="relative z-10 w-full max-w-4xl"
			>
				<div className="mb-3 flex justify-end">
					<button type="button" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#142033]" onClick={onClose}>
						<X className="h-4 w-4" aria-hidden="true" />
						Close
					</button>
				</div>
				<VideoPlayer labelledBy={titleId} />
			</div>
		</div>
	);
}
