

function Footer(){
    return(
                <section id="footer">
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 mt-5 ">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-2 col-md-2 col-sm-12 mt-4 pt-5 d-flex justify-content-left align-items-center ">
                                    <a href="https://github.com/daniel-lobster" target="_blank" className="">
                                        <img src="./images/lobster.png" className=" float-lg-end " style={{borderRadius: "50%", width :"10em"}}/>
                                    </a>
                                </div>

                                <div className="col-lg-7 col-md-7 col-sm-12 mt-4 pt-5 ">
                                    <p className="fs-3 text-light mt-lg-0 mt-5">
                                        Created by Daniel Pulido-Mendez
                                    </p>
                                    <p className="text-light ">
                                    I help companies improve their on-line interactions with costumers. My objective is to build intuitive and efficient software that helps businesses grow.
                                    </p>
                                    <a href="https://github.com/daniel-lobster" target="_blank" className="mt-5"  style={{ color: '#439cd6'}}>Learn More <span><i className="fa fa-angle-right" aria-hidden="true"></i></span></a>
                                </div>
                            </div>
                        </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 mt-5 ">
                                <div className="row d-flex justify-content-center">
                                    

                                    <div className="col-lg-2  col-md-4 col-6 mt-5 text-light links">
                                        <p className="fw-bold " style={{ color: '#439cd6'}}>
                                            COMPANY
                                        </p>
                                        <a href="#">Gaming</a><br/>
                                        <a href="#">Trading</a><br/>
                                        <a href="#">HP i 1000</a><br/>
                                        <a href="#">Join US</a>
                                    </div>

                                    <div className="col-lg-2 col-md-4 col-6 mt-5 text-light links">
                                        <p className="fw-bold ft_heading" style={{ color: '#439cd6'}}>
                                            SUPPORT
                                        </p>
                                        <a href="#">Help</a><br/>
                                        <a href="#">Faqs</a><br/>
                                        <a href="#">Live Consultancy</a><br/>
                                    </div>
                                    <div className="col-lg-2   col-md-4 col-6 mt-5 text-light links ">
                                        <p className="fw-bold ft_heading" style={{ color: '#439cd6'}}>
                                            ABOUT
                                        </p>
                                        <a href="#">Trading Services</a><br/>
                                        <a href="#">Trading</a><br/>
                                        <a href="#">CEO Message</a><br/>
                                        <a href="#">Testimonial</a>
                                    </div>

                                    <div className="col-lg-3  col-md-4 col-6 mt-5 text-light links ">
                                        <p className="fw-bold " style={{ color: '#439cd6'}}>
                                            Legal
                                        </p>
                                        <a href="#">Forms</a><br/>
                                        <a href="#">Governance</a><br/>
                                        <p className=" learn_1"  style={{ color: '#439cd6'}}>
                                            Supported Payment Methods
                                        </p>
                                        <img src="./images/payment_img.png" className="img-fluid cardimg"/>
                                    </div>
                                </div>
                            </div>
                            <hr className="text-light my-5"/>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-9 col-md-9 col-sm-9">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-9 col-md-12 col-sm-12 ft_txt">
                                                <p className="text-light ">
                                                    <i>
                                                        Copyright 2023 Zuckerberg & Phelps LLC. All Rights Reserved.
                                                    </i>
                                                </p>
                                            </div>

                                            <div className="col-lg-3 col-md-12 col-sm-12 text-light social  text-center">
                                                <i className="fa fa-twitter-square px-1" aria-hidden="true"></i>
                                                <i className="fa fa-linkedin-square  px-1" aria-hidden="true"></i>
                                                <i className="fa fa-instagram  px-1" aria-hidden="true"></i>
                                                <i className="fa fa-facebook-square  px-1" aria-hidden="true"></i>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </section>
    )



}

export default Footer;