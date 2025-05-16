// // import React, { useEffect } from "react";
// // import Box from "@mui/material/Box";
// // import Button from "@mui/material/Button";
// // import Container from "@mui/material/Container";
// // import IconButton from "@mui/material/IconButton";
// // import Link from "@mui/material/Link";
// // import Stack from "@mui/material/Stack";
// // import Typography from "@mui/material/Typography";

// // import Instagram from "@mui/icons-material/Instagram";
// // import LinkedInIcon from "@mui/icons-material/LinkedIn";
// // import TwitterIcon from "@mui/icons-material/X";
// // import HubSpotForm from "./HubSpotForm";
// // import Facebook from "@mui/icons-material/Facebook";
// // const logoStyle = {
// //   width: "140px",
// //   height: "auto",
// // };

// // function Copyright() {
// //   return (
// //     <Typography variant="body2" color="text.secondary" mt={1}>
// //       {"Copyright © "}
// //       <Link href="https://app.comunityapp.com/">ComunityApp&nbsp;</Link>
// //       {new Date().getFullYear()}
// //     </Typography>
// //   );
// // }

// // export default function Footer() {
// //   useEffect(() => {
// //     // Load the Termly script for cookie consent
// //     const script = document.createElement("script");
// //     script.src =
// //       "https://app.termly.io/resource-blocker/0e7a92a3-9a7f-4572-b9dc-c6af6bbd3a10?autoBlock=on";
// //     script.type = "text/javascript";
// //     script.async = true;
// //     document.body.appendChild(script);

// //     return () => {
// //       // Cleanup if needed when the component unmounts
// //       document.body.removeChild(script);
// //     };
// //   }, []);

// //   return (
// //     <Container
// //       sx={{
// //         display: "flex",
// //         flexDirection: "column",
// //         alignItems: "center",
// //         gap: { xs: 4, sm: 8 },
// //         py: { xs: 8, sm: 10 },
// //         textAlign: { sm: "center", md: "left" },
// //       }}
// //     >
// //       <Box
// //         sx={{
// //           display: "flex",
// //           flexDirection: { xs: "column", sm: "row" },
// //           width: "100%",
// //           justifyContent: "space-between",
// //         }}
// //       >
// //         <Box
// //           sx={{
// //             display: "flex",
// //             flexDirection: "column",
// //             gap: 4,
// //             minWidth: { xs: "100%", sm: "60%" },
// //           }}
// //         >
// //           {/* Additional content can be added here */}
// //           <HubSpotForm />
// //         </Box>
// //         <Box
// //           sx={{
// //             display: { xs: "none", sm: "flex" },
// //             flexDirection: "column",
// //             gap: 1,
// //           }}
// //         >
// //           <Typography variant="body2" fontWeight={600}>
// //             Product
// //           </Typography>
// //           <Link color="text.secondary" href="#">
// //             Features
// //           </Link>
// //           <Link color="text.secondary" href="#">
// //             Testimonials
// //           </Link>
// //           <Link color="text.secondary" href="#">
// //             Highlights
// //           </Link>
// //           <Link color="text.secondary" href="#">
// //             FAQs
// //           </Link>
          
