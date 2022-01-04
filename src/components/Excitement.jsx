import React from "react"
import SimpleSlider from "./Carousel"
import HeaderSub from "./HeaderSub"
import { excitementImg } from "./Images"

function Excitement() {
  return (
    <div className="content-container" id="excitement">
        <HeaderSub title={"excitement"} />
        <SimpleSlider imgArray={excitementImg} />
				<p className="content-paragraph shadowbox">
					I believe that space travel will one day become as common as airline
					travel is today. I’m convinced, however, that the true future of space
					travel does not lie with government agencies — NASA is still obsessed
					with the idea that the primary purpose of the space program is science
					— but real progress will come from private companies competing to
					provide the ultimate adventure ride, and NASA will receive the
					trickle-down benefits.
					{/* Without some danger there isn't excitement. By simply paying attention
					enough you can manage you experience safely through being prepared and
					absorbing the stories of those who have gone before you. For me, I try
					to always keep moving forward and minimize the side and backsteps.
					Having a conversation with my fear has opened up some very fun
					opprotunities.{" "} */}
				</p>
			</div>
  )
}

export default Excitement 

