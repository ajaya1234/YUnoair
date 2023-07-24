// import React, { useState, useEffect } from "react";
// import { FacebookLoginButton } from "react-social-login-buttons";
// import { LoginSocialFacebook } from "reactjs-social-login";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Facebook() {
//   const navigate = useNavigate();
//   const [output, setOutput] = useState();
//   const [getcommt, setgetcomment] = useState([]);
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     if (profile) {
//       sendToAPI();
//     }
//   }, [profile]);

//   const sendToAPI = () => {
//     let userDetails = {
//       facebook_id: profile.id,
//       name: profile.name,
//       email: profile.email,
//       image_url: profile.picture.data.url,
//     };

//     axios
//       .post("http://16.16.91.234:3003/api/facebook_login", userDetails)
//       .then((response) => {
//         setgetcomment([response.data.data]);
//         console.log("responseasasasas", [response.data.data]);
        
//         if (response.data.token !== "error") {
//           localStorage.setItem("facebook_id", response.data.data[0].facebook_id);
//           localStorage.setItem("name", response.data.data[0].name);
//           localStorage.setItem("email", response.data.data[0].email);
//           localStorage.setItem("_id", response.data.data[0]._id);
//           localStorage.setItem("imageurl", response.data.data[0].image_url);

//           response.data.data.role === "user" ? navigate("/") : navigate("/");
//         } else {
//           setOutput("Invalid user or verify your account....");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       {!profile ? (
//         <LoginSocialFacebook
//           appId="155850857350566"
//           onResolve={(response) => {
//             console.log(response);
//             setProfile(response.data);
//           }}
//           onReject={(error) => {
//             console.log(error);
//           }}
//         >
//           <FacebookLoginButton />
//         </LoginSocialFacebook>
//       ) : (
//         ""
//       )}

//       {profile ? (
//         <div>
//           <h1>{profile.name}</h1>
//           <img src={profile.picture.data.url} alt="Profile" />
//         </div>
//       ) : (
//         ""
//       )}

//       <p>{output}</p>
//     </div>
//   );
// }

// export default Facebook;



import React, { useState, useEffect } from "react";
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Facebook() {
  const navigate = useNavigate();
  const [output, setOutput] = useState();
  const [getcommt, setgetcomment] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (profile) {
      sendToAPI();
    }
  }, [profile]);

  const sendToAPI = () => {
    let userDetails = {
      facebook_id: profile.id,
      firstName: profile.given_name,
      lastName : profile.family_name,
      email: profile.email,
      appImage_url: profile.picture.data.url,
    };
//console.log("sadasd",userDetails)
    axios
      .post("http://43.204.165.115:7077/api/user/login", userDetails)
      .then((response) => {
        setgetcomment([response.data.data]);
        //console.log("responseasasasas", [response.data.data]);
        
        if (response.data.token !== "error") {
          localStorage.setItem("facebook_id", response.data.data.facebook_id);
          localStorage.setItem("name", response.data.data.firstName);
          localStorage.setItem("name", response.data.data.lastName);
          localStorage.setItem("email", response.data.data.email);
          localStorage.setItem("_id", response.data.data.google_id);
          localStorage.setItem("imageurl", response.data.data.appImage_url);

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
        <LoginSocialFacebook
          appId="1692913744545353"
          onResolve={(response) => {
            //console.log(response);
            setProfile(response.data);
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      ) : (
        ""
      )}

      {profile ? (
        <div>
          <h1>{profile.name}</h1>
          <img src={profile.picture.data.url} alt="Profile" />
        </div>
      ) : (
        ""
      )}

      <p>{output}</p>
    </div>
  );
}

export default Facebook;

