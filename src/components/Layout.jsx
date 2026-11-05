import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { VideoProvider } from "@/components/VideoModal";

function ScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "auto" });
	}, [pathname]);
	return null;
}

export default function Layout() {
	return (
		<VideoProvider>
			<div className="flex min-h-screen flex-col bg-[#f5f7fb] text-[#142033]">
				<a className="skip-link" href="#main">
					Skip to content
				</a>
				<Header />
				<main id="main" className="flex-1">
					<ScrollToTop />
					<Outlet />
				</main>
				<Footer />
			</div>
		</VideoProvider>
	);
}
