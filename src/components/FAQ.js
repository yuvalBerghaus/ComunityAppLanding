// import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
// import Typography from "@mui/material/Typography";

// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// export default function FAQ() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//     <Container
//       id="faq"
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
//       <Typography
//         component="h2"
//         variant="h4"
//         color="text.primary"
//         sx={{
//           width: { sm: "100%", md: "60%" },
//           textAlign: { sm: "left", md: "center" },
//         }}
//       >
//         Frequently asked questions
//       </Typography>
//       <Box sx={{ width: "100%" }}>
//         <Accordion
//           expanded={expanded === "panel1"}
//           onChange={handleChange("panel1")}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel1d-content"
//             id="panel1d-header"
//           >
//             <Typography component="h3" variant="subtitle2">
//               How do I contact customer support if I have a question or issue?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography
//               variant="body2"
//               gutterBottom
//               sx={{ maxWidth: { sm: "100%", md: "70%" } }}
//             >
//               You can reach our customer support team by emailing
//               <Link> support@comunityapp.com </Link>
//               and one of our representatives will respond to you in 48hr. We are
//               here to assist you promptly.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion
//           expanded={expanded === "panel2"}
//           onChange={handleChange("panel2")}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2d-content"
//             id="panel2d-header"
//           >
//             <Typography component="h3" variant="subtitle2">
//               Can I access my data from multiple devices?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography
//               variant="body2"
//               gutterBottom
//               sx={{ maxWidth: { sm: "100%", md: "70%" } }}
//             >
//               Absolutely! You can access your data from any device
//               simultaneously and it will sync. Make sure you have internet
//               access and log into the same account. Our platform is compatible
//               with smartphones, tablets, and computers. You can access via our
//               website, iOS App or Android App.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion
//           expanded={expanded === "panel3"}
//           onChange={handleChange("panel3")}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel3d-content"
//             id="panel3d-header"
//           >
//             <Typography component="h3" variant="subtitle2">
//               If I reinstall the iOS or Android App do I lose my data?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography
//               variant="body2"
//               gutterBottom
//               sx={{ maxWidth: { sm: "100%", md: "70%" } }}
//             >
//               No, your data will show as long as you login with the same email
//               account.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion
//           expanded={expanded === "panel4"}
//           onChange={handleChange("panel4")}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel4d-content"
//             id="panel4d-header"
//           >
//             <Typography component="h3" variant="subtitle2">
//               How do I share my medical records with healthcare providers or
//               family members?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography
//               variant="body2"
//               gutterBottom
//               sx={{ maxWidth: { sm: "100%", md: "70%" } }}
//             >
//               You can easily share your records by clicking on the share icon in
//               the desired section or item, then choose the method, via email or
//               WhatsAppp, a secure link will be created including a code. You can
//               revoke access at any time to maintain control over your
//               information going to My Community section.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//       </Box>
//     </Container>
//   );
// }
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqContent = {
  EN: {
    title: "Frequently asked questions",
    questions: [
      {
        id: "panel1",
        question: "How do I contact customer support if I have a question or issue?",
        answer: `You can reach our customer support team by emailing 
        <Link>support@comunityapp.com</Link>. Our representatives will respond within 48 hours.`,
      },
      {
        id: "panel2",
        question: "Can I access my data from multiple devices?",
        answer: `Absolutely! You can access your data from any device simultaneously. Ensure internet access and log into the same account. Our platform works on smartphones, tablets, and computers via our website, iOS App, or Android App.`,
      },
      {
        id: "panel3",
        question: "If I reinstall the iOS or Android App, do I lose my data?",
        answer: `No, your data is safe as long as you log in with the same email account.`,
      },
      {
        id: "panel4",
        question: "How do I share my medical records with healthcare providers or family members?",
        answer: `You can share records by clicking the share icon in the desired section or item. Choose the method, such as email or WhatsApp. A secure link will be created including a code, and you can revoke access anytime from the My Community section.`,
      },
    ],
  },
  ES: {
    title: "Preguntas Frecuentes",
    questions: [
      {
        id: "panel1",
        question: "¿Cómo puedo contactar a soporte?",
        answer: `Nuestro equipo de soporte está disponible para ayudarte. Envía un correo a 
        <Link>support@comunityapp.com</Link>. Responderemos en un máximo de 48 horas.`,
      },
      {
        id: "panel2",
        question: "¿Cómo puedo acceder a mis datos desde diferentes dispositivos?",
        answer: `Puedes acceder a tu cuenta desde varios dispositivos. Solo inicia sesión en la App o en nuestro sitio web. La App está disponible en App Store y Google Play.`,
      },
      {
        id: "panel3",
        question: "Si borro la App, ¿pierdo mis datos?",
        answer: `No, tus datos están seguros en la nube. Solo instala la App nuevamente e inicia sesión con tus credenciales.`,
      },
      {
        id: "panel4",
        question: "¿Cómo comparto mis datos con familiares, amigos o doctores?",
        answer: `Puedes compartir tus registros haciendo clic en el ícono de compartir en la sección deseada. Selecciona el método, como correo electrónico o WhatsApp. Se generará un enlace seguro con un código, y puedes revocar el acceso en cualquier momento desde la sección Comunidad.`,
      },
    ],
  },
};

export default function FAQ({ language, edition = "user" }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const langContent = faqContent[language] || faqContent.EN;

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        {langContent.title}
      </Typography>
      <Box sx={{ width: "100%" }}>
        {langContent.questions.map((faq) => (
          <Accordion
            key={faq.id}
            expanded={expanded === faq.id}
            onChange={handleChange(faq.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${faq.id}-content`}
              id={`${faq.id}-header`}
            >
              <Typography component="h3" variant="subtitle2">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}
