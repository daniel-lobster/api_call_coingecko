import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function OtherCurrencies(){

    const settings = {
        dots: false,
        infinite: true,
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
        <section id="about">
            <div className="container">
                <h1 className="text-center text-capitalize mt-5 font_family" style={{ color: '#439cd6'}}><b>CURRENCIES</b></h1>
                <div className="row">
                    <div className="col-8 mx-auto mt-5">
                        <p className="text-justify font_family" >Zuckerberg & Phelps also works with other crypto currencies outside bitcoin and ethereum. All of the crypto currencies below support smart contracts and we can help our clients deploy their decentralized applications supporting both front-end and back-end.</p>
                    </div>
                </div>
                <div id="carouselExampleSlidesOnlyteam" className="carousel slide fixheight_team" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <Slider {...settings}>
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">

                                            <img src="images/Executive_Team/tether.jpg"  className="d-block img-fluid mt-5" alt="..."/>

                                        </div>
                                        <div className="col-md-6">
                                            <img src="images/Executive_Team/cardano.jpg"   className="d-block img-fluid mt-5" alt="..." />

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img  src="images/Executive_Team/solana.jpg"  className="d-block img-fluid mt-5" alt="..."/>

                                        </div>
                                        <div className="col-md-6">
                                            <img src="images/Executive_Team/dogecoin.jpg"  className="d-block img-fluid mt-5" alt="..."/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--         3rd slide          --> */}
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">

                                            <img  src="images/Executive_Team/usdc.jpg" className="d-block img-fluid mt-5" alt="..."/>

                                        </div>
                                        <div className="col-md-6">

                                            <img src="images/Executive_Team/avalanche.jpg" className="d-block img-fluid mt-5" alt="..."/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--         4rd slide          --> */}
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src="images/Executive_Team/shiba.jpg" className="d-block img-fluid mt-5" alt="..."/>

                                        </div>
                                        <div className="col-md-6">
                                            <img src="images/Executive_Team/bnb.jpg" className="d-block img-fluid mt-5" alt="..."/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="row text_hidde">
                    <div className="col-8 mx-auto mt-3">
                        <h3 className="text-justify text-center font_family mt-5 mb-5" > SMART CONTRACTS ARE THE FUTURE OF BLOCKCHAIN</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OtherCurrencies;