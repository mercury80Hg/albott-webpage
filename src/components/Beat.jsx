import React from "react"
import HeaderSub from "./HeaderSub"
import SimpleSlider from "./SimpleSlider"

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
