import React, { useEffect } from "react";

const HubSpotForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "46126086",
          formId: "d8580796-45c7-4838-895d-974210414e00",
          target: "#hubspotForm" // The ID of the div where the form will be embedded
        });
      }
    };
  }, []);

  return (
    <div
      id="hubspotForm"
    ></div>
  );
};

export default HubSpotForm;
