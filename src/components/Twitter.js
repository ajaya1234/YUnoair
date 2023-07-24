// import React, { useState, useEffect } from "react";
// import { TwitterLoginButton } from "react-social-login-buttons";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { LoginSocialTwitter } from "reactjs-social-login";



// function Twitter() {
//   const navigate = useNavigate();
//   const [output, setOutput] = useState("");
//   const [getComment, setGetComment] = useState([]);
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     if (profile) {
//       sendToAPI();
//     }
//   }, [profile]);

//   const sendToAPI = () => {
//     let userDetails = {
//       twitter_id: profile.twitterId,
//       name: profile.name,
//       email: profile.email,
//       image_url: profile.imageUrl,
//     };

//     axios
//       .post("http://16.16.91.234:3003/api/twitter_login", userDetails)
//       .then((response) => {
//         setGetComment([response.data]);
//         console.log("response of ggole login", [response.data]);

//         if (response.data.token !== "error") {
//           const data = response.data.data[0];
//           localStorage.setItem("twitter_id", data.twitter_id);
//           localStorage.setItem("name", data.name);
//           localStorage.setItem("email", data.email);
//           localStorage.setItem("_id", data._id);
//           localStorage.setItem("imageurl", data.image_url);

//           data.role === "user" ? navigate("/") : navigate("/");
//         } else {
//           setOutput("Invalid user or verify your account....");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const responseGoogle = (response) => {
//     setProfile(response);
//   };

//   return (
//     <div>
//       {!profile ? (
//         <LoginSocialTwitter
//         client_id="X0pBMXdfUmVBa2ZsUHM0alBLbFk6MTpjaQ"
        
//         redirect_uri={'https://yuonair-2aa1b.firebaseapp.com/__/auth/handler'}
//         scope="openid profile email"
//         discoveryDocs="claims_supported"
//         access_type="offline"
//         onResolve={(response) => {
//             console.log(response);
//             setProfile(response.data);
//           }}
//           onReject={(error) => {
//             console.log(error);
//           }}
//         >
//         <TwitterLoginButton />
//         </LoginSocialTwitter>
//       ) : null}

//       {profile ? (
//         <div>
//           <h1>{profile.name}</h1>
//           <img src={profile.imageUrl} alt="Profile" />
//         </div>
//       ) : null}

//       <p>{output}</p>
//     </div>
//   );
// }

// export default Twitter;



import React, { useState, useEffect } from "react";
import { TwitterLoginButton } from "react-social-login-buttons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginSocialTwitter } from "reactjs-social-login";

function Twitter() {
  const navigate = useNavigate();
  const [output, setOutput] = useState("");
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (profile) {
      sendToAPI();
    }
  }, [profile]);

  const sendToAPI = () => {
    let userDetails = {
      twitter_id: profile.userID,
      name: profile.name,
      email: profile.email,
      image_url: profile.profilePicture,
    };

    axios
      .post("http://16.16.91.234:3003/api/twitter_login", userDetails)
      .then((response) => {
        //console.log("response of twitter login", response.data);
        if (response.data.token !== "error") {
          const data = response.data.data[0];
          localStorage.setItem("twitter_id", data.twitter_id);
          localStorage.setItem("name", data.name);
          localStorage.setItem("email", data.email);
          localStorage.setItem("_id", data._id);
          localStorage.setItem("imageurl", data.image_url);

          data.role === "user" ? navigate("/") : navigate("/");
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
        <LoginSocialTwitter
          //client_id="AkrX8tcoebBDD2QZPBR0B_MyFQ6lLC-_a-UTtdVt_BTG0xIII8"
        client_id="X0pBMXdfUmVBa2ZsUHM0alBLbFk6MTpjaQ"
          onResolve={(response) => {
            //console.log(response);
            setProfile(response.profile);
          }}
          onReject={(error) => {
            //console.log(error);
          }}
        >
          <TwitterLoginButton />
        </LoginSocialTwitter>
      ) : null}

      {profile ? (
        <div>
          <h1>{profile.name}</h1>
          <img src={profile.profilePicture} alt="Profile" />
        </div>
      ) : null}

      <p>{output}</p>
    </div>
  );
}

export default Twitter;
