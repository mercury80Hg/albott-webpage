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

/* Years of professional tech experience, computed live from the start date so
   the "Level" ticks up on its own — the admin only ever edits CAREER_START.
   Leans favourably via the trailing "+", and counts a whole year as soon as the
   anniversary month arrives (never shows less than "1+"). */
const CAREER_START = "2024-03-01" // first paid role in tech

function professionalExperienceLabel(startISO = CAREER_START) {
	const start = new Date(startISO)
	const now = new Date()
	let years = now.getFullYear() - start.getFullYear()
	if (now.getMonth() < start.getMonth()) years -= 1 // anniversary not reached
	years = Math.max(1, years)
	return `${years}+ years commercial tech`
}

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
	careerStart: CAREER_START, // ADMIN — your first paid tech role; drives "Level"
	// "Level" value, computed live from careerStart (e.g. "2+ years professional
	// tech development"); read by both the /hire page and the modal
	seniority: professionalExperienceLabel(),
	location: "United Kingdom",
	workModel: "Remote or hybrid",
	employmentTypes: ["Full-time", "Contract"],
	noticePeriod: "Available on short notice", // ADMIN
	workAuthorization:
		"Authorized to work in the UK, USA, and EU — full details in my interactive CV.",

	/* --- short skills / focus blurb (its own small title) ---------------- */
	summaryTitle: "Focus & range",
	// punchy one-line hook shown as the lead on the page + modal
	tagline:
		"React Developer who ships accessible UIs built to withstand real pressure.",
	summary:
		"Backed by a full-stack toolkit (React, Node, Express) and a 20-year career as a leader in high-volume hospitality environments. I pair a deep commitment to resilient web accessibility standards with the battle-tested communication skills required to lead engineering sprints under pressure.",

	/* --- Key technologies ------------------------------------------------ */
	keyTech: [
		"JavaScript / TypeScript",
		"React",
		"Node.js & Express",
		"HTML & CSS",
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
