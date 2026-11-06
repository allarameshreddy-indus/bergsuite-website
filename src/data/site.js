export const company = {
	name: "Kriyzen Technologies",
	short: "Kriyzen",
	tagline: "INNOVATION · TECHNOLOGY · PEOPLE",
	summary:
		"Kriyzen Technologies is a product and consulting company that helps businesses and institutions accelerate growth with AI, Data, Cloud and modern digital solutions.",
};

export const stats = [
	{ value: "4+", label: "Products (Live)", to: "/products", icon: "rocket", tint: "text-[#1d7af0] bg-[#e8f2ff]" },
	{ value: "50+", label: "Professionals", to: "/careers", icon: "users", tint: "text-[#1d7af0] bg-[#e8f2ff]" },
	{ value: "10+", label: "Client Partnerships", to: "/about", icon: "handshake", tint: "text-[#128a4a] bg-[#e7f8ee]" },
	{ value: "5+", label: "Industries Served", to: "/industries", icon: "settings", tint: "text-[#e06a00] bg-[#fff1e4]" },
];

export const services = [
	{
		slug: "application-development",
		name: "Application Development",
		chip: "Application Development",
		chipIcon: "phone",
		icon: "code",
		tint: "text-[#1d7af0] bg-[#e8f2ff]",
		blurb: "Web & mobile solutions, end-to-end product engineering.",
		summary:
			"We design and build the applications people actually work in: web platforms, mobile tools, and the integrations that keep them honest.",
		lede: "Software for the work your teams do every day, from the first release through the ones that follow.",
		outcomes: [
			"Web applications for customers, partners, and internal operations",
			"Mobile apps for people who are not at a desk",
			"APIs and integrations that sit beside the systems you already run",
			"A release rhythm your team can keep after we step back",
		],
		steps: [
			{ title: "Frame the job", body: "Who uses it, what must be true on day one, and which system it has to respect." },
			{ title: "Build in slices", body: "Working software early, reviewed with the people who will live in it." },
			{ title: "Hand over cleanly", body: "Code, runbooks, and a support window so the product does not stall at launch." },
		],
	},
	{
		slug: "ai-data-solutions",
		name: "AI & Data Solutions",
		chip: "AI & ML",
		chipIcon: "cpu",
		icon: "cpu",
		tint: "text-[#6d4aff] bg-[#f1ecff]",
		blurb: "Data engineering, analytics and AI-powered applications.",
		summary:
			"We put AI where it earns its place: on governed data, inside a workflow, with a person still accountable for the decision.",
		lede: "Practical AI and data products. Models, pipelines, and applications your operators can explain.",
		outcomes: [
			"Use cases chosen because they change a decision, not because they demo well",
			"Retrieval and workflow design so answers stay tied to your sources",
			"Evaluation, monitoring, and a clear owner when the model is wrong",
			"Interfaces that show the recommendation and the reason",
		],
		steps: [
			{ title: "Pick a decision", body: "Name the question, the cost of getting it wrong, and the data that already exists." },
			{ title: "Prove it on real records", body: "A narrow pilot against your data, scored before it is scaled." },
			{ title: "Put it in the workflow", body: "The model ships inside an application, with review, audit, and a way to turn it off." },
		],
	},
	{
		slug: "cloud-devops",
		name: "Cloud & DevOps",
		chip: "Cloud & DevOps",
		chipIcon: "cloud",
		icon: "cloud",
		tint: "text-[#128a4a] bg-[#e7f8ee]",
		blurb: "Scalable, secure and cost-optimized cloud solutions.",
		summary:
			"Cloud platforms that are calm to operate: clear environments, repeatable releases, and a bill someone can explain.",
		lede: "Infrastructure, delivery pipelines, and the operating habits that keep a product reliable after the migration slide is done.",
		outcomes: [
			"Landing zones and environments with access that matches the work",
			"CI/CD, infrastructure as code, and releases you can roll back",
			"Observability that pages a person for a reason",
			"Cost and security reviews tied to the architecture, not a yearly PDF",
		],
		steps: [
			{ title: "See what you run", body: "Accounts, workloads, and the gaps between how it is drawn and how it behaves." },
			{ title: "Make a path to production", body: "Pipelines, environments, and guardrails the team will actually use." },
			{ title: "Leave it operable", body: "Dashboards, on-call notes, and a cost view that is not a surprise." },
		],
	},
	{
		slug: "product-engineering",
		name: "Product Engineering",
		chip: "Product Engineering",
		chipIcon: "layers",
		icon: "layers",
		tint: "text-[#e06a00] bg-[#fff1e4]",
		blurb: "Design, build and scale innovative digital products.",
		summary:
			"From a sharp problem to a product in market: discovery, design, engineering, and the first year of learning.",
		lede: "A single team for the life of a product, so strategy and the codebase stay in the same conversation.",
		outcomes: [
			"Discovery that ends in a scope, not a slide archive",
			"Experience design tested with the people who will use it",
			"An architecture that can grow without a rewrite at month six",
			"Measures for adoption, not just uptime",
		],
		steps: [
			{ title: "Decide what not to build", body: "A short list of users, jobs, and the release that would change their week." },
			{ title: "Ship the spine", body: "The smallest product that is real: identity, the core workflow, and a way to learn." },
			{ title: "Scale what is working", body: "Harden, integrate, and staff the next releases against evidence." },
		],
	},
	{
		slug: "data-analytics",
		name: "Data & Analytics",
		chip: "Data & Analytics",
		chipIcon: "chart",
		icon: "chart",
		tint: "text-[#0e7c9b] bg-[#e5f7fb]",
		blurb: "Reporting, models, and governed data your teams can trust.",
		summary:
			"A data foundation leaders can ask questions of: pipelines, models, quality checks, and reports that match the source.",
		lede: "Analytics that survive contact with the finance team. Definitions, lineage, and numbers that reconcile.",
		outcomes: [
			"Source-to-model pipelines with tests, not one-off notebooks",
			"A shared language for the metrics that run the organization",
			"Self-serve reporting for teams who should not wait on a ticket",
			"Quality checks that fail loudly before a board pack does",
		],
		steps: [
			{ title: "Agree the definitions", body: "The ten numbers that matter, who owns them, and which source wins an argument." },
			{ title: "Model them once", body: "A warehouse or lakehouse layer the next project can reuse." },
			{ title: "Open it carefully", body: "Access, documentation, and a cadence for reviewing what drifted." },
		],
	},
	{
		slug: "staffing-consulting",
		name: "Staffing & IT Consulting",
		chip: "Staffing & IT Consulting",
		chipIcon: "users",
		icon: "users",
		tint: "text-[#b45309] bg-[#fff4e0]",
		blurb: "Specialists who join your team and raise the standard of delivery.",
		summary:
			"Engineers, analysts, and consultants who join your delivery, plus advice when you need a direction more than a headcount.",
		lede: "People who can do the work, and a point of view on how the work should be shaped.",
		outcomes: [
			"Practitioners matched to a role you can describe, not a keyword list",
			"Consulting on architecture, delivery, and operating model",
			"A Kriyzen lead who stays accountable when someone is embedded",
			"A path to hand the work back to your own team",
		],
		steps: [
			{ title: "Write the real role", body: "Outcomes, stack, and the decisions this person must be trusted to make." },
			{ title: "Introduce a short list", body: "People we would put on our own products, with the gaps stated plainly." },
			{ title: "Stay in the engagement", body: "Check-ins, a backup, and a clean exit when the mission is done." },
		],
	},
];

