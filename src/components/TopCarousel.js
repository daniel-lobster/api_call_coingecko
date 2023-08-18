
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function TopCarousel(){

    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 3000,
        centerMode: true,
        accesibility: true,
        arrows:true
      };

    return(
        <section className="home_slider" style={{ position: 'relative', textAlign: 'center', marginTop:"8em" }}>
            <Slider {...settings}>
                <div className="carousel-item active">
                    <img src="/images/TopCarousel/h1.png" className="d-block img-fluid pb-5 vista_lcd lcd_verision" width="100%" alt="..." />
                    
                    <div className="position-absolute text-white custom_slider_text font_family"><b>Zuckerberg & Phelps 3.0 is the beginning of software and hardware breakthroughs.  In this upgrade to V3.0 Zuckerberg & Phelps achieves and sets a tremendous benchmark toward Global Expansion in Mining and Gaming technologies.  We bring the message, products and services of Zuckerberg & Phelps globally.</b></div>
                </div>
                <div className="carousel-item">
                    <img src="/images/TopCarousel/gaming_h2.png" className="d-block img-fluid pb-5 vista_lcd lcd_verision" width="100%" alt="..." />
                    <div className="position-absolute text-white custom_slider_text2 font_family"><b>The new generation Zuckergerg & Phelps i1000 systems come ready with premium licensed versions of the worlds best &amp; advanced game yet  the Microsoft Flight Simulator 2020.Play &amp; Fly in on time and real time conditions using the live Microsoft global servers around the globe.Powered with powerful AMD processor and graphics chip play any advanced games with your Zuckergerg & Phelps i1000 system.</b></div>
                </div>
                <div className="carousel-item">
                    <img src="/images/TopCarousel/mine_h3.png" className="d-block img-fluid pb-5 vista_lcd lcd_verision" width="100%" alt="..." />
                    <div className="position-absolute text-white custom_slider_text3 font_family"><b>Mining is the process of solving complex algorithms to achieve winning blocks competing with like-minded systems and servers all across the globe connected to each other.  Mining is the infrastructure that powers cryptocurrency and supports both the Bitcoin Core and Ethereum Core blockchains.
                        Win cryptocurrency daily by simply powering up and plug &amp; play your Zuckerberg & Phelps anywhere across the Globe and win cryptocurrancy.</b>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/images/TopCarousel/relax_h4.png" className="d-block img-fluid pb-5 vista_lcd lcd_verision" width="100%" alt="..." />
                    <div className="position-absolute text-white custom_slider_text4 font_family"><b>Tranquility and Peace of Mind.   Its all about working less and planning more.   Let the Zuckerberg & Phelps i1000 run processing and graphics power 24/7/365 and while you enjoy the comfort of your home and life, let it earn you real cryptocurrancy.  Cutting edge technology, low cost to operate and easy to get.   This is a product of  Zuckerberg & Phelps TECHNOLOGIES.</b></div>
                </div>
            </Slider>

        </section>
    )
}

export default TopCarousel;