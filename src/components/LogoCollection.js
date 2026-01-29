// import * as React from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import { useTheme } from "@mui/system";

// const whiteLogos = [
//   "https://cdn2.iconfinder.com/data/icons/gdpr-data-privacy-1/1000/GDPR-13-512.png",
//   "https://groupize.com/wp-content/uploads/ISO-27001-Logo_250x250.png",
// ];

// const darkLogos = [
//   "https://cdn2.iconfinder.com/data/icons/gdpr-data-privacy-1/1000/GDPR-13-512.png",
//   "https://groupize.com/wp-content/uploads/ISO-27001-Logo_250x250.png",
// ];

// const logoStyle = {
//   width: "100px",
//   height: "80px",
//   margin: "0 32px",
//   opacity: 0.7,
// };

// export default function LogoCollection() {
//   const theme = useTheme();
//   const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

//   return (
//     <Box id="logoCollection" sx={{ py: 4 }}>
//       <Typography
//         component="p"
//         variant="h2"
//         align="center"
//         color="text.secondary"
//       >
//         Privacy and security is our number one priority
//       </Typography>
//       {/* <Grid container justifyContent="center" sx={{ mt: 10, opacity: 0.6 }}>
//         {logos.map((logo, index) => (
//           <Grid item key={index}>
//             <img
//               src={logo}
//               alt={`Fake company number ${index + 1}`}
//               style={logoStyle}
//             />
//           </Grid>
//         ))}
//       </Grid> */}
//     </Box>
//   );
// }
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";

const whiteLogos = [
  "https://cdn2.iconfinder.com/data/icons/gdpr-data-privacy-1/1000/GDPR-13-512.png",
  "https://groupize.com/wp-content/uploads/ISO-27001-Logo_250x250.png",
];

const darkLogos = [
  "https://cdn2.iconfinder.com/data/icons/gdpr-data-privacy-1/1000/GDPR-13-512.png",
  "https://groupize.com/wp-content/uploads/ISO-27001-Logo_250x250.png",
];

const logoStyle = {
  width: "100px",
  height: "80px",
  margin: "0 32px",
  opacity: 0.7,
};

const content = {
  EN: "Privacy and security is our number one priority",
  ES: "Nuestra prioridad #1 es la Privacidad y Seguridad de tus datos",
};

export default function LogoCollection({ language, edition = "user" }) {
  const theme = useTheme();
  const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;
  const message = content[language] || content.EN;

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="h2"
        align="center"
        color="text.secondary"
      >
        {message}
      </Typography>
      {/* <Grid container justifyContent="center" sx={{ mt: 10, opacity: 0.6 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
}