export const heroChips = [
	{ slug: "ai-data-solutions", label: "AI & ML", icon: "cpu", place: "lg:left-0 lg:top-[4%]" },
	{ slug: "cloud-devops", label: "Cloud & DevOps", icon: "cloud", place: "lg:left-[1%] lg:top-[38%]" },
	{ slug: "data-analytics", label: "Data & Analytics", icon: "chart", place: "lg:left-0 lg:top-[72%]" },
	{ slug: "application-development", label: "Application Development", icon: "phone", place: "lg:right-0 lg:top-[2%]" },
	{ slug: "product-engineering", label: "Product Engineering", icon: "layers", place: "lg:right-0 lg:top-[36%]" },
	{ slug: "staffing-consulting", label: "Staffing & IT Consulting", icon: "users", place: "lg:right-0 lg:top-[70%]" },
];

export const products = [
	{
		slug: "pulse",
		name: "Kriyzen Pulse",
		eyebrow: "Operations",
		icon: "gauge",
		summary: "A live operating picture for leaders who need demand, service levels, and exceptions without waiting on a monthly pack.",
		lede: "Pulse connects the systems an institution already runs and turns them into the view people use in the morning.",
		audience: "Operations leads, institution heads, and service owners who are tired of reconciling five exports before a meeting.",
		capabilities: [
			"Service levels, queues, and exceptions on one board",
			"Connectors for the operational systems you already have",
			"Alerts when a threshold breaks, with the record behind the number",
			"A history so this week can be compared with the last one honestly",
		],
	},
	{
		slug: "atlas",
		name: "Kriyzen Atlas",
		eyebrow: "Data platform",
		icon: "chart",
		summary: "The governed data layer for ingestion, quality, and access, so analytics and AI start from the same trusted sources.",
		lede: "Atlas is how we stop rebuilding the same pipelines for every project.",
		audience: "Data teams and the business owners who need numbers they can defend.",
		capabilities: [
			"Ingestion jobs with retries, lineage, and a visible owner",
			"Models and metric definitions checked into the platform",
			"Quality tests that block a bad publish",
			"Access that follows the sensitivity of the data, not a shared password",
		],
	},
	{
		slug: "harbor",
		name: "Kriyzen Harbor",
		eyebrow: "Cloud operations",
		icon: "cloud",
		summary: "Releases, reliability, and cloud cost in one place, for teams who have outgrown a pile of consoles.",
		lede: "Harbor is the operating view we wished every cloud program had on week two.",
		audience: "Engineering managers and platform teams responsible for environments, spend, and the path to production.",
		capabilities: [
			"Environment and release status across accounts",
			"A change log tied to the pipeline that shipped it",
			"Reliability signals that point at a service, not a raw metric",
			"Cost grouped the way the organization actually talks about products",
		],
	},
	{
		slug: "forge",
		name: "Kriyzen Forge",
		eyebrow: "Product delivery",
		icon: "layers",
		summary: "The workspace we use with clients to take a product from discovery through release and a clean handover.",
		lede: "Forge keeps decisions, scope, and the release train in one system instead of a trail of documents.",
		audience: "Product and engineering leads running a build with Kriyzen, or adopting the same rhythm on their own.",
		capabilities: [
			"Discovery notes, decisions, and the scope they produced",
			"A release plan the team and the sponsor can both read",
			"Risks and open questions that do not vanish between standups",
			"A handover pack generated from the work, not written the night before",
		],
	},
];

