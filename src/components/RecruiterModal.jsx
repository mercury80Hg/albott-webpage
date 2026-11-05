import React, { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Link } from "react-router-dom"
import RecruiterLinks from "./RecruiterLinks"
import recruiterProfile from "../data/recruiterProfile"

/* A "for recruiters" pop-up: a quick hit with a short pitch, key tech and the
   links out — then a link to the full /hire page for everything else. All copy
   comes from recruiterProfile, the same source the /hire page reads. */

function RecruiterModal() {
	const [open, setOpen] = useState(false)
	const p = recruiterProfile
	const available = p.availableForHire
	const availabilityText = available
		? p.availabilityLabel.available
		: p.availabilityLabel.unavailable

	// close the modal when Escape is pressed
	useEffect(() => {
		if (!open) return
		const onKey = (e) => e.key === "Escape" && setOpen(false)
		window.addEventListener("keydown", onKey)
		return () => window.removeEventListener("keydown", onKey)
	}, [open])

	return (
		<>
			<button
				type="button"
				className="recruiter-btn"
				onClick={() => setOpen(true)}
				aria-label="For recruiters"
			>
				<span className="recruiter-label">recruiter</span>
				{/* mobile-only resting state: the word animates away and hands off
				    to this briefcase icon (hidden on desktop via CSS) */}
				<span className="material-icons recruiter-icon" aria-hidden="true">
					work
				</span>
			</button>

			{open &&
				createPortal(
					<div
						className="recruiter-overlay"
						onClick={() => setOpen(false)}
						role="dialog"
						aria-modal="true"
						aria-label="Information for recruiters"
					>
						<div
							className="recruiter-modal shadowbox"
							onClick={(e) => e.stopPropagation()}
						>
							<button
								type="button"
								className="recruiter-close"
								onClick={() => setOpen(false)}
								aria-label="Close"
							>
								×
							</button>

							<div className="recruiter-head">
								<h2 className="recruiter-title">{p.name}</h2>
								<span
									className={`hire-badge ${
										available ? "is-available" : "is-unavailable"
									}`}
								>
									<span
										className="hire-badge-dot"
										aria-hidden="true"
									/>
									{availabilityText}
								</span>
							</div>
							<p className="recruiter-role">{p.role}</p>

							<p className="recruiter-tagline">{p.summary}</p>

							<h3 className="recruiter-subhead">Key technologies</h3>
							<ul className="recruiter-tech">
								{p.keyTech.map((t) => (
									<li key={t}>{t}</li>
								))}
							</ul>

							<RecruiterLinks onNavigate={() => setOpen(false)} />

							<Link
								className="recruiter-fullpage"
								to="/hire"
								onClick={() => setOpen(false)}
							>
								See the full recruiter page →
							</Link>
						</div>
					</div>,
					document.body
				)}
		</>
	)
}

export default RecruiterModal
