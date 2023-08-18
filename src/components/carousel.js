import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Carousel (){
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 1500,
      centerMode: true
    };
    return (
      <div>
        <Slider {...settings}>
            <div className="slide" ><img style={{height:"15em"}} src="images/carousel/total_customer.png"/></div>
            <div className="slide" ><img style={{height:"15em"}} src="images/carousel/vista_total_product.png"/></div>
            <div className="slide" ><img style={{height:"15em"}}src="images/carousel/transection.png"/></div>
            <div className="slide" ><img  style={{height:"15em"}} src="images/carousel/vista_Total_coin.png"/></div>

        </Slider>
      </div>
    );
  }
