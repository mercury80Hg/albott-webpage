import React from "react"
import Slider from "react-slick"

/* these style imports were not in any tutorial or documentation that I could find and they
 solved my problem with React-Slick Carousel */
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'




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

  return (
    <div >
      <Slider {...settings} className="carousel">
      {imgArray.map(x => <div><img className="carousel-image" src={x}></img></div>)}

      
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