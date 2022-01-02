import React from "react"
import SimpleSlider from "./Carousel"
import HeaderSub from "./HeaderSub"
import { beautyImg } from "./Images"

function Beauty() {
  return (
    <div className="content-container" id="beauty">
        <HeaderSub title={"beauty"} />
        <SimpleSlider imgArray={beautyImg} />
				<p className="content-paragraph shadowbox">
					We choose to go to the moon. We choose to go to the moon in this
					decade and do the other things, not because they are easy, but because
					they are hard, because that goal will serve to organize and measure
					the best of our energies and skills, because that challenge is one
					that we are willing to accept, one we are unwilling to postpone, and
					one which we intend to win, and the others, too.
					{/* Of course there's beauty to be found in everything if you look hard
					enough, it is in the eye of the beholder and existing conventions, but
					nothing compares to an in person experience. Finding a soul in the
					strokes of a famous painting never translates when viewing a
					reproduction. Even famous photographers know that their photos are
					quietly telling you that this was the best way to capture a moment
					that is far more beautiful in person. Finally standing in the place
					you have seen numerous images of reveals the injustice of a photo. I
					hope everyone will stop to experience the small beauties around them
					and seek out the larger ones in life.{" "} */}
				</p>
			</div>
  )
}

export default Beauty 

