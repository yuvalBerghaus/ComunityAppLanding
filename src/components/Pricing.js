// // import * as React from "react";
// // import Box from "@mui/material/Box";
// // import Button from "@mui/material/Button";
// // import Card from "@mui/material/Card";
// // import Chip from "@mui/material/Chip";
// // import CardActions from "@mui/material/CardActions";
// // import CardContent from "@mui/material/CardContent";
// // import Container from "@mui/material/Container";
// // import Divider from "@mui/material/Divider";
// // import Grid from "@mui/material/Grid";
// // import Typography from "@mui/material/Typography";
// // import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// // import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

// // const tiers = [
// //   {
// //     title: "Free",
// //     price: "0",
// //     description: [
// //       "2 Coadmins per user",
// //       "7 Profiles",
// //       "50 Images",
// //       "10 Audios (max 2 min)",
// //       "10 videos (max 30 sec)",
// //       "350 MB of documents",
// //     ],
// //     buttonText: "Sign up for free",
// //     buttonVariant: "outlined",
// //   },
// //   {
// //     title: "Gold",
// //     subheader: "Recommended",
// //     price: "2.99",
// //     description: [
// //       "3 Coadmins per user",
// //       "7 Profiles",
// //       "150 Images",
// //       "50 Audios (max 4 min)",
// //       "30 videos (max 1 min)",
// //       "1000 MB of documents",
// //     ],
// //     buttonText: "Upgrade",
// //     buttonVariant: "contained",
// //   },
// //   {
// //     title: "Premium",
// //     price: "8.99",
// //     description: [
// //       "3 Coadmins per user",
// //       "12 Profiles",
// //       "25GB of storage",
// //       "Images",
// //       "Audios",
// //       "Videos",

// //     ],
// //     buttonText: "Upgrade",
// //     buttonVariant: "outlined",
// //   },
// // ];

// // export default function Pricing() {
// //   return (
// //     <Container
// //       id="pricing"
// //       sx={{
// //         pt: { xs: 4, sm: 12 },
// //         pb: { xs: 8, sm: 16 },
// //         position: "relative",
// //         display: "flex",
// //         flexDirection: "column",
// //         alignItems: "center",
// //         gap: { xs: 3, sm: 6 },
// //       }}
// //     >
// //       <Box
// //         sx={{
// //           width: { sm: "100%", md: "60%" },
// //           textAlign: { sm: "left", md: "center" },
// //         }}
// //       >
// //         <Typography component="h2" variant="h4" color="text.primary">
// //           Pricing
// //         </Typography>
// //         <Typography variant="body1" color="text.secondary">
// //         Enjoy our Free Plan or unlock even more features with our Gold or Premium Plans, perfect for adding more members of your family and keeping everyone’s medical records organized and secure


