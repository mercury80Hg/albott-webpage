import React from "react"
import { Link } from "react-router-dom"
import recruiterProfile from "../data/recruiterProfile"

/* Shared link row + brand icons used by BOTH the recruiter pop-up
   (RecruiterModal) and the full /hire page (Hire), so they stay in sync.
   Icon fill follows the surrounding text colour. */

export const GitHubIcon = () => (
	<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
		<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
	</svg>
)

export const LinkedInIcon = () => (
	<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
		<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
	</svg>
)

export const CvIcon = () => (
	<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
		<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm0 2 4 4h-4V4zM8 13h8v1.5H8V13zm0 3.5h8V18H8v-1.5zM8 9.5h3V11H8V9.5z" />
	</svg>
)

export const ProjectsIcon = () => (
	<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
		<path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
	</svg>
)

/* onNavigate fires when an internal (router) link is followed — the modal uses
   it to close itself. */
function RecruiterLinks({ onNavigate }) {
	const { links } = recruiterProfile

	return (
		<div className="recruiter-links">
			<a
				className="hyperlink-button"
				href={links.interactiveCv}
				target="_blank"
				rel="noopener noreferrer"
			>
				<CvIcon /> Interactive CV
			</a>
			<a
				className="hyperlink-button"
				href={links.linkedin}
				target="_blank"
				rel="noopener noreferrer"
			>
				<LinkedInIcon /> LinkedIn
			</a>
			<a
				className="hyperlink-button"
				href={links.github}
				target="_blank"
				rel="noopener noreferrer"
			>
				<GitHubIcon /> GitHub
			</a>
			<Link
				className="hyperlink-button"
				to={links.projects}
				onClick={onNavigate}
			>
				<ProjectsIcon /> Projects
			</Link>
		</div>
	)
}

export default RecruiterLinks