export const industries = [
	{
		slug: "education",
		name: "Education & Institutions",
		icon: "education",
		summary: "Admissions, campus operations, learning platforms, and the data that should connect them.",
		lede: "Schools, universities, and training institutions run on a mix of old systems and new expectations. We help them ship tools students and staff will use.",
		help: [
			"Student and staff journeys that cross more than one department",
			"Operational visibility for admissions, scheduling, and support",
			"Data platforms that can answer a question without a week of exports",
		],
	},
	{
		slug: "healthcare",
		name: "Healthcare",
		icon: "health",
		summary: "Care operations, patient-facing tools, and analytics that respect how clinical work actually happens.",
		lede: "We build around the constraint that matters here: the software cannot get in the way of care, and the data has to be handled with care.",
		help: [
			"Operational dashboards for capacity, follow-up, and service levels",
			"Applications that fit a clinic or hospital workflow instead of fighting it",
			"Analytics with access controls and an audit trail",
		],
	},
	{
		slug: "financial-services",
		name: "Financial Services",
		icon: "finance",
		summary: "Customer platforms, internal controls, and data programs that can stand up to a review.",
		lede: "Banks, lenders, and financial teams need speed without losing the thread of who approved what.",
		help: [
			"Customer and partner applications with a clear audit story",
			"Data models for risk, operations, and management reporting",
			"Cloud platforms with separation of duties designed in",
		],
	},
	{
		slug: "manufacturing",
		name: "Manufacturing",
		icon: "manufacturing",
		summary: "Plant and supply visibility, quality data, and the systems that sit between the floor and the office.",
		lede: "Manufacturing software fails when it ignores the floor. We start from the decision a supervisor has to make on a shift.",
		help: [
			"Visibility across orders, quality, and exceptions",
			"Integrations between plant systems and the tools leadership uses",
			"Analytics that distinguish a trend from a bad sensor",
		],
	},
	{
		slug: "public-sector",
		name: "Public Sector",
		icon: "public",
		summary: "Digital services for institutions that answer to the public, with delivery that can be explained.",
		lede: "Public work has more stakeholders than a typical product. We plan for that, and we still ship.",
		help: [
			"Services designed for residents, staff, and the oversight around them",
			"Data and reporting that can be shared without handing over everything",
			"Delivery plans a committee can follow without freezing the team",
		],
	},
];

