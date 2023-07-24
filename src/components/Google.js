import React, { useState, useEffect } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginSocialGoogle } from "reactjs-social-login";



function Google() {
  const navigate = useNavigate();
  const [output, setOutput] = useState("");
  const [getComment, setGetComment] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (profile) {
      sendToAPI();
    }
  }, [profile]);

  const sendToAPI = () => {
    let userDetails = {
      google_id: profile.sub,
      name: profile.name,
      email: profile.email,
      image_url: profile.picture,
    };

    axios
      .post("http://16.16.91.234:3003/api/google_login", userDetails)
      .then((response) => {
        setGetComment([response.data.data]);
        //console.log("responseasasasas", [response.data.data]);
        
        if (response.data.token !== "error") {
          localStorage.setItem("google_id", response.data.data[0].google_id);
          localStorage.setItem("name", response.data.data[0].name);
          localStorage.setItem("email", response.data.data[0].email);
          localStorage.setItem("_id", response.data.data[0]._id);
          localStorage.setItem("imageurl", response.data.data[0].image_url);

          response.data.data.role === "user" ? navigate("/") : navigate("/");
        } else {
          setOutput("Invalid user or verify your account....");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };




  return (
    <div>
      {!profile ? (
        <LoginSocialGoogle
        client_id="1004517911619-4bnuicmpd8p1g1c0kflgem4kuqofi8qo.apps.googleusercontent.com"
        
        redirect_uri={'/'}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={(response) => {
            //console.log(response);
            setProfile(response.data);
          }}
          onReject={(error) => {
            //console.log(error);
          }}
        >
        <GoogleLoginButton />
      </LoginSocialGoogle>
      ) : null}

      {profile ? (
        <div>
          <h1>{profile.name}</h1>
          <img src={profile.picture} alt="Profile" />
        </div>
      ) : null}

      <p>{output}</p>
    </div>
  );
}

export default Google;

