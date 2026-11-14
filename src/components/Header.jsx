import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { products, services } from "@/data/site";

const serviceLinks = services.map((item) => ({
	to: `/services/${item.slug}`,
	label: item.name,
	description: item.blurb,
}));

const productLinks = products.map((item) => ({
	to: `/products/${item.slug}`,
	label: item.name,
	description: item.summary,
}));

function DesktopMenu({ label, base, links, indexHref, indexLabel }) {
	const { pathname } = useLocation();
	const [hover, setHover] = useState(false);
	const [pinned, setPinned] = useState(false);
	const open = hover || pinned;
	const rootRef = useRef(null);
	const buttonRef = useRef(null);
	const focusFirst = useRef(false);
	const menuId = useId();
	const sectionActive = pathname === base || pathname.startsWith(`${base}/`);

	useEffect(() => {
		setHover(false);
		setPinned(false);
	}, [pathname]);

	useEffect(() => {
		if (!open || !focusFirst.current) return;
		focusFirst.current = false;
		rootRef.current?.querySelector('[role="menu"] a')?.focus();
	}, [open]);

	function closeNow() {
		setHover(false);
		setPinned(false);
	}

	function onKeyDown(event) {
		if (event.key === "ArrowDown") {
			event.preventDefault();
			if (open) {
				rootRef.current?.querySelector('[role="menu"] a')?.focus();
				return;
			}
			focusFirst.current = true;
			setPinned(true);
		}
		if (event.key === "Escape") {
			closeNow();
			buttonRef.current?.focus();
		}
	}

	return (
		<div
			ref={rootRef}
			className="relative"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onBlur={(event) => {
				if (!rootRef.current?.contains(event.relatedTarget)) closeNow();
			}}
			onKeyDown={onKeyDown}
		>
			<button
				ref={buttonRef}
				type="button"
				className="nav-link"
				data-active={sectionActive ? "true" : undefined}
				aria-expanded={open}
				aria-haspopup="true"
				aria-controls={menuId}
				onClick={() => setPinned((value) => !value)}
			>
				{label}
				<ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} aria-hidden="true" />
			</button>
			<div id={menuId} className={`absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 ${open ? "" : "hidden"}`}>
				<ul role="menu" className="rounded-2xl border border-[#e6eef7] bg-white p-2 shadow-[0_18px_50px_rgba(16,40,80,0.14)]">
					{links.map((item) => (
						<li key={item.to} role="none">
							<Link
								role="menuitem"
								to={item.to}
								className="block rounded-xl px-3 py-2.5 hover:bg-[#f4f8fd]"
								onClick={closeNow}
							>
								<span className="block text-sm font-bold text-[#142033]">{item.label}</span>
								<span className="mt-0.5 line-clamp-2 block text-xs leading-5 text-[#5c6d84]">{item.description}</span>
							</Link>
						</li>
					))}
					<li role="none" className="mt-1 border-t border-[#eef3f8] pt-1">
						<Link role="menuitem" to={indexHref} className="block rounded-xl px-3 py-2.5 text-sm font-bold text-[#1563d6] hover:bg-[#f4f8fd]" onClick={closeNow}>
							{indexLabel}
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

function MobileGroup({ label, links, indexHref, indexLabel, onNavigate }) {
	const [open, setOpen] = useState(false);
	const panelId = useId();
	return (
		<div className="border-b border-[#e8eef6]">
			<button
				type="button"
				className="flex w-full items-center justify-between px-1 py-3 text-left text-base font-bold text-[#142033]"
				aria-expanded={open}
				aria-controls={panelId}
				onClick={() => setOpen((value) => !value)}
			>
				{label}
				<ChevronDown className={`h-5 w-5 transition ${open ? "rotate-180" : ""}`} aria-hidden="true" />
			</button>
			{open && (
				<ul id={panelId} className="space-y-1 pb-3">
					{links.map((item) => (
						<li key={item.to}>
							<Link to={item.to} className="block rounded-xl px-3 py-2 text-sm font-semibold text-[#24364f] hover:bg-[#f4f8fd]" onClick={onNavigate}>
								{item.label}
							</Link>
						</li>
					))}
					<li>
						<Link to={indexHref} className="block rounded-xl px-3 py-2 text-sm font-bold text-[#1563d6]" onClick={onNavigate}>
							{indexLabel}
						</Link>
					</li>
				</ul>
			)}
		</div>
	);
}

export default function Header() {
	const { pathname } = useLocation();
	const [mobileOpen, setMobileOpen] = useState(false);
	const menuId = useId();

	useEffect(() => {
		setMobileOpen(false);
	}, [pathname]);

	useEffect(() => {
		document.body.style.overflow = mobileOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileOpen]);

	useEffect(() => {
		if (!mobileOpen) return undefined;
		function onKey(event) {
			if (event.key === "Escape") setMobileOpen(false);
		}
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [mobileOpen]);

	function closeMobile() {
		setMobileOpen(false);
	}

	return (
		<header className="sticky top-0 z-50 border-b border-[#e7eef6] bg-white/95 backdrop-blur">
			<div className="relative mx-auto flex h-[4.7rem] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
				<Link to="/" className="relative z-10 shrink-0 rounded-lg" aria-label="Bergsuite Infotech Pvt Ltd, home">
					<Logo compact />
				</Link>

				<nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
					<NavLink to="/" end className="nav-link">
						Home
					</NavLink>
					<NavLink to="/about" className="nav-link">
						About
					</NavLink>
					<DesktopMenu label="Services" base="/services" links={serviceLinks} indexHref="/services" indexLabel="Explore all services" />
					<DesktopMenu label="Products" base="/products" links={productLinks} indexHref="/products" indexLabel="View all products" />
					<NavLink to="/industries" className="nav-link">
						Industries
					</NavLink>
					<NavLink to="/careers" className="nav-link">
						Careers
					</NavLink>
					<NavLink to="/contact" className="nav-link">
						Contact
					</NavLink>
				</nav>

				<div className="relative z-10 flex items-center gap-2">
					<NavLink to="/quote" className="btn btn-navy px-3 sm:px-5">
						<span className="sm:hidden">Quote</span>
						<span className="hidden sm:inline">Get a Quote</span>
						<ArrowRight className="h-4 w-4" aria-hidden="true" />
					</NavLink>
					<button
						type="button"
						className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d7e1ee] text-[#142033] lg:hidden"
						aria-expanded={mobileOpen}
						aria-controls={menuId}
						aria-label={mobileOpen ? "Close menu" : "Open menu"}
						onClick={() => setMobileOpen((value) => !value)}
					>
						{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</button>
				</div>
			</div>

			{mobileOpen && (
				<div id={menuId} className="max-h-[calc(100vh-4.7rem)] overflow-y-auto border-t border-[#e7eef6] bg-white lg:hidden">
					<nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
						<NavLink to="/" end className="block border-b border-[#e8eef6] py-3 font-bold" onClick={closeMobile}>
							Home
						</NavLink>
						<NavLink to="/about" className="block border-b border-[#e8eef6] py-3 font-bold" onClick={closeMobile}>
							About
						</NavLink>
						<MobileGroup label="Services" links={serviceLinks} indexHref="/services" indexLabel="Explore all services" onNavigate={closeMobile} />
						<MobileGroup label="Products" links={productLinks} indexHref="/products" indexLabel="View all products" onNavigate={closeMobile} />
						<NavLink to="/industries" className="block border-b border-[#e8eef6] py-3 font-bold" onClick={closeMobile}>
							Industries
						</NavLink>
						<NavLink to="/careers" className="block border-b border-[#e8eef6] py-3 font-bold" onClick={closeMobile}>
							Careers
						</NavLink>
						<NavLink to="/contact" className="block border-b border-[#e8eef6] py-3 font-bold" onClick={closeMobile}>
							Contact
						</NavLink>
						<NavLink to="/quote" className="btn btn-navy my-4 w-full" onClick={closeMobile}>
							Get a Quote
							<ArrowRight className="h-4 w-4" aria-hidden="true" />
						</NavLink>
					</nav>
				</div>
			)}
		</header>
	);
}
