// import * as React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
// import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
// import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
// import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
// import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
// import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
// import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

// const items = [
//   {
//     icon: <SettingsSuggestRoundedIcon />,
//     title: "Where is all your health Data history?",
//     description:
//       "Consolidating all health data in a single, organized location is essential for addressing health issues effectively. Having comprehensive information readily available enables doctors to identify the root cause of medical problems more efficiently. Every detail matters in the pursuit of a solution.",
//   },
//   {
//     icon: <ConstructionRoundedIcon />,
//     title: "User-Controlled Data Sharing",
//     description:
//       "Share your medical records with healthcare providers or family members with ease, and revoke access at any time, maintaining full control over your data.",
//   },
//   {
//     icon: <ThumbUpAltRoundedIcon />,
//     title: "Great user experience",
//     description:
//       "Add allergies, vaccines, food preferences and any other health data with an intuitive and easy-to-use interface.",
//   },
//   {
//     icon: <AutoFixHighRoundedIcon />,
//     title: "Advanced Data Security",
//     description:
//       "Protect your sensitive health information with industry-standard encryption and stringent access controls to ensure your data is safe and private.",
//   },
//   {
//     icon: <SupportAgentRoundedIcon />,
//     title: "Reliable support",
//     description:
//       "Count on our responsive customer support, offering assistance that always aim above and beyond your expectations.",
//   },
//   {
//     icon: <QueryStatsRoundedIcon />,
//     title: "Customizable User Profiles",
//     description:
//       "Create and manage detailed profiles for each family member, allowing for personalized storage and sharing of medical records tailored to individual needs.",
//   },
// ];

// export default function Highlights() {
//   return (
//     <Box
//       id="highlights"
//       sx={{
//         pt: { xs: 4, sm: 12 },
//         pb: { xs: 8, sm: 16 },
//         color: "black",
//         bgcolor: "#E7ECF1",
//       }}
//     >
//       <Container
//         sx={{
//           position: "relative",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: { xs: 3, sm: 6 },
//         }}
//       >
//         <Box
//           sx={{
//             width: { sm: "100%", md: "60%" },
//             textAlign: { sm: "left", md: "center" },
//           }}
//         >
//           <Typography component="h2" variant="h4">
//             Highlights
//           </Typography>
//           <Typography variant="body1" sx={{ color: "black" }}>
//             Our platform revolutionizes health data management by ensuring your
//             medical records are secure, organized, and easily accessible.
//             Discover how our innovative features and exceptional support
//             prioritize your health and convenience with these key highlights.
//           </Typography>
//         </Box>
//         <Grid container spacing={2.5}>
//           {items.map((item, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Stack
//                 direction="column"
//                 color="inherit"
//                 component={Card}
//                 spacing={1}
//                 useFlexGap
//                 sx={{
//                   p: 3,
//                   height: "100%",
//                   border: "1px solid",
//                   borderColor: "grey.800",
//                   background: "transparent",
//                   backgroundColor: "white",
//                 }}
//               >
//                 <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
//                 <div>
//                   <Typography fontWeight="medium" gutterBottom>
//                     {item.title}
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: "black" }}>
//                     {item.description}
//                   </Typography>
//                 </div>
//               </Stack>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const content = {
  EN: {
    heading: "Highlights",
    description:
      "Our platform revolutionizes health data management by ensuring your medical records are secure, organized, and easily accessible. Discover how our innovative features and exceptional support prioritize your health and convenience with these key highlights.",
    items: [
      {
        icon: <SettingsSuggestRoundedIcon />,
        title: "Where is all your health Data history?",
        description:
          "Consolidating all health data in a single, organized location is essential for addressing health issues effectively. Having comprehensive information readily available enables doctors to identify the root cause of medical problems more efficiently. Every detail matters in the pursuit of a solution.",
      },
      {
        icon: <ConstructionRoundedIcon />,
        title: "User-Controlled Data Sharing",
        description:
          "Share your medical records with healthcare providers or family members with ease, and revoke access at any time, maintaining full control over your data.",
      },
      {
        icon: <ThumbUpAltRoundedIcon />,
        title: "Great user experience",
        description:
          "Add allergies, vaccines, food preferences and any other health data with an intuitive and easy-to-use interface.",
      },
      {
        icon: <AutoFixHighRoundedIcon />,
        title: "Advanced Data Security",
        description:
          "Protect your sensitive health information with industry-standard encryption and stringent access controls to ensure your data is safe and private.",
      },
      {
        icon: <SupportAgentRoundedIcon />,
        title: "Reliable support",
        description:
          "Count on our responsive customer support, offering assistance that always aim above and beyond your expectations.",
      },
      {
        icon: <QueryStatsRoundedIcon />,
        title: "Customizable User Profiles",
        description:
          "Create and manage detailed profiles for each family member, allowing for personalized storage and sharing of medical records tailored to individual needs.",
      },
    ],
  },
  ES: {
    heading: "Destacados",
    description:
      "Nuestra plataforma revoluciona la gestión de datos de salud al garantizar que sus registros médicos sean seguros, organizados y fácilmente accesibles. Descubra cómo nuestras innovadoras funciones y nuestro excepcional soporte priorizan su salud y comodidad con estos puntos clave.",
    items: [
      {
        icon: <SettingsSuggestRoundedIcon />,
        title: "Donde guardas toda tu información médica",
        description:
          "Consolidar todos los datos de salud en un solo lugar y organizado es esencial para abordar los problemas de salud de manera efectiva. Contar con información completa y fácilmente accesible permite a los médicos identificar la causa raíz de los problemas médicos de manera más eficiente. Cada detalle es crucial en la búsqueda de una solución.",
      },
      {
        icon: <ConstructionRoundedIcon />,
        title: "Control total del usuario sobre su Data",
        description:
          "Comparta sus registros médicos con facilidad con proveedores de atención médica o familiares y revoque el acceso en cualquier momento, manteniendo el control total sobre sus datos.",
      },
      {
        icon: <ThumbUpAltRoundedIcon />,
        title: "Fácil de usar para todas las edades",
        description:
          "Agregue alergias, vacunas, preferencias alimentarias y cualquier otro dato de salud con una interfaz intuitiva y fácil de usar.",
      },
      {
        icon: <AutoFixHighRoundedIcon />,
        title: "Seguridad de Datos Avanzada",
        description:
          "Proteja su información de salud confidencial con encriptación de nivel industrial y controles de acceso estrictos para garantizar que sus datos estén seguros y privados.",
      },
      {
        icon: <SupportAgentRoundedIcon />,
        title: "Asistencia confiable",
        description:
          "Nuestro soporte al cliente ofrece asistencia que siempre busca superar sus expectativas.",
      },
      {
        icon: <QueryStatsRoundedIcon />,
        title: "Perfiles Personalizados",
        description:
          "Cree y gestione perfiles detallados para cada miembro de la familia, permitiendo compartir y almacenar registros médicos adaptados a las necesidades individuales de cada miembro.",
      },
    ],
  },
};

export default function Highlights({ language }) {
  const langContent = content[language] || content.EN;

  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "black",
        bgcolor: "#E7ECF1",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            {langContent.heading}
          </Typography>
          <Typography variant="body1" sx={{ color: "black" }}>
            {langContent.description}
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {langContent.items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "white",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "black" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
