import React from "react"

import Splash from "./Splash"
import Contact from "./Contact"
// import Footer from "./Footer"
import About from "./About"
import { Routes, Route } from "react-router-dom"

import Adventure from "./Adventure"
import Excitement from "./Excitement"
import Beauty from "./Beauty"
import Travel from "./Travel"
import Projects from "./Projects"
// import ProjectsBlank from "./Projects"

function App() {
	return (
		<div className="page">
			<Routes>
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				{/* <Route path="projects_blank"	element={<ProjectsBlank />} /> */}
				<Route path="projects" element={<Projects />} /> 
				<Route path="adventure" element={<Adventure />} />
				<Route path="excitement" element={<Excitement />} />
				<Route path="beauty" element={<Beauty />} />
				<Route path="travel" element={<Travel />} />
				<Route path="/" element={<Splash />} />
			</Routes>
		</div>
	)
}

export default App
