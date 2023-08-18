import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 4000,
        arrows:true
    };

    const thumbnail = {
        borderRadius: "50%",
        height: "10em"
        
    }

    const testimonial = {
        
    }

    return(

        <section className="mt-5" style={{backgroundImage: `url('images/Testimonials/testimonial.png')`, height : "30em"}}>
            <h1 className="text-center text-capitalize mt-5 font_family" style={{ color: '#439cd6' }}><b>TESTIMONIALS</b></h1>
            <div className="demo mt-5">
                        <div className="col-md-offset-2 col-md-10 mx-auto d-flex justify-content-center" >
                            <div style={{width : "50em"}}>
                                <Slider {...settings}>
                                    <div className="testimonial">
                                        <p className="description" style={testimonial}>
                                            First and foremost, their commitment to security is unparalleled. With the growing concerns surrounding online safety, I am relieved to know that Zuckerberg & Phelps goes above and beyond to ensure the protection of my digital assets. Their state-of-the-art encryption methods and multi-layered security protocols provide me with peace of mind, allowing me to transact and trade with confidence.
                                        </p>
                                        <div className= "d-flex align-items-center justify-content-center">
                                            <div style={{width: "15em"}}>
                                                <h3 className="title" style={{color: "#439cd6"}}>Sophia Ramirez</h3>
                                                <span className="post">Texas</span>
                                            </div>
                                            <img src="images/Testimonials/girl.png" style={thumbnail}/>
                                        </div>
                                    </div>

                                    <div className="testimonial">
                                        <p className="description " style={testimonial}>
                                            What truly sets Zuckerberg & Phelps apart is their commitment to customer support. Whenever I've had a question or concern, their responsive and knowledgeable support team has been there to assist me promptly. It's evident that they prioritize customer satisfaction and are dedicated to helping users make the most of their crypto journey.
                                        </p>
                                        <div className= "d-flex align-items-center justify-content-center">
                                            <div style={{width: "15em"}}>
                                                <h3 className="title" style={{color: "#439cd6"}}>Amelia Rothschild</h3>
                                                <span className="post">Illinois</span>
                                            </div>
                                            <img src="images/Testimonials/woman.jpg" style={thumbnail}/>
                                        </div>
                                    </div>

                                    <div className="testimonial">
                                        <p className="description" style={testimonial}>
                                            The range of cryptocurrencies offered on their platform is great. Whether I'm looking to invest in well-established coins or explore emerging tokens, Zuckerberg & Phelps provides a diverse selection that caters to all kinds of interests and investment strategies.

                                            Additionally, their educational resources have been a game-changer for me. The crypto space can be overwhelming, especially for newcomers, but Zuckerberg & Phelps equips its users with a plethora of educational materials, including articles, tutorials, and webinars, to ensure everyone can make informed decisions.
                                        </p>
                                        <div className= "d-flex align-items-center justify-content-center">
                                            <div style={{width: "15em"}}>
                                                <h3 className="title" style={{color: "#439cd6"}}>Ignatius Frosthaven</h3>
                                                <span className="post">New York</span>
                                            </div>
                                            <img src="images/Testimonials/man.jpg" style={thumbnail}/>
                                        </div>
                                    </div>

                                    <div className="testimonial">
                                        <p className="description" style={testimonial}>
                                            In a world where technology is rapidly evolving, Zuckerberg & Phelps stands out as a company that's leading the charge in making cryptocurrencies accessible, secure, and understandable. My experience with them has been exceptional, and I wholeheartedly recommend Zuckerberg to anyone looking to dive into the exciting world of cryptocurrencies.
                                        </p>
                                        <div className= "d-flex align-items-center justify-content-center">
                                            <div style={{width: "15em"}}>
                                                <h3 className="title" style={{color: "#439cd6"}}>Quinlan Everglen</h3>
                                                <span className="post">California</span>
                                            </div>
                                            <img src="images/Testimonials/man2.png" style={thumbnail}/>
                                        </div>                                        
                                    </div>
                                </Slider>
                            </div>
                        </div>


            </div>
        </section>

    )
}

export default Testimonials;