// //         </Typography>
// //       </Box>
// //       <Grid container spacing={3} alignItems="center" justifyContent="center">
// //         {tiers.map((tier) => (
// //           <Grid
// //             item
// //             key={tier.title}
// //             xs={12}
// //             sm={tier.title === "Enterprise" ? 12 : 6}
// //             md={4}
// //           >
// //             <Card
// //               sx={{
// //                 p: 2,
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 gap: 4,
// //                 border: tier.title === "Professional" ? "1px solid" : undefined,
// //                 borderColor:
// //                   tier.title === "Professional" ? "primary.main" : undefined,
// //                 background:
// //                   tier.title === "Professional"
// //                     ? "linear-gradient(#033363, #021F3B)"
// //                     : undefined,
// //               }}
// //             >
// //               <CardContent>
// //                 <Box
// //                   sx={{
// //                     mb: 1,
// //                     display: "flex",
// //                     justifyContent: "space-between",
// //                     alignItems: "center",
// //                     color: tier.title === "Professional" ? "grey.100" : "",
// //                   }}
// //                 >
// //                   <Typography component="h3" variant="h6">
// //                     {tier.title}
// //                   </Typography>
// //                   {tier.title === "Professional" && (
// //                     <Chip
// //                       icon={<AutoAwesomeIcon />}
// //                       label={tier.subheader}
// //                       size="small"
// //                       sx={{
// //                         background: (theme) =>
// //                           theme.palette.mode === "light" ? "" : "none",
// //                         backgroundColor: "primary.contrastText",
// //                         "& .MuiChip-label": {
// //                           color: "primary.dark",
// //                         },
// //                         "& .MuiChip-icon": {
// //                           color: "primary.dark",
// //                         },
// //                       }}
// //                     />
// //                   )}
// //                 </Box>
// //                 <Box
// //                   sx={{
// //                     display: "flex",
// //                     alignItems: "baseline",
// //                     color:
// //                       tier.title === "Professional" ? "grey.50" : undefined,
// //                   }}
// //                 >
// //                   <Typography component="h3" variant="h2">
// //                     ${tier.price}
// //                   </Typography>
// //                   <Typography component="h3" variant="h6">
// //                     &nbsp; per month
// //                   </Typography>
// //                 </Box>
// //                 <Divider
// //                   sx={{
// //                     my: 2,
// //                     opacity: 0.2,
// //                     borderColor: "grey.500",
// //                   }}
// //                 />
// //                 {tier.description.map((line) => (
// //                   <Box
// //                     key={line}
// //                     sx={{
// //                       py: 1,
// //                       display: "flex",
// //                       gap: 1.5,
// //                       alignItems: "center",
// //                     }}
// //                   >
// //                     <CheckCircleRoundedIcon
// //                       sx={{
// //                         width: 20,
// //                         color:
// //                           tier.title === "Professional"
// //                             ? "primary.light"
// //                             : "primary.main",
// //                       }}
// //                     />
// //                     <Typography
// //                       component="text"
// //                       variant="subtitle2"
// //                       sx={{
// //                         color:
// //                           tier.title === "Professional"
// //                             ? "grey.200"
// //                             : undefined,
// //                       }}
// //                     >
// //                       {line}
// //                     </Typography>
// //                   </Box>
// //                 ))}
// //               </CardContent>
// //               <CardActions>
// //                 <Button
// //                   fullWidth
// //                   variant={tier.buttonVariant}
// //                   component="a"
// //                   href="/material-ui/getting-started/templates/checkout/"
// //                   target="_blank"
// //                 >
// //                   {tier.buttonText}
// //                 </Button>
// //               </CardActions>
// //             </Card>
            
// //           </Grid>
// //         ))}
// //       </Grid>
// //       <Box
// //         sx={{
// //           width: { sm: "100%", md: "60%" },
// //           textAlign: { sm: "left", md: "center" },
// //         }}
// //       >
// //         <Typography variant="body1" color="text.secondary">
// //           Find attractive annual pricing in our mobile app. Search ComunityApp in your app store

// //         </Typography>
// //       </Box>
// //     </Container>
// //   );
// // }
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import Chip from "@mui/material/Chip";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Container from "@mui/material/Container";
// import Divider from "@mui/material/Divider";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

// const tiersContent = {
//   EN: [
//     {
//       title: "Free",
//       price: "0",
//       description: [
//         "20 AI prompts",
//         "2 Coadmins per user",
//         "7 Profiles",
//         "50 Images",
//         "10 Audios (max 2 min)",
//         "10 videos (max 30 sec)",
//         "350 MB of documents",
//       ],
//       buttonText: "Sign up for free",
//       buttonVariant: "outlined",
//     },
//     {
//       title: "Gold",
//       subheader: "Recommended",
//       price: "2.99",
//       description: [
//         "30 AI prompts",
//         "3 Coadmins per user",
//         "7 Profiles",
//         "150 Images",
//         "50 Audios (max 4 min)",
//         "30 videos (max 1 min)",
//         "1000 MB of documents",
//       ],
//       buttonText: "Upgrade",
//       buttonVariant: "contained",
//     },
//     {
//       title: "Premium",
//       price: "8.99",
//       description: [
//         "50 AI prompts",
//         "3 Coadmins per user",
//         "12 Profiles",
//         "25GB of storage",
//         "600 Images",
//         "200 Audios (max 2 min)",
//         "120 Videos (max 30 sec)",
//       ],
//       buttonText: "Upgrade",
//       buttonVariant: "outlined",
//     },
//   ],
//   ES: [
//     {
//       title: "Plan Gratuito",
//       price: "0.00",
//       description: [
//         "20 ideas IA",
//         "7 Perfiles incluidos",
//         "2 CoAdmin por perfil",
//         "50 Imagenes",
//         "10 Audios (max 2 min)",
//         "10 Videos (max 30 seg)",
//         "350 MB en documentos",
//       ],
//       buttonText: "Iniciar ahora",
//       buttonVariant: "outlined",
//     },
//     {
//       title: "Gold",
//       subheader: "Recomendado",
//       price: "2.99",
//       description: [
//         "30 ideas IA",
//         "7 Perfiles incluidos",
//         "3 CoAdmin por perfil",
//         "150 Imagenes",
//         "50 Audios (max 2 min)",
//         "30 Videos (max 30 seg)",
//         "1000 MB en documentos",
//       ],
//       buttonText: "Actualizar",
//       buttonVariant: "contained",
//     },
//     {
//       title: "Premium",
//       price: "8.99",
//       description: [
//         "50 ideas IA",
//         "12 Perfiles incluidos",
//         "3 CoAdmin por perfil",
//         "600 Imagenes",
//         "200 Audios (max 2 min)",
//         "120 Videos (max 30 seg)",
//         "4000 MB en documentos",
//       ],
//       buttonText: "Actualizar",
//       buttonVariant: "outlined",
//     },
//   ],
// };

