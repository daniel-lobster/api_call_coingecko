
function Register() {
      return (
        <div>
          <style dangerouslySetInnerHTML={{__html: "\n    .disabled{\n        pointer-events: none;\n    }\n    .li_text_navbar{\n        color: #439cd6;\n    }\n" }} />
          <style dangerouslySetInnerHTML={{__html: "\n            .referral_text{\n                transform: translateY(0px);\n                animation: float_text 6s ease-in-out infinite;\n            }\n            @keyframes  float_text {\n                  0%{\n                      transform: translateY(0px);\n                  }\n                50%{\n                    transform: translateY(-20px);\n                }\n                100%{\n                    transform: translateY(0px);\n                }\n            }\n            @media (min-width: 1600px) and (max-width: 5000px){\n                .footer_section{\n                    \n                    width: 100vw;\n                    bottom: 0;\n                }\n            }\n            .getStarted_section{\n                background-color:aliceblue;\n                border-top: 1px solid #439cd6;\n            }\n\n        " }} />
          <style dangerouslySetInnerHTML={{__html: "\n        .create_account{\n            width: 100%;\n            text-align: center;\n            border-bottom: 1px solid #000;\n            line-height: 0.1em;\n            margin: 50px 0 20px;\n        }\n        .create_account span {\n            background:#fff;\n            padding:0 10px;\n        }\n        .create_account_text{\n            background-color: #439cd6;\n            border: none;\n        }\n        .create_account_border{\n            border: 2px solid #439cd6;\n        }\n        .create_account_border:focus{\n            border-color: #439cd6;\n            box-shadow: none;\n        }\n        .check_btn{\n            background-color: #439cd6;\n        }\n        .check_btn:focus{\n            box-shadow: none\n        }\n        .create_account_check{\n            border: 3px solid  #439cd6;\n        }\n        .create_account_check:focus{\n            border: #439cd6;\n            box-shadow: #439cd6;\n        }\n\n    " }} />
          <section style={{backgroundImage: 'url("/images/auth.png")', marginTop: "9em", marginBottom: '-3em'}}>
            <div className="container">
              <div className="row">
                <div className="col-12" style={{backgroundImage: 'url("/images/auth_form.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                  <div className="row mt-5 d-flex justify-content-center">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="row">
                        <div className="col-sm-4 mx-auto">
                          <img src="/images/logo.png" className="logo_vista" alt="image of LOGO" style={{width:"10em"}}/>
                        </div>
                      </div>
                      <h2 className="text-center create_account font_family"><span>Create Account</span></h2>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2">
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 creat_account_hiddenable">
                      <h1 className="text-white font_family"><b>WELCOME</b></h1>
                      {/* <img src="/images/logo.png" className="img-fluid m-3" alt="image of LOGO" /> */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-9">
                      <form className="row g-3 p-5">
                        <input type="hidden" name="invite_code" defaultValue="Enter here" />
                        {/* User refferal name */}
                        <div className="col-sm-12 col-md-12">
                          <div className="input-group">
                            <div className="input-group-text text-white create_account_text">
                                <b>
                                    <i className="fas fa-search-dollar" />
                                </b>
                            </div>
                            <input type="text" className="form-control create_account_border input-lg" id="ref_name" name="referral" autoComplete="off" required data-validation-required-message="Referral/Sponsor field is required." title="Enter referral/sponsor username." placeholder="Enter referral/sponsor username" />
                          </div>
                          <small id="emailHelp" className="form-text text-muted">Enter your referral or sponsor username.</small>
                          <div id="ref">
                          </div>
                          <div className="help-block font-small-3" />
                        </div>
                        {/* USER FIRST NAME AND LAST NAME */}
                        <div className="col-sm-6 mt-4 {{ $errors->has('first_name') ? ' has-error' : '' }}">
                          <div className="input-group">
                            <div className="input-group-text text-white create_account_text"><b><i className="far fa-user-circle" /></b></div>
                            <input type="text" name="first_name" className="form-control create_account_border" id="inlineFormInputGroupUsername" placeholder="FIRST NAME" required data-validation-required-message="First name field is required." minLength={2} title="Enter your first name."  />
                          </div>
                          <small id="emailHelp" className="form-text text-muted">Only letters are allowed.</small>
                          <div className="help-block font-small-3" />
                        </div>
                        <div className="col-sm-6 mt-4 {{ $errors->has('last_name') ? ' has-error' : '' }}">
                          <div className="input-group">
                            <div className="input-group-text text-white create_account_text"><b><i className="far fa-user-circle" /></b></div>
                            <input type="text" name="last_name" className="form-control create_account_border" id="inlineFormInputGroupUsername" placeholder="LAST NAME" required data-validation-required-message="Last name field is required." minLength={2} title="Enter your last name." />
                          </div>
                          <small id="emailHelp" className="form-text text-muted">Only letters are allowed.</small>
                          <div className="help-block font-small-3" />
                        </div>
                        {/* uniquer user name and bitcoin wallet address */}
                        <div className="col-sm-6 mt-4 {{ $errors->has('username') ? ' has-error' : '' }}">
                          <div className="input-group">
                            <div className="input-group-text text-white create_account_text"><b><i className="fas fa-user-tie" /></b></div>
                            <input type="text" name="username" className="form-control create_account_border" id="inlineFormInputGroupUsername" placeholder="USERNAME" required data-validation-required-message="Username field is required." minLength={5} title="Enter your unique username." />
                          </div>
                          <small id="emailHelp" className="form-text text-muted">Enter unique username for your account.</small>
                          <div className="help-block font-small-3" />
                        </div>
                        <div className="col-sm-6 mt-4">
                          <div className="input-group">
                            <div className="input-group-text text-white create_account_text {{ $errors->has('bitcoin_wallet') ? ' has-error' : '' }}"><b><i className="fab fa-bitcoin" /></b></div>
                            <input type="text" name="bitcoin_wallet" className="form-control create_account_border" id="inlineFormInputGroupUsername" placeholder="BITCOIN  WALLET ADDRESS" required data-validation-required-message="Bitcoin wallet address field is required." minLength={20} title="Enter your bitcoin receiving wallet address." defaultValue="BITCOIN  WALLET ADDRESS" />
                          </div>
                          <small id="bitcoinwalletHelp" className="form-text text-muted">Enter Your Valid Bitcoin Wallet Address.</small>
                          <div className="help-block font-small-3" />
                        </div>
                        {/* Email Address */}
                        <div className="col-sm-12">
                          <div className="input-group">
                            <div className="input-group-text text-white create_account_text"><b><i className="far fa-envelope" /></b></div>
                            <input type="email" name="email" className="form-control create_account_border" id="inlineFormInputGroupUsername" placeholder="ENTER YOUR EMAIL" required data-validation-required-message="Email field is required." data-validation-regex-regex="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,8})$" data-validation-regex-message="Enter Valid Email" title="Enter your email address." />
                          </div>
                          <small id="emailHelp" className="form-text text-muted">Enter unique email for your account</small>
                        </div>
                        {/* user password and confirm password*/}
                        <div className="col-sm-6 mt-4">
                          <div className="input-group">
                            <div className="input-group-text text-white create_account_text"><b><i className="fas fa-lock" /></b></div>
                            <input type="password" name="password" className="form-control create_account_border" id="inlineFormInputGroupUsername" placeholder="PASSWORD" required data-validation-required-message="Password field is required." minLength={6} />
                          </div>
                          <small id="emailHelp" className="form-text text-muted">Password must contain at least 6 characters.</small>
                          <div className="help-block font-small-3" />
                        </div>
                        <div className="col-sm-6 mt-4">
                          <div className="input-group">
                            <div className="input-group-text text-white create_account_text"><b><i className="fas fa-lock" /></b></div>
                            <input type="password" autoComplete="off" name="password_confirmation" className="form-control create_account_border" id="password_confirmation" placeholder="CONFIRM PASSWORD" data-validation-matches-match="password" data-validation-matches-message="Password & Confirm Password must be the same." />
                            <div className="help-block font-small-3" />
                          </div>
                        </div>
                        {/* checkbox for getting confirmation */}
                        <div className="col-sm-2">
                          <div className="form-check">
                            <input className="form-check-input create_account_check chk-remember" type="checkbox" id="remember-me" name="terms" defaultValue="agree" required data-validation-required-message="This field is required." />
                            <label className="form-check-label" htmlFor="remember-me">
                                You agree to Vista's Terms and Conditions
                            </label>
                          </div>
                        </div>
                        {/* Register Button */}
                        <div className="col-sm-5 d-grid gap-2 mx-auto">
                          <button className="btn btn-block register_btn check_btn text-white font_family_para"><b>REGISTER</b></button>
                          <p className="text-center font_family_para"><b>Already have an account ? Login</b></p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        

        </div>
      )
    }
    export default Register;