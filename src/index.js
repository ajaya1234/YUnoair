import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
reportWebVitals();


export const rtc = {
  // For the local client
  client: null,
  // For the local audio and video tracks
  localAudioTrack: null,
  localVideoTrack: null,
};

export const options = {
  // Pass your app ID here
  appId: "537ee9fcc8f24c33b4b823896c9db588",
  // Pass a token if your project enables the App Certificate
  token: '006537ee9fcc8f24c33b4b823896c9db588IADtNg8xN4sAnnm1Twx4rneejWBl1pR7ktC/EodGcMovYC1zB/AAAAAAIgB6ijib3PSWZAQAAQBssZVkAgBssZVkAwBssZVkBABssZVk',
};