// //         </Box>
// //         <Box
// //           sx={{
// //             display: { xs: "none", sm: "flex" },
// //             flexDirection: "column",
// //             gap: 1,
// //           }}
// //         >
// //           <Typography variant="body2" fontWeight={600}>
// //             Company
// //           </Typography>
// //           <Link color="text.secondary" href="#">
// //             About us
// //           </Link>
// //           <Link color="text.secondary" href="https://comunityappblogs.vercel.app/">
// //             Blogs
// //           </Link>
// //         </Box>
// //         <Box
// //           sx={{
// //             display: { xs: "none", sm: "flex" },
// //             flexDirection: "column",
// //             gap: 1,
// //           }}
// //         >
// //           <Typography variant="body2" fontWeight={600}>
// //             Legal
// //           </Typography>
// //           <Link color="text.secondary" href="https://app.comunityapp.com/terms-of-service">
// //             Terms
// //           </Link>
// //           <Link color="text.secondary" href="https://app.comunityapp.com/privacy-policy">
// //             Privacy
// //           </Link>
// //           <Link color="text.secondary" href="#">
// //             Contact
// //           </Link>
// //         </Box>
// //       </Box>
// //       <Box
// //         sx={{
// //           display: "flex",
// //           justifyContent: "space-between",
// //           pt: { xs: 4, sm: 8 },
// //           width: "100%",
// //           borderTop: "1px solid",
// //           borderColor: "divider",
// //         }}
// //       >
// //         <div>
// //           <Link color="text.secondary" href="https://app.comunityapp.com/privacy-policy">
// //             Privacy Policy
// //           </Link>
// //           <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
// //             &nbsp;•&nbsp;
// //           </Typography>
// //           <Link color="text.secondary" href="https://app.comunityapp.com/terms-of-service">
// //             Terms of Service
// //           </Link>
// //           <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
// //             &nbsp;•&nbsp;
// //           </Typography>
// //           {/* Move the consent preferences link here */}
// //           <Link
// //             color="text.secondary"
// //             href="#"
// //             className="termly-display-preferences"
// //           >
// //             Consent Preferences
// //           </Link>
// //           <Copyright />
// //         </div>
// //         <Stack
// //           direction="row"
// //           justifyContent="left"
// //           spacing={1}
// //           useFlexGap
// //           sx={{
// //             color: "text.secondary",
// //           }}
// //         >
// //           <IconButton
// //             color="inherit"
// //             href="https://www.instagram.com/comunityapp/"
// //             aria-label="GitHub"
// //             sx={{ alignSelf: "center" }}
// //           >
// //             <Instagram />
// //           </IconButton>
// //           <IconButton
// //             color="inherit"
// //             href="https://www.facebook.com/profile.php?id=100095077067113&mibextid=ZbWKwL"
// //             aria-label="X"
// //             sx={{ alignSelf: "center" }}
// //           >
// //             <Facebook />
// //           </IconButton>
// //           <IconButton
// //             color="inherit"
// //             href="https://www.linkedin.com/company/mycomunityapp/"
// //             aria-label="LinkedIn"
// //             sx={{ alignSelf: "center" }}
// //           >
// //             <LinkedInIcon />
// //           </IconButton>
// //         </Stack>
// //       </Box>
// //     </Container>
// //   );
// // }
// import React, { useEffect } from "react";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import IconButton from "@mui/material/IconButton";
// import Link from "@mui/material/Link";
// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
// import Instagram from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import Facebook from "@mui/icons-material/Facebook";
// import HubSpotForm from "./HubSpotForm";

// const content = {
//   EN: {
//     productLinks: ["Features", "Testimonials", "Highlights", "FAQs"],
//     companyLinks: ["About us", "Blogs"],
// //     companyLinks: [
// //   { name: "About us", url: "#aboutUs" },
// //   { name: "Blogs", url: "https://comunityappblogs.vercel.app/" },
// // ],

//     legalLinks: [
//       { name: "Terms", url: "https://app.comunityapp.com/terms-of-service" },
//       { name: "Privacy", url: "https://app.comunityapp.com/privacy-policy" },
//       { name: "Contact", url: "mailto:support@comunityapp.com" },
//     ],
//     legalFooter: [
//       { name: "Privacy Policy", url: "https://app.comunityapp.com/privacy-policy" },
//       { name: "Terms of Service", url: "https://app.comunityapp.com/terms-of-service" },
//       // { name: "Consent Preferences", url: "#" }, // (or termly link class)
//     ],
//     copyright: "Copyright © ComunityApp",
//   },
//   ES: {
//     productLinks: ["Funciones", "Testimonios", "Destacados", "FAQs"],
//     companyLinks: ["Nosotros", "Blogs"],
//     legalLinks: [
//     { name: "Términos", url: "https://app.comunityapp.com/terms-of-service" },
//     { name: "Privacidad", url: "https://app.comunityapp.com/privacy-policy" },
//     { name: "Contacto", url: "mailto:support@comunityapp.com" }
//     ],
//     legalFooter: [
//       { name: "Términos de Privacidad", url: "https://app.comunityapp.com/privacy-policy" },
//       { name: "Términos de Servicio", url: "https://app.comunityapp.com/terms-of-service" },
//       // { name: "Términos de Consentimiento", url: "#" },
//     ],
//     copyright: "Derechos de autor © ComunityApp",
//   },
// };


