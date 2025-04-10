// import * as React from "react";
// import PropTypes from "prop-types";

// import Box from "@mui/material/Box";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import Divider from "@mui/material/Divider";
// import Typography from "@mui/material/Typography";
// import MenuItem from "@mui/material/MenuItem";
// import Drawer from "@mui/material/Drawer";
// import MenuIcon from "@mui/icons-material/Menu";
// import ToggleColorMode from "./ToggleColorMode";
// import LogoImg from "../assets/landing-logo.png";
// const logoStyle = {
//   width: "40px",
//   height: "auto",
//   cursor: "pointer",
// };

// function AppAppBar({ mode, toggleColorMode }) {
//   const [open, setOpen] = React.useState(false);

//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };

//   const scrollToSection = (sectionId) => {
//     const sectionElement = document.getElementById(sectionId);
//     const offset = 128;
//     if (sectionElement) {
//       const targetScroll = sectionElement.offsetTop - offset;
//       sectionElement.scrollIntoView({ behavior: "smooth" });
//       window.scrollTo({
//         top: targetScroll,
//         behavior: "smooth",
//       });
//       setOpen(false);
//     }
//   };

//   return (
//     <div>
//       <AppBar
//         position="fixed"
//         sx={{
//           boxShadow: 0,
//           bgcolor: "transparent",
//           backgroundImage: "none",
//           mt: 2,
//         }}
//       >
//         <Container maxWidth="lg">
//           <Toolbar
//             variant="regular"
//             sx={(theme) => ({
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               flexShrink: 0,
//               borderRadius: "999px",
//               bgcolor:
//                 theme.palette.mode === "light"
//                   ? "rgba(255, 255, 255, 0.4)"
//                   : "rgba(0, 0, 0, 0.4)",
//               backdropFilter: "blur(24px)",
//               maxHeight: 40,
//               border: "1px solid",
//               borderColor: "divider",
//               boxShadow:
//                 theme.palette.mode === "light"
//                   ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
//                   : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
//             })}
//           >
//             <Box
//               sx={{
//                 flexGrow: 1,
//                 display: "flex",
//                 alignItems: "center",
//                 ml: "-1px",
//                 px: 0,
//               }}
//             >
//               <img src={LogoImg} style={logoStyle} alt="logo of comunityapp" />
//               <Typography
//                 variant="body1"
//                 color="text.primary"
//                 sx={{
//                   fontFamily: "Lato",
//                 }}
//               >
//                 <b>ComunityApp</b>
//               </Typography>
//               <Box sx={{ display: { xs: "none", md: "flex" } }}>
//                 <MenuItem
//                   onClick={() => scrollToSection("features")}
//                   sx={{ py: "6px", px: "12px" }}
//                 >
//                   <Typography variant="body2" color="text.primary">
//                     Features
//                   </Typography>
//                 </MenuItem>
//                 <MenuItem
//                   onClick={() => scrollToSection("aboutUs")}
//                   sx={{ py: "6px", px: "12px" }}
//                 >
//                   <Typography variant="body2" color="text.primary">
//                     About us
//                   </Typography>
//                 </MenuItem>
//                 <MenuItem
//                   onClick={() => scrollToSection("testimonials")}
//                   sx={{ py: "6px", px: "12px" }}
//                 >
//                   <Typography variant="body2" color="text.primary">
//                     Testimonials
//                   </Typography>
//                 </MenuItem>
//                 <MenuItem
//                   onClick={() => scrollToSection("highlights")}
//                   sx={{ py: "6px", px: "12px" }}
//                 >
//                   <Typography variant="body2" color="text.primary">
//                     Highlights
//                   </Typography>
//                 </MenuItem>
//                 <MenuItem
//                   onClick={() => scrollToSection("pricing")}
//                   sx={{ py: "6px", px: "12px" }}
//                 >
//                   <Typography variant="body2" color="text.primary">
//                     Pricing
//                   </Typography>
//                 </MenuItem>
//                 <MenuItem
//                   onClick={() => scrollToSection("faq")}
//                   sx={{ py: "6px", px: "12px" }}
//                 >
//                   <Typography variant="body2" color="text.primary">
//                     FAQ
//                   </Typography>
//                 </MenuItem>
//                 <MenuItem
//                   onClick={() => scrollToSection("hubspotForm")}
//                   sx={{ py: "6px", px: "12px" }}
//                 >
//                   <Typography variant="body2" color="text.primary">
//                     Support
//                   </Typography>
//                 </MenuItem>
//                 <MenuItem
//                   onClick={() => (window.location.href = "https://comunityappblogs.vercel.app")}
//                   sx={{ py: "6px", px: "12px" }}
//                 >
//                   <Typography variant="body2" color="text.primary">
//                     Blog
//                   </Typography>
//                 </MenuItem>
//               </Box>
//             </Box>
//             <Box
//               sx={{
//                 display: { xs: "none", md: "flex" },
//                 gap: 0.5,
//                 alignItems: "center",
//               }}
//             >
//               <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
//               <Button
//                 color="primary"
//                 variant="text"
//                 size="small"
//                 component="a"
//                 href="https://app.comunityapp.com/user/login"
//                 target="_blank"
//               >
//                 LogIn
//               </Button>
//               <Button
//                 color="primary"
//                 variant="contained"
//                 size="small"
//                 component="a"
//                 href="https://app.comunityapp.com/user/register"
//                 target="_blank"
//               >
//                 Try it free
//               </Button>
//             </Box>
//             <Box sx={{ display: { sm: "", md: "none" } }}>
//               <Button
//                 variant="text"
//                 color="primary"
//                 aria-label="menu"
//                 onClick={toggleDrawer(true)}
//                 sx={{ minWidth: "30px", p: "4px" }}
//               >
//                 <MenuIcon />
//               </Button>
//               <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
//                 <Box
//                   sx={{
//                     minWidth: "60dvw",
//                     p: 2,
//                     backgroundColor: "background.paper",
//                     flexGrow: 1,
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "end",
//                       flexGrow: 1,
//                     }}
//                   >
//                     <ToggleColorMode
//                       mode={mode}
//                       toggleColorMode={toggleColorMode}
//                     />
//                   </Box>
//                   <MenuItem onClick={() => scrollToSection("features")}>
//                     Features
//                   </MenuItem>
//                   <MenuItem onClick={() => scrollToSection("aboutUs")}>
//                     About us
//                   </MenuItem>
//                   <MenuItem onClick={() => scrollToSection("testimonials")}>
//                     Testimonials
//                   </MenuItem>
//                   <MenuItem onClick={() => scrollToSection("highlights")}>
//                     Highlights
//                   </MenuItem>
//                   <MenuItem onClick={() => scrollToSection("pricing")}>
//                     Pricing
//                   </MenuItem>
//                   <MenuItem onClick={() => scrollToSection("faq")}>
//                     FAQ
//                   </MenuItem>
//                   <MenuItem onClick={() => scrollToSection("hubspotForm")}>
//                     Support
//                   </MenuItem>
//                   <MenuItem onClick={() => (window.location.href = "https://comunityappblogs.vercel.app")}>
//                     Blog
//                   </MenuItem>
//                   <Divider />
//                   <MenuItem>
//                     <Button
//                       color="primary"
//                       variant="contained"
//                       component="a"
//                       href="https://app.comunityapp.com/user/register"
//                       target="_blank"
//                       sx={{ width: "100%" }}
//                     >
//                       Try it free
//                     </Button>
//                   </MenuItem>
//                   <MenuItem>
//                     <Button
//                       color="primary"
//                       variant="outlined"
//                       component="a"
//                       href="https://app.comunityapp.com/user/login"
//                       target="_blank"
//                       sx={{ width: "100%" }}
//                     >
//                       LogIn
//                     </Button>
//                   </MenuItem>
//                 </Box>
//               </Drawer>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </div>
//   );
// }

