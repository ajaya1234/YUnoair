import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import History_Page from "./components/History_Page";
import Header from "./components/Header";
import Channels from "./components/Channels";
import Single_Channel from "./components/Single_Channel";
import Video_Page from "./components/Video_Page";
import Upload_Video from "./components/Upload_Video";
import Login from "./components/Login";
import Register from "./components/Register";
import Category from "./components/Category";
import "./App.css"
import CategoryDetail from "./components/CategoryDetail";
import ChennalCategory from "./components/ChennalCategory";
import Subscriptions from "./components/Subscriptions";
import Upload from "./components/Upload";
import ViewProfile from "./components/ViewProfile";
import Account from "./components/Account";
import Setting from "./components/Setting";
import Error404 from "./components/404";

import ForgotPassword from "./components/ForgotPassword";
import Myprofile from "./components/Myprofile";
import Blank from "./components/Blank";

import Myvideo from "./components/Myvideo";
import Perminum from "./components/Perminum";
import About from "./components/About";

import Notification from './components/Notification';
import Refer from "./components/Refer";
import Changepassword from "./components/Changepassword";
import Changeprofile from "./components/Changeprofile";
import Uploadmusic from "./components/Uploadmusic";
import Music from "./components/Music";
import Audio from "./components/Audio";
import Musiclist from "./components/Musiclist";
import Help from "./components/Help";
import Videoplaylist from "./components/Videoplaylist";
import Watchlater from "./components/Watchlater";
import Blockuser from "./components/Blockuser";
import Report from "./components/Report";
import Appp from "./components/Appp";

// import { useState, useEffect } from "react";



// import { initializeApp } from 'firebase/app';
// import { getMessaging, getToken, onMessage } from 'firebase/messaging';



import { useEffect, useState } from "react";
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import Video_live from "./components/Video_live";
import Join from "./components/Join";
import Updatechannel from "./components/Updatechannel";
import Searchdata from "./components/Searchdata";

// const firebaseConfig = {
//   apiKey: "AIzaSyD2SCZ6dMcANWVXuOESJqiJ_pUBofHBppg",
//   authDomain: "yuonair-2aa1b.firebaseapp.com",
//   projectId: "yuonair-2aa1b",
//   storageBucket: "yuonair-2aa1b.appspot.com",
//   messagingSenderId: "1004517911619",
//   appId: "1:1004517911619:web:7cf599db7e732b9589f8f6",
//   measurementId: "G-JZK43EBG1Y"


  
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const messaging = getMessaging(firebaseApp);

// export const getTokenFromFirebase = (setTokenFound) => {
//   return getToken(messaging, { vapidKey: 'BBIN5RhN5TNYj9p9DaJ5MpGfcHzNYKDUk_FbvAFfFV589xsI71qwrw1fa8LdVRZu2HDUkJ5kz_xLW6V614aVcOI' })
//     .then((currentToken) => {
//       if (currentToken) {
//         console.log('Current token for client:', currentToken);
//         setTokenFound(true);
//       } else {
//         console.log('No registration token available. Request permission to generate one.');
//         setTokenFound(false);
//       }
//     })
//     .catch((err) => {
//       console.log('An error occurred while retrieving token.', err);
//     });
// };

// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     onMessage(messaging, (payload) => {
//       resolve(payload);
//     });
//   });


  

function App() {
//   const [show, setShow] = useState(false);
//   const [notification, setNotification] = useState({ title: '', body: '' });
//   const [isTokenFound, setTokenFound] = useState(false);
// console.log("sadsadsadaaaa",notification)
//   useEffect(() => {
//     getTokenFromFirebase(setTokenFound);
//   }, []);


//   onMessageListener().then(payload => {
//     setShow(true);
//     setNotification({title: payload.notification.title, body: payload.notification.body})
//     console.log(payload);
//   }).catch(err => console.log('failed: ', err));

  



  return (
    <div className="App">

      {/* <header className="App-header">
        <p>title{notification.title}</p>
        <p>body{notification.body}</p>
               <p>notification{notification.body}</p>
        {isTokenFound && <h1>Notification permission enabled 👍🏻</h1>}
        {!isTokenFound && <h1>Need notification permission ❗️</h1>}
      </header>  */}



       {/* <Header/>  */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/header" element={<Header/>}></Route>
        <Route path="/home" element={<Home />}></Route>
        
        <Route path="/history_page" element={<History_Page />}></Route>
        <Route path="/channels" element={<Channels />}></Route>
        <Route path="/single_channel" element={<Single_Channel />}></Route>
        <Route path="/video_page" element={<Video_Page />}></Route>
        <Route path="/upload_video" element={<Upload_Video />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/category_details" element={<CategoryDetail />}></Route>
        <Route path="/chennal_category" element={<ChennalCategory />}></Route>
        <Route path="/subscriptions" element={<Subscriptions />}></Route>
        <Route path="/upload" element={<Upload />}></Route>
        <Route path="/view_profile" element={<ViewProfile />}></Route>
        <Route path="/myaccount" element={<Myprofile />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="/404" element={<Error404 />}></Route>
        
        <Route path="/blank" element={<Blank />}></Route>
        
        <Route path="/myvideo" element={<Myvideo/>}></Route>
        <Route path="/permium" element={<Perminum/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/notification" element={<Notification/>}></Route>
        <Route path="/refer" element={<Refer/>}></Route>
        <Route path="/changepassword" element={<Changepassword/>}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword/>}></Route>
        <Route path="/changeprofile" element={<Changeprofile/>}></Route>
        <Route path='/uploadmusic' element={<Uploadmusic/>}></Route>
        <Route path="/music" element={<Music/>}></Route>
        <Route path="/audio" element={<Audio/>}></Route>
       <Route path="/musiclist" element={<Musiclist/>}></Route>
       <Route path="/help" element={<Help/>}></Route>
       <Route path="/videoplaylist" element={<Videoplaylist/>}></Route>
       <Route path="/watchlater" element={<Watchlater/>}></Route>
       <Route path="/blockuser" element={<Blockuser/>}></Route>
       <Route path="/appp" element={<Appp/>}></Route>
       <Route path='/video_live' element={<Video_live/>}></Route>
       <Route path="/join" element={<Join/>}></Route>
       <Route path="/report" element={<Report/>}></Route>
       <Route path='/updatechannel' element={<Updatechannel/>}></Route>
       {/* <Route path="/searchdata" element={<Searchdata/>}></Route> */}
        {/* <Route path="/" element={<Single_Router/>}></Route>
        <Route path="/singlechannels" element={<Single_channels/>}></Route>
        <Route path="/videos" element={<Single_videos/>}></Route>
     */}


        </Routes>
        <Routes>
        <Route path="/searchdata" element={<Searchdata/>}></Route>
        </Routes>
        
    </div>
  );
}

export default App;
