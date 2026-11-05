/* ------------------------------------------------------------------------- *
 * recruiterProfile — single source of truth for everything a recruiter sees.
 *
 * BOTH the /hire page (Hire.jsx) and the recruiter pop-up (RecruiterModal.jsx)
 * read from this one object, so the two never drift apart.
 *
 * Fields tagged  // ADMIN  are the ones meant to be editable from the future
 * admin dashboard (availability, notice period, etc.). For now they live here;
 * wiring a dashboard later just means writing to these fields (or to a small
 * backend that hydrates this shape).
 *
 * Anything written as "[ ... ]" is a placeholder for a real fact only Allan
 * can supply — swap the bracketed text for the real wording.
 * ------------------------------------------------------------------------- */

export const recruiterProfile = {
	name: "Allan Bott",
	role: "Front End Developer",

	/* --- availability (ADMIN-toggle) ------------------------------------- *
	 * `availableForHire` is the single boolean the future dashboard flips; the
	 * badge on the page and in the modal both key off it. */
	availableForHire: true, // ADMIN
	availabilityLabel: {
		// ADMIN — wording shown for each state of the toggle
		available: "Available for work",
		unavailable: "Not currently looking",
	},
	availabilityDetail: "Open to full-time and contract roles", // ADMIN

	/* --- at-a-glance strip ----------------------------------------------- */
	seniority: "Junior–Mid level",
	location: "United Kingdom",
	workModel: "Remote or hybrid",
	employmentTypes: ["Full-time", "Contract"],
	noticePeriod: "[Your notice period — e.g. 2 weeks / available immediately]", // ADMIN
	workAuthorization:
		"[Your UK work authorization — e.g. British citizen, no visa sponsorship required]",

	/* --- short skills / focus blurb (its own small title) ---------------- */
	summaryTitle: "Focus & range",
	summary:
		"Front-end developer building clean, accessible, resilient interfaces in React — and comfortable reaching into the Node/Express services behind them. I pair 20 years of hospitality leadership with modern web engineering, so I ship with real users and real pressure in mind.",

	/* --- Key technologies ------------------------------------------------ */
	keyTech: [
		"JavaScript / TypeScript",
		"React",
		"Node.js & Express",
		"HTML & CSS (responsive, accessible)",
	],

	/* --- Why hire me ----------------------------------------------------- */
	whyHireTitle: "Why hire me",
	whyHire: [
		"Two decades leading hospitality teams — I communicate, stay calm under pressure, and own outcomes.",
		"I care about the details recruiters' clients feel: accessibility, responsive layouts, and interfaces that hold up on real devices.",
		"Fast learner who ships — this site, its interactive CV, and side projects are all built and maintained by me.",
	],

	/* --- Why I'd want to work with you ----------------------------------- */
	whyWorkTitle: "What I'm looking for",
	whyWork:
		"A team that values craftsmanship and clear communication, where I can grow as a front-end engineer on a product people actually use. Remote or hybrid, collaborative, and happy to mentor and be mentored.",

	/* --- logistics ------------------------------------------------------- */
	workAuthTitle: "Work authorization",
	noticeTitle: "Notice period",

	/* --- links ----------------------------------------------------------- */
	links: {
		interactiveCv: "https://resume.allanbott.com",
		linkedin: "https://www.linkedin.com/in/allan-bott/",
		github: "https://github.com/mercury80Hg",
		projects: "/projects",
		contact: "/contact",
	},
}

export default recruiterProfile
