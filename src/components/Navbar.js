import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div>
            <section>
                <div className="text-center bg-dark text-white fixed-top upper_div">
                    <p></p>
                    <div>
                        <p>We do not buy or sell cryptocurrency.</p>
                    </div>
                   
                    <nav className="navbar navbar-expand-lg fixed-top main_navbar" style={{ backgroundColor: "#3db3fe", top: "48px" }}>
                        <Link className="nav-link text-white" to="/"><img src="/images/logo.png" width="80px" alt="image of LOGO" style={{ borderRadius: "50%", marginLeft: "3em"}}/></Link>

                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item dropdown nav_items">
                                <a className="nav-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><b className="text-white">ZP Pro</b></a>
                                <ul className="dropdown-menu" style={{ backgroundColor: '#3db3fe' }}>
                                    <li><Link className="dropdown-item nav-link text-white" to="/legal"><b>Legal</b></Link></li>
                                    <li><Link className="dropdown-item nav-link text-white" to="/privacy"><b>Privacy</b></Link></li>
                                    <li><Link className="dropdown-item nav-link text-white" to="/career"><b>Career</b></Link></li>
                                    <li><Link className="dropdown-item nav-link text-white" to="/charity"><b>Charity</b></Link></li>
                                    <li><Link className="dropdown-item nav-link text-white" to="/mining"><b>Mining</b></Link></li>
                                    <li><Link className="dropdown-item nav-link text-white" to="/copyright"><b>Copyright</b></Link></li>
                                </ul>
                            </li>
                            <li className="nav-item nav_items active">
                                <Link className="nav-link text-white" to="/instructions"><b>Get Started</b></Link>
                            </li>
                            <li className="nav-item dropdown nav_items">
                                <Link className="nav-link text-white" to="/coins"><b>Coins</b></Link>
                            </li>
                            <li className="nav-item dropdown nav_items">
                                <li><Link className="nav-link text-white" to="/team"><b>Team</b></Link></li>

                            </li>
                            <li className="nav-item dropdown nav_items">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"><b className="text-white">Ecosystem</b></a>
                                <ul className="dropdown-menu" style={{ backgroundColor: '#3db3fe' }}>
                                    <li> <a className="dropdown-item" href="https://ethereum.org/" target="_blank"> <b>Ethereum</b></a></li>
                                    <li><a className="dropdown-item" href="https://bitcoin.org/en/" target="_blank"> <b>Bitcoin</b></a></li>
                                    <li><a className="dropdown-item" href="https://en.wikipedia.org/wiki/Web3" target="_blank"> <b>Web3</b></a></li>
                                    <li><a className="dropdown-item" href="https://www.amd.com" target="_blank"> <b>AMD</b> </a></li>
                                </ul>
                            </li>
                            {/* just for testing purpose */}
                            <li className="nav-item dropdown nav_items">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"><b className="text-white"><img src="/images/metamask.png" />MetaMask</b></a>
                                <ul className="dropdown-menu" style={{ backgroundColor: '#3db3fe' }}>
                                    {/* <li><a className="dropdown-item" href="#"> <b className="text-white text-center">Vista MetaMask</b></a></li> */}
                                    <li><Link className="nav-link text-white text-center dropdown-item" to="/bitcoin"><b>Bitcoin Setup</b></Link></li>
                                    <li><Link className="nav-link text-white text-center dropdown-item" to="/ethereum"><b>Ethereum Setup</b></Link></li>
                                    {/* <li><a className="dropdown-item" href="#"> <b className="text-white text-center">Alexa MetaMask</b></a></li> */}
                                </ul>
                            </li>

                            <li className="nav-item nav_items">
                                <Link className="nav-link text-white" to="/faqs"><b>FAQs</b></Link>
                            </li>
                            <li className="nav-item nav_items">
                                <Link className="register" to="/register" ><b>Register</b></Link>
                                {/* <a href="register.html" className="nav-link bg-dark"><b className="text-white">Register</b></a> */}
                            </li>
                            <li className="nav-item nav_items mt-2">
                                <div id="google_translate_element" />
                            </li>
                        </ul>

                    </nav>
                </div>
            </section>
        </div>


    )
};
export default Navbar;

