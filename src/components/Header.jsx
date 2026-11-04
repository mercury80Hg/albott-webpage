import React, { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import RecruiterModal from "./RecruiterModal"

/* This is the simple top navbar at the top of the Splash page only.

The three nav links are always equal width and fill the row.  A hidden "ruler"
measures the longest label; whenever that word would reach the button padding —
because the window narrowed OR the recruiter button expanded and squeezed the
links — all three swap from their word to a Material icon. */

const PADDING = 20 // px of breathing room we want kept around the nav word

function Header() {
	const linkRef = useRef(null)
	const rulerRef = useRef(null)
	const [compact, setCompact] = useState(false)

	useEffect(() => {
		const link = linkRef.current
		const ruler = rulerRef.current
		if (!link || !ruler) return

		const measure = () => {
			const available = link.clientWidth
			const needed = ruler.offsetWidth + PADDING
			setCompact(needed > available)
		}

		measure()
		// a link's width changes when the window resizes AND when the recruiter
		// button grows/shrinks beside it, so observe the link itself
		const ro = new ResizeObserver(measure)
		ro.observe(link)
		window.addEventListener("resize", measure)
		return () => {
			ro.disconnect()
			window.removeEventListener("resize", measure)
		}
	}, [])

	return (
		<header id="header">
			<div className={`hyperlinks-box${compact ? " nav-compact" : ""}`}>
				<RecruiterModal />
				<Link ref={linkRef} className="hyperlinks" to="/about">
					<span className="nav-icon material-icons">person</span>
					<span className="nav-text">about</span>
				</Link>
				<Link
					className="hyperlinks hyperlinks-contact hyperlinks-navButton-headingSub-contact-splash"
					to="/contact"
				>
					<span className="nav-icon material-icons">mail</span>
					<span className="nav-text">contact</span>
				</Link>
				<Link className="hyperlinks" to="/projects">
					<span className="nav-icon material-icons">code</span>
					<span className="nav-text">projects</span>
				</Link>
				{/* hidden ruler: the longest label, drives the text/icon decision */}
				<span ref={rulerRef} className="nav-ruler" aria-hidden="true">
					projects
				</span>
			</div>
			<h1 className="myname">
				<Link to="/adventure">a</Link>llan{" "}
				<Link className="e" to="/excitement">
					E
				</Link>{" "}
				<Link to="/beauty">b</Link>ot<Link to="/travel">t</Link>
			</h1>
			{/* ///Floating Home Button////
			 I kept this code in case I wanted to switch to single page vertical
			 scroller for mobile.  Currently it does still work actively on the
			 Contacts component/page, but since there is no scrolling that is not
			 noticeable. Once the site is completely finished may consider removing this.*/}

			{/* <Link to="/" class="material-icons floating-btn">
				<span class="material-icons-round floating-btn-icon">home</span>
			</Link> */}
		</header>
	)
}

export default Header
