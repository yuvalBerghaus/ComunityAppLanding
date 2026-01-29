// // import * as React from "react";
// // import { alpha } from "@mui/material";
// // import Box from "@mui/material/Box";
// // import Button from "@mui/material/Button";
// // import Container from "@mui/material/Container";
// // import Link from "@mui/material/Link";
// // import Stack from "@mui/material/Stack";
// // import Typography from "@mui/material/Typography";
// // import btn_appstore_en from "../assets/button_apple.png";
// // import btn_googleplay_en from "../assets/button_google.png";
// // import btn_web from "../assets/button_web.png";
// // import heroImage from "../assets/mockup.png";
// // // import heroMobileImage from "../assets/hero_mobile.png";

// // export default function Hero() {
// //   return (
// //     <Box
// //       id="hero"
// //       sx={(theme) => ({
// //         width: "100%",
// //         backgroundImage:
// //           theme.palette.mode === "light"
// //             ? "linear-gradient(180deg, #CEE5FD, #FFF)"
// //             : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
// //         backgroundSize: "100% 20%",
// //         backgroundRepeat: "no-repeat",
// //       })}
// //     >
// //       <Container
// //         sx={{
// //           display: "flex",
// //           flexDirection: "column",
// //           alignItems: "center",
// //           pt: { xs: 14, sm: 20 },
// //           pb: { xs: 8, sm: 12 },
// //         }}
// //       >
// //         <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
// //           <Typography
// //             variant="h1"
// //             sx={{
// //               display: "flex",
// //               flexDirection: { xs: "column", md: "row" },
// //               alignSelf: "center",
// //               textAlign: "center",
// //               fontSize: "clamp(3.5rem, 10vw, 4rem)",
// //             }}
// //           >
// //             Your&nbsp;
// //             <Typography
// //               component="span"
// //               variant="h1"
// //               sx={{
// //                 fontSize: "clamp(3rem, 10vw, 4rem)",
// //                 color: (theme) =>
// //                   theme.palette.mode === "light"
// //                     ? "primary.main"
// //                     : "primary.light",
// //               }}
// //             >
// //               Medical&nbsp;
// //             </Typography>
// //             Records. Secured. Organized.
// //           </Typography>
// //           <Typography
// //             textAlign="center"
// //             color="text.secondary"
// //             sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
// //           >
// //             Take full control of your family's medical records in a secure,
// //             private and seamless way.
// //           </Typography>
// //           <Typography textAlign="center" variant="caption">
// //             <Stack
// //               direction={{ xs: "column", sm: "row" }}
// //               useFlexGap
// //               justifyContent="center"
// //               spacing={2}
// //               sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
// //             >
// //               <Link
// //                 href="https://apps.apple.com/pa/app/comunityapp/id6514324016?l=en-GB"
// //                 variant="body2"
// //               >
// //                 <Button>
// //                   <img src={btn_appstore_en} alt="App Store" />
// //                 </Button>
// //               </Link>

// //               <Link href="https://play.google.com/store/apps/details?id=com.community_react_native" variant="body2">
// //                 <Button>
// //                   <img src={btn_googleplay_en} alt="Google Play" />
// //                 </Button>
// //               </Link>

// //               <Link href="https://app.comunityapp.com/user/login" variant="body2">
// //                 <Button>
// //                   <img src={btn_web} alt="Web" />
// //                 </Button>
// //               </Link>
// //             </Stack>
// //           </Typography>
// //         </Stack>

// //         {/* Box containing both images */}
// //         <Box
// //           id="image"
// //           sx={(theme) => ({
// //             mt: { xs: 8, sm: 10 },
// //             alignSelf: "center",
// //             display: "flex", // Flexbox for side-by-side layout
// //             flexDirection: { xs: "column", sm: "row" },
// //             height: { xs: 200, sm: 800 },
// //             width: "100%",
// //             backgroundColor: theme.palette.background.paper,
// //             borderRadius: "10px",
// //             outline: "1px solid",
// //             outlineColor:
// //               theme.palette.mode === "light"
// //                 ? alpha("#BFCCD9", 0.5)
// //                 : alpha("#9CCCFC", 0.1),
// //             boxShadow:
// //               theme.palette.mode === "light"
// //                 ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
// //                 : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
// //           })}
// //         >
// //           {/* Hero.png image */}
// //           <Box
// //             sx={{
// //               flex: 2, // Take up more space
// //               backgroundImage: `url(${heroImage})`,
// //               backgroundSize: "contain",
// //               backgroundPosition: "center",
// //               backgroundRepeat: "no-repeat",
// //               borderRadius: "10px 0 0 10px",
// //             }}
// //           />
// //           {/* Hero_Mobile.png image */}
// //           {/* <Box
// //             sx={{
// //               flex: 1, // Take up less space
// //               backgroundImage: `url(${heroMobileImage})`,
// //               backgroundSize: "contain",
// //               backgroundPosition: "center",
// //               backgroundRepeat: "no-repeat",
// //               borderRadius: "0 10px 10px 0",
// //             }}
// //           /> */}
// //         </Box>
// //       </Container>
// //     </Box>
// //   );
// // }
// import * as React from "react";
// import { alpha } from "@mui/material";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
// import btn_appstore from "../assets/button_apple.png";
// import btn_googleplay from "../assets/button_google.png";
// import btn_web from "../assets/button_web.png";
// import heroImage from "../assets/mockup.png";

