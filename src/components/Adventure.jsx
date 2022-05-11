import React from "react"
import SimpleSlider from "./SimpleSlider"
import HeaderSub from "./HeaderSub"
import { adventureImg } from "../constants/Images.js"

function Adventure() {
	return (
		<div className="content-container" id="adventure">
			<HeaderSub title={"adventure"} />
			<SimpleSlider imgArray={adventureImg} />
			<p className="content-paragraph shadowbox">
				<p>
					<span title="James Stewart, George Bailey - It's a wonderful life.">
					Anchor chains, plane motors and train whistles
					</span>{" "}
					may be the most exciting sounds in the world, but it's the stories they
					tease in our future that make them so. Fear of the unknown gives way to
					the growth of the known. New languages learned, places discovered, foods
					eaten and diseases vanquished. They are all catalogued in the wake of
					your adventure. Failures co-mingle with successes and lessons are
					learned but boredom will always be left behind as long as you're seeking
					the abnormal. Adventure.
				</p>
				
			</p>
		</div>
	)
}

export default Adventure
