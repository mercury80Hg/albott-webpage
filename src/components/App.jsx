import React from "react"
import { Routes, Route } from "react-router-dom"

import Splash from "./Splash"
import Contact from "./Contact"
import About from "./About"

import Adventure from "./Adventure"
import Excitement from "./Excitement"
import Beauty from "./Beauty"
import Travel from "./Travel"
import Projects from "./Projects"


function App() {
	return (
		<div className="page">
			<Routes>
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
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
