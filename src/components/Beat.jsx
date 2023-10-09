import React from "react"
import HeaderSub from "./HeaderSub"
import SimpleSlider from "./SimpleSlider"

/* Beat component is a dynamic container for Image Carousel (slick-slider)
pulling in the data object and rendering the desired images accordingly */
const Beat = ({ data }) => {
	return (
		<div className="content-container" id="about">
			{data.title && <HeaderSub name={data.title} />}
			{data.images && <SimpleSlider imgArray={data.images} />}
			{data.text}
		</div>
	)
}

export default Beat