// const descriptions = {
//   EN: {
//     heading: "Pricing",
//     intro:
//       "Enjoy our Free Plan or unlock even more features with our Gold or Premium Plans, perfect for adding more members of your family and keeping everyone’s medical records organized and secure.",
//     footer:
//       "Find attractive annual pricing in our mobile app. Search ComunityApp in your app store.",
//   },
//   ES: {
//     heading: "Planes",
//     intro:
//       "Puedes comenzar sin costo alguno y luego elegir el plan que mejor se ajuste a tus necesidades.",
//     footer:
//       "Encuentra planes anuales con descuentos adicionales en nuestra App! Busca ComunityApp en tu tienda de aplicaciones.",
//   },
// };

// export default function Pricing({ language }) {
//   const tiers = tiersContent[language] || tiersContent.EN;
//   const { heading, intro, footer } = descriptions[language] || descriptions.EN;

//   return (
//     <Container
//       id="pricing"
//       sx={{
//         pt: { xs: 4, sm: 12 },
//         pb: { xs: 8, sm: 16 },
//         position: "relative",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         gap: { xs: 3, sm: 6 },
//       }}
//     >
//       <Box
//         sx={{
//           width: { sm: "100%", md: "60%" },
//           textAlign: { sm: "left", md: "center" },
//         }}
//       >
//         <Typography component="h2" variant="h4" color="text.primary">
//           {heading}
//         </Typography>
//         <Typography variant="body1" color="text.secondary">
//           {intro}
//         </Typography>
//       </Box>
//       <Grid container spacing={3} alignItems="center" justifyContent="center">
//         {tiers.map((tier) => (
//           <Grid item key={tier.title} xs={12} sm={6} md={4}>
//             <Card
//               sx={{
//                 p: 2,
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: 4,
//               }}
//             >
//               <CardContent>
//                 <Box
//                   sx={{
//                     mb: 1,
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Typography component="h3" variant="h6">
//                     {tier.title}
//                   </Typography>
//                   {tier.subheader && (
//                     <Chip
//                       icon={<AutoAwesomeIcon />}
//                       label={tier.subheader}
//                       size="small"
//                       sx={{
//                         backgroundColor: "primary.contrastText",
//                         "& .MuiChip-label": {
//                           color: "primary.dark",
//                         },
//                         "& .MuiChip-icon": {
//                           color: "primary.dark",
//                         },
//                       }}
//                     />
//                   )}
//                 </Box>
//                 <Box sx={{ display: "flex", alignItems: "baseline" }}>
//                   <Typography component="h3" variant="h2">
//                     ${tier.price}
//                   </Typography>
//                   <Typography component="h3" variant="h6">
//                     &nbsp;per month
//                   </Typography>
//                 </Box>
//                 <Divider sx={{ my: 2, opacity: 0.2 }} />
//                 {tier.description.map((line) => (
//                   <Box
//                     key={line}
//                     sx={{
//                       py: 1,
//                       display: "flex",
//                       gap: 1.5,
//                       alignItems: "center",
//                     }}
//                   >
//                     <CheckCircleRoundedIcon sx={{ width: 20, color: "primary.main" }} />
//                     <Typography component="span" variant="subtitle2">
//                       {line}
//                     </Typography>
//                   </Box>
//                 ))}
//               </CardContent>
//               <CardActions>
//                 <Button fullWidth variant={tier.buttonVariant}>
//                   {tier.buttonText}
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <Box
//         sx={{
//           width: { sm: "100%", md: "60%" },
//           textAlign: { sm: "left", md: "center" },
//         }}
//       >
//         <Typography variant="body1" color="text.secondary">
//           {footer}
//         </Typography>
//       </Box>
//     </Container>
//   );
// }
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const plans = {
  EN: {
    heading: "Pricing Plans",
    intro: "Compare our free and premium plans to find the perfect fit for managing your family's health records with ComunityApp. Get AI-powered tools, extended storage, and seamless sharing features.",
    footer: "Save more with our discounted annual plans—available in the ComunityApp mobile app.",
    tiers: [
      {
        title: "Free Plan",
        price: "0",
        description: [
          "20 AI health prompts",
          "2 co-admins",
          "Up to 7 family profiles",
          "Store 50 medical images",
          "10 audio notes (max 2 min)",
          "10 videos (max 30 sec)",
          "350 MB document storage"
        ],
        buttonText: "Get Started Free",
        buttonVariant: "outlined",
      },
      {
        title: "Gold Plan",
        subheader: "Most Popular",
        price: "2.99",
        description: [
          "30 AI health prompts",
          "3 co-admins",
          "7 family profiles",
          "150 medical images",
          "50 audio notes (max 4 min)",
          "30 videos (max 1 min)",
          "1 GB secure storage"
        ],
        buttonText: "Upgrade to Gold",
        buttonVariant: "contained",
      },
      {
        title: "Premium Plan",
        price: "8.99",
        description: [
          "50 AI health prompts",
          "3 co-admins",
          "12 family profiles",
          "600 images",
          "200 audio notes (max 2 min)",
          "120 videos (max 30 sec)",
          "25 GB encrypted document storage"
        ],
        buttonText: "Upgrade to Premium",
        buttonVariant: "outlined",
      },
    ]
  },
  ES: {
  heading: "Planes de precios",
  intro:
    "Compara nuestros planes gratuito y premium para encontrar el ideal para gestionar los registros médicos de tu familia con ComunityApp. Accede a herramientas con IA, almacenamiento extendido y funciones seguras para compartir.",
  footer:
    "Ahorra más con nuestros planes anuales con descuento—disponibles en la app móvil de ComunityApp.",
  tiers: [
    {
      title: "Plan Gratuito",
      price: "0",
      description: [
        "20 ideas de salud con IA",
        "2 co-administradores",
        "Hasta 7 perfiles familiares",
        "50 imágenes médicas",
        "10 notas de audio (máx. 2 min)",
        "10 videos (máx. 30 seg)",
        "350 MB de almacenamiento"
      ],
      buttonText: "Comenzar gratis",
      buttonVariant: "outlined",
    },
    {
      title: "Plan Gold",
      subheader: "Más popular",
      price: "2.99",
      description: [
        "30 ideas de salud con IA",
        "3 co-administradores",
        "7 perfiles familiares",
        "150 imágenes médicas",
        "50 notas de audio (máx. 4 min)",
        "30 videos (máx. 1 min)",
        "1 GB de almacenamiento seguro"
      ],
      buttonText: "Actualizar a Gold",
      buttonVariant: "contained",
    },
    {
      title: "Plan Premium",
      price: "8.99",
      description: [
        "50 ideas de salud con IA",
        "3 co-administradores",
        "12 perfiles familiares",
        "600 imágenes médicas",
        "200 notas de audio (máx. 2 min)",
        "120 videos (máx. 30 seg)",
        "25 GB de almacenamiento cifrado"
      ],
      buttonText: "Actualizar a Premium",
      buttonVariant: "outlined",
    },
  ]
}
};

