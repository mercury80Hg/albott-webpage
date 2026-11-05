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

//setting the viewport for the useable space accounting for mobile nav/url bar interference
const vh = window.innerHeight * 0.01
document.documentElement.style.setProperty("--vh", `${vh}px`)

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
