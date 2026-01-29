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

const content = {
  EN: {
    heading: "Why Families Choose ComunityApp",
    description:
      "Explore the core features that make ComunityApp the most trusted platform for managing, organizing, and sharing your family’s medical records securely.",
    items: [
      {
        icon: <SettingsSuggestRoundedIcon />,
        title: "Centralized Health Record Access",
        description:
          "Securely store all medical data in one place for easy tracking and better diagnosis. Help doctors identify health issues faster with a complete medical history.",
      },
      {
        icon: <ConstructionRoundedIcon />,
        title: "Granular Sharing Permissions",
        description:
          "Grant healthcare providers or family members access to specific records and revoke access at any time to maintain full privacy.",
      },
      {
        icon: <ThumbUpAltRoundedIcon />,
        title: "User-Friendly Interface",
        description:
          "Effortlessly log allergies, vaccines, conditions, and preferences using an interface designed for all ages.",
      },
      {
        icon: <AutoAwesomeIcon />,
        title: "AI-Powered Summarizer",
        description:
          "Use advanced AI to instantly summarize medical documents, lab reports, and visit notes—making it easier to understand and act on complex health information.",
      },
      {
        icon: <AutoFixHighRoundedIcon />,
        title: "Bank-Level Health Data Security",
        description:
          "ComunityApp uses advanced encryption and privacy protocols to ensure your family’s sensitive health data is protected at all times.",
      },
      {
        icon: <QueryStatsRoundedIcon />,
        title: "Personalized Medical Profiles",
        description:
          "Create detailed profiles for each family member. Customize medical tracking and sharing for specific needs and age groups.",
      },
    ],
  },
  ES: {
    heading: "Por qué las familias eligen ComunityApp",
    description:
      "Descubre las funciones principales que hacen de ComunityApp la plataforma más confiable para gestionar, organizar y compartir de forma segura los registros médicos de tu familia.",
    items: [
      {
        icon: <SettingsSuggestRoundedIcon />,
        title: "Acceso centralizado a los historiales médicos",
        description:
          "Guarda todos los datos médicos en un solo lugar para facilitar el seguimiento y mejorar los diagnósticos. Ayuda a los médicos a identificar problemas de salud más rápido con un historial completo.",
      },
      {
        icon: <ConstructionRoundedIcon />,
        title: "Permisos de uso compartido personalizados",
        description:
          "Brinda acceso a registros médicos específicos a familiares o doctores, y revócalo en cualquier momento para mantener tu privacidad.",
      },
      {
        icon: <ThumbUpAltRoundedIcon />,
        title: "Interfaz fácil de usar",
        description:
          "Registra alergias, vacunas, condiciones y preferencias con una interfaz simple diseñada para todas las edades.",
      },
      {
        icon: <AutoAwesomeIcon />,
        title: "Resumen automático con IA",
        description:
          "Resume automáticamente documentos médicos, análisis y notas de consulta usando inteligencia artificial avanzada para facilitar la comprensión.",
      },
      {
        icon: <AutoFixHighRoundedIcon />,
        title: "Seguridad de datos de nivel bancario",
        description:
          "Utilizamos cifrado avanzado y protocolos de privacidad para proteger los datos médicos sensibles de tu familia en todo momento.",
      },
      {
        icon: <QueryStatsRoundedIcon />,
        title: "Perfiles médicos personalizados",
        description:
          "Crea perfiles detallados para cada miembro de tu familia y adapta el seguimiento y uso compartido a sus necesidades específicas.",
      },
    ],
  },
};

export default function Highlights({ language = "EN" }) {
  const langContent = content[language] || content.EN;

  return (
    <Box
      component="section"
      id="highlights"
      aria-labelledby="highlights-heading"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "black",
        bgcolor: "#E7ECF1",
      }}
    >
      <Container
        sx={{
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
          <Typography component="h2" variant="h3" id="highlights-heading" fontWeight="bold" gutterBottom>
            {langContent.heading}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {langContent.description}
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {langContent.items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                component={Stack}
                spacing={2}
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.300",
                  backgroundColor: "white",
                }}
              >
                <Box sx={{ opacity: 0.5 }}>{item.icon}</Box>
                <Box>
                  <Typography component="h3" variant="h6" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}