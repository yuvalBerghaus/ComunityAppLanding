// import React from "react";
// import PropTypes from "prop-types";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
// import AppAppBar from "./components/AppAppBar";
// import Hero from "./components/Hero";
// import LogoCollection from "./components/LogoCollection";
// import Highlights from "./components/Highlights";
// import Pricing from "./components/Pricing";
// import Features from "./components/Features";
// import Testimonials from "./components/Testimonials";
// import FAQ from "./components/FAQ";
// import Footer from "./components/Footer";
// import getLPTheme from "./getLPTheme";
// import HubSpotForm from "./components/HubSpotForm"; // Import the HubSpotForm component
// import AboutUs from "./components/AboutUs";
// function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         width: "100dvw",
//         position: "fixed",
//         bottom: 24,
//       }}
//     >
//       <ToggleButtonGroup
//         color="primary"
//         exclusive
//         value={showCustomTheme}
//         onChange={toggleCustomTheme}
//         aria-label="Platform"
//         sx={{
//           backgroundColor: "background.default",
//           "& .Mui-selected": {
//             pointerEvents: "none",
//           },
//         }}
//       >
//         <ToggleButton value>
//           <AutoAwesomeRoundedIcon sx={{ fontSize: "20px", mr: 1 }} />
//           Custom theme
//         </ToggleButton>
//         <ToggleButton value={false}>Material Design 2</ToggleButton>
//       </ToggleButtonGroup>
//     </Box>
//   );
// }

// ToggleCustomTheme.propTypes = {
//   showCustomTheme: PropTypes.shape({
//     valueOf: PropTypes.func.isRequired,
//   }).isRequired,
//   toggleCustomTheme: PropTypes.func.isRequired,
// };

// export default function LandingPage() {
//   const [mode, setMode] = React.useState("light");
//   const [showCustomTheme, setShowCustomTheme] = React.useState(false);
//   const LPtheme = createTheme(getLPTheme(mode));
//   const defaultTheme = createTheme({ palette: { mode } });

//   const toggleColorMode = () => {
//     setMode((prev) => (prev === "dark" ? "light" : "dark"));
//   };

//   const toggleCustomTheme = () => {
//     setShowCustomTheme((prev) => !prev);
//   };

//   return (
//     <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
//       <CssBaseline />

//       <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
//       <Hero />
      
//       <Box sx={{ bgcolor: "background.default" }}>
//         <LogoCollection />
//         <Features />
//         <Divider />
//         <Pricing />
//         <Divider />
//         <Highlights />
//         <Divider />
//         <Testimonials />
//         <Divider />
//         <Divider />
//         <FAQ />
//         {/* Use the HubSpotForm component */}
//         <Divider />
//         <AboutUs />
//         <Footer />

//       </Box>
      
//       {/* <ToggleCustomTheme
//         showCustomTheme={showCustomTheme}
//         toggleCustomTheme={toggleCustomTheme}
//       /> */}
      
//     </ThemeProvider>
//   );
// }
import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import LogoCollection from "./components/LogoCollection";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HubSpotForm from "./components/HubSpotForm";
import AboutUs from "./components/AboutUs";

function ToggleLanguage({ currentLanguage, toggleLanguage }) {
  console.log("Rendering ToggleLanguage with currentLanguage:", currentLanguage);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100dvw",
        position: "fixed",
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={currentLanguage}
        onChange={(event, newLanguage) => {
          console.log("onChange triggered with newLanguage:", newLanguage);
          if (newLanguage !== null) {
            toggleLanguage(newLanguage);
          }
        }}
        aria-label="Language"
        sx={{
          backgroundColor: "background.default",
          "& .Mui-selected": {
            pointerEvents: "none", // Prevent reselecting the active language
          },
        }}
      >
        <ToggleButton value="ES">ES</ToggleButton>
        <ToggleButton value="EN">EN</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

ToggleLanguage.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
};

export default function LandingPage() {


  
  console.log("Rendering LandingPage");
  const [language, setLanguage] = React.useState("EN"); // Initial language is English
  console.log("Initial language:", language);

  const toggleLanguage = (newLanguage) => {
    console.log("toggleLanguage called with newLanguage:", newLanguage);
    setLanguage(newLanguage);
    console.log("Updated language state to:", newLanguage);
  };

  return (
    <>
      <CssBaseline />
      <AppAppBar language={language} />
      <Hero language={language} />
      <Box sx={{ bgcolor: "background.default" }}>
        <LogoCollection language={language} />
        <Features language={language} />
        <Divider />
        <Pricing language={language} />
        <Divider />
        <Highlights language={language} />
        <Divider />
        <Testimonials language={language} />
        <Divider />
        <FAQ language={language} />
        <Divider />
        <AboutUs language={language} />
        <Footer language={language} />
      </Box>
      <ToggleLanguage currentLanguage={language} toggleLanguage={toggleLanguage} />
    </>
  );
}