// // const content = {
// //   EN: {
// //     productLinks: ["Features", "Testimonials", "Highlights", "FAQs"],
// //     companyLinks: ["About us", "Blogs"],
// //     legalLinks: ["Terms", "Privacy", "Contact"],
// //     legalFooter: ["Privacy Policy", "Terms of Service", "Consent Preferences"],
// //     copyright: "Copyright © ComunityApp",
// //   },
// //   ES: {
// //     productLinks: ["Funciones", "Testimonios", "Destacados", "FAQs"],
// //     companyLinks: ["Nosotros", "Blogs"],
// //     legalLinks: ["Términos", "Privacidad", "Contacto"],
// //     legalFooter: [
// //       "Términos de Privacidad",
// //       "Términos de Servicio",
// //       "Términos de Consentimiento",
// //     ],
// //     copyright: "Derechos de autor © ComunityApp",
// //   },
// // };

// export default function Footer({ language }) {
//   const langContent = content[language] || content.EN;

//   useEffect(() => {
//     // Load the Termly script for cookie consent
//     const script = document.createElement("script");
//     script.src =
//       "https://app.termly.io/resource-blocker/0e7a92a3-9a7f-4572-b9dc-c6af6bbd3a10?autoBlock=on";
//     script.type = "text/javascript";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       // Cleanup script on unmount
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <Container
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         gap: { xs: 4, sm: 8 },
//         py: { xs: 8, sm: 10 },
//         textAlign: { sm: "center", md: "left" },
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", sm: "row" },
//           width: "100%",
//           justifyContent: "space-between",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: 4,
//             minWidth: { xs: "100%", sm: "60%" },
//           }}
//         >
//           <HubSpotForm />
//         </Box>
//         <Box
//           sx={{
//             display: { xs: "none", sm: "flex" },
//             flexDirection: "column",
//             gap: 1,
//           }}
//         >
//           <Typography variant="body2" fontWeight={600}>
//             Product
//           </Typography>
//           {langContent.productLinks.map((link, index) => (
//             <Link key={index} color="text.secondary" href="#">
//               {link}
//             </Link>
//           ))}
//         </Box>
//         <Box
//           sx={{
//             display: { xs: "none", sm: "flex" },
//             flexDirection: "column",
//             gap: 1,
//           }}
//         >
//           <Typography variant="body2" fontWeight={600}>
//             Company
//           </Typography>
//           {langContent.companyLinks.map((link, index) => (
//             <Link key={index} color="text.secondary" href="#">
//               {link}
//             </Link>
//           ))}
//         </Box>
//         <Box
//           sx={{
//             display: { xs: "none", sm: "flex" },
//             flexDirection: "column",
//             gap: 1,
//           }}
//         >
//           <Typography variant="body2" fontWeight={600}>
//             Legal
//           </Typography>
//           {/* {langContent.legalLinks.map((link, index) => (
//             <Link key={index} color="text.secondary" href="#">
//               {link}
//             </Link>
//           ))}
//            */}
//            {langContent.legalLinks.map((linkObj, index) => (
//   <Link key={index} color="text.secondary" href={linkObj.url}>
//     {linkObj.name}
//   </Link>
// ))}

//         </Box>
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           pt: { xs: 4, sm: 8 },
//           width: "100%",
//           borderTop: "1px solid",
//           borderColor: "divider",
//         }}
//       >
//         <div>
//         {langContent.legalFooter.map((linkObj, index) => (
//   <React.Fragment key={index}>
//     <Link color="text.secondary" href={linkObj.url}>
//       {linkObj.name}
//     </Link>
//     {index < langContent.legalFooter.length - 1 && (
//       <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
//         &nbsp;•&nbsp;
//       </Typography>
//     )}
//   </React.Fragment>
// ))}

//           {/* {langContent.legalFooter.map((link, index) => (
//             <React.Fragment key={index}>
//               <Link color="text.secondary" href="#">
//                 {link}
//               </Link>
//               {index < langContent.legalFooter.length - 1 && (
//                 <Typography
//                   display="inline"
//                   sx={{ mx: 0.5, opacity: 0.5 }}
//                 >
//                   &nbsp;•&nbsp;
//                 </Typography>
//               )}
//             </React.Fragment>
//           ))} */}
//           <Typography variant="body2" color="text.secondary" mt={1}>
//             {langContent.copyright}&nbsp;{new Date().getFullYear()}
//           </Typography>
//         </div>
//         <Stack
//           direction="row"
//           justifyContent="left"
//           spacing={1}
//           useFlexGap
//           sx={{
//             color: "text.secondary",
//           }}
//         >
//           <IconButton
//             color="inherit"
//             href="https://www.instagram.com/comunityapp/"
//             aria-label="Instagram"
//             sx={{ alignSelf: "center" }}
//           >
//             <Instagram />
//           </IconButton>
//           <IconButton
//             color="inherit"
//             href="https://www.facebook.com/profile.php?id=100095077067113&mibextid=ZbWKwL"
//             aria-label="Facebook"
//             sx={{ alignSelf: "center" }}
//           >
//             <Facebook />
//           </IconButton>
//           <IconButton
//             color="inherit"
//             href="https://www.linkedin.com/company/mycomunityapp/"
//             aria-label="LinkedIn"
//             sx={{ alignSelf: "center" }}
//           >
//             <LinkedInIcon />
//           </IconButton>
//         </Stack>
//       </Box>
//     </Container>
//   );
// }

