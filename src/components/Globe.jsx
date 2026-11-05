const LAND = [
	[[-168, 71], [-140, 70], [-105, 73], [-88, 74], [-70, 68], [-64, 58], [-70, 47], [-74, 40], [-81, 31], [-97, 26], [-106, 22], [-112, 26], [-120, 34], [-125, 48], [-140, 60], [-166, 66], [-168, 71]],
	[[-73, 76], [-60, 82], [-40, 82], [-22, 76], [-44, 68], [-62, 66], [-73, 76]],
	[[-80, 10], [-70, 12], [-52, 5], [-35, -5], [-39, -16], [-48, -28], [-62, -40], [-72, -50], [-74, -40], [-76, -16], [-80, 2], [-80, 10]],
	[[-9, 37], [-9, 43], [-2, 44], [-5, 51], [-4, 58], [5, 62], [8, 56], [12, 55], [18, 60], [26, 66], [28, 70], [20, 70], [12, 66], [10, 58], [12, 50], [16, 46], [22, 40], [28, 41], [18, 40], [10, 38], [3, 42], [-6, 36], [-9, 37]],
	[[-8, 54], [-5, 58], [-2, 59], [1, 53], [1, 51], [-5, 50], [-8, 54]],
	[[-17, 15], [-16, 22], [-8, 33], [0, 36], [10, 37], [25, 32], [32, 31], [43, 12], [51, 11], [42, -2], [40, -16], [32, -28], [19, -35], [16, -28], [12, -16], [13, -5], [9, 4], [4, 6], [-6, 5], [-16, 12], [-17, 15]],
	[[43, -12], [50, -15], [48, -25], [44, -25], [43, -16], [43, -12]],
	[[32, 36], [44, 40], [54, 48], [66, 55], [80, 55], [100, 55], [120, 54], [140, 55], [145, 48], [136, 44], [128, 34], [122, 30], [118, 23], [108, 14], [104, 2], [100, 13], [98, 22], [88, 28], [74, 32], [60, 36], [48, 30], [40, 32], [32, 36]],
	[[36, 30], [43, 28], [48, 24], [55, 26], [57, 24], [52, 16], [44, 13], [42, 18], [36, 28], [36, 30]],
	[[96, 6], [104, 2], [108, 8], [106, 14], [100, 16], [98, 10], [96, 6]],
	[[114, -22], [128, -14], [142, -11], [146, -18], [153, -28], [150, -38], [140, -38], [130, -34], [115, -34], [114, -26], [114, -22]],
	[[130, 32], [136, 34], [140, 36], [142, 42], [145, 43], [141, 45], [138, 38], [134, 34], [130, 32]],
	[[172, -41], [175, -37], [178, -38], [178, -42], [174, -46], [168, -46], [167, -45], [172, -41]],
];

const INDIA = [
	[68.4, 23.6], [69.2, 22.4], [70.8, 20.8], [72.6, 19.1], [72.9, 17.2], [73.4, 15.4], [74.2, 13.2], [75.4, 11.4], [76.3, 9.6], [77.2, 8.1], [78.3, 8.6], [79.4, 10.2], [80.7, 13.1], [80.5, 15.5], [81.8, 16.6], [83.4, 17.8], [85.4, 19.6], [87.2, 21.4], [88.5, 22.3], [89.0, 25.2], [86.2, 26.4], [82.4, 26.8], [79.2, 28.4], [77.2, 31.0], [75.2, 32.1], [73.8, 29.6], [72.2, 27.2], [70.4, 25.2], [69.0, 24.2], [68.4, 23.6],
];

const SRI_LANKA = [
	[79.7, 9.6], [80.2, 8.6], [80.4, 6.6], [81.4, 6], [81.8, 7.2], [81.4, 8.6], [80.4, 9.7], [79.7, 9.6],
];

const CITIES = [
	[77.2, 28.6],
	[72.8, 19.1],
	[77.6, 13],
	[78.5, 17.4],
	[80.3, 13.1],
	[88.4, 22.6],
];

function inside(lon, lat, poly) {
	let hit = false;
	for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
		const [xi, yi] = poly[i];
		const [xj, yj] = poly[j];
		const crosses = yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi;
		if (crosses) hit = !hit;
	}
	return hit;
}

function onLand(lon, lat) {
	return LAND.some((poly) => inside(lon, lat, poly));
}

function inIndia(lon, lat) {
	return inside(lon, lat, INDIA) || inside(lon, lat, SRI_LANKA);
}

function project(lat, lon) {
	const φ = (lat * Math.PI) / 180;
	const λ = (lon * Math.PI) / 180;
	const φ0 = (18 * Math.PI) / 180;
	const λ0 = (78 * Math.PI) / 180;
	const cosc = Math.sin(φ0) * Math.sin(φ) + Math.cos(φ0) * Math.cos(φ) * Math.cos(λ - λ0);
	const x = Math.cos(φ) * Math.sin(λ - λ0);
	const y = Math.cos(φ0) * Math.sin(φ) - Math.sin(φ0) * Math.cos(φ) * Math.cos(λ - λ0);
	return { x, y, z: cosc };
}

