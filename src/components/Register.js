
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Register() {
  const [output, setOutput] = useState("");
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password , setconfirm_password ]= useState("");
  const [gender , setGender]=useState('')

  const navigate= useNavigate()
  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (!username) {
      setOutput("Please enter your name.");
      return;
    }

    if (!email) {
      setOutput("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setOutput("Please enter a valid email address.");
      return;
    }

    

    if (!password) {
      setOutput("Please enter a password.");
      return;
    }
    if (!confirm_password) {
      setOutput("Please enter a confirm password.");
      return;
    }

    if (!gender) {
      setOutput("Please select gender.");
      return;
    }
    let userDetails = { username, email, password, confirm_password,gender };

    try {
      const response = await axios.post(
        "http://16.16.91.234:3003/api/signup",
        userDetails
      );




      
      
      

      if (response.data.token !== "error") {
        
        setOutput("User registered successfully.");
        setusername("");
        setEmail("");
        setPassword("");
        setconfirm_password("");
        setGender("");
      
      
      } else {
        setOutput(response.data.message);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.result === "false" &&
        error.response.data.message === "user allready registered, please go to login page.."
      ) {
        setOutput("The email is already registered. Please go to the login page.");
      } else {
        console.log(error);
      }
    }
  };
  

  return (
    <>
<Header/>
      <div class="login-main-body">
        <section className="login-main-wrapper">
          <div className="container-fluid pl-0 pr-0">
            <div className="row no-gutters">
              <div className="col-md-12 p-5 bg-white full-height">
                <div className="login-main-left">
                  <div className="text-center mb-5 login-main-left-header pt-4">
                    <img src="img/logo.png" className="img-fluid" alt="LOGO" />
                    <h5 className="mt-3 mb-3">Welcome to Yuonair</h5>
                  </div>
                  {output && <font style={{ color: "blue" }}>{output}</font>}
              <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>UserName</label>
                      <input type="text" className="form-control"   value={username}
                    onChange={(e) => setusername(e.target.value)} placeholder="Enter Username" />
                      <span className="form-validation" style={{ color: "red" }} ></span>
                      <span className="form-validation" style={{ color: "red" }} ></span>
                    </div>
                   
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" name="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}  placeholder="Enter email" />
                      <br /><span className="form-validation" style={{ color: "red" }}></span>
                      <span className="form-validation" style={{ color: "red" }}></span>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" name="password" value={password}
                    onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                      <br /><span className="form-validation" id='unicpass' style={{ color: "red" }}></span>

                    </div>
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input type="password" className="form-control" name="password2" value={confirm_password}
                    onChange={(e) => setconfirm_password(e.target.value)} placeholder="confirm Password" />
                      <br /><span className="form-validation" style={{ color: "red" }}></span>
                    </div>
                    <div className="form-group">
  <label>Gender</label>
  <select className="form-control" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
    <option value="">Select gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
  <br /><span className="form-validation" style={{ color: "red" }}></span>
</div>


                    <div className="mt-4">
                      <button type="submit" className="btn btn-outline btn-block btn-lg" style={{ backgroundColor: '#000080', color: 'white', borderRadius: '20px' }}>Sign Up</button>
                    </div>
                  </form>
                  <div className="text-center mt-5">
                    <p className="light-gray">Already have an Account? <Link to="/login">Sign In</Link></p>
                  </div>
                </div>
                {/* <Link className="oauth-container btn darken-4 white black-text" to="#" style={{ position: 'relative', left: '320px', marginBottom: '2px', marginRight: '8px', textTransform: 'none' }}>
                  <div className="left">
                    <img width="20px" alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" /> Sign Up
                    with Google
                  </div>
                </Link>
                <Link className="oauth-container btn darken-4 white black-text" to="#" style={{ position: 'relative', left: '420px', textTransform: 'none' }}>
                  <div className="left">
                    <img width="30px" style={{ marginBottom: '2px', marginRight: '2px' }} alt="Google sign-in" src="img/facebook.png" />Sign Up
                    with Facebook
                  </div>
                </Link> */}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>

    </>
  )
}

export default Register
