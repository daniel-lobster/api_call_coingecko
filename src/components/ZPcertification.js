import { useState } from "react";

function ZPcertification(){

    const [prod_info,setProd_info] = useState ("Our certificate will bring your company in line with the latest standard to issue tokens on the Ethereum blockchain (ERC20 and ERC 721). We also support UP30 protocols for Avlanche and Cardano's Fluid.");
    const [image,setImage] = useState ("/images/VistaUniversity/vista-courses1.png");


    function switcher(product){
        switch(product){
            case 1:
                setProd_info("Our certificate will bring your company in line with the latest standard to issue tokens on the Ethereum blockchain (ERC20 and ERC 721). We also support UP30 protocols for Avlanche and Cardano's Fluid.")
                setImage("/images/VistaUniversity/vista-courses1.png")
                break;
            case 2:
                setProd_info("Earn a Z&P certification and learn all you need to know about cryptography with a focus on hash technologies. Cryptography is at the core of blockchain and our certification will equip your company with the tools to develop secure blockchain products.")
                setImage("/images/VistaUniversity/vista_hash.png")
                break;
            case 3:
                setProd_info("To create a smart contract or issue a token on a blockchain is easy. What is hard is to do it in an efficient, professional and safe way. We have developed the most accurate tools the determine gas efficiency for smart contracts and have implemented the latest technology to secure information such as your wallet key and transaction history.")
                setImage("/images/VistaUniversity/vista_certificate.png")
                break;
            case 4:
                setProd_info("Blockchain technology can be implemented in multiple ways and can provide different capabilites. Not all blockchains have to be public, a private blockchain can help make your information more secure at an internal level. Not all blockchains need to have the capability to deploy smart contracts. We will guide you through the process of deciding what technology is right for your company.")
                setImage("/images/VistaUniversity/vista_blockchain.png")                
                break;
            case 5:
                setProd_info("If your company is interested in mining our certification provides the hardware and software knowlege to have an effective mining opperation. Mining is relatively easy, what is hard is doing it in a way that is economically profitable. Zuckerberg & Phelps has helped several customers in the past setting up their mining operations.")
                setImage("/images/VistaUniversity/vista_mining.png")                
                break;
            default:

        }
    }

    return(
        <div>
            <section>
            <div className="container">
                <h1 className="text-center text-capitalize mt-5 font_family" style={{ color: '#439cd6'}}><b>Z&P Certification</b></h1>
                <div className="row justify-content-center mt-5">
                    <div className="col-3">
                        <img src="/images/VistaUniversity/hash_power.png" alt="hash power" className="img-fluid other_product_img" id="hash_power_course" onClick={()=>switcher(2)} />
                        <h5 className="text-center p-1 uni_text font_family" ><b>HASH POWER</b></h5>
                        <img src="/images/VistaUniversity/certificate.png" alt="certificate" className="img-fluid other_product_img" id="com_certificate" onClick={()=>switcher(3)} />
                        <h5 className="text-center p-2 uni_text font_family" ><b>COMPLIANCE &amp; CERTIFICATE</b></h5>
                    </div>
                    <div className="col-3">
                        <img src="/images/VistaUniversity/coin_crypto.png" alt="certificate" className="img-fluid other_product_img" id="coin_crypto" onClick={()=>switcher(1)}/>
                        <h5 className="text-center p-1 uni_text font_family" ><b>COIN &amp; CRYPTO</b></h5>
                    </div>
                    <div className="col-3">
                        <img src="/images/VistaUniversity/blockchain.png" className="img-fluid other_product_img" id="blockchain_course" onClick={()=>switcher(4)} />
                        <h5 className="text-center p-3 uni_text font_family" ><b>BLOCKCHAIN</b></h5>
                        <img src="/images/VistaUniversity/mining.png" className="img-fluid other_product_img" id="mining_course" onClick={()=>switcher(5)} />
                        <h5 className="text-center pt-4 uni_text font_family" ><b>MINING</b></h5>
                    </div>
                </div>
            </div>
            </section>
            <section style={{ backgroundImage: 'url("/images/VistaUniversity/vista_course.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-sm-2">
                            <img className="img-fluid mt-5 p-3 other_product_img box_img" src={image} />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h3 className="text-center mt-1 font_family text-white" > <b >Incentivized Curriculum</b> </h3>
                            <p className="text-white p-3 course_info">{prod_info}</p>
                            <p className="text-center text-white mt-3">
                                <a href="register.html" className="btn text-white mt-3" style={{ backgroundColor: '#439cd6', width: '185px' }}>
                                    <b> JOIN US</b>
                                </a>
                            </p>
                        </div>
                        <div className="col-4">
                            <h1 className="text-center text-capitalize text-white my-5 uni_text font_family"><b>Z&P Certification</b></h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>

)
}

export default ZPcertification;