export const jobs = [
	{
		slug: "senior-application-engineer",
		title: "Senior Application Engineer",
		team: "Application Development",
		location: "India · Hybrid",
		type: "Full-time",
		summary: "Design and build web platforms with clients, and raise the quality of the code the team leaves behind.",
		responsibilities: [
			"Lead features from a thin spec to production, including the awkward integration parts",
			"Review design and code with an eye on the person who will maintain it",
			"Work directly with a client lead when a tradeoff needs a decision",
		],
		requirements: [
			"Substantial experience shipping web applications used by real operations teams",
			"Comfort with APIs, data modeling, and a modern frontend",
			"Clear writing. A lot of this job is explaining a choice",
		],
	},
	{
		slug: "data-engineer",
		title: "Data Engineer",
		team: "Data & Analytics",
		location: "India · Hybrid",
		type: "Full-time",
		summary: "Build pipelines and models on Kriyzen Atlas and on client platforms, with tests that make the numbers boring.",
		responsibilities: [
			"Own ingestion, modeling, and the checks that protect a published metric",
			"Pair with analysts so a definition in a meeting becomes a definition in the warehouse",
			"Document lineage well enough that a new teammate can follow it",
		],
		requirements: [
			"Experience with a warehouse or lakehouse and a transformation tool",
			"A habit of testing data, not only code",
			"Patience for messy source systems",
		],
	},
	{
		slug: "cloud-devops-engineer",
		title: "Cloud & DevOps Engineer",
		team: "Cloud & DevOps",
		location: "India · Hybrid",
		type: "Full-time",
		summary: "Make releases repeatable and environments understandable, on Harbor and on client clouds.",
		responsibilities: [
			"Build pipelines, infrastructure as code, and the guardrails around them",
			"Improve observability so an incident has a starting point",
			"Watch cost and access as part of the design, not as a later scolding",
		],
		requirements: [
			"Hands-on work with a major public cloud",
			"Experience taking an application from a laptop to a reliable environment",
			"Calm communication when something is down",
		],
	},
	{
		slug: "product-designer",
		title: "Product Designer",
		team: "Product Engineering",
		location: "India · Hybrid",
		type: "Full-time",
		summary: "Shape workflows for institutions and operators, then stay close while they are built.",
		responsibilities: [
			"Run discovery with users who are busy and precise about what wastes their time",
			"Design the flows, states, and content of the product, including the empty and error ones",
			"Work in the engineering tools, not only in a handoff deck",
		],
		requirements: [
			"A portfolio of product work, ideally for tools people use to do a job",
			"Comfort facilitating a working session with non-designers",
			"Care for language, not only layout",
		],
	},
	{
		slug: "ai-engineer",
		title: "AI Engineer",
		team: "AI & Data Solutions",
		location: "India · Hybrid",
		type: "Full-time",
		summary: "Turn a real decision into an evaluated AI feature, then keep it honest after launch.",
		responsibilities: [
			"Design retrieval, prompts, tools, and the human review around a use case",
			"Measure quality on the client's data before anyone calls it done",
			"Ship the feature inside an application, with logging and a way to disable it",
		],
		requirements: [
			"Shipped work with large language models or classical ML in production",
			"Respect for evaluation, privacy, and failure cases",
			"Ability to say when a model is the wrong tool",
		],
	},
	{
		slug: "consulting-manager",
		title: "Consulting Manager",
		team: "Staffing & IT Consulting",
		location: "India · Hybrid",
		type: "Full-time",
		summary: "Run client engagements and the people on them, so delivery stays clear and kind.",
		responsibilities: [
			"Own scope, cadence, and the conversation when a plan needs to change",
			"Support consultants who are embedded with a client",
			"Hire and match people against roles you would be willing to do yourself",
		],
		requirements: [
			"A record of delivering technology work with a client in the room",
			"Judgment about people, not only plans",
			"Writing that a sponsor can read without a translator",
		],
	},
];

