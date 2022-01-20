import React, { useEffect, useState } from "react"
import Slider from "react-slick"

/* Not sure if I followed Ken Wheeler's implementation or not, but he has the best documentation: https://github.com/kenwheeler/slick 
  Note for future use: these style imports were not in any tutorials or documentation that I could find and they
 solved my problem with React-Slick Carousel styling*/
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function SimpleSlider(props) {
	const { imgArray } = props
	const [isLoading, setIsLoading] = useState(true)

	// adaption of preloading images for a more smooth ux. It is slightly faster but at least now has a placeholder for errors. pulled from https://jack72828383883.medium.com/how-to-preload-images-into-cache-in-react-js-ff1642708240
	const cacheImages = async (srcArray) => {
		const promises = await srcArray.map((src) => {
			return new Promise(function (resolve, reject) {
				const img = new Image()
				img.src = src
				img.onload = resolve()
				img.onerror = reject()
			})
		})
		await Promise.all(promises)
		setIsLoading(false)
	}

	useEffect(() => {
		cacheImages(imgArray)
	}, [])

	let settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "50px",
		pauseOnFocus: false,
		pauseOnHover: false,
		speed: 3000,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		touchMove: true,
		variableWidth: true,
		zIndex: 1000,

		// vertical: false,
		// adaptiveHeight: true,
		// slidesToScroll: 1,
		// dots: true,
	}

	return (
		<div>
			{isLoading ? (
				<div className="carousel-image">
					<img src="/images/AEB-logo-plastic.png" alt="personal logo" />
				</div>
			) : (
				<Slider {...settings} className="carousel">
					{imgArray.map((x) => (
						<div>
							<img className="carousel-image" src={x} alt={x}></img>
						</div>
					))}
				</Slider>
			)}
		</div>
	)
}

export default SimpleSlider
