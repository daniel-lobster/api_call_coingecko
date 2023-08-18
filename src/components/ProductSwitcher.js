import { useState } from "react";

function ProductSwitcher(){

    const [prod_info,setProd_info] = useState ("Bitcoin symbol BTC is a form of digital currency that can be transacted via the internet in a decentralized way through the blockchain technology.  Learn more about Bitcoin by following us at www.zuckerbergphelps.io.");
    const [title,setTitle] = useState ("Bitcoin");
    const [image,setImage] = useState ("/images/productSwitcher/btc.png");


    function switcher(product){
        switch(product){
            case 1:
                setTitle("Bitcoin")
                setProd_info("Bitcoin symbol BTC is a form of digital currency that can be transacted via the internet in a decentralized way through the blockchain technology.  Learn more about Bitcoin by following us at www.zuckerbergphelps.io.")
                setImage("/images/productSwitcher/btc.png")
                break;
            case 2:
                setTitle("Ethereum")
                setProd_info("Ethereum blockchain can host ERC20 tokens. We can help you issue ERC20 and ERC721 (NFTs) tokens in the Ethereum blockchain.")
                setImage("/images/productSwitcher/eth.jpg")
                break;
            case 3:
                setTitle("Social Networking")
                setProd_info("World’s first Social Networking platform which incentives freedom of speech, social networking, and social media all at the same time. Connecting communities and people around the world that love to share and socialize.")
                setImage("/images/productSwitcher/engin.png")
                break
            case 4:
                setTitle("Flight Simulator")
                setProd_info("The world’s best & advanced game yet – the Microsoft Flight Simulator 2020 licensed by Microsoft Corp.  Play & Fly in on time and real time conditions using the live Microsoft global servers around the globe.  Learn more about MFS2020 at www.flightsimulator.com.")
                setImage("/images/productSwitcher/simulation.png")                
                break;
            default:

        }
    }

    return(
        <div>
            <div className="container">
                <div className="row g-0">
                    <div className="col-sm-10 mx-auto">
                        <h1 className="text-center text-capitalize mt-5 font_family" style={{ color: '#439cd6'}}><b>PRODUCTS</b></h1>
                        <div className="row mt-3 border g-0 shadow">
                            <div className="col-sm-12 col-md-6 mt-2">
                                <img src={image} className="img-fluid mt-3 prodImage p-5" />
                            </div>
                            <div className="col-sm-12 col-md-6 mt-2 mt-5">
                                <p className="text-justify p-3 prodInfo mt-2 font_family">
                                    {prod_info}
                                </p>
                                <hr className="mt-5" style={{ color: '#439cd6', height: '4px' }} />
                                <h1 className="my-5 text-center font_family">{title}</h1>
                            </div>
                        </div>
                        {/* <!--     row for bottom view      --> */}
                        <div className="row p-3">
                            <div className="col-3">
                                <img  src="images/productSwitcher/bitcoin.png" className="img-fluid other_product_img box_img" id="product_1" title="Click Here" onClick={()=>switcher(1)}/>
                            </div>
                            <div className="col-3">
                                <img src="images/productSwitcher/ethereum.png" className="img-fluid other_product_img box_img" title="Click Here" id="product_2" onClick={()=>switcher(2)}/>
                            </div>
                            <div className="col-3">
                                <img src="images/productSwitcher/other_product3.png" className="img-fluid other_product_img box_img" title="Click Here" id="product_3" onClick={()=>switcher(3)}/>
                            </div>
                            <div className="col-3">
                                <img src="images/productSwitcher/other_product4.png" className="img-fluid other_product_img box_img" title="Click Here" id="product_4" onClick={()=>switcher(4)}/>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductSwitcher;