import React from "react"
import SimpleSlider from "./SimpleSlider"
import HeaderSub from "./HeaderSub"
import { beautyImg } from "./Images"

function Beauty() {
	return (
		<div className="content-container" id="beauty">
			<HeaderSub title={"beauty"} />
			<SimpleSlider imgArray={beautyImg} />
			<p className="content-paragraph shadowbox">
				Photographs are the greatest betrayal of beauty. A great photographer is
				only trying to find the best possible way to capture a scene or moment,
				and even the best ones will always admit that being there is always
				better. Yet a photo can still be beautiful while it's trying to
				represent something even greater. The photos here <span title="but they are to me">may not be the best, </span>
				but they are markers to memories of the adventure.
			</p>
		</div>
	)
}

export default Beauty
