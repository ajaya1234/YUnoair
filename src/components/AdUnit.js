// import React, { useEffect , useState } from 'react';

// const AdUnit = () => {
//   useEffect(() => {
//     (window.adsbygoogle = window.adsbygoogle || []).push({});
//   }, []);


// const AdUnit = () => {
//   const [isEffectExecuted, setIsEffectExecuted] = useState(false);

//   useEffect(() => {
//     if (!isEffectExecuted) {
//       (window.adsbygoogle = window.adsbygoogle || []).push({});
//       setIsEffectExecuted(true);
//     }
//   }, [isEffectExecuted]);

//   return (
//     <div>
//       <ins
//         className="adsbygoogle"
//         style={{ display: 'block' }}
//         data-ad-client="88a99875728a6fa3136859b8ce33cc145bdaaa03"
//         data-ad-slot="123456789"
//         data-ad-format="auto"
//         data-full-width-responsive="true"
//       />
//     </div>
//   );
// };

// export default AdUnit;


// import React, { useEffect } from 'react';

// const AdUnit = () => {
//   useEffect(() => {
//     (window.adsbygoogle = window.adsbygoogle || []).push({});
//   }, []);



//   return (
//     <div>
//       <ins
//         className="adsbygoogle"
//         style={{ display: 'block' }}
//         data-ad-client="ca-pub-3199660652950290"
//         data-ad-slot="6259591966"
//         data-ad-format="auto"
//         data-full-width-responsive="true"
//       />
//     </div>
//   );
// };

// export default AdUnit;



// import React, { useEffect } from 'react';

// const AdUnit = () => {
//   useEffect(() => {
//     (window.adsbygoogle = window.adsbygoogle || []).push({});
//   }, []);

//   console.log("google ad", window.adsbygoogle);

//   return (
//     <ins 
//       className="adsbygoogle"
//       style={{ display: 'block' }}
//       data-ad-client="ca-pub-7756572571650218"
//       data-ad-slot="9881212805"
//       data-ad-format="auto"
//       data-full-width-responsive="true"
//     ></ins>
//   );
// };

// export default AdUnit;



import React, { useEffect } from 'react';

const AdUnit = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || [0]).push({});
  }, []);
console.log("asdasdadad",window.adsbygoogle)
  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-7756572571650218"
      data-ad-slot="9881212805"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdUnit;








// import React from 'react';
// import { GoogleAdProvider, GoogleAd } from 'react-google-ads';

// const MyComponent = () => {
//   return (
//     <GoogleAdProvider adClient="YOUR_AD_CLIENT_ID">
//       <div>
//         <h1>Welcome to My App</h1>
//         <p>Some content in your component</p>
//         <GoogleAd adSlot="YOUR_AD_SLOT_ID" />
//         <p>More content in your component</p>
//       </div>
//     </GoogleAdProvider>
//   );
// };

// export default MyComponent;


