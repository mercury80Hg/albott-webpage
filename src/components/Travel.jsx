import React from "react"
import SimpleSlider from "./Carousel"
import HeaderSub from "./HeaderSub"
import { travelImg } from "./Images"

function Travel() {
  return (
    <div className="content-container" id="travel">
        <HeaderSub title={"travel"} />
        <SimpleSlider imgArray={travelImg} />
				<p className="content-paragraph shadowbox">
					It is for these reasons that I regard the decision last year to shift
					our efforts in space from low to high gear as among the most important
					decisions that will be made during my incumbency in the office of the
					Presidency.
					{/* Having lived on four continents I can say, nothing gives you full apperciation and
					knowledge unless you actually live the culture. Anything else is
					visiting, and while you can appreciate a lot from a visit, living
					there gives you true perspective.{" "} */}
				</p>
			</div>
  )
}

export default Travel 