// const content = {
//   EN: {
//     heading: {
//       part1: "Your",
//       part2: "Medical",
//       part3: "Records. Secured. Organized.",
//     },
//     subheading: "Take full control of your family's medical records in a secure, private and seamless way.",
//     buttons: [
//       { href: "https://apps.apple.com/pa/app/comunityapp/id6514324016?l=en-GB", alt: "App Store", src: btn_appstore },
//       { href: "https://play.google.com/store/apps/details?id=com.community_react_native", alt: "Google Play", src: btn_googleplay },
//       { href: "https://app.comunityapp.com/user/login", alt: "Web", src: btn_web },
//     ],
//   },
//   ES: {
//     heading: {
//       part1: "Tu",
//       part2: "Expediente",
//       part3: "Médico. Seguro. Organizado.",
//     },
//     subheading: "Toma el control total de los registros médicos de tu familia de manera segura, privada y accesible.",
//     buttons: [
//       { href: "https://apps.apple.com/pa/app/comunityapp/id6514324016?l=es", alt: "App Store", src: btn_appstore },
//       { href: "https://play.google.com/store/apps/details?id=com.community_react_native", alt: "Google Play", src: btn_googleplay },
//       { href: "https://app.comunityapp.com/user/login", alt: "Web", src: btn_web },
//     ],
//   },
// };

// export default function Hero({ language }) {
//   const langContent = content[language] || content.EN;

//   return (
//     <Box
//       id="hero"
//       sx={(theme) => ({
//         width: "100%",
//         backgroundImage:
//           theme.palette.mode === "light"
//             ? "linear-gradient(180deg, #CEE5FD, #FFF)"
//             : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
//         backgroundSize: "100% 20%",
//         backgroundRepeat: "no-repeat",
//       })}
//     >
//       <Container
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           pt: { xs: 14, sm: 20 },
//           pb: { xs: 8, sm: 12 },
//         }}
//       >
//         <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
//           <Typography
//             variant="h1"
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "column", md: "row" },
//               alignSelf: "center",
//               textAlign: "center",
//               fontSize: "clamp(3.5rem, 10vw, 4rem)",
//             }}
//           >
//             {langContent.heading.part1}&nbsp;
//             <Typography
//               component="span"
//               variant="h1"
//               sx={{
//                 fontSize: "clamp(3rem, 10vw, 4rem)",
//                 color: (theme) =>
//                   theme.palette.mode === "light"
//                     ? "primary.main"
//                     : "primary.light",
//               }}
//             >
//               {langContent.heading.part2}&nbsp;
//             </Typography>
//             {langContent.heading.part3}
//           </Typography>
//           <Typography
//             textAlign="center"
//             color="text.secondary"
//             sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
//           >
//             {langContent.subheading}
//           </Typography>
//           <Typography textAlign="center" variant="caption">
//             <Stack
//               direction={{ xs: "column", sm: "row" }}
//               useFlexGap
//               justifyContent="center"
//               spacing={2}
//               sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
//             >
//               {langContent.buttons.map(({ href, alt, src }, index) => (
//                 <Link key={index} href={href} variant="body2">
//                   <Button>
//                     <img src={src} alt={alt} />
//                   </Button>
//                 </Link>
//               ))}
//             </Stack>
//           </Typography>
//         </Stack>

//         <Box
//           id="image"
//           sx={(theme) => ({
//             mt: { xs: 8, sm: 10 },
//             alignSelf: "center",
//             display: "flex",
//             flexDirection: { xs: "column", sm: "row" },
//             height: { xs: 200, sm: 800 },
//             width: "100%",
//             backgroundColor: theme.palette.background.paper,
//             borderRadius: "10px",
//             outline: "1px solid",
//             outlineColor:
//               theme.palette.mode === "light"
//                 ? alpha("#BFCCD9", 0.5)
//                 : alpha("#9CCCFC", 0.1),
//             boxShadow:
//               theme.palette.mode === "light"
//                 ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
//                 : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
//           })}
//         >
//           <Box
//             sx={{
//               flex: 2,
//               backgroundImage: `url(${heroImage})`,
//               backgroundSize: "contain",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//               borderRadius: "10px 0 0 10px",
//             }}
//           />
//         </Box>
//       </Container>
//     </Box>
//   );
// }
import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import btn_appstore from "../assets/button_apple.png";
import btn_googleplay from "../assets/button_google.png";
import btn_web from "../assets/button_web.png";
import heroImage from "../assets/mockup.webp";

const CLINIC_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeoaaKR2MrhJVkppAg9iHsR6vHtuEfhXVQHDrIFieAThbjYIA/viewform";

