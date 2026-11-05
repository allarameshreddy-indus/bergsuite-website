import {
	BarChart3,
	Building2,
	Cloud,
	Code2,
	Cpu,
	Factory,
	Gauge,
	GraduationCap,
	HeartPulse,
	Landmark,
	Layers,
	Rocket,
	Settings,
	Smartphone,
	Users,
} from "lucide-react";

export function PartnershipIcon({ className }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.8"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			<path d="M8 13.2 10.2 15.4a2 2 0 0 0 2.8 0L15 13.4" />
			<path d="M8.2 13 5.2 10.4a2 2 0 0 1 0-2.8L7.6 5.2" />
			<path d="M15.8 12.6 18.8 10a2 2 0 0 0 0-2.8L16.4 5.2" />
			<path d="M8 13.2 5.4 16.4" />
			<path d="m16 12.6 2.6 3.2" />
			<path d="M12.8 16.2 15.2 14" />
		</svg>
	);
}

const icons = {
	rocket: Rocket,
	users: Users,
	settings: Settings,
	cloud: Cloud,
	cpu: Cpu,
	chart: BarChart3,
	phone: Smartphone,
	layers: Layers,
	code: Code2,
	education: GraduationCap,
	health: HeartPulse,
	finance: Landmark,
	manufacturing: Factory,
	public: Building2,
	gauge: Gauge,
};

export function Icon({ name, className = "h-6 w-6" }) {
	if (name === "handshake") {
		return <PartnershipIcon className={className} />;
	}
	const Glyph = icons[name] || Layers;
	return <Glyph className={className} aria-hidden="true" />;
}