export const videoSlides = [
	{
		kicker: "Kriyzen Technologies",
		title: "Innovation, technology, and people.",
		body: "We are a product and consulting company. We build software, and we stay until it is useful.",
		image: "/images/video-stage.jpg",
		imageAlt: "A dark screening room facing a curved display of a blue globe and an orange arc of light",
	},
	{
		kicker: "The work",
		title: "Intelligent solutions for a better tomorrow.",
		body: "AI, data, cloud, and modern applications for businesses and institutions that need the work to hold up on a Tuesday.",
		image: "/images/services-floor.jpg",
		imageAlt: "A studio table where a team reviews work under navy walls and warm light",
	},
	{
		kicker: "Products",
		title: "Four live products, and the teams behind them.",
		body: "Pulse, Atlas, Harbor, and Forge. The same people who build them also deliver with clients.",
		image: "/images/products-lab.jpg",
		imageAlt: "Four dark displays in a lab showing abstract blue dashboards with orange edge light",
	},
	{
		kicker: "The practice",
		title: "A bench you can work with.",
		body: "4+ products live. 50+ professionals. 10+ client partnerships. 5+ industries, from education to public institutions.",
		image: "/images/careers-team.jpg",
		imageAlt: "A hybrid workspace with navy panels, blue daylight, and orange cups on the desks",
	},
	{
		kicker: "Start",
		title: "Tell us what you want to change.",
		body: "A useful first conversation covers the outcome, the constraint, and who the work is for.",
		image: "/images/contact-conversation.jpg",
		imageAlt: "Two people talking in a navy meeting room with blue city light through the glass",
	},
];

const mediaBySlug = {
	"application-development": ["/images/service-applications.jpg", "A product desk with a navy notebook, an orange stylus, and a blank tablet"],
	"ai-data-solutions": ["/images/service-ai.jpg", "Blue glass nodes and orange filaments arranged like a model on a dark table"],
	"cloud-devops": ["/images/service-cloud.jpg", "Navy server cabinets with blue status lights and one warm indicator"],
	"product-engineering": ["/images/service-product.jpg", "A workshop bench with a matte device shell and blue models"],
	"data-analytics": ["/images/service-analytics.jpg", "An analytics wall of abstract blue curves with a single orange highlight"],
	"staffing-consulting": ["/images/service-staffing.jpg", "A small huddle beside a navy glass wall with an orange chair nearby"],
	pulse: ["/images/product-pulse.jpg", "Abstract blue pulse rings and an orange glow on a dark operations board"],
	atlas: ["/images/product-atlas.jpg", "Stacked translucent blue map layers on a navy plinth with an orange contour"],
	harbor: ["/images/product-harbor.jpg", "Receding piers of blue server light in navy fog with an orange beacon"],
	forge: ["/images/product-forge.jpg", "A dark workbench where blue blocks assemble beside orange light"],
	education: ["/images/industry-education.jpg", "A campus courtyard at blue hour with warm light in a library colonnade"],
	healthcare: ["/images/industry-healthcare.jpg", "A quiet hospital corridor in soft blue light with a warm glow ahead"],
	"financial-services": ["/images/industry-finance.jpg", "An after-hours operations floor with blue monitor glow and one orange lamp"],
	manufacturing: ["/images/industry-manufacturing.jpg", "A clean factory floor with cobalt machinery and an orange safety line"],
	"public-sector": ["/images/industry-public.jpg", "A civic stone building at twilight with blue glass doors and warm interior light"],
	"senior-application-engineer": ["/images/role-application-engineer.jpg", "A desk with two monitors showing an abstract blue field and an orange mug"],
	"data-engineer": ["/images/role-data-engineer.jpg", "Blue fiber and stacked glass trays with a warm orange connector"],
	"cloud-devops-engineer": ["/images/role-cloud-engineer.jpg", "A person from behind beside an open rack of blue equipment holding an orange cable"],
	"product-designer": ["/images/role-designer.jpg", "A design table with abstract paper shapes, blue pencils, and an orange swatch"],
	"ai-engineer": ["/images/role-ai-engineer.jpg", "A sculpture of blue light threads and one orange node on a dark desk"],
	"consulting-manager": ["/images/role-consulting-manager.jpg", "A person walking a navy corridor past glass rooms lit blue, with one orange doorway"],
};

