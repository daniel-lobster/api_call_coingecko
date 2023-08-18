import React from 'react';

function Copyright() {
    return (
        <div>
            <section id="copyright_banner">
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-5 pt-5 mb-5">
                            <div className="mrgtop">
                                <p className="fs-1 text-light  mt-5 pt-5 net_wrt">
                                    Z&P Network<br />
                                    <span className="skyblue fw-bold heading_1" style={{ color: '#439cd6'}}>
                                        COPYRIGHTS AND TRADEMARKS
                                    </span>
                                </p>
                            </div>

                            <div className="mt-5 mb-5 ">
                                <button type="button" className="btn text-white" style={{ backgroundColor: '#439cd6', width:"10em"}}>Got It</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="agree">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-12 col-sm-12 my-5">
                            <p className="skyblue fw-bold fs-3 heading" style={{ color: '#439cd6'}}>
                                COPYRIGHTS AND TRADEMARKS
                            </p>
                            <p className="mt-5">

                                Copyrights and trademarks are essential aspects of intellectual property protection that play a crucial role in safeguarding the rights of creators and businesses alike. Copyrights protect original works of authorship, such as literary, artistic, and musical creations, giving the creators exclusive rights to reproduce, distribute, and publicly display their works. This ensures that their efforts are acknowledged and prevents unauthorized use by others. On the other hand, trademarks are distinctive signs, symbols, or logos that identify products or services of a particular source, enabling consumers to associate them with specific quality and reputation. Trademark protection grants exclusive rights to use the mark and helps consumers make informed choices while safeguarding the brand's goodwill. Respecting copyrights and trademarks not only promotes innovation and creativity but also fosters fair competition and trust among businesses and consumers in the global marketplace.
                            </p>
                        </div>

                        <div className="col-lg-5 col-md-12 col-sm-12 mt-lg-5 pt-lg-5">
                            <img src="./images/agree.png"
                                className="img-fluid mt-lg-5 pt-lg-5 pt-xl-0  animate__animated animate__fadeInRight wow" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="paragraph">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-12 col-sm-12 mt-5 ">
                            <p>
                            At Z&P we value and respect intellectual property rights, including copyrights and trademarks. We recognize the importance of protecting the original works and distinctive marks of individuals and businesses. All content, materials, and trademarks displayed on our website are either owned by us or used with the appropriate permissions and licenses. You may not use, reproduce, modify, distribute, or create derivative works of any copyrighted materials or trademarks without obtaining the necessary authorization from the rightful owners. We are committed to upholding copyright and trademark laws and expect our users to do the same. If you believe that your intellectual property rights have been infringed upon, please contact us promptly so that we can address the issue. Together, let us foster a culture of respect for creativity and innovation while safeguarding the rights of content creators and trademark owners.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            
                  
                
            
        </div>



    );
}


export default Copyright;
