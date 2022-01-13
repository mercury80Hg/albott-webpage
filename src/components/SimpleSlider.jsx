import React from "react"
import Slider from "react-slick"

/* Note for future use: these style imports were not in any tutorials or documentation that I could find and they
 solved my problem with React-Slick Carousel styling*/
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

//memoized progressive image loading optimization based from Niraj M. Rajgor https://codeburst.io/how-to-progressively-load-images-in-react-using-hooks-80c50fd447cd
import ImageLoad from "./ImageLoad"


function SimpleSlider(props) {
  const {imgArray} = props
  let settings = {
    className: "center",
    centerMode: true,
    // adaptiveHeight: true,
    infinite: true,
    centerPadding: "50px",
    // dots: true,
    
    autoplay: true,
    speed: 3000, 
    autoplaySpeed: 4000,
    slidesToShow: 1,
    // slidesToScroll: 1,
    variableWidth: true,
    // vertical: false,

    
  }

  // <ImageLoad className="carousel-image" src={x} placeholder="/images/AEB-logo-plastic.png" alt={x} />

  return (
    <div >
      <Slider {...settings} className="carousel">
      {imgArray.map(x => <div><ImageLoad src={x} placeholder="/images/AEB-logo-plastic.png" alt={x} /></div>)}

      
        {/* <div>
        <img
					className="carousel-image"
					src="images/about/Me_Colum_Dog.JPG"
					alt="me looking at a stray dog under my chair in Cartagena Columbia"
				></img>
         
        </div>
        <div>
        <img
					className="carousel-image"
					src="images/about/Me_DelCoronado.JPG"
					alt=""
				></img>
          
        </div>
        <div>
        <img
					className="carousel-image"
					src="images/about/Me_MXC_Mezcal.JPG"
					alt=""
				></img>
         
        </div>
        <div>
        <img
					className="carousel-image"
					src="images/about/Me_PDX_Beer.JPG"
					alt=""
				></img>
         
        </div>
        <div>
        <img
					className="carousel-image"
					src="images/about/Me_Pink.JPG"
					alt=""
				></img>
        </div> */}
        
      </Slider>
    </div>
  );

}

export default SimpleSlider