const sectionBySlug = {
	"application-development": ["/images/section-applications.jpg", "Two engineers reviewing a blocky mobile layout on a monitor, with a matching phone and an orange keyboard"],
	"ai-data-solutions": ["/images/section-ai.jpg", "A researcher beside a curved screen of blue particle streams, adjusting a glass-and-orange node model"],
	"cloud-devops": ["/images/section-cloud.jpg", "Two engineers walking a server aisle of blue lights, one holding a laptop, with an orange cable coiled on a cart"],
	"product-engineering": ["/images/section-product.jpg", "Three people reviewing navy and white device mockups on a board, with one orange prototype and an orange stool"],
	"data-analytics": ["/images/section-analytics.jpg", "An analyst at a white desk facing blue bars, a color heatmap, and an orange trend line"],
	"staffing-consulting": ["/images/section-staffing.jpg", "Two people talking across a round white table in orange chairs against a navy wall"],
};

for (const item of [...services, ...products, ...industries, ...jobs]) {
	const media = mediaBySlug[item.slug];
	if (media) {
		item.image = media[0];
		item.imageAlt = media[1];
	}
	const section = sectionBySlug[item.slug];
	if (section) {
		item.sectionImage = section[0];
		item.sectionImageAlt = section[1];
	}
}

export const pageImages = {
	homeHero: ["/images/home-hero.jpg", "A dark operations room and a luminous globe washed in blue and orange light"],
	about: ["/images/about-studio.jpg", "A calm product studio with navy walls, a long table, and one orange lamp"],
	services: ["/images/services-floor.jpg", "A team around a studio table under navy walls and warm light"],
	products: ["/images/products-lab.jpg", "A product lab with dark displays and orange edge lighting"],
	industries: ["/images/industries-city.jpg", "A dusk skyline mixing campus, care, factory, and civic buildings"],
	careers: ["/images/careers-team.jpg", "A hybrid workspace with navy panels, daylight, and orange cups"],
	contact: ["/images/contact-conversation.jpg", "A quiet conversation in a navy meeting room"],
	quote: ["/images/quote-planning.jpg", "A planning table with sketches, a navy folder, and an orange pencil"],
	video: ["/images/video-stage.jpg", "A screening room facing an abstract blue and orange frame"],
	aboutPractice: ["/images/about-practice.jpg", "Three colleagues standing over printed sketches in a sunlit navy studio, one holding an orange cup"],
	servicesOverview: ["/images/services-overview.jpg", "A mezzanine view of an engineering floor with separate desks, an orange lamp, and a glass meeting room"],
	platform: ["/images/section-platform.jpg", "A long control desk and abstract blue topology on dark glass"],
	institution: ["/images/section-institution.jpg", "An evening courtyard of glass and stone with blue reflections and orange lanterns"],
	hiring: ["/images/section-hiring.jpg", "A hiring conversation across a navy table in blue daylight"],
};

export const quoteServices = [
	{ value: "", label: "Select a service" },
	...services.map((service) => ({ value: service.slug, label: service.name })),
	{ value: "not-sure", label: "Not sure yet" },
];

export const quoteProducts = [
	{ value: "", label: "No specific product" },
	...products.map((product) => ({ value: product.slug, label: product.name })),
];

export const timelines = [
	{ value: "", label: "Select a timeline" },
	{ value: "exploring", label: "Still exploring" },
	{ value: "this-quarter", label: "This quarter" },
	{ value: "next-quarter", label: "Next quarter" },
	{ value: "in-delivery", label: "Already in delivery" },
];

export const budgets = [
	{ value: "", label: "Select a range" },
	{ value: "pilot", label: "A focused pilot" },
	{ value: "release", label: "A single product release" },
	{ value: "program", label: "A multi-team program" },
	{ value: "discuss", label: "Prefer to discuss" },
];

export function findBySlug(list, slug) {
	return list.find((item) => item.slug === slug) ?? null;
}

export function servicePath(slug) {
	return `/services/${slug}`;
}

export function productPath(slug) {
	return `/products/${slug}`;
}

export function industryPath(slug) {
	return `/industries/${slug}`;
}

export function jobPath(slug) {
	return `/careers/${slug}`;
}
