import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [output, setOutput] = useState();
  const [email, setEmail] = useState();

  
    const handleSubmit = (evt) => {
      evt.preventDefault();
      let userDetails = { email: email };
    
      axios
        .patch("http://16.16.91.234:3003/api/forget_password", userDetails)
        .then((response) => {
          if (response.data.result === "true") {
            setOutput("Password sent successfully. Please check your email.");
          } else {
            setOutput(response.data.message);
          }
          setEmail("");
        })
        .catch((err) => {
          console.log(err);
        });
    };
  return (
    <>
<Header/>
      <section className="login-main-wrapper">
        <div className="container-fluid pl-0 pr-0">
          <div className="row no-gutters">
            <div className="col-md-12 p-5 bg-white full-height">
              <div className="login-main-left">
                <div className="text-center mb-5 login-main-left-header pt-4">
                  <img src="img/logo.png" className="img-fluid" alt="LOGO" />
                  <h5 className="mt-3 mb-3">Reset Password</h5>
                  <p>
                    It is a long established fact that a reader <br /> will be
                    distracted by the readable.
                  </p>
                </div>
                <font style={{"color":"blue"}}>{output}</font>
<form onSubmit={handleSubmit} >
                  <div className="form-group">
                    <label>Enter Email </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="btn btn-outline-primary btn-block btn-lg"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                <div className="text-center mt-5">
                  <p className="light-gray">
                    Don’t have an account? <Link to="/register">Sign Up</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ForgotPassword;
