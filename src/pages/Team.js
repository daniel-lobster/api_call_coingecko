
    
function Team() {
    return (

                <div>
                  <style dangerouslySetInnerHTML={{__html: "\n        @import url('https://fonts.googleapis.com/css?family=Lato:400,700');\n        @import url('https://fonts.googleapis.com/css?family=Dosis:400,700');\n        @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');\n    \n        body {\n            font-family: 'Lato', sans-serif;\n            text-align: center;\n            padding-top: 60px;\n        }\n        h2 {\n            font-size: 50px;\n            margin-bottom: 0px;\n            font-weight: 100;\n        }\n        p {\n            font-size: 18px;\n        }\n        .transition {\n            transition: .3s cubic-bezier(.3, 0, 0, 1.3);\n    \n        }\n        .three .transition {\n            transition: .7s cubic-bezier(.3, 0, 0, 1.3);\n    \n        }\n        .five .transition {\n            transition: .5s cubic-bezier(.3, 0, 0, 1.3)\n        }\n    \n        /* --------- THREE --------- */\n    \n    \n        .three {\n            list-style: none;\n            padding: 0;\n    \n        }\n        .three > li {\n            background: #FFFFFF;\n            border: 1px solid rgba(150,150,150,0.29);\n            -moz-box-shadow: 0px 0px 18px 0px rgba(103,85,85,0.39);\n            box-shadow: 0px 0px 18px 0px rgba(103,85,85,0.39);\n            width: 250px;\n            height: 430px;\n            display: inline-block;\n            margin: 0 20px;\n            text-align: center;\n        }\n        .three > li img {\n            margin-top: 60px;\n        }\n        .three > li:hover img {\n            margin-top: 17px;\n        }\n        .three > li:hover {\n            -moz-box-shadow: 0px 0px 5px 0px rgba(103,85,85,0.25);\n            box-shadow: 0px 0px 5px 0px rgba(103,85,85,0.25);\n        }\n        .three > li:hover span {\n            border-radius: 0;\n            -webkit-border-radius: 0;\n            -moz-border-radius: 0;\n            bottom: -400px;\n        }\n        .three > li:hover h3 {\n            color: rgba(255,255,255,1);\n            margin-top: 25px;\n        }\n        .three > li .wrapper {\n            overflow: hidden;\n            position: absolute;\n            width: 250px;\n            height: 430px;\n        }\n        .three > li span {\n            border-radius: 50%;\n            -webkit-border-radius: 50%;\n            -moz-border-radius: 50%;\n            height: 500px;\n            width: 500px;\n            background: #439cd6;\n            display: block;\n            position: absolute;\n            bottom: 150px;\n            left: -125px;\n        }\n        .three > li span img {\n            margin-top: 10px;\n            width: 50px;\n        }\n        .three > li span:hover {\n            background: #439cd6;\n        }\n        .three > li span i {\n            position: absolute;\n            bottom: -90px;\n            color: #439cd6;\n            text-transform: uppercase;\n            border-radius: 50px;\n            -moz-border-radius: 50px;\n            -webkit-border-radius: 50px;\n            border: 2px solid #439cd6;\n            padding: 10px 30px;\n            font-style: normal;\n            display: inline-block;\n            left: 195px;\n        }\n        .three > li span .mamber-img {\n            width: 120px;\n            margin-top: 170px;\n            -webkit-filter: grayscale(100%);\n            -moz-filter: grayscale(100%);\n            filter: grayscale(100%);\n        }\n        .three > li span .mamber-img + h3 {\n            margin-top: 20px;\n        }\n        .three > li h3 {\n            margin-top: 40px;\n            color: rgba(255,255,255,1);\n        }\n        .three > li h3 em {\n            display: block;\n            font-style: normal;\n            text-transform: uppercase;\n            font-weight: 300;\n            font-size: 12px;\n            margin-top: 5px;\n        }\n        .three .social {\n            list-style: none;\n            text-align: center;\n            margin: 0;\n            padding: 10px;\n        }\n        .three .social li {\n            opacity: 0;\n            display: inline-block !important;\n            padding: 5px;\n        }\n        .three > li:hover .social li {\n            opacity: 0.8;\n        }\n        .three .social li a {\n            cursor: pointer;\n            display: block;\n        }\n        .three .social li a:hover {\n            opacity: 0.5;\n        }\n        .three .social li img {\n            width: 24px;\n        }\n        .fa, .fas, .far, .fal, .fad, .fab {\n    \n            line-height: 2 !important;\n        }\n    " }} />

                  <div className="row" style={{marginTop: '100px'}}>
                    <div className="col-10 mx-auto">
                      <h1 className="text-center text-capitalize mt-3 font_family text-justify" style={{color: '#439cd6'}}><b>TEAM MEMBERS</b></h1>
                      <h5 className=" font_family p-5 text-justify">Zuckerberg & Phelps is the result of the collaboration of leaders in multiple industries including software development, cryptography, electrical engineering, mathematics, finance and venture capital. At Z&P we understand that human capital is our most valueable resource.</h5>
                    </div>
                  </div>
                  <ul className="three">
                    <li className="transition mt-5">
                      <div className="wrapper"> <img className="mamber-img rounded-circle img-fluid px-5" src="images/Team/woman2.jpg" />
                        <ul className="social">
                          <li className="text-center font_family" /><br />
                          <li className="text-black" style={{color:'black'}}>CEO</li><br />
                          <li className="transition"><a href="#" target="_blank"><img src="./images/facebook.jpg" style={{width:"1.5em"}}/></a></li>
                          <li className="transition"><a href="#" target="_blank"><img src="./images/twitter.jpg" style={{width:"1.5em"}}/></a></li>
                        </ul>
                        <span className="transition">
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="font_family">Ms. Penelope Zuckerberg</h3>
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="font_family" />
                          <img className="mamber-img rounded-circle img-fluid" src="images/Team/woman2.jpg" />
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="text-center font_family">Ms. Penelope Zuckerberg</h3>
                          <h3 className="text-center font_family" style={{fontSize: '15px', fontWeight: 'bolder'}} />
                        </span>
                      </div>
                    </li>
                    <li className="transition mt-5">
                      <div className="wrapper"> <img className="mamber-img rounded-circle img-fluid px-5" src="images/Team/girl2.png" />
                        <ul className="social ">
                          <li className="text-center font_family" /><br />
                          <li className="text-center font_family" style={{color:'black'}}>CTO</li><br />
                          <li className="transition"><a href="#" target="_blank"><img src="./images/facebook.jpg" style={{width:"1.5em"}} /></a></li>
                          <li className="transition"><a href="#" target="_blank"><img src="./images/twitter.jpg" style={{width:"1.5em"}} /></a></li>
                        </ul>
                        <span className="transition">
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="font_family">Ms. Prudence Phelps</h3>
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="font_family" />
                          <img className="mamber-img rounded-circle img-fluid" src="images/Team/girl2.png" />
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="text-center font_family">Ms. Prudence Phelps</h3>
                          <h3 className="text-center font_family" style={{fontSize: '15px', fontWeight: 'bolder'}} />
                        </span>
                      </div>
                    </li>
                    <li className="transition mt-5">
                      <div className="wrapper"> <img className="mamber-img rounded-circle img-fluid px-5" src="images/Team/man3.jpg" />
                        <ul className="social ">
                          <li className="text-center font_family" /><br />
                          <li className="text-center font_family " style={{color:'black'}}>CFO</li><br />
                          <li className="transition"><a href="#" target="_blank"><img src="./images/facebook.jpg" style={{width:"1.5em"}} /></a></li>
                          <li className="transition"><a href="#" target="_blank"><img src="./images/twitter.jpg" style={{width:"1.5em"}} /></a></li>
                        </ul>
                        <span className="transition">
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="font_family">Mr. Horatio Fuzzleton</h3>
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="font_family" />
                          <img className="mamber-img rounded-circle img-fluid" src="images/Team/man3.jpg" />
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="text-center font_family">Mr. Horatio Fuzzleton</h3>
                          <h3 className="text-center font_family" style={{fontSize: '15px', fontWeight: 'bolder'}} />
                        </span>
                      </div>
                    </li>
                    <li className="transition mt-5">
                      <div className="wrapper"> <img className="mamber-img rounded-circle img-fluid px-5" src="images/Team/man4.jpg" />
                        <ul className="social ">
                          <li className="text-center font_family" /><br />
                          <li className="text-center font_family " style={{color:'black'}}>COO</li><br />
                          <li className="transition"><a href="#" target="_blank"><img src="./images/facebook.jpg" style={{width:"1.5em"}} /></a></li>
                          <li className="transition"><a href="#" target="_blank"><img src="./images/twitter.jpg" style={{width:"1.5em"}} /></a></li>
                        </ul>
                        <span className="transition">
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="font_family">Mr. Montgomery Seckington</h3>
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="font_family" />
                          <img className="mamber-img rounded-circle img-fluid" src="images/Team/man4.jpg" />
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="text-center font_family">Mr. Montgomery Seckington</h3>
                          <h3 className="text-center font_family" style={{fontSize: '15px', fontWeight: 'bolder'}} />
                        </span>
                      </div>
                    </li>
                    <li className="transition mt-5">
                      <div className="wrapper"> <img className="mamber-img rounded-circle img-fluid px-5" src="images/Team/woman7.jpg" />
                        <ul className="social ">
                          <li className="text-center font_family" /><br />
                          <li className="text-center font_family " style={{color:'black'}}>Head of HR</li><br />
                          <li className="transition"><a href="#" target="_blank"><img src="./images/facebook.jpg" style={{width:"1.5em"}} /></a></li>
                          <li className="transition"><a href="#" target="_blank"><img src="./images/twitter.jpg" style={{width:"1.5em"}} /></a></li>
                        </ul>
                        <span className="transition">
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="font_family">Ms. Gertrude McSquiggle</h3>
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="font_family" />
                          <img className="mamber-img rounded-circle img-fluid" src="images/Team/woman7.jpg" />
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="text-center font_family">Ms. Gertrude McSquiggle</h3>
                          <h3 className="text-center font_family" style={{fontSize: '15px', fontWeight: 'bolder'}} />
                        </span>
                      </div>
                    </li>
                  </ul>
                  <ul className="three">
                    <li className="transition mt-5">
                      <div className="wrapper"> <img className="mamber-img rounded-circle img-fluid px-5" src="images/Team/woman8.jpg" />
                        <ul className="social ">
                          <li className="text-center font_family" /><br />
                          <li className="text-center font_family "style={{color:'black'}}>Head of Investor Relations</li><br />
                          <li className="transition"><a href="#" target="_blank"><img src="./images/facebook.jpg" style={{width:"1.5em"}} /></a></li>
                          <li className="transition"><a href="#" target="_blank"><img src="./images/twitter.jpg" style={{width:"1.5em"}} /></a></li>
                        </ul>
                        <span className="transition">
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="font_family">Ms. Clementine Gobbledy</h3>
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="font_family" />
                          <img className="mamber-img rounded-circle img-fluid" src="images/Team/woman8.jpg" />
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="text-center font_family">Ms. Clementine Gobbledy</h3>
                          <h3 className="text-center font_family" style={{fontSize: '15px', fontWeight: 'bolder'}} />
                        </span>
                      </div>
                    </li>
                    <li className="transition mt-5">
                      <div className="wrapper"> <img className="mamber-img rounded-circle img-fluid px-5" src="images/Team/man6.jpg" />
                        <ul className="social ">
                          <li className="text-center font_family" /><br />
                          <li className="text-center font_family "  style={{color:'black'}}>Head of Education</li><br />
                          <li className="transition"><a href="#" target="_blank"><img src="./images/facebook.jpg" style={{width:"1.5em"}} /></a></li>
                          <li className="transition"><a href="#" target="_blank"><img src="./images/twitter.jpg" style={{width:"1.5em"}} /></a></li>
                        </ul>
                        <span className="transition">
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="font_family">Ms. Seraphina Whistle</h3>
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="font_family" />
                          <img className="mamber-img rounded-circle img-fluid" src="images/Team/man6.jpg" />
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="text-center font_family">Ms. Seraphina Whistle</h3>
                          <h3 className="text-center font_family" style={{fontSize: '15px', fontWeight: 'bolder'}} />
                        </span>
                      </div>
                    </li>
                    <li className="transition mt-5">
                      <div className="wrapper"> <img className="mamber-img rounded-circle img-fluid px-5" src="images/Team/woman4.jpg" />
                        <ul className="social ">
                          <li className="text-center font_family" /><br />
                          <li className="text-center font_family "style={{color:'black'}}>Director of R&D</li><br />
                          <li className="transition"><a href="#" target="_blank"><img src="./images/facebook.jpg" style={{width:"1.5em"}} /></a></li>
                          <li className="transition"><a href="#" target="_blank"><img src="./images/twitter.jpg" style={{width:"1.5em"}} /></a></li>
                        </ul>
                        <span className="transition">
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="font_family">Ms. Melisandra Snicker</h3>
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="font_family" />
                          <img className="mamber-img rounded-circle img-fluid" src="images/Team/woman4.jpg" />
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="text-center font_family">Ms. Melisandra Snicker</h3>
                          <h3 className="text-center font_family" style={{fontSize: '15px', fontWeight: 'bolder'}} />
                        </span>
                      </div>
                    </li>
                    <li className="transition mt-5">
                      <div className="wrapper"> <img className="mamber-img rounded-circle img-fluid px-5" src="images/Team/woman5.jpg" />
                        <ul className="social ">
                          <li className="text-center font_family" /><br />
                          <li className="text-center font_family "style={{color:'black'}}>Director of Technology</li><br />
                          <li className="transition"><a href="#" target="_blank"><img src="./images/facebook.jpg" style={{width:"1.5em"}} /></a></li>
                          <li className="transition"><a href="#" target="_blank"><img src="./images/twitter.jpg" style={{width:"1.5em"}} /></a></li>
                        </ul>
                        <span className="transition">
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="font_family">Ms. Lisbeth Salander</h3>
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="font_family" />
                          <img className="mamber-img rounded-circle img-fluid" src="images/Team/woman5.jpg" />
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="text-center font_family">Ms. Lisbeth Salander</h3>
                          <h3 className="text-center font_family" style={{fontSize: '15px', fontWeight: 'bolder'}} />
                        </span>
                      </div>
                    </li>
                    <li className="transition mt-5">
                      <div className="wrapper"> <img className="mamber-img rounded-circle img-fluid px-5" src="images/Team/woman6.jpg" />
                        <ul className="social ">
                          <li className="text-center font_family" /><br />
                          <li className="text-center font_family "  style={{color:'black'}}>Executive Board</li><br />
                          <li className="transition"><a href="#" target="_blank"><img src="./images/facebook.jpg" style={{width:"1.5em"}} /></a></li>
                          <li className="transition"><a href="#" target="_blank"><img src="./images/twitter.jpg" style={{width:"1.5em"}} /></a></li>
                        </ul>
                        <span className="transition">
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="font_family">Ms. Zephyr Bumble</h3>
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="font_family" />
                          <img className="mamber-img rounded-circle img-fluid" src="images/Team/woman6.jpg" />
                          <h3 style={{fontSize: '15px', fontWeight: 'bolder'}} className="text-center font_family">Ms. Zephyr Bumble</h3>
                          <h3 className="text-center font_family" style={{fontSize: '15px', fontWeight: 'bolder'}} />
                        </span>
                      </div>
                    </li>
                  </ul>
                  
                  <h5 className="font_family text-justify mt-5">Zuckerberg & Phelps brings in talent from all sources and sees diversity as a strength. </h5>

                </div>

    )
}

export default Team;