// AppAppBar.propTypes = {
//   mode: PropTypes.oneOf(["dark", "light"]).isRequired,
//   toggleColorMode: PropTypes.func.isRequired,
// };

// export default AppAppBar;



import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./ToggleColorMode";
import LogoImg from "../assets/landing-logo.png";
const logoStyle = {
  width: "40px",
  height: "auto",
  cursor: "pointer",
};

const menuContent = {
  EN: {
    brand: "ComunityApp",
    items: [
      { id: "features", label: "Features" },
      { id: "aboutUs", label: "About us" },
      { id: "testimonials", label: "Testimonials" },
      { id: "highlights", label: "Highlights" },
      { id: "pricing", label: "Pricing" },
      { id: "faq", label: "FAQ" },
      { id: "hubspotForm", label: "Support" },
      
    ],
    buttons: {
      login: "Log In",
      tryFree: "Try it free",
      blog: "Blog",
    },
  },
  ES: {
    brand: "ComunityApp",
    items: [
      { id: "features", label: "Funciones" },
      { id: "aboutUs", label: "Nosotros" },
      { id: "testimonials", label: "Testimonios" },
      { id: "highlights", label: "Destacados" },
      { id: "pricing", label: "Planes" },
      { id: "faq", label: "Preguntas Frecuentes" },
      { id: "hubspotForm", label: "Soporte" },
    ],
    buttons: {
      login: "Iniciar sesión",
      tryFree: "Prueba gratis",
      blog: "Blog",
    },
  },
};

function AppAppBar({ mode, toggleColorMode, language }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  const content = menuContent[language] || menuContent.EN;

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-1px",
                px: 0,
              }}
            >
              <img src={LogoImg} style={logoStyle} alt="logo of comunityapp" />
              <Typography
                variant="body1"
                color="text.primary"
                sx={{
                  fontFamily: "Lato",
                }}
              >
                <b>{content.brand}</b>
              </Typography>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {content.items.map((item) => (
                  <MenuItem
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    sx={{ py: "6px", px: "12px" }}
                  >
                    <Typography variant="body2" color="text.primary">
                      {item.label}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
              <Button
                color="primary"
                variant="text"
                size="small"
                component="a"
                href="https://app.comunityapp.com/user/login"
                target="_blank"
              >
                {content.buttons.login}
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
                href="https://app.comunityapp.com/user/register"
                target="_blank"
              >
                {content.buttons.tryFree}
              </Button>
              <Button
                color="primary"
                variant="text"
                size="small"
                component="a"
                href="https://blog.comunityapp.com/posts"
                target="_blank"
              >
                {content.buttons.blog}
              </Button>
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  >
                    {/* <ToggleColorMode
                      mode={mode}
                      toggleColorMode={toggleColorMode}
                    /> */}
                  </Box>
                  {content.items.map((item) => (
                    <MenuItem
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="https://app.comunityapp.com/user/register"
                      target="_blank"
                      sx={{ width: "100%" }}
                    >
                      {content.buttons.tryFree}
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="https://app.comunityapp.com/user/login"
                      target="_blank"
                      sx={{ width: "100%" }}
                    >
                      {content.buttons.login}
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="https://blog.comunityapp.com/posts"
                      target="_blank"
                      sx={{ width: "100%" }}
                    >
                      {content.buttons.blog}
                    </Button>
                  </MenuItem>



                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
  language: PropTypes.oneOf(["EN", "ES"]).isRequired,
};

export default AppAppBar;
