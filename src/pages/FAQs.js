import React from "react";
import '../css/bootstrap.css';

function FAQs() {
    return (
        <div>
            <div className="container border shadow mb-5" style={{ marginTop: '200px' }}>
                <div className="row">
                    <h1 className="text-center  font_family mt-5" style={{ color: '#439cd6' }}><b className="text-capitalize">FAQs</b></h1>
                    <div className="col-sm-12 col-md-6 col-lg-6 mt-3">
                        <h5 className="text-center welcome_vista font_family" style={{ color: '#439cd6' }}><b className="text-capitalize">Affiliate</b></h5>
                        <div className="accordion" id="Affiliateaccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" >
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <strong> What is the difference between customer and Affiliate ?</strong>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse "  >
                                    <div className="accordion-body">
                                        <p className="text-lead">A customer is a Zuckerberg & Phelps Club member that makes a purchase. An affiliate is a customer that Personally sponsors other people.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <strong> What is one benefit for Affiliate ? </strong>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <p className="text-lead">One of the many benefits is the affiliate may participate in the binary program by staying&nbsp;Qualified on a monthly basis.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <strong>  What are the out of pocket expenses to enroll in Visa ?</strong>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#Affiliateaccordion">
                                    <div className="accordion-body">
                                        <b>Option 1.</b> &nbsp;
                                        <p>ZERO - it is FREE to sign up / enroll. &nbsp;This will give you access to your own Back office to see what Zuckerberg & Phelps has to offer.</p>
                                        <b>Option 2.</b>
                                        <p>$25.00 annual Zuckerberg & Phelps Club Membership with company benefits :
                                        </p><ul>
                                            <li>Premium support</li>
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <li>Discount's and special offers on Zuckerberg & Phelps products</li>
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; <li>Access to Zuckerberg & Phelps events / webinar</li>
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <li>Easy to understand compensation plan</li>
                                        </ul>
                                        <p />
                                        <b>Option 3.</b>
                                        <p>Your decision to make a purchase in any given month could qualify you for&nbsp;affiliate compensation.</p>
                                    </div>
                                </div>
                            </div>
                            {/* next Question 4 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <strong>  What qualifies a member to receive affiliate compensation ?</strong>
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        Must be a paid Zuckerberg & Phelps Club Member and have purchased / have an active HPLP package. For binary compensation there must be a specified purchase in each month to qualify.
                                        <b>NOTE :</b>
                                        <p>
                                            For the&nbsp;binary compensation program&nbsp;there is a monthly qualification
                                            plus having a certain amount of personally sponsored members. &nbsp;The compensation plan description is found on the dashboard when you click on the question mark next to the words "Team Performance"
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* next Question 5 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <strong>  Can I enroll in Zuckerberg & Phelps on the MAIN website if I was not personally referred by another person ?</strong>
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <p className="text-lead">No one can enroll in Zuckerberg & Phelps without a sponsor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <h5 className="text-center welcome_vista font_family" style={{ color: '#439cd6' }}><b className="text-capitalize">Mining</b></h5>
                        <div className="accordion" id="Miningaccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingmining1">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseminingOne" aria-expanded="true" aria-controls="collapseminingOne">
                                        <strong> How can I get help with my HP1000 Infinity miner? </strong>
                                    </button>
                                </h2>
                                <div id="collapseminingOne" className="accordion-collapse collapse" aria-labelledby="headingmining1" >
                                    <div className="accordion-body">
                                        <p className="text-lead">Submit a support ticket from your back office and the mining support team will help you. We also have a Telegram mining chat room to receive support.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Question 2 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingMining2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMining2" aria-expanded="true" aria-controls="collapseMining2">
                                        <strong>Are there tutorial videos to show me how to set up my HP1000 Infinity Miner ?</strong>
                                    </button>
                                </h2>
                                <div id="collapseMining2" className="accordion-collapse collapse" aria-labelledby="headingMining2" >
                                    <div className="accordion-body">
                                        <p className="text-lead">YES, there are a couple short setup videos which show the basic steps.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Question 3 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingmining3">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsemining3" aria-expanded="true" aria-controls="collapsemining3">
                                        <strong>  IF the power goes out and then comes back on, will the HP1000 IM start back up on it's own and begin mining ?</strong>
                                    </button>
                                </h2>
                                <div id="collapsemining3" className="accordion-collapse collapse" aria-labelledby="headingmining3" >
                                    <div className="accordion-body">
                                        <p className="text-lead">  It is ALWAYS BEST to check your HP1000 IM on a regular basis to ensure it is still mining. The mining support chat room is also a place you need to be involved with for support and updates.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Question 4 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingmining4">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsemining4" aria-expanded="true" aria-controls="collapsemining4">
                                        <strong> Why do others have a higher hash rate than my machine is showing ? </strong>
                                    </button>
                                </h2>
                                <div id="collapsemining4" className="accordion-collapse collapse" aria-labelledby="headingmining4" >
                                    <div className="accordion-body">
                                        <p className="text-lead">There are a few reasons such as internet speed, when your machine connected to the pool, components installed at the time assembled, etc.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Question 5 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingmining5">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsemining5" aria-expanded="true" aria-controls="collapsemining5">
                                        <strong> Are ALL the machines custom built ?</strong>
                                    </button>
                                </h2>
                                <div id="collapsemining5" className="accordion-collapse collapse" aria-labelledby="headingmining5" >
                                    <div className="accordion-body">
                                        <p className="text-lead"> ALL machines are currently hand built and carefully tested before shipping out to the Member. </p>
                                    </div>
                                </div>
                            </div>
                            {/* Question 6*/}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingmining6">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsemining6" aria-expanded="true" aria-controls="collapsemining6">
                                        <strong> Our machines are being accessed remotely by Zuckerberg & Phelps Tech Support, how safe is this practice?</strong>
                                    </button>
                                </h2>
                                <div id="collapsemining6" className="accordion-collapse collapse" aria-labelledby="headingmining6" >
                                    <div className="accordion-body">
                                        <p className="text-lead"> The Zuckerberg & Phelps Tech Support TEAM is ALL ABOUT SECURITY and protecting Zuckerberg & Phelps as well as You and your HP1000 IM. &nbsp;They use a SECURE ENCRYPTED means of access to your &nbsp;Machine remotely. They will give you detailed instructions on what to do and look for. </p>
                                    </div>
                                </div>
                            </div>
                            {/* Question 7 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingmining7">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsemining7" aria-expanded="true" aria-controls="collapsemining7">
                                        <strong> How can I see if my HP1000 is “ACTIVE” in the back office? </strong>
                                    </button>
                                </h2>
                                <div id="collapsemining7" className="accordion-collapse collapse" aria-labelledby="headingmining7" >
                                    <div className="accordion-body">
                                        <p className="text-lead"> Log into your back office, go to Network, scroll down and select Device Settings, Under the Status, it will show GREEN and say “ACTIVE” </p>
                                    </div>
                                </div>
                            </div>
                            {/* Question 8 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingmining8">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsemining8" aria-expanded="true" aria-controls="collapsemining8">
                                        <strong>How can I see my mining commissions? </strong>
                                    </button>
                                </h2>
                                <div id="collapsemining8" className="accordion-collapse collapse" aria-labelledby="headingmining8" >
                                    <div className="accordion-body">
                                        <p className="text-lead"> Log into your back office, go to Earnings, select “Daily Mining Commissions” </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <h5 className="text-center welcome_vista font_family" style={{ color: '#439cd6' }}><b className="text-capitalize">BackOffice</b></h5>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="accordion" id="accordionExample">
                                {/* next Question 6 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            <strong>  How do I access my Zuckerberg & Phelps account? ( from a previous account on the Zuckerberg & Phelps website ) </strong>
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" >
                                        <div className="accordion-body">
                                            <p className="text-lead">Go to Zuckerberg & Phelps main website, click on log in, click on forgot password, use the "original" email you had used for that account,&nbsp;(your username should be in the password reset email as well)&nbsp;follow the steps to gain access to your new Zuckerberg & Phelps back office.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* next Question 7 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading7">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                            <strong>  What if I am an active member and having difficulty accessing my account ? </strong>
                                        </button>
                                    </h2>
                                    <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" >
                                        <div className="accordion-body">
                                            <ol>
                                                <li>Check with your sponsor or another member to see if they can access their account</li>
                                                &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; <li>Ask if Zuckerberg & Phelps is having work done to the back office and the site is under maintenance</li>
                                                <li>Check the Telegram chat rooms for any updates that may be posted there</li>
                                                <li>Ask for help in the Zuckerberg & Phelps Q &amp; A chat room</li>
                                                <li>IF you are still having difficulty, send an email to Login3.0@zuckerbergphelps.io</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                {/* Question 8*/}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading8">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                            <strong>  Can I place someone in a specific position on my binary ? </strong>
                                        </button>
                                    </h2>
                                    <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" >
                                        <div className="accordion-body">
                                            Yes, through your back office genealogy link
                                        </div>
                                    </div>
                                </div>
                                {/* Question 9 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading9">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                            <strong>  May I purchase more than one HPLP Package ?</strong>
                                        </button>
                                    </h2>
                                    <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" >
                                        <div className="accordion-body">
                                            Yes &nbsp; NOTE : Certain rules may apply
                                        </div>
                                    </div>
                                </div>
                                {/* Question 10 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading10">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                                            <strong>  What if I have a problem in my back office ?</strong>
                                        </button>
                                    </h2>
                                    <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10" >
                                        <div className="accordion-body">
                                            Submit a support ticket to get assistance.
                                        </div>
                                    </div>
                                </div>
                                {/* Question 11 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading11">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                                            <strong>  Can I move someone to another position after they have enrolled ?</strong>
                                        </button>
                                    </h2>
                                    <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11" >
                                        <div className="accordion-body">
                                            No
                                        </div>
                                    </div>
                                </div>
                                {/* Question 12 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading12">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                            <strong>  How do I transfer funds to another Zuckerberg & Phelps Club Member ?</strong>
                                        </button>
                                    </h2>
                                    <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12" >
                                        <div className="accordion-body">
                                            Log into your back office, go to E-Wallet, scroll down and select Transfer Funds, Enter the username, email, and amount to send, then send.
                                        </div>
                                    </div>
                                </div>
                                {/* Question 13 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading13">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                                            <strong>  How do I change my Bitcoin Wallet address ?</strong>
                                        </button>
                                    </h2>
                                    <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13" >
                                        <div className="accordion-body">
                                            Log into your back office, go to E-Wallet, select withdrawal wallet address, Enter your Bitcoin wallet address, confirm, and save.
                                        </div>
                                    </div>
                                </div>
                                {/* Question 14 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading14">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                                            <strong>   Where can I find my Bonus Coin Balance ?</strong>
                                        </button>
                                    </h2>
                                    <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="heading14" >
                                        <div className="accordion-body">
                                            Log into your back office, go to E-Wallet, select E-Wallet summary, scroll down And look for the Bonus Coin Balance on the left hand side.
                                        </div>
                                    </div>
                                </div>
                                {/* Question 15 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading15">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                                            <strong>  Where can I see my Commission Balance ? </strong>
                                        </button>
                                    </h2>
                                    <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="heading15" >
                                        <div className="accordion-body">
                                            Log into your back office, go to E-Wallet, select E-Wallet summary.
                                        </div>
                                    </div>
                                </div>
                                {/* Question 16 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading16">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
                                            <strong>  Where can I find my Deposit History ?</strong>
                                        </button>
                                    </h2>
                                    <div id="collapse16" className="accordion-collapse collapse" aria-labelledby="heading16" >
                                        <div className="accordion-body">
                                            Log into your back office, go to E-Wallet, select Fund Transactions.
                                        </div>
                                    </div>
                                </div>
                                {/* Question 17 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading17">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                                            <strong>  Where can I see my Milestone Progress ? </strong>
                                        </button>
                                    </h2>
                                    <div id="collapse17" className="accordion-collapse collapse" aria-labelledby="heading17" >
                                        <div className="accordion-body">
                                            <ol>
                                                <li>Log into your back office, while on the main dashboard, scroll down And see your Milestone Progress</li>
                                                &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; <li>Log into your back office, go to HPLP, select HPLP Analytics to see A more detailed Milestone Progress Overview</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                {/* Question 18*/}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading18">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
                                            <strong>   Where can I view my Daily Reward Points ? </strong>
                                        </button>
                                    </h2>
                                    <div id="collapse18" className="accordion-collapse collapse" aria-labelledby="heading18" >
                                        <div className="accordion-body">
                                            Log into your back office, go to Earnings, select HPLP Daily Rewards.
                                        </div>
                                    </div>
                                </div>
                                {/* Question 19*/}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading19">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
                                            <strong>  How can I know my account has been upgraded as a Zuckerberg & Phelps Club Member ? </strong>
                                        </button>
                                    </h2>
                                    <div id="collapse19" className="accordion-collapse collapse" aria-labelledby="heading19" >
                                        <div className="accordion-body">
                                            Log into your back office, while on the main dashboard, look to the upper Right hand side under you wallet balance, it should say “Premium Member”
                                        </div>
                                    </div>
                                </div>
                                {/* Question 20 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading20">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
                                            <strong>  How can I know my account has been upgraded as a Zuckerberg & Phelps Club Member ? </strong>
                                        </button>
                                    </h2>
                                    <div id="collapse20" className="accordion-collapse collapse" aria-labelledby="heading20" >
                                        <div className="accordion-body">
                                            Log into your back office, while on the main dashboard, look to the upper Right hand side under you wallet balance, it should say “Premium Member”
                                        </div>
                                    </div>
                                </div>
                                {/* Question 21 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading21">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse21" aria-expanded="false" aria-controls="collapse21">
                                            <strong>  How can I check my Referral Commissions ? </strong>
                                        </button>
                                    </h2>
                                    <div id="collapse21" className="accordion-collapse collapse" aria-labelledby="heading21" >
                                        <div className="accordion-body">
                                            Log into your back office, go to Earnings, select Referral Commissions.
                                        </div>
                                    </div>
                                </div>
                                {/* Question 22*/}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading22">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse22" aria-expanded="false" aria-controls="collapse22">
                                            <strong>  How do I upgrade to a Zuckerberg & Phelps Club Member? </strong>
                                        </button>
                                    </h2>
                                    <div id="collapse22" className="accordion-collapse collapse" aria-labelledby="heading22" >
                                        <div className="accordion-body">
                                            Log into your back office, go to Network, select “Club Membership”, Complete the transaction using funds from your E-Wallet Balance.
                                        </div>
                                    </div>
                                </div>
                                {/* Question 23*/}
                                
                            </div>
                            <br/>
                            <br/>
                        <h5 className="text-center welcome_vista font_family" style={{ color: '#439cd6' }}><b className="text-capitalize">Wallets for Cryptocurrency</b></h5>
                        <div className="accordion" id="walletaccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="walletOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#walletcollapseOne" aria-expanded="true" aria-controls="walletcollapseOne">
                                        <strong>Can you recommend a good, safe and easy wallet to use for a new person just getting started ? </strong>
                                    </button>
                                </h2>
                                <div id="walletcollapseOne" className="accordion-collapse collapse" aria-labelledby="walletheadingOne" >
                                    <div className="accordion-body">
                                        <ol>
                                            <li>Exodus</li>&nbsp;&nbsp;
                                            <li>Coinbase</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="walletheadingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#walletcollapseTwo" aria-expanded="false" aria-controls="walletcollapseTwo">
                                        <strong> Do you have tutorial videos to help us learn and use the wallet's you recommend ?</strong>
                                    </button>
                                </h2>
                                <div id="walletcollapseTwo" className="accordion-collapse collapse" aria-labelledby="walletheadingTwo" >
                                    <div className="accordion-body">
                                        <p className="text-lead">
                                            Each wallet provides their own tutorial videos you can find on their website usually under media or tutorials.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="walletheading3">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#walletcollapse3" aria-expanded="false" aria-controls="walletcollapse3">
                                        <strong> Are there specific wallet's designed for Android and Apple phones ?</strong>
                                    </button>
                                </h2>
                                <div id="walletcollapse3" className="accordion-collapse collapse" aria-labelledby="walletheading3" >
                                    <div className="accordion-body">
                                        <p className="text-lead">
                                            Most wallets are already set up in both systems ready for use.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <br/>
                        <br/>
                    </div>
                    {/***********************  Column 2  ************************************ */}
                    <div className="col-sm-12 col-md-6 col-lg-6 mt-3">
                        <h5 className="text-center welcome_vista font_family" style={{ color: '#439cd6' }}><b className="text-capitalize">Company</b></h5>
                        <div className="accordion" id="Companyaccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingcompany1">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsecompanyOne" aria-expanded="true" aria-controls="collapsecompanyOne">
                                        <strong> Where is Zuckerberg & Phelps located ?</strong>
                                    </button>
                                </h2>
                                <div id="collapsecompanyOne" className="accordion-collapse collapse " aria-labelledby="headingcompany1" >
                                    <div className="accordion-body">
                                        <p className="text-lead">The Technology side of Zuckerberg & Phelps is located in Palo Alto, California and the marketing arm is located in Hollywood, California.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Question 2 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingcompany2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsecompany2" aria-expanded="true" aria-controls="collapsecompany2">
                                        <strong>Who are the founders of Zuckerberg & Phelps ? </strong>
                                    </button>
                                </h2>
                                <div id="collapsecompany2" className="accordion-collapse collapse" aria-labelledby="headingcompany2" >
                                    <div className="accordion-body">
                                        <p className="text-lead">Penelope Zuckerberg and Prudence Phelps.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Question 3 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingcompany3">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsecompany3" aria-expanded="true" aria-controls="collapsecompany3">
                                        <strong> Are ALL the Miners made by Zuckerberg & Phelps ?</strong>
                                    </button>
                                </h2>
                                <div id="collapsecompany3" className="accordion-collapse collapse" aria-labelledby="headingcompany3" >
                                    <div className="accordion-body">
                                        <p className="text-lead">  YES, assembled in Taiwan.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Question 4 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingcompany4">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsecompany4" aria-expanded="true" aria-controls="collapsecompany4">
                                        <strong> Does Zuckerberg & Phelps have their own cryptocurrency coin? </strong>
                                    </button>
                                </h2>
                                <div id="collapsecompany4" className="accordion-collapse collapse" aria-labelledby="headingcompany4" >
                                    <div className="accordion-body">
                                        <p className="text-lead">No, we remain neutral in the market.</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Question 6*/}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingcompany6">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsecompany6" aria-expanded="true" aria-controls="collapsecompany6">
                                        <strong> Approximately how many employees are currently with Zuckerberg & Phelps ? </strong>
                                    </button>
                                </h2>
                                <div id="collapsecompany6" className="accordion-collapse collapse" aria-labelledby="headingcompany6" >
                                    <div className="accordion-body">
                                        <p className="text-lead"> 30 </p>
                                    </div>
                                </div>
                            </div>
                            {/* Question 7 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingcompany7">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsecompany7" aria-expanded="true" aria-controls="collapsecompany7">
                                        <strong> How many countries are currently represented by members with Zuckerberg & Phelps ? </strong>
                                    </button>
                                </h2>
                                <div id="collapsecompany7" className="accordion-collapse collapse" aria-labelledby="headingcompany7" >
                                    <div className="accordion-body">
                                        <p className="text-lead"> 40 PLUS</p>
                                    </div>
                                </div>
                            </div>
                            {/* Question 8 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingcompany8">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsecompany8" aria-expanded="true" aria-controls="collapsecompany8">
                                        <strong> When was the company founded ?</strong>
                                    </button>
                                </h2>
                                <div id="collapsecompany8" className="accordion-collapse collapse" aria-labelledby="headingcompany8" >
                                    <div className="accordion-body">
                                        <p className="text-lead"> 2017 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <h5 className="text-center welcome_vista font_family" style={{ color: '#439cd6' }}><b className="text-capitalize">Financial</b></h5>
                        <div className="accordion" id="Financialaccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="FinancialheadingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FinancialcollapseOne" aria-expanded="true" aria-controls="FinancialcollapseOne">
                                        <strong> How can I see the Binary Sales Volume in either my left or right leg ?</strong>
                                    </button>
                                </h2>
                                <div id="FinancialcollapseOne" className="accordion-collapse collapse" aria-labelledby="FinancialheadingOne" >
                                    <div className="accordion-body">
                                        <p className="text-lead">Log into your back office, while on the main dashboard, scroll down to the Binary Sales Chart / Graph.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="FinancialheadingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FinancialcollapseTwo" aria-expanded="false" aria-controls="FinancialcollapseTwo">
                                        <strong> How do I deposit funds into my account E-Wallet using the “Deposit funds Via check method” ? </strong>
                                    </button>
                                </h2>
                                <div id="FinancialcollapseTwo" className="accordion-collapse collapse" aria-labelledby="FinancialheadingTwo" >
                                    <div className="accordion-body">
                                        <b>Option 1: DIRECT DEPOSIT</b>
                                        <ol>
                                            <li>
                                                Log into your back office
                                            </li>
                                            <li>
                                                Go to Finance
                                            </li>
                                            <li>
                                                &nbsp;Select “Pay via check”
                                            </li>
                                            <li>
                                                &nbsp;Write down the information needed to make the deposit
                                            </li>
                                            <li>
                                                Go to Bank Of America
                                            </li>
                                            <li>
                                                &nbsp;Fill out the deposit slip with the correct information
                                            </li>
                                            <li>
                                                Deposit funds into the Corporate Bank of America account
                                            </li>
                                            <li>
                                                Make sure you receive the Deposit slip from the bank teller
                                            </li>
                                            <li>
                                                Log into your back office again, go to finance, select “Pay via check”
                                            </li>
                                            <li>
                                                &nbsp;Enter the EXACT AMOUNT of funds you deposited
                                            </li>
                                            <li>
                                                Look for the CC # on the deposit slip receipt the bank teller gave you and ENTER the CC # in the NOTE section
                                            </li>
                                            <li>
                                                Select the Direct Deposit option
                                            </li>
                                            <li>
                                                Click on the Submit Button
                                            </li>
                                        </ol>
                                        <b>Option 2: MAIL CHECK TO CORPORATE OFFICE</b>
                                        <ol>
                                            <li>
                                                Log into your back office
                                            </li>
                                            <li>
                                                Go to Finance
                                            </li>
                                            <li>
                                                Select “Pay via check”
                                            </li>
                                            <li>
                                                Write down the information needed to mail your check
                                            </li>
                                            <li>
                                                Enter the EXACT AMOUNT of your check
                                            </li>
                                            <li>
                                                Enter the check number
                                            </li>
                                            <li>
                                                Select “Mail the check”
                                            </li>
                                            <li>
                                                Click on the Submit Button
                                            </li>
                                            <li>
                                                Mail your check to the Corproate Office
                                            </li>
                                        </ol>
                                        <b className="text-danger">NOTE : &nbsp;This option will take a while to complete and see the funds available
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;In your back office E-Wallet</b>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="FinancialheadingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#FinancialcollapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <strong>  How do I transfer funds to another Zuckerberg & Phelps Club Member ? </strong>
                                    </button>
                                </h2>
                                <div id="FinancialcollapseThree" className="accordion-collapse collapse" aria-labelledby="FinancialheadingThree" >
                                    <div className="accordion-body">
                                        Log into your back office, go to E-Wallet, scroll down and select Transfer Funds, Enter the username, email, and amount to send, then send submit button.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <h5 className="text-center welcome_vista font_family" style={{ color: '#439cd6' }}><b className="text-capitalize">Technical</b></h5>
                        <div className="accordion" id="techaccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="techOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#techcollapseOne" aria-expanded="true" aria-controls="techcollapseOne">
                                        <strong> What is the average cost per month to run my HP1000 Infinity miner ?</strong>
                                    </button>
                                </h2>
                                <div id="techcollapseOne" className="accordion-collapse collapse " aria-labelledby="techheadingOne" >
                                    <div className="accordion-body">
                                        $5 - $20 Depending on your electrical supplier.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="techheadingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#techcollapseTwo" aria-expanded="false" aria-controls="techcollapseTwo">
                                        <strong> Is there a way to easily turn off the lights ?</strong>
                                    </button>
                                </h2>
                                <div id="techcollapseTwo" className="accordion-collapse collapse" aria-labelledby="techheadingTwo" >
                                    <div className="accordion-body">
                                        <p className="text-lead"> NO - this has been asked by many members and being considered as a feature each member can control.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="techheadingthree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#techcollapseThree" aria-expanded="false" aria-controls="techcollapseThree">
                                        <strong> Are ALL the machines custom built ?</strong>
                                    </button>
                                </h2>
                                <div id="techcollapseThree" className="accordion-collapse collapse" aria-labelledby="techheadingthree" >
                                    <div className="accordion-body">
                                        <p className="text-lead"> ALL machines are currently hand built and carefully tested before shipping out to the member.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="techheadingfour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#techcollapsefour" aria-expanded="false" aria-controls="techcollapsefour">
                                        <strong> Our machines are being accessed remotely by Zuckerberg & Phelps Tech Support, how safe is this practice ?</strong>
                                    </button>
                                </h2>
                                <div id="techcollapsefour" className="accordion-collapse collapse" aria-labelledby="techheadingfour" data-bs-parent="#techheadingfour">
                                    <div className="accordion-body">
                                        <p className="text-lead">  The Zuckerberg & Phelps Tech Support TEAM is ALL ABOUT SECURITY and protecting Zuckerberg & Phelps as well as you and your HP1000 IM. &nbsp;They use a SECURE ENCRYPTED means of access to your machine remotely. They will give you detailed instructions on what to do and look for.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        
                        <h5 className="text-center welcome_vista font_family" style={{ color: '#439cd6' }}><b className="text-capitalize">Product</b></h5>
                        <div className="accordion" id="Productaccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="ProductOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ProductcollapseOne" aria-expanded="true" aria-controls="ProductcollapseOne">
                                        <strong>  Is the HP1000 just for mining ? </strong>
                                    </button>
                                </h2>
                                <div id="ProductcollapseOne" className="accordion-collapse collapse " aria-labelledby="ProductheadingOne" >
                                    <div className="accordion-body">
                                        <p className="text-lead">NO - It is also a complete computer &amp; capable of gaming, or watching a movie while it is mining.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="ProductheadingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ProductcollapseTwo" aria-expanded="false" aria-controls="ProductcollapseTwo">
                                        <strong> How often should I re-boot my HP1000 IM to refresh the system ? </strong>
                                    </button>
                                </h2>
                                <div id="ProductcollapseTwo" className="accordion-collapse collapse" aria-labelledby="ProductheadingTwo" >
                                    <div className="accordion-body">
                                        <p className="text-lead"> It has been recommended to perform this approximately once a week to keep your HP1000 IM at PEAK performance.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="ProductheadingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ProductcollapseThree" aria-expanded="false" aria-controls="ProductcollapseThree">
                                        <strong>  How often should I dust out the machine with a spray can of clean compressed air ?</strong>
                                    </button>
                                </h2>
                                <div id="ProductcollapseThree" className="accordion-collapse collapse" aria-labelledby="ProductheadingThree" >
                                    <div className="accordion-body">
                                        As often as needed to keep your system clean. &nbsp;The majority of members perform this when they shut down their system, turn the power off to the system ( some unplug it ) and quickly blow the dust out with a spray can of clean compressed air. &nbsp;Once that is done, power your machine back up and click on the mining icon to begin mining.
                                    </div>
                                </div>
                            </div>
                            {/* next Question 4 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="ProductheadingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ProductcollapseFour" aria-expanded="false" aria-controls="ProductcollapseFour">
                                        <strong>   What are the dimensions of the HP1000 IM ?</strong>
                                    </button>
                                </h2>
                                <div id="ProductcollapseFour" className="accordion-collapse collapse" aria-labelledby="ProductheadingFour" >
                                    <div className="accordion-body">
                                        Height = 10 7/8" &nbsp;Length = 12 1/2" &nbsp; Width = 10 1/4"
                                    </div>
                                </div>
                            </div>
                            {/* next Question 5 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="ProductheadingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ProductcollapseFive" aria-expanded="false" aria-controls="ProductcollapseFive">
                                        <strong>  What if my machine is making a loud unusual noise ?</strong>
                                    </button>
                                </h2>
                                <div id="ProductcollapseFive" className="accordion-collapse collapse" aria-labelledby="ProductheadingFive" >
                                    <div className="accordion-body">
                                        <p className="text-lead">Submit a support ticket and ask for help in the mining support chat room.</p>
                                    </div>
                                </div>
                            </div>
                            {/* next Question 6 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="Productheading6">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Productcollapse6" aria-expanded="false" aria-controls="Productcollapse6">
                                        <strong>  What is the average cost per month to run my HP1000 IM ?</strong>
                                    </button>
                                </h2>
                                <div id="Productcollapse6" className="accordion-collapse collapse" aria-labelledby="Productheading6" >
                                    <div className="accordion-body">
                                        $5 - $20 Depending on your electrical supplier.
                                        <p>
                                            <b>Helpful tips&nbsp;:</b>
                                        </p><ol>
                                            <li>It is&nbsp;<b>HIGHLY RECOMMENDED</b>&nbsp;...&nbsp;NOT&nbsp;...&nbsp;to use a vacuum to clean dust from your machine</li>
                                            <li>It is&nbsp;<b>HIGHLY RECOMMENDED</b> ...&nbsp;NOT&nbsp;...&nbsp;to use a vacuum to clean your carpet around your machine or plugged into an outlet on the same electrical circuit as your machine. ANY static electricity on or near your machine could have an adverse effect causing damage to your machine.</li>
                                        </ol>
                                        <p />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <h5 className="text-center welcome_vista font_family" style={{ color: '#439cd6' }}><b className="text-capitalize">Support</b></h5>
                        <div className="accordion" id="Supportaccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="SupportOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#SupportcollapseOne" aria-expanded="true" aria-controls="SupportcollapseOne">
                                        <strong> How can I get help with issues not covered in the FAQ's ? </strong>
                                    </button>
                                </h2>
                                <div id="SupportcollapseOne" className="accordion-collapse collapse" aria-labelledby="SupportheadingOne" >
                                    <div className="accordion-body">
                                        Submit a support ticket from your back office. If you have and use Telegram - Zuckerberg & Phelps has a Q &amp; A chat room set up to ask questions NOT already covered in the FAQ's
                                        <ol>
                                            <li>Contact your sponsor for help, they will know the majority of questions you will have.</li>
                                            <li>Download Telegram and ask to be a part of the chat groups</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="SupportheadingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#SupportcollapseTwo" aria-expanded="false" aria-controls="SupportcollapseTwo">
                                        <strong> How do I submit a support ticket for help ?</strong>
                                    </button>
                                </h2>
                                <div id="SupportcollapseTwo" className="accordion-collapse collapse" aria-labelledby="SupportheadingTwo" >
                                    <div className="accordion-body">
                                        <p className="text-lead"> Log into your back office, go to Support, select “New Ticket”, enter the subject, Enter what you need help with, and click on “Create Ticket” .</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="SupportheadingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#SupportcollapseThree" aria-expanded="false" aria-controls="SupportcollapseThree">
                                        <strong> How do I check on the status of my support ticket ?</strong>
                                    </button>
                                </h2>
                                <div id="SupportcollapseThree" className="accordion-collapse collapse" aria-labelledby="SupportheadingThree" >
                                    <div className="accordion-body">
                                        Log into your back office, go to Support, select “My Tickets” and look for the status And OR the reply from the Support TEAM.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <h5 className="text-center welcome_vista font_family" style={{ color: '#439cd6' }}><b className="text-capitalize">Taxes</b></h5>
                        <div className="accordion" id="taxesaccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="taxesOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#taxescollapseOne" aria-expanded="true" aria-controls="taxescollapseOne">
                                        <strong>Does Zuckerberg & Phelps currently offer any instructions / help to set-up and track our income / capital gains, expenses, etc. &nbsp;to be totally compliant in reporting taxes at the end of the year ? </strong>
                                    </button>
                                </h2>
                                <div id="taxescollapseOne" className="accordion-collapse collapse" aria-labelledby="taxesheadingOne" >
                                    <div className="accordion-body">
                                        EACH member in Zuckerberg & Phelps is responsible for their OWN tax reporting. &nbsp;Please seek professional help to be 100 % compliant with YOUR Government and State Laws.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="taxesheadingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#taxescollapseTwo" aria-expanded="false" aria-controls="taxescollapseTwo">
                                        <strong> Will I be taxed on monies earned ? </strong>
                                    </button>
                                </h2>
                                <div id="taxescollapseTwo" className="accordion-collapse collapse" aria-labelledby="taxesheadingTwo" >
                                    <div className="accordion-body">
                                        <p className="text-lead">  Please seek professional help from your accountant or tax adviser to be 100 % compliant with YOUR Government and State Laws .</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <h5 className="text-center welcome_vista font_family" style={{ color: '#439cd6' }}><b className="text-capitalize">Training</b></h5>
                        <div className="accordion" id="traingaccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="traingheadingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#traingcollapseTwo" aria-expanded="false" aria-controls="traingcollapseTwo">
                                        <strong> Are there training videos to help me navigate the back office ?</strong>
                                    </button>
                                </h2>
                                <div id="traingcollapseTwo" className="accordion-collapse collapse" aria-labelledby="traingheadingTwo" >
                                    <div className="accordion-body">
                                        <p className="text-lead">   Zuckerberg & Phelps has videos created and approved by corporate for this Purpose.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="traingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#traingcollapseOne" aria-expanded="true" aria-controls="traingcollapseOne">
                                        <strong> What other ways can I educate myself to be a better sponsor for my team ? </strong>
                                    </button>
                                </h2>
                                <div id="traingcollapseOne" className="accordion-collapse collapse" aria-labelledby="traingheadingOne" >
                                    <div className="accordion-body">
                                        Be an active part of ALL help resources Zuckerberg & Phelps has to help you
                                        &nbsp;               <ol>
                                            <li>Attend the webinar's, pay attention, soak in the information, and follow directions</li>
                                            &nbsp; &nbsp;&nbsp;            <li>Take notes while on the webinar so you will have answers for your team</li>
                                            &nbsp; &nbsp;&nbsp;<li>Join the chat rooms for support - we are here to help everyone</li>
                                            &nbsp; &nbsp;&nbsp;<li>Ask questions - this not only helps you, but also could bring up areas that need attention </li>
                                        </ol>
                                        <b>NOTE :</b>
                                        <p>
                                            ALWAYS look to see if your question has already been addressed or answered before asking, check&nbsp;ALL&nbsp;Zuckerberg & Phelps&nbsp;FAQ's, ask your sponsor, check in the chat rooms, check the website, look in your back office, check any notes you took from the webinar, etc.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="traingheadingthree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#traingcollapseThree" aria-expanded="false" aria-controls="traingcollapseThree">
                                        <strong> If I (or someone interested in Zuckerberg & Phelps) have questions concerning the compensation plan slides / presentation, where do I BEST ask those questions ?</strong>
                                    </button>
                                </h2>
                                <div id="traingcollapseThree" className="accordion-collapse collapse" aria-labelledby="traingheadingthree" >
                                    <div className="accordion-body">
                                        <p className="text-lead">  ALWAYS refer to the person who sponsored you for help. You can also go to the dashboard in your back office and click on the question mark next to the TEAM PERFORMANCE located on the right hand side of the screen.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <h5 className="text-center welcome_vista font_family" style={{ color: '#439cd6' }}><b className="text-capitalize">Website</b></h5>
                        <div className="accordion" id="websiteaccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="websiteheadingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#websitecollapseTwo" aria-expanded="false" aria-controls="websitecollapseTwo">
                                        <strong>Can I enroll someone on the Zuckerberg & Phelps main website for them, and let them take it from there ?</strong>
                                    </button>
                                </h2>
                                <div id="websitecollapseTwo" className="accordion-collapse collapse" aria-labelledby="websiteheadingTwo" >
                                    <div className="accordion-body">
                                        <p className="text-lead">      YES </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="websiteOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#websitecollapseOne" aria-expanded="true" aria-controls="websitecollapseOne">
                                        <strong>  When I try to register it is asking for a Bitcoin wallet address and I do not currently have one ? </strong>
                                    </button>
                                </h2>
                                <div id="websitecollapseOne" className="accordion-collapse collapse" aria-labelledby="websiteheadingOne" >
                                    <div className="accordion-body">
                                        As a temporary solution, you can type a few letters and numbers ( example : TbaL489 ) and later change it to your real Bitcoin address once you have acquired one.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="websiteheadingthree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#websitecollapseThree" aria-expanded="false" aria-controls="websitecollapseThree">
                                        <strong>  What is the BEST email address to use for my account ?</strong>
                                    </button>
                                </h2>
                                <div id="websitecollapseThree" className="accordion-collapse collapse" aria-labelledby="websiteheadingthree" >
                                    <div className="accordion-body">
                                        <p className="text-lead"> The one you use the Most and works well with Zuckerberg & Phelps.  Most members are using a Gmail account, though it is your choice.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="websiteheading4">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#websitecollapse4" aria-expanded="false" aria-controls="websitecollapse4">
                                        <strong>  I am trying to register and do not know my sponsor's username ?</strong>
                                    </button>
                                </h2>
                                <div id="websitecollapse4" className="accordion-collapse collapse" aria-labelledby="websiteheading4" >
                                    <div className="accordion-body">
                                        <p className="text-lead">You will need to contact your sponsor and obtain their username to complete your registration.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="websiteheading5">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#websitecollapse5" aria-expanded="false" aria-controls="websitecollapse5">
                                        <strong>  What is the MAIN URL for the Zuckerberg & Phelps website ?</strong>
                                    </button>
                                </h2>
                                <div id="websitecollapse5" className="accordion-collapse collapse" aria-labelledby="websiteheading5" >
                                    <div className="accordion-body">
                                        <p className="text-lead">https://zuckerbergphelps.io</p>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FAQs;