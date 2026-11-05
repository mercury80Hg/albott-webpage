import React, { useState } from "react"
import { Link } from "react-router-dom"

/* Navbar for every page except the Splash. On desktop the four links sit in the
   stacked box on the right (unchanged). On mobile they collapse into an animated
   hamburger (three bars that morph into an X) to the left of the page title; it
   expands into a bordered menu that covers the title and re-shows it beside the
   X. The hamburger, title and nav dots share one evenly-spaced row (which is
   display:contents on desktop, so the desktop header stays a flat row). */

const NAV_LINKS = [
	{ to: "/about", label: "about" },
	{
		to: "/contact",
		label: "contact",
		cls: "hyperlinks-navButton-headingSub-contact",
	},
	{ to: "/projects", label: "projects" },
	{ to: "/hire", label: "hire", cls: "hyperlinks-navButton-headingSub-hire" },
]

function HeaderSub({ name }) {
	const [menuOpen, setMenuOpen] = useState(false)
	const style = `content-heading ${name}-text`

	return (
		<div className="headerSub-box">
			<Link to="/">
				<img
					className="headerSub-logo"
					src="images/AEB-logo-final.png"
					alt="logo: green winged letter B in front of a pink and blue pyramid in front of a yellow circle"
				/>
			</Link>

			<h1 className="myname myname-headerSub">
				<Link to="/adventure">a</Link>llan{" "}
				<Link className="e" to="/excitement">
					E
				</Link>{" "}
				<Link to="/beauty">b</Link>ot<Link to="/travel">t</Link>
			</h1>

			{/* row 2 on mobile: hamburger · page title · nav dots, evenly spaced.
			    display:contents on desktop so these stay flat in the header. */}
			<div className="headerSub-nav-row">
				{/* mobile-only animated hamburger; hidden on desktop */}
				<div className={`nav-hamburger-wrap${menuOpen ? " is-open" : ""}`}>
					<div className="nav-hamburger-panel">
						<div className="nav-hamburger-top">
							<button
								type="button"
								className="nav-hamburger"
								aria-label={menuOpen ? "Close menu" : "Open menu"}
								aria-expanded={menuOpen}
								aria-controls="headerSub-mobile-menu"
								onClick={() => setMenuOpen((o) => !o)}
							>
								<span className="nav-hamburger-bar" />
								<span className="nav-hamburger-bar" />
								<span className="nav-hamburger-bar" />
							</button>
							{/* the page title, re-shown inside the box when open;
							    the `${name}-text` class gives it the same colour
							    background as the real title box it covers */}
							<span
								className={`nav-hamburger-page ${name}-text`}
								aria-hidden="true"
							>
								{name}
							</span>
						</div>
						<nav
							id="headerSub-mobile-menu"
							className="nav-hamburger-menu"
							aria-hidden={!menuOpen}
						>
							{NAV_LINKS.map((l) => (
								<Link
									key={l.to}
									className="nav-hamburger-link"
									to={l.to}
									tabIndex={menuOpen ? 0 : -1}
									onClick={() => setMenuOpen(false)}
								>
									{l.label}
								</Link>
							))}
						</nav>
					</div>
				</div>

				<h2 className={style}>{name}</h2>

				{/* These dot boxes are the colored boxes from the Splash page styled
				down to dots to reuse their code; they link to their pages. */}
				<div className="dot-box">
					<Link
						id="nav-dot"
						className="spl_bx-rBottom"
						to="/beauty"
						title="beauty"
					></Link>
					<Link
						id="nav-dot"
						className="spl_bx-rTop"
						to="/excitement"
						title="excitement"
					></Link>
					<Link
						id="nav-dot"
						className="splash-box-left"
						to="/adventure"
						title="adventure"
					></Link>
					<Link
						id="nav-dot"
						className="splash-box-bottom"
						to="/travel"
						title="travel"
					></Link>
				</div>
			</div>

			{/* desktop stacked nav (hidden on mobile, replaced by the hamburger) */}
			<div className="hyperlinks-headerSub">
				{NAV_LINKS.map((l) => (
					<Link
						key={l.to}
						className={`hyperlinks-navButton-headingSub${
							l.cls ? " " + l.cls : ""
						}`}
						to={l.to}
					>
						{l.label}
					</Link>
				))}
			</div>
		</div>
	)
}

export default HeaderSub
