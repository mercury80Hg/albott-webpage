import React from "react"
import { Routes, Route } from "react-router-dom"

import Splash from "./Splash"
import Beat from "./Beat"
import Hire from "./Hire"
import {
	about,
	adventure,
	excitement,
	beauty,
	travel,
	projects,
	contact,
	privacy,
} from "../constants/BeatContent"

/* --vh: a fallback "1% of the usable viewport height" for browsers that predate
   the native dvh unit. Modern browsers use `100dvh` in the CSS and ignore this;
   here we keep --vh current so older browsers stay correct when the URL/nav bar
   shows or hides and when the device rotates (it was previously set only once at
   load, so it went stale). */
const setVh = () => {
	const vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty("--vh", `${vh}px`)
}
setVh()
window.addEventListener("resize", setVh)
window.addEventListener("orientationchange", setVh)
if (window.visualViewport) {
	window.visualViewport.addEventListener("resize", setVh)
}

function App() {
	return (
		<div className="page">
			<Routes>
				<Route path="about" element={<Beat data={about} />} />
				<Route path="projects" element={<Beat data={projects} />} />
				<Route path="adventure" element={<Beat data={adventure} />} />
				<Route path="excitement" element={<Beat data={excitement} />} />
				<Route path="beauty" element={<Beat data={beauty} />} />
				<Route path="travel" element={<Beat data={travel} />} />

				<Route path="contact" element={<Beat data={contact} />} />
				<Route path="hire" element={<Hire />} />
				<Route path="privacy" element={<Beat data={privacy} />} />
				<Route path="/" element={<Splash />} />
			</Routes>
		</div>
	)
}

export default App
