import React from "react"
import { Link } from "react-router-dom"
import HeaderSub from "./HeaderSub"
import Footer from "./Footer"
import RecruiterLinks from "./RecruiterLinks"
import recruiterProfile from "../data/recruiterProfile"

/* The full, shareable recruiter page at /hire. It reuses the same header
   chrome (logo + styled name + nav) and footer as the other inner pages, and
   reads every field from recruiterProfile — the same source the pop-up uses. */

function Hire() {
	const p = recruiterProfile
	const available = p.availableForHire
	const availabilityText = available
		? p.availabilityLabel.available
		: p.availabilityLabel.unavailable

	return (
		<div className="hire" id="hire">
			<HeaderSub name="hire" />

			<main className="hire-main">
				{/* hero: role title + availability */}
				<section className="hire-hero">
					<span className="hire-role">{p.role}</span>
					<span
						className={`hire-badge ${
							available ? "is-available" : "is-unavailable"
						}`}
					>
						<span className="hire-badge-dot" aria-hidden="true" />
						{availabilityText}
					</span>
					{available && p.availabilityDetail && (
						<span className="hire-badge-detail">
							{p.availabilityDetail}
						</span>
					)}
				</section>

				{/* at-a-glance strip — the 2-second skim */}
				<ul className="hire-glance" aria-label="At a glance">
					<li>
						<span className="hire-glance-k">Location</span>
						<span className="hire-glance-v">{p.location}</span>
					</li>
					<li>
						<span className="hire-glance-k">Work model</span>
						<span className="hire-glance-v">{p.workModel}</span>
					</li>
					<li>
						<span className="hire-glance-k">Level</span>
						<span className="hire-glance-v">{p.seniority}</span>
					</li>
					<li>
						<span className="hire-glance-k">Open to</span>
						<span className="hire-glance-v">
							{p.employmentTypes.join(" · ")}
						</span>
					</li>
				</ul>

				{/* focus / range */}
				<section className="hire-section">
					<h3 className="hire-subhead hire-subhead-blue">
						{p.summaryTitle}
					</h3>
					<p className="hire-lead">{p.tagline}</p>
					<p className="hire-body">{p.summary}</p>
				</section>

				{/* key technologies */}
				<section className="hire-section">
					<h3 className="hire-subhead hire-subhead-green">
						Key technologies
					</h3>
					<ul className="hire-tags">
						{p.keyTech.map((t) => (
							<li key={t} className="hire-tag">
								{t}
							</li>
						))}
					</ul>
				</section>

				{/* why hire me */}
				<section className="hire-section">
					<h3 className="hire-subhead hire-subhead-pink">
						{p.whyHireTitle}
					</h3>
					<ul className="hire-list">
						{p.whyHire.map((w, i) => (
							<li key={i}>{w}</li>
						))}
					</ul>
				</section>

				{/* what I'm looking for */}
				<section className="hire-section">
					<h3 className="hire-subhead hire-subhead-blue">
						{p.whyWorkTitle}
					</h3>
					<p className="hire-body">{p.whyWork}</p>
				</section>

				{/* logistics: work auth + notice period, side by side */}
				<div className="hire-logistics">
					<section className="hire-section hire-logistics-item">
						<h3 className="hire-subhead hire-subhead-green">
							{p.workAuthTitle}
						</h3>
						<p className="hire-body">{p.workAuthorization}</p>
					</section>
					<section className="hire-section hire-logistics-item">
						<h3 className="hire-subhead hire-subhead-green">
							{p.noticeTitle}
						</h3>
						<p className="hire-body">{p.noticePeriod}</p>
					</section>
				</div>

				{/* links */}
				<section className="hire-section">
					<h3 className="hire-subhead hire-subhead-pink">Links</h3>
					<RecruiterLinks />
					<p className="hire-contact-note">
						More ways to reach me on the{" "}
						<Link to="/contact">contact page</Link>.
					</p>
				</section>
			</main>

			<Footer />
		</div>
	)
}

export default Hire