export default function Pricing({ language = "EN" }) {
  const { heading, intro, footer, tiers } = plans[language];

  return (
    <Container component="section" id="pricing" aria-labelledby="pricing-heading" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box textAlign="center" maxWidth="md" mx="auto" mb={6}>
        <Typography component="h2" variant="h3" id="pricing-heading" gutterBottom fontWeight="bold">
          {heading}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {intro}
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {tiers.map((tier, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card variant="outlined" sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.subheader && (
                    <Chip icon={<AutoAwesomeIcon />} label={tier.subheader} size="small" color="primary" />
                  )}
                </Box>
                <Box display="flex" alignItems="baseline" mb={2}>
                  <Typography component="span" variant="h3">
                    ${tier.price}
                  </Typography>
                  <Typography component="span" variant="subtitle1" ml={1}>
                    / month
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                {tier.description.map((item, idx) => (
                  <Box key={idx} display="flex" alignItems="center" mb={1.2}>
                    <CheckCircleRoundedIcon color="primary" sx={{ fontSize: 20, mr: 1 }} />
                    <Typography variant="body2">{item}</Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button fullWidth variant={tier.buttonVariant} aria-label={tier.buttonText}>
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" maxWidth="md" mx="auto" mt={6}>
        <Typography variant="body1" color="text.secondary">
          {footer}
        </Typography>
      </Box>
    </Container>
  );
}