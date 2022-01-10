import React from "react"
import SimpleSlider from "./SimpleSlider"
import HeaderSub from "./HeaderSub"
import { adventureImg } from "./Images"

function Adventure() {
  return (
    <div className="content-container" id="adventure">
        <HeaderSub title={"adventure"}/>
        <SimpleSlider imgArray={adventureImg} />
				<p className="content-paragraph shadowbox">
					There is no strife, no prejudice, no national conflict in outer space
					as yet. Its hazards are hostile to us all. Its conquest deserves the
					best of all mankind, and its opportunity for peaceful cooperation may
					never come again. But why, some say, the moon? Why choose this as our
					goal? And they may well ask why climb the highest mountain? Why, 35
					years ago, fly the Atlantic? Why does Rice play Texas?
					{/* Beauty, Adventure, Travel, and Excitement aren't just clichés. They
					all represent pieces of the experience of life that I try to seek out
					in the things I do. All the photos on this site are from the many
					adventures and places I've lived. With such a short life and large
					planet it seems a shame to not experience as much of it as you can.
					When we meet in person ask me about any photo and I'm sure I have some
					fun and interesting stories to go with it.{" "} */}
				</p>
			</div>
  )
}

export default Adventure 