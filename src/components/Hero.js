// import * as React from "react";
// import { alpha } from "@mui/material";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
// import btn_appstore_en from "../assets/button_apple.png";
// import btn_googleplay_en from "../assets/button_google.png";
// import btn_web from "../assets/button_web.png";
// import heroImage from "../assets/mockup.png";
// // import heroMobileImage from "../assets/hero_mobile.png";

// export default function Hero() {
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
//             Your&nbsp;
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
//               Medical&nbsp;
//             </Typography>
//             Records. Secured. Organized.
//           </Typography>
//           <Typography
//             textAlign="center"
//             color="text.secondary"
//             sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
//           >
//             Take full control of your family's medical records in a secure,
//             private and seamless way.
//           </Typography>
//           <Typography textAlign="center" variant="caption">
//             <Stack
//               direction={{ xs: "column", sm: "row" }}
//               useFlexGap
//               justifyContent="center"
//               spacing={2}
//               sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
//             >
//               <Link
//                 href="https://apps.apple.com/pa/app/comunityapp/id6514324016?l=en-GB"
//                 variant="body2"
//               >
//                 <Button>
//                   <img src={btn_appstore_en} alt="App Store" />
//                 </Button>
//               </Link>

//               <Link href="https://play.google.com/store/apps/details?id=com.community_react_native" variant="body2">
//                 <Button>
//                   <img src={btn_googleplay_en} alt="Google Play" />
//                 </Button>
//               </Link>

//               <Link href="https://app.comunityapp.com/user/login" variant="body2">
//                 <Button>
//                   <img src={btn_web} alt="Web" />
//                 </Button>
//               </Link>
//             </Stack>
//           </Typography>
//         </Stack>

//         {/* Box containing both images */}
//         <Box
//           id="image"
//           sx={(theme) => ({
//             mt: { xs: 8, sm: 10 },
//             alignSelf: "center",
//             display: "flex", // Flexbox for side-by-side layout
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
//           {/* Hero.png image */}
//           <Box
//             sx={{
//               flex: 2, // Take up more space
//               backgroundImage: `url(${heroImage})`,
//               backgroundSize: "contain",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//               borderRadius: "10px 0 0 10px",
//             }}
//           />
//           {/* Hero_Mobile.png image */}
//           {/* <Box
//             sx={{
//               flex: 1, // Take up less space
//               backgroundImage: `url(${heroMobileImage})`,
//               backgroundSize: "contain",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//               borderRadius: "0 10px 10px 0",
//             }}
//           /> */}
//         </Box>
//       </Container>
//     </Box>
//   );
// }
import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import btn_appstore from "../assets/button_apple.png";
import btn_googleplay from "../assets/button_google.png";
import btn_web from "../assets/button_web.png";
import heroImage from "../assets/mockup.png";

const content = {
  EN: {
    heading: {
      part1: "Your",
      part2: "Medical",
      part3: "Records. Secured. Organized.",
    },
    subheading: "Take full control of your family's medical records in a secure, private and seamless way.",
    buttons: [
      { href: "https://apps.apple.com/pa/app/comunityapp/id6514324016?l=en-GB", alt: "App Store", src: btn_appstore },
      { href: "https://play.google.com/store/apps/details?id=com.community_react_native", alt: "Google Play", src: btn_googleplay },
      { href: "https://app.comunityapp.com/user/login", alt: "Web", src: btn_web },
    ],
  },
  ES: {
    heading: {
      part1: "Tu",
      part2: "Expediente",
      part3: "Médico. Seguro. Organizado.",
    },
    subheading: "Toma el control total de los registros médicos de tu familia de manera segura, privada y accesible.",
    buttons: [
      { href: "https://apps.apple.com/pa/app/comunityapp/id6514324016?l=es", alt: "App Store", src: btn_appstore },
      { href: "https://play.google.com/store/apps/details?id=com.community_react_native", alt: "Google Play", src: btn_googleplay },
      { href: "https://app.comunityapp.com/user/login", alt: "Web", src: btn_web },
    ],
  },
};

export default function Hero({ language }) {
  const langContent = content[language] || content.EN;

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
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
            }}
          >
            {langContent.heading.part1}&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            >
              {langContent.heading.part2}&nbsp;
            </Typography>
            {langContent.heading.part3}
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            {langContent.subheading}
          </Typography>
          <Typography textAlign="center" variant="caption">
            <Stack
              direction={{ xs: "column", sm: "row" }}
              useFlexGap
              justifyContent="center"
              spacing={2}
              sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
            >
              {langContent.buttons.map(({ href, alt, src }, index) => (
                <Link key={index} href={href} variant="body2">
                  <Button>
                    <img src={src} alt={alt} />
                  </Button>
                </Link>
              ))}
            </Stack>
          </Typography>
        </Stack>

        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
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
            sx={{
              flex: 2,
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "10px 0 0 10px",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
