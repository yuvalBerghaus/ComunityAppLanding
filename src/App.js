// // import React, { useEffect } from 'react';
// // import LandingPage from './LandingPage';

// // export default function Square() {
// //   useEffect(() => {
// //     // Dynamically add the Google Tag script to the head
// //     const script = document.createElement('script');
// //     script.src = 'https://www.googletagmanager.com/gtag/js?id=G-B96W6TNL5K';
// //     script.async = true;
// //     document.head.appendChild(script);

// //     // Add the gtag configuration script
// //     const script2 = document.createElement('script');
// //     script2.innerHTML = `
// //       window.dataLayer = window.dataLayer || [];
// //       function gtag(){dataLayer.push(arguments);}
// //       gtag('js', new Date());
// //       gtag('config', 'G-B96W6TNL5K');
// //     `;
// //     document.head.appendChild(script2);

// //     // Cleanup the scripts when the component unmounts
// //     return () => {
// //       document.head.removeChild(script);
// //       document.head.removeChild(script2);
// //     };
// //   }, []);

// //   return <LandingPage />;
// // }
// import React, { useEffect } from 'react';
// import LandingPage from './LandingPage';

// export default function Square() {
//   useEffect(() => {
//     console.log("App started");

//     const userAgent = navigator.userAgent || navigator.vendor || window.opera;

//     if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//       // Redirect to the Apple App Store
//       window.location.href = 'https://apps.apple.com/pa/app/comunityapp/id6514324016?l=en-GB';
//     } else if (/android/i.test(userAgent)) {
//       // Redirect to the Google Play Store
//       window.location.href = 'https://play.google.com/store/apps/details?id=com.community_react_native';
//     } else {
//       // For web, dynamically add Google Tag Manager scripts
//       const script = document.createElement('script');
//       script.src = 'https://www.googletagmanager.com/gtag/js?id=G-B96W6TNL5K';
//       script.async = true;
//       document.head.appendChild(script);

//       const script2 = document.createElement('script');
//       script2.innerHTML = `
//         window.dataLayer = window.dataLayer || [];
//         function gtag(){dataLayer.push(arguments);}
//         gtag('js', new Date());
//         gtag('config', 'G-B96W6TNL5K');
//       `;
//       document.head.appendChild(script2);

//       // Cleanup the scripts when the component unmounts
//       return () => {
//         document.head.removeChild(script);
//         document.head.removeChild(script2);
//       };
//     }
//   }, []);

//   // Render the landing page for web users
//   return <LandingPage />;
// }
import React, { useEffect, useState } from 'react';
import LandingPage from './LandingPage';

export default function Square() {
  const [showStorePrompt, setShowStorePrompt] = useState(false);
  const [storeLinks, setStoreLinks] = useState({});

  useEffect(() => {
    console.log("App started");

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // Show App Store option
      setShowStorePrompt(true);
      setStoreLinks({
        name: "App Store",
        url: 'https://apps.apple.com/pa/app/comunityapp/id6514324016?l=en-GB',
      });
    } else if (/android/i.test(userAgent)) {
      // Show Google Play option
      setShowStorePrompt(true);
      setStoreLinks({
        name: "Google Play Store",
        url: 'https://play.google.com/store/apps/details?id=com.community_react_native',
      });
    }
  }, []);

  return (
    <>
      <LandingPage />
    </>
  );
}
