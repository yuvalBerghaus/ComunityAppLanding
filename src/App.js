import React, { useEffect } from 'react';
import LandingPage from './LandingPage';

export default function Square() {
  useEffect(() => {
    // Dynamically add the Google Tag script to the head
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-B96W6TNL5K';
    script.async = true;
    document.head.appendChild(script);

    // Add the gtag configuration script
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-B96W6TNL5K');
    `;
    document.head.appendChild(script2);

    // Cleanup the scripts when the component unmounts
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(script2);
    };
  }, []);

  return <LandingPage />;
}
