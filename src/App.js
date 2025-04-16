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
      {showStorePrompt && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            color: 'white',
            textAlign: 'center',
          }}
        >
          <div style={{ padding: 20, backgroundColor: 'white', color: 'black', borderRadius: 8 }}>
            <h2>Download ComunityApp</h2>
            <p>Would you like to open the {storeLinks.name} to download the app?</p>
            {/* <button
              onClick={() => window.open(storeLinks.url, '_blank')}
              style={{
                padding: '10px 20px',
                margin: '10px',
                border: 'none',
                backgroundColor: '#007BFF',
                color: 'white',
                cursor: 'pointer',
                borderRadius: 5,
              }}
            >
              Go to {storeLinks.name}
            </button> */}
            <button
  onClick={() => {

    // Open store URL in new tab
    window.open(storeLinks.url, '_blank');
  }}
  style={{
    padding: '10px 20px',
    margin: '10px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
    borderRadius: 5,
  }}
>
  Go to {storeLinks.name}
</button>

            <button
              onClick={() => setShowStorePrompt(false)}
              style={{
                padding: '10px 20px',
                margin: '10px',
                border: 'none',
                backgroundColor: '#DC3545',
                color: 'white',
                cursor: 'pointer',
                borderRadius: 5,
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <LandingPage />
    </>
  );
}
