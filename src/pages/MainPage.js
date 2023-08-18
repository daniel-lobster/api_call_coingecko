import React from 'react'
import '../css/bootstrap.css';
import '../css/front_new.css';
import '../css/new_custom.css';
import '../css/all.css';
import Carousel from '../components/carousel';
import ProductSwitcher from '../components/ProductSwitcher';
import OtherCurrencies from '../components/OtherCurrencies';

import ZPcertification from '../components/ZPcertification';
import Testimonials from '../components/testimonials';
import TopCarousel from '../components/TopCarousel';



function MainPage() {
    return (
        <div>
            <TopCarousel/>

            <section style={{ backgroundImage: 'url("/images/vistaWelcome.png")' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12  mt-3">
                            <h1 className="text-center  font_family" ><b className="text-capitalize"  style={{ color: '#439cd6'}}>Welcome to Zuckerberg & Phelps</b></h1>
                            <div className="row content-justify-center">
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="card text-center mt-5">
                                        <div className="card-header" style={{ backgroundColor: '#439cd6' }}>
                                            <h4 className="text-white text-capitalize font_family">SECURE E-WALLETS</h4>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text text-justify font_family">Zuckerberg & Phelps E-Wallets are the first step to using Zuckerberg & Phelps products.We provide a secure wallet system for our clients and customers globally. Your E-Wallet is located in your user dashboard back office.</p>
                                        </div>
                                    </div>
                                    <div className="card text-center">
                                        <div className="card-header" style={{ backgroundColor: '#439cd6' }}>
                                            <h4 className="text-white text-capitalize font_family">MAKE PAYMENTS</h4>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text font_family">Zuckerberg & Phelps provides an easy way to deposit funds, withdraw funds or transfer funds to any other Zuckerberg & Phelps member, affiliate or client worldwide.  This happens instantaneously and in “real-time”.</p>
                                        </div>
                                    </div>
                                    <div className="card text-center">
                                        <div className="card-header" style={{ backgroundColor: '#439cd6' }}>
                                            <h4 className="text-white text-capitalize font_family">SECURE AND VERIFIED CRYPTOCURRENCY TRANSACTIONS</h4>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text font_family">This is blockchain technology.   Zuckerberg & Phelps uses the advanced ERC250 and SHA256 blockchains to transfer transparently and in compliance with regulatory needs and wants; everywhere.</p>
                                        </div>
                                    </div>
                                    <div className="card text-center">
                                        <div className="card-header" style={{ backgroundColor: '#439cd6' }}>
                                            <h4 className="text-white text-capitalize font_family">COMPLIANCE</h4>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text font_family">Zuckerberg & Phelps continues to work with United States and International Regulators to bring FULL COMPLIANCE not just to its own business model, but the entire space.   Zuckerberg & Phelps always thrives for and insists on compliance.</p>
                                        </div>
                                    </div>
                                    <div className="card text-center">
                                        <div className="card-header" style={{ backgroundColor: '#439cd6' }}>
                                            <h4 className="text-white text-capitalize font_family">GOOD BUSINESS PRACTICES</h4>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text font_family">Zuckerberg & Phelps believes in full transparency and full business ethics without compromise.  Zuckerberg & Phelps is proud members of WISE a global business association of small, medium and large corporations with over 300,000 members.   This association has millions of employees who practice ethical and integral business and business management technologies.   Zuckerberg & Phelps has zero tolerance for unethical practices in business.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Image Section of Mr_Armen */}
                                <div className="col-sm-12 col-md-12 col-lg-6 mt-5">
                                    {/* <video width="100%" controls>
                                        <source src="https://youtu.be/82erXHt1dUE" type="video/mp4" />
                                    </video> */}
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/82erXHt1dUE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <h1 className="text-center mt-3 font_family"><b>Zuckerberg & Phelps 2023</b></h1>
                                    <h5 className="text-capitalize  text-center font_family" style={{ color: '#dc4e26' }}></h5>
                                    <p className="text-center">Charting new directions at Zuckerberg & Phelps</p>
                                    <img src="/images/welcome_part.png" className="img-fluid mt-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container pb-3">
                    <div className="row content-justify-center">
                        <h1 className="text-center text-capitalize mt-3 font_family" style={{ color: '#439cd6'}}><b>PRODUCT FEATURES</b></h1>
                        <div className="col-sm-12 col-md-6 mt-5" style={{ backgroundColor: '#f0ecec' }}>
                            <div className="p-2">
                                <h5 className="font_family" style={{ color: '#439cd6' }}>AMD RYZEN PROCESSOR</h5>
                                <p className="font_family">AMD Ryzen are the most powerful high-end Processors in the world.</p>
                                <h5 className="font_family" style={{ color: '#439cd6' }}>EASY TO CONFIGURE</h5>
                                <p className="font_family">HPi1000 is easy to install and configure.
                                    Simply power it on and “Plug &amp; Play”.</p>
                                <h5 className="font_family" style={{ color: '#439cd6' }}>FPGA</h5>
                                <p className="font_family">Xilinx makes next generation graphics cards called FPGA. Zuckerberg & Phelps TECHNOLOGIES has teamed up with Silicon Valley Instigate Systems &amp; Xilinx to make next generation cards for the Falcon and Mini Miner Systems. These technologies are also included in the world premiere of  the Zuckerberg & Phelps CRYPTOCAM which is scheduled for mass market launch in 2024.</p>
                                <h5 className="font_family" style={{ color: '#439cd6' }}>ENERGY CONSUMPTION</h5>
                                <p className="font_family">HPi1000 gamer and miner is designed
                                    to consume less to very little electricity.</p>
                                <h5 className="font_family" style={{ color: '#439cd6' }}>HASH RATE</h5>
                                <p className="font_family">HPi1000 generates higher hash rate; solving the mathematical equations and collecting your mining rewards.</p>
                                <h5 className="font_family" style={{ color: '#439cd6' }}>MINING SOFTWARE</h5>
                                <p className="font_family">Zuckerberg & Phelps hosts its own Mining Pools and deploys them “in house” and are controlled by Zuckerberg & Phelps TECHNOLOGIES.   HPi1000 uses state of the art JS mining software and other cutting edge script &amp; coding technologies.</p>
                            </div>
                        </div>
                        {/* Features Pictures  */}
                        <div className="col-sm-12 col-md-3 mt-5">
                            <img src="/images/hp.png" className="img-fluid p-2" />
                            <div className="bg-white">
                                <p style={{ color: '#439cd6' }} className="mt-2 font_family text-center"><b>HP i1000 (Gaming + Mining)</b></p>
                            </div>
                            <div>
                                <img src="/images/img_7709.png" className="img-fluid mt-3" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 mt-5">
                            <img src="/images/product1.jpg" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container pb-3">
                    <div className="row">
                        <h1 className="text-center text-capitalize mt-3 font_family " style={{ color: '#439cd6'}} ><b>HOW IT WORKS</b></h1>
                        <div className="col-sm-12 col-md-9 mx-auto">
                            <div className="row">
                                <div className="col-sm-12 col-md-9 mt-5">
                                    <div className="m-2" style={{ backgroundColor: '#f0ecec' }}>
                                        <div className="p-2">
                                            <h5 className="font_family" style={{ color: '#439cd6' }}>CREATE YOUR E-WALLET</h5>
                                            <div className="font_family">By signup up at Zuckerberg & Phelps, your E-Wallet will be created automatically.</div>
                                        </div>
                                    </div>
                                    <div className="m-2" style={{ backgroundColor: '#f0ecec' }}>
                                        <div className="p-2">
                                            <h5 className="font_family" style={{ color: '#439cd6' }}>MAKE PAYMENTS</h5>
                                            <div className="font_family">Add funds to your wallet through VISA or MASTERCARD or American Express using your credit card or through Bitpay and Alfacoins the cryptocurrency payment gateways.</div>
                                        </div>
                                    </div>
                                    <div className="m-2" style={{ backgroundColor: '#f0ecec' }}>
                                        <div className="p-2">
                                            <h5 className="font_family" style={{ color: '#439cd6' }}>BUY PRODUCTS</h5>
                                            <div className="font_family">Purchase an HPi1000 Gamer + Miner directly or through our HP/LP reward points program (Non US residents only).  Customers in the United States territories can purchase these cutting edge systems by Lay-Away and simply make small monthly payments – no credit checks, no denials, and no hassle. </div></div>
                                    </div>
                                    <div className="m-2" style={{ backgroundColor: '#f0ecec' }}>
                                        <div className="p-2 mb-5">
                                            <h5 className="font_family" style={{ color: '#439cd6' }}>GAME/MINE</h5>
                                            <div className="font_family">Game &amp; Mine from the comfort of your home.</div>
                                        </div>
                                    </div>
                                </div>
                                {/* How It Works Pictures  */}
                                <div className="col-sm-12 col-md-3 mt-5">
                                    <img src="/images/how_it_work.png" className="img-fluid mt-2" />
                                </div>

                                <Carousel/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundImage: 'url("/images/hp_video.png")' }}>
                <div className="container hp_video mb-3">
                    <div className="row mt-3">
                        <h1 className="text-center text-white mt-5 font_family"><b><u> HP i1000 PROMO</u></b></h1>
                        <h5 className="text-center text-white mt-4 font_family">Zuckerberg & Phelps proudly introduces Gaming + Mining System with advanced JS Mining Software and Microsoft Flight Simulator 2020 preinstalled.</h5>
                        <div className="col-sm-6 mx-auto">
                            {/* <video className="pb-3" width="100%" controls>
                                <source src="https://d2urbn2kpxn3jd.cloudfront.net/hp1000.mp4" type="video/mp4" />
                            </video> */}
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/82erXHt1dUE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <ProductSwitcher/>
            <OtherCurrencies/>


            <section style={{ backgroundImage: 'url("/images/subscription.png")' }}>
                <div className="container">
                    <div className="row">
                        <h1 className="text-center text-capitalize text-white mt-3 font_family"><b>SUBSCRIBE TO OUR UPDATES</b></h1>
                        <div className="col-sm-8 mx-auto">
                            <div className="row mt-5">
                                <div className="col-sm-12 col-md-12 col-lg-6 text-white pb-3 font_family">
                                    Subscribe to our quarterly Zuckerberg & Phelps newsletter for exciting updates on new products and services.
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6  mt-3">
                                    <form>
                                        <div className="input-group pb-3">
                                            <input type="email" className="form-control subscribe_email" placeholder="Enter your email" />
                                            <span className="input-group-btn">
                                                <button className="btn btn-theme text-white font_family" id="subscribe_news" type="submit" style={{ backgroundColor: '#439cd6' }}>Subscribe</button>
                                            </span>
                                        </div>
                                    </form>
                                    <small className="text-danger text-center p-3 eror_helper_text d-none font_family"><b>Email Field Required</b></small>
                                    <small className="text-danger text-center p-3 show_error_text d-none font_family"><b>Enter a valid Email</b></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ZPcertification/>
            <Testimonials/>
            <section className="" id="">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-7">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26424.69655150624!2d-118.30603158728026!3d34.118520626796354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf0a45505a7d%3A0xabb7acc626709843!2sHollywood%20Sign!5e0!3m2!1sen!2sus!4v1691694282920!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5 float-right" style={{ backgroundImage: 'url("/images/bg_contact.png")', backgroundRepeat: 'no-repeat' }}>
                            <h1 className="text-center text-white p-3 mt-5 font_family"><b>CONTACT US</b></h1>
                            <form method="post" id="submit-contact-us-form">
                                <div className="row">
                                    <div className="col-sm-8 col-md-8 form_setting">
                                        <input type="text" name="name" className="form-control line_field" placeholder="First Name" id="name" required />
                                    </div>
                                    <div className="col-sm-8 col-md-8  form_setting mt-5">
                                        <input type="email" name="email" className="form-control line_field" id="email" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-sm-8 form_setting">
                                        <input type="text" name="subject" className="form-control line_field" id="subject" placeholder="Subject" required />
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-sm-8 form_setting">
                                        <textarea className="form-control line_field" name="message" placeholder="Message" id="message" required defaultValue={""} />
                                    </div>
                                </div>
                                <div className="row mt-5 justify-content-center">
                                    <div className="col form_setting">
                                        <button type="button" id="contact_form" className="btn btn-md text-white" style={{ backgroundColor: '#439cd6' }}>Send</button>
                                        <div className="spinner-border contact-form-spinner-border" style={{ color: '#439cd6', display: 'none' }} />
                                    </div>
                                </div>
                            </form>
                            <div className="row mt-2">
                                <div className="col-md-3" />
                                <div className="col-md-7">
                                    <p className="text-danger require-fileds" style={{ display: 'none' }}>Please fill in all the fields.</p>
                                    <p className="text-success success-p" />
                                </div>
                                <div className="col-md-2" />
                            </div>
                            <div className="text-white mt-3 shadow">
                                <p className="text-center p-4"><span><i className="fas fa-envelope-open-text fa-2x" /> </span> <b className="ml-1">contact@zuckerbergphelps.io</b></p>
                            </div>
                            <div className="text-white mt-3 shadow">
                                <p className="text-center p-4"><i className="fas fa-phone-volume fa-2x" /><b>+1-555-555-5555</b></p>
                            </div>
                            <div className="text-white mt-3 shadow">
                                <p className="text-center p-4"><i className="fas fa-map-marker-alt fa-2x" /><b>Hollywood Sign, Griffith Park</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            </div>

    )
};

            export default MainPage;