function collectDots() {
	const dots = [];
	for (let lat = -70; lat <= 74; lat += 3.4) {
		const lonStep = 3.4 / Math.max(0.42, Math.cos((lat * Math.PI) / 180));
		for (let lon = -180; lon < 180; lon += lonStep) {
			const point = project(lat, lon);
			if (point.z < 0.05) continue;
			const india = inIndia(lon, lat);
			const land = india || onLand(lon, lat);
			if (!land && (Math.abs(lat) % 7 > 3 || Math.abs(lon) % 8 > 4)) continue;
			dots.push({ ...point, kind: india ? "india" : land ? "land" : "sea" });
		}
	}
	for (let lat = 7; lat <= 33; lat += 1.7) {
		for (let lon = 68; lon <= 90; lon += 1.7) {
			if (!inIndia(lon, lat)) continue;
			const point = project(lat, lon);
			if (point.z < 0.08) continue;
			dots.push({ ...point, kind: "india" });
		}
	}
	const cities = CITIES.map(([lon, lat]) => ({ ...project(lat, lon), kind: "city" })).filter((dot) => dot.z > 0.1);
	return { dots, cities };
}

const { dots, cities } = collectDots();
const CX = 320;
const CY = 308;
const R = 214;

function place(point) {
	return [CX + point.x * R, CY - point.y * R];
}

export default function Globe() {
	return (
		<svg viewBox="0 0 640 640" className="h-auto w-full" aria-hidden="true">
			<defs>
				<radialGradient id="sphereFill" cx="38%" cy="32%" r="70%">
					<stop offset="0%" stopColor="#1d5cb8" />
					<stop offset="42%" stopColor="#0c3478" />
					<stop offset="100%" stopColor="#071433" />
				</radialGradient>
				<radialGradient id="limb" cx="50%" cy="50%" r="50%">
					<stop offset="78%" stopColor="rgba(90,170,255,0)" />
					<stop offset="100%" stopColor="rgba(120,190,255,0.45)" />
				</radialGradient>
				<filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
					<feGaussianBlur stdDeviation="6" result="blur" />
					<feMerge>
						<feMergeNode in="blur" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
				<linearGradient id="arcBlue" x1="0" y1="1" x2="1" y2="0">
					<stop stopColor="#1a6dff" />
					<stop offset="1" stopColor="#7ad7ff" />
				</linearGradient>
				<linearGradient id="arcOrange" x1="0" y1="0" x2="1" y2="1">
					<stop stopColor="#ffb020" />
					<stop offset="1" stopColor="#ff6a00" />
				</linearGradient>
			</defs>

			<ellipse cx="330" cy="470" rx="180" ry="36" fill="rgba(80,160,255,0.18)" />
			<circle cx={CX} cy={CY} r={R + 18} fill="rgba(40,110,220,0.16)" />
			<circle cx={CX} cy={CY} r={R} fill="url(#sphereFill)" />
			<circle cx={CX} cy={CY} r={R} fill="url(#limb)" />

			{dots.filter((dot) => dot.kind !== "india").map((dot, index) => {
				const [x, y] = place(dot);
				const radius = dot.kind === "land" ? 1.45 + dot.z * 0.85 : 0.7;
				const fill = dot.kind === "land" ? "#f4fbff" : "#7eb6ef";
				const opacity = dot.kind === "sea" ? 0.22 + dot.z * 0.2 : 0.55 + dot.z * 0.45;
				return <circle key={index} cx={x} cy={y} r={radius} fill={fill} opacity={opacity} />;
			})}
			<g filter="url(#softGlow)">
				{dots.filter((dot) => dot.kind === "india").map((dot, index) => {
					const [x, y] = place(dot);
					return <circle key={`in-${index}`} cx={x} cy={y} r={2.8} fill="#ff8a1a" opacity={0.75 + dot.z * 0.25} />;
				})}
			</g>
			{cities.map((city, index) => {
				const [x, y] = place(city);
				return <circle key={`city-${index}`} cx={x} cy={y} r="3.4" fill="#fff4e5" stroke="#ff7a18" strokeWidth="1.4" />;
			})}

			<g fill="none" strokeLinecap="round" filter="url(#softGlow)">
				<path d="M150 455c70 78 250 92 390-20" stroke="url(#arcBlue)" strokeWidth="16" />
				<path d="M188 478c78 58 230 52 340-78" stroke="url(#arcOrange)" strokeWidth="13" />
			</g>
			<circle cx="348" cy="512" r="10" fill="#fff" opacity="0.9" />
			<circle cx="348" cy="512" r="22" fill="#ffb15a" opacity="0.35" />
			<circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(170,214,255,0.45)" strokeWidth="1.5" />
		</svg>
	);
}
