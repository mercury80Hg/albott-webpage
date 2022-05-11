import React from "react"
import SimpleSlider from "./SimpleSlider"
import HeaderSub from "./HeaderSub"
import { aboutImg } from "../constants/Images.js"


function About() {
	return (
		<div className="content-container" id="about">
			<HeaderSub title={"about"} />
			<SimpleSlider imgArray={aboutImg} />

			<p className="content-paragraph shadowbox">
				<p>
					Wind in the rigging, a cobra in the rafters, an elephant roars to the
					rising sun. Sleep is taken between the lines when life is lived
					progressively. In this world that everyone rides on, the greatest crime
					is to not experience as much of it as possible.{" "}
					<span style={{ color: "#054eb4" }}>Beauty</span>,{" "}
					<span style={{ color: "#01805c" }}>excitement</span>,{" "}
					<span style={{ color: "#ec008c" }}>adventure</span> and{" "}
					<span style={{ color: "#f0e54bd8" }}>travel</span> aren’t hashtags, they
					are the core of it all. Yes those sentiments are ambiguous but for me
					they comprise the <span style={{ color: "#054eb4" }}>B</span>
					<span style={{ color: "#01805c" }}>E</span>
					<span style={{ color: "#ec008c" }}>A</span>
					<span style={{ color: "#f0e54bd8" }}>T</span> of life, a way to approach
					the world. Or this could just be a bunch of Allan Ipsum and means
					nothing. 
				</p>

				<p>
					For 20 years Allan was a restaurateur managing eateries in many bustling
					corners of the u.s.a. During that time he enjoyed making friends with
					people from all walks of life, honing his personal and professional
					skills.
				</p>
				<p>
					However, it is only when you reach the top of a precipice that you can
					then more easily see you are surrounded by peaks. Having reached a
					plateau in hospitality with a solid set of skills Allan decided to
					search for a mountain with no peak. Software became that endless goal of
					constant learning where one can master something only for it to be
					deprecated shortly after. Technology is ever-changing and feeding off
					new faster programming and New is not every year but every day. The
					endless landscape of software, where the jack-of-all gets farther ahead.
				</p>
				
			</p>
		</div>
	)
}

export default About
