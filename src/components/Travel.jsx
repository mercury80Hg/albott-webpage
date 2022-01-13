import React from "react"
import SimpleSlider from "./SimpleSlider"
import HeaderSub from "./HeaderSub"
import { travelImg } from "./Images"

function Travel() {
	return (
		<div className="content-container" id="travel">
			<HeaderSub title={"travel"} />
			<SimpleSlider imgArray={travelImg} />
			<p className="content-paragraph shadowbox">
				Blood, sweat and tears don't have to mean toiling, but they are probably
				the makings of a good story, a story you could never have told without
				some wanderlust itches being scratched. It's a great comedy that the
				world is so large and our lives are so short and it's an even greater
				tragedy to not have experienced as much of it as possible. An adventure
				never happens standing still.
			</p>
		</div>
	)
}

export default Travel
