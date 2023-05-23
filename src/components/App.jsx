import React from "react"
import { Routes, Route } from "react-router-dom"

import Splash from "./Splash"
import Beat from "./Beat"
import {
	about,
	adventure,
	excitement,
	beauty,
	travel,
	projects,
	contact,
} from "../constants/BeatContent"

//setting the viewport for the useable space accounting for mobile nav/url bar interference
const vh = window.innerHeight * 0.01
document.documentElement.style.setProperty("--vh", `${vh}px`)

//  TODO: could refactor adventure, excitement, beauty, travel into one like projects since their layout is the same. 
// however currently leaving it so both serve as a display of both.
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
				<Route path="/" element={<Splash />} />
			</Routes>
		</div>
	)
}

export default App
