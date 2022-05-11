import React from "react"
import SimpleSlider from "./SimpleSlider"
import HeaderSub from "./HeaderSub"
import { excitementImg } from "../constants/Images.js"

function Excitement() {
	return (
		<div className="content-container" id="excitement">
			<HeaderSub title={"excitement"} />
			<SimpleSlider imgArray={excitementImg} />
			<p className="content-paragraph shadowbox">
				<p>
					'Oomph.' What a great word. It's a sound, it's a noun, it's a perfect
					way to be exciting. If you don't have oomph you can always just pretend
					you do on social media, but being exciting should lead to the exciting,
					so why not just have some oomph. Without some danger then how fun can it
					be?
				</p>
				
			</p>
		</div>
	)
}

export default Excitement