import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Instagram from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Facebook from "@mui/icons-material/Facebook";
import HubSpotForm from "./HubSpotForm";

const content = {
  EN: {
    productLinks: [
      { name: "Features", url: "#features" },
      { name: "Testimonials", url: "#testimonials" },
      { name: "Highlights", url: "#highlights" },
      { name: "FAQs", url: "#faq" },
    ],
    companyLinks: [
      { name: "About us", url: "#aboutUs" },
      { name: "Blogs", url: "https://comunityapp.com/blog" },
    ],
    legalLinks: [
      { name: "Terms", url: "https://app.comunityapp.com/terms-of-service" },
      { name: "Privacy", url: "https://app.comunityapp.com/privacy-policy" },
      { name: "Contact", url: "mailto:support@comunityapp.com" },
    ],
    legalFooter: [
      { name: "Privacy Policy", url: "https://app.comunityapp.com/privacy-policy" },
      { name: "Terms of Service", url: "https://app.comunityapp.com/terms-of-service" },
    ],
    copyright: "Copyright © ComunityApp",
  },
};

export default function Footer({ language = "EN" }) {
  const langContent = content[language] || content.EN;


  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <HubSpotForm />
        </Box>

        <Box sx={{ display: { xs: "none", sm: "flex" }, flexDirection: "column", gap: 1 }}>
          <Typography variant="body2" fontWeight={600}>Product</Typography>
          {langContent.productLinks.map((link, index) => (
            <Link key={index} color="text.secondary" href={link.url}>
              {link.name}
            </Link>
          ))}
        </Box>

        <Box sx={{ display: { xs: "none", sm: "flex" }, flexDirection: "column", gap: 1 }}>
          <Typography variant="body2" fontWeight={600}>Company</Typography>
          {langContent.companyLinks.map((link, index) => (
            <Link key={index} color="text.secondary" href={link.url}>
              {link.name}
            </Link>
          ))}
        </Box>

        <Box sx={{ display: { xs: "none", sm: "flex" }, flexDirection: "column", gap: 1 }}>
          <Typography variant="body2" fontWeight={600}>Legal</Typography>
          {langContent.legalLinks.map((linkObj, index) => (
            <Link key={index} color="text.secondary" href={linkObj.url}>
              {linkObj.name}
            </Link>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          {langContent.legalFooter.map((linkObj, index) => (
            <React.Fragment key={index}>
              <Link color="text.secondary" href={linkObj.url}>
                {linkObj.name}
              </Link>
              {index < langContent.legalFooter.length - 1 && (
                <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
                  &nbsp;•&nbsp;
                </Typography>
              )}
            </React.Fragment>
          ))}
          <Typography variant="body2" color="text.secondary" mt={1}>
            {langContent.copyright}&nbsp;{new Date().getFullYear()}
          </Typography>
        </div>

        <Stack direction="row" justifyContent="left" spacing={1} useFlexGap sx={{ color: "text.secondary" }}>
          <IconButton color="inherit" href="https://www.instagram.com/comunityapp/" aria-label="Instagram" sx={{ alignSelf: "center" }}>
            <Instagram />
          </IconButton>
          <IconButton color="inherit" href="https://www.facebook.com/profile.php?id=100095077067113&mibextid=ZbWKwL" aria-label="Facebook" sx={{ alignSelf: "center" }}>
            <Facebook />
          </IconButton>
          <IconButton color="inherit" href="https://www.linkedin.com/company/mycomunityapp/" aria-label="LinkedIn" sx={{ alignSelf: "center" }}>
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
