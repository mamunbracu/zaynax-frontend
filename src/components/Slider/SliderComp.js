import React, { Fragment } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SliderComp.css'
const SliderComp = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear"
      };
    return (
        <Fragment>
            <div className="container slideshow-item">
                <h2 className="mt-5 mb-3 text-center">
                LATEST BLOGS
                </h2>
            <h6 className="mb-3 text-center">This is a place devoted to giving you deeper insight into the news, </h6>
            <h6 className="mb-5 text-center">trends, people and technology behind Bing.
            </h6>
        <Slider {...settings}>
          <div>
          <div className="position-class">
              <div className="">
              <h5>News</h5>
              </div>
           <img src="/assets/Hair-Care.png" alt=""/>
           </div>
          </div>
          <div className="position-class">
              <div className="">
              <h5>Health</h5>
              </div>
           <img src="/assets/26801830821918.png" alt=""/>
          </div>
          <div>
          <div className="position-class">
              <div className="">
              <h5>Fashion</h5>
              </div>
             
           <img src="/assets/26824312324126.png" alt=""/>
           </div>
          </div>
          <div>
          <div className="position-class">
              <div className="">
              <h5>Health</h5>
              </div>
           <img src="/assets/Hair-Care.png" alt=""/>
           </div>
          </div>
          <div>
          <div className="position-class">
              <div className="">
              <h5>Health</h5>
              </div>
           <img src="/assets/Image 117.png" alt=""/>
          </div>
          </div>
          <div>
            
          </div>
        </Slider>
      </div>
            
        </Fragment>
    )
}

export default SliderComp
