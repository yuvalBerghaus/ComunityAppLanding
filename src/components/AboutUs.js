import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const content = {
  EN: {
    title: "About ComunityApp",
    metaDescription:
      "Learn more about ComunityApp's mission to simplify family health record management, enhance privacy, and ensure secure medical data access.",
    sections: [
      {
        id: "panel1",
        summary: "Who We Are",
        details:
          "ComunityApp helps families manage, organize, and share medical records securely. Our platform provides peace of mind by keeping health data accessible and protected at all times.",
      },
      {
        id: "panel2",
        summary: "Our Vision",
        details:
          "To transform health data access by making it easier for families to store and share health records digitally while maintaining full control and security.",
      },
      {
        id: "panel3",
        summary: "Our Mission",
        details:
          "Our mission is to simplify health record tracking and improve family wellness. We focus on privacy-first technology and seamless user experience across platforms.",
      },
      {
        id: "panel4",
        summary: "Our Story",
        details:
          "Born from real family health challenges, ComunityApp was built to help people avoid the stress of managing scattered medical data. We exist to empower caregivers with clarity and control.",
      },
      {
        id: "panel5",
        summary: "Our Core Values",
        details: `1. <b>Security:</b> We apply high-level encryption and access control.<br />
                  2. <b>Simplicity:</b> Designed for families of all tech levels.<br />
                  3. <b>Empowerment:</b> We give users full data control.<br />
                  4. <b>Trust:</b> Transparent, reliable, and privacy-focused.`,
      },
    ],
  },
  ES: {
    title: "Sobre ComunityApp",
    metaDescription:
      "Conoce más sobre ComunityApp: nuestra misión es ayudar a las familias a organizar registros médicos, proteger la privacidad y mejorar el acceso a datos de salud.",
    sections: [
      {
        id: "panel1",
        summary: "¿Quiénes somos?",
        details:
          "ComunityApp ayuda a las familias a organizar y compartir registros médicos de forma segura. Ofrecemos tranquilidad manteniendo la información de salud siempre protegida y accesible.",
      },
      {
        id: "panel2",
        summary: "Nuestra Visión",
        details:
          "Transformar el acceso a la salud digital permitiendo que las familias gestionen sus datos médicos fácilmente, con control y privacidad.",
      },
      {
        id: "panel3",
        summary: "Nuestra Misión",
        details:
          "Simplificamos el seguimiento de la salud familiar a través de tecnología intuitiva y segura. Priorizamos la privacidad y la experiencia del usuario.",
      },
      {
        id: "panel4",
        summary: "Nuestra Historia",
        details:
          "ComunityApp nació de una necesidad personal. Queríamos evitar el caos de manejar registros médicos dispersos. Hoy ayudamos a familias a mantenerse informadas y conectadas.",
      },
      {
        id: "panel5",
        summary: "Nuestros Valores",
        details: `1. <b>Seguridad:</b> Cifrado de nivel bancario.<br />
                  2. <b>Simplicidad:</b> Accesible para todas las edades.<br />
                  3. <b>Empoderamiento:</b> Control total de tus datos.<br />
                  4. <b>Confianza:</b> Transparencia y protección constante.`,
      },
    ],
  },
};

export default function AboutUs({ language = "EN" }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const langContent = content[language] || content.EN;

  return (
    <Box
      component="section"
      id="aboutUs"
      aria-labelledby="aboutus-heading"
      sx={{
        pt: { xs: 2, sm: 6 },
        pb: { xs: 8, sm: 16 },
        bgcolor: "#E7ECF1",
      }}
    >
      <Container
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Typography
          component="p"
          role="heading"
          aria-level={3}
          variant="h5"
          fontWeight="bold"
          color="black"
          id="aboutus-heading"
          gutterBottom
          sx={{ textAlign: { sm: "left", md: "center" }, maxWidth: 700 }}
        >
          {langContent.title}
        </Typography>
        <Typography
          component="p"
          color="text.secondary"
          variant="body2"
          sx={{ maxWidth: 700, textAlign: { sm: "left", md: "center" } }}
        >
          {langContent.metaDescription}
        </Typography>

        <Box sx={{ width: "100%", mt: 4 }}>
          {langContent.sections.map((section) => (
            <Accordion
              key={section.id}
              expanded={expanded === section.id}
              onChange={handleChange(section.id)}
              sx={{ bgcolor: "#E7ECF1", color: "black" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${section.id}-content`}
                id={`${section.id}-header`}
              >
                <Typography component="h3" variant="subtitle2">
                  {section.summary}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  dangerouslySetInnerHTML={{ __html: section.details }}
                />
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