const content = {
  EN: {
    heading: {
      part1: "Your Medical Records",
      part2: "Secured. Organized. Always Accessible.",
    },
    subheading:
      "Easily manage and access your family's medical history — securely, privately, and anytime you need it.",
    clinicHeading: {
      part1: "For Clinics & Labs",
      part2: "Secure medical records for your practice.",
    },
    clinicSubheading:
      "Connect with patients, manage records securely, and streamline how your clinic or lab shares health information.",
    clinicCta: "Request access",
    buttons: [
      {
        href: "https://apps.apple.com/pa/app/comunityapp/id6514324016?l=en-GB",
        alt: "Download ComunityApp – Secure Health Records – on the App Store",
        src: btn_appstore,
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.community_react_native",
        alt: "Download ComunityApp – Secure Health Records – on Google Play",
        src: btn_googleplay,
      },
      {
        href: "https://app.comunityapp.com/user/login",
        alt: "Access ComunityApp Secure Medical Records on Web",
        src: btn_web,
      },
    ],
  },
  ES: {
    heading: {
      part1: "Tus Registros Médicos",
      part2: "Seguros. Organizados. Siempre Disponibles.",
    },
    subheading:
      "Gestiona y accede fácilmente al historial médico de tu familia: seguro, privado y disponible cuando lo necesites.",
    clinicHeading: {
      part1: "Para Clínicas y Laboratorios",
      part2: "Registros médicos seguros para tu práctica.",
    },
    clinicSubheading:
      "Conecta con pacientes, gestiona registros de forma segura y simplifica cómo tu clínica o laboratorio comparte información de salud.",
    clinicCta: "Solicitar acceso",
    buttons: [
      {
        href: "https://apps.apple.com/pa/app/comunityapp/id6514324016?l=es",
        alt: "Descargar ComunityApp – Registros Médicos Seguros – en App Store",
        src: btn_appstore,
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.community_react_native",
        alt: "Descargar ComunityApp – Registros Médicos Seguros – en Google Play",
        src: btn_googleplay,
      },
      {
        href: "https://app.comunityapp.com/user/login",
        alt: "Accede a ComunityApp – Registros Médicos Seguros en la Web",
        src: btn_web,
      },
    ],
  },
};

export default function Hero({ language, edition = "user", onEditionChange }) {
  const langContent = content[language] || content.EN;
  const isClinic = edition === "clinic";

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Tabs
          value={edition}
          onChange={(e, newValue) => onEditionChange && onEditionChange(e, newValue)}
          aria-label="User or Clinic"
          sx={{
            mb: 3,
            "& .MuiTabs-indicator": { height: 3, borderRadius: "3px 3px 0 0" },
            "& .MuiTab-root": { fontWeight: 600, textTransform: "none", fontSize: "1rem" },
          }}
        >
          <Tab label="User" value="user" />
          <Tab label="Clinic / Lab" value="clinic" />
        </Tabs>

        <Box component="header" sx={{ textAlign: "center", mb: 2 }}>
          <h1 style={{ fontSize: "clamp(3.5rem, 10vw, 4rem)", margin: 0 }}>
            {isClinic ? langContent.clinicHeading.part1 : langContent.heading.part1}
          </h1>
          <h2 style={{ fontWeight: 600, fontSize: "2rem", margin: "1rem auto" }}>
            {isClinic ? langContent.clinicHeading.part2 : langContent.heading.part2}
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#555", maxWidth: "700px", margin: "1rem auto" }}>
            {isClinic ? langContent.clinicSubheading : langContent.subheading}
          </p>
        </Box>

        {isClinic ? (
          <Box
            component="nav"
            aria-label="Clinic request access"
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
              mb: 6,
            }}
          >
            <a
              href={CLINIC_FORM_URL}
              aria-label={langContent.clinicCta}
              rel="noopener noreferrer"
              target="_blank"
              style={{
                display: "inline-block",
                padding: "12px 32px",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#fff",
                backgroundColor: "#1976d2",
                borderRadius: "8px",
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(25, 118, 210, 0.4)",
              }}
            >
              {langContent.clinicCta}
            </a>
          </Box>
        ) : (
          <Box
            component="nav"
            aria-label="Download buttons"
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
              mb: 6,
            }}
          >
            {langContent.buttons.map(({ href, alt, src }, index) => (
              <a
                key={index}
                href={href}
                aria-label={alt}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={src} alt={alt} width="160" loading="lazy" />
              </a>
            ))}
          </Box>
        )}

        <Box
          id="image"
          sx={(theme) => ({
            alignSelf: "center",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            height: { xs: 200, sm: 800 },
            width: "100%",
            backgroundColor: theme.palette.background.paper,
            borderRadius: "10px",
            outline: "1px solid",
            outlineColor:
              theme.palette.mode === "light"
                ? alpha("#BFCCD9", 0.5)
                : alpha("#9CCCFC", 0.1),
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
                : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
          })}
        >
          <Box
            component="figure"
            sx={{
              flex: 2,
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "10px 0 0 10px",
              m: 0,
            }}
            aria-label="ComunityApp Medical Records Interface Preview"
          />
        </Box>
      </Container>
    </Box>
  );
}
