import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
import Button from "@mui/material/Button";

const content = {
  EN: {
    heading: "Key Features of ComunityApp",
    description:
      "ComunityApp empowers families to manage their health data effortlessly. Discover how our app keeps your records secure, organized, and always available.",
    items: [
      {
        icon: <ViewQuiltRoundedIcon fontSize="large" />,
        title: "Family Health Profile Management",
        description:
          "Store and organize critical health details like allergies, vaccinations, medications, emergency contacts, and chronic conditions in one secure place.",
      },
      {
        icon: <EdgesensorHighRoundedIcon fontSize="large" />,
        title: "Secure Medical Record Sharing",
        description:
          "Share your family's medical records with doctors, family members, or caregivers. Control access levels and maintain full privacy and data ownership.",
      },
      {
        icon: <DevicesRoundedIcon fontSize="large" />,
        title: "Cross-Platform Access",
        description:
          "ComunityApp works on iOS, Android, and Web. Seamlessly access and update medical records anytime, anywhere, from any device.",
      },
    ],
    cta: "Get Started",
    ctaLabel: "Get started with ComunityApp",
  },
  ES: {
    heading: "Funciones clave de ComunityApp",
    description:
      "ComunityApp te ayuda a gestionar fácilmente los datos de salud de tu familia. Descubre cómo mantenemos tus registros seguros, organizados y siempre accesibles.",
    items: [
      {
        icon: <ViewQuiltRoundedIcon fontSize="large" />,
        title: "Gestión de Perfiles Médicos Familiares",
        description:
          "Guarda y organiza detalles de salud importantes como alergias, vacunas, medicamentos, contactos de emergencia y condiciones crónicas en un solo lugar seguro.",
      },
      {
        icon: <EdgesensorHighRoundedIcon fontSize="large" />,
        title: "Compartir Registros Médicos con Seguridad",
        description:
          "Comparte los registros médicos de tu familia con médicos, familiares o cuidadores. Controla el nivel de acceso y mantén la privacidad en todo momento.",
      },
      {
        icon: <DevicesRoundedIcon fontSize="large" />,
        title: "Acceso Multiplataforma",
        description:
          "ComunityApp funciona en iOS, Android y Web. Accede y actualiza tus registros médicos desde cualquier dispositivo, en cualquier momento.",
      },
    ],
    cta: "Comenzar",
    ctaLabel: "Comenzar con ComunityApp",
  },
};

export default function Features({ language = "EN", edition = "user" }) {
  const { heading, description, items, cta, ctaLabel } = content[language] || content.EN;

  return (
    <Box component="section" id="features" aria-labelledby="features-heading" sx={{ py: { xs: 8, sm: 12 } }}>
      <Container>
        <header style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Typography component="h2" id="features-heading" variant="h3" fontWeight="bold" gutterBottom>
            {heading}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720, mx: "auto" }}>
            {description}
          </Typography>
        </header>

        <Grid container spacing={4}>
          {items.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card variant="outlined" sx={{ p: 3, height: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>{feature.icon}</Box>
                <Typography component="h3" variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Stack direction="row" justifyContent="center" sx={{ mt: 6 }}>
          <Button
            href="https://app.comunityapp.com/user/login"
            variant="contained"
            color="primary"
            size="large"
            aria-label={ctaLabel}
          >
            {cta}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}