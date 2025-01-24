// import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
// import Typography from "@mui/material/Typography";

// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// export default function AboutUs() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//     <Box
//     sx={{
//       pt: { xs: 2, sm: 6 },
//       pb: { xs: 8, sm: 16 },
//       color: "white",
//       bgcolor: "#E7ECF1",
//     }}
//   >
//     <Container
//       id="aboutUs"
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
//         color="black"
//         sx={{
//           width: { sm: "100%", md: "60%" },
//           textAlign: { sm: "left", md: "center" },
//         }}
//       >
//         About us
//       </Typography>
//       <Box sx={{ width: "100%" }}>
//       <Accordion
//         expanded={expanded === "panel1"}
//         onChange={handleChange("panel1")}
//         sx={{ bgcolor: "#E7ECF1" , color:"black"}}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel1d-content"
//             id="panel1d-header"
//           >
//             <Typography component="h3" variant="subtitle2">
//             About Us
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography
//               variant="body2"
//               gutterBottom
//               sx={{ maxWidth: { sm: "100%", md: "70%" } }}
//             >
//               At ComunityApp, we empower families to securely manage, organize, and share their medical records. Our purpose is to provide peace of mind by ensuring that every family member's health information is safely stored and easily accessible when needed.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion
//           expanded={expanded === "panel2"}
//           onChange={handleChange("panel2")}
//           sx={{ bgcolor: "#E7ECF1" , color:"black"}}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2d-content"
//             id="panel2d-header"
//           >
//             <Typography component="h3" variant="subtitle2">
//               Our vision
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography
//               variant="body2"
//               gutterBottom
//               sx={{ maxWidth: { sm: "100%", md: "70%" } }}
//             >
//               We aim to revolutionize the way families manage their health by creating a secure, user-friendly platform for storing and sharing medical records. Our goal is to foster proactive healthcare and strengthen family connections around the world.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion
//             sx={{ bgcolor: "#E7ECF1", color:"black" }}
//           expanded={expanded === "panel3"}
//           onChange={handleChange("panel3")}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel3d-content"
//             id="panel3d-header"
//           >
//             <Typography component="h3" variant="subtitle2">
//             Our Mission
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography
//               variant="body2"
//               gutterBottom
//               sx={{ maxWidth: { sm: "100%", md: "70%" } }}
//             >
//               Our mission is to simplify health record management for families. We prioritize data privacy and accessibility, ensuring seamless collaboration between family members and healthcare providers. With ComunityApp, you can take control of your health journey through organized and secure medical records.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion
//         sx={{ bgcolor: "#E7ECF1" , color:"black"}}
//           expanded={expanded === "panel4"}
//           onChange={handleChange("panel4")}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel4d-content"
//             id="panel4d-header"
//           >
//             <Typography component="h3" variant="subtitle2">
//               Our story
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography
//               variant="body2"
//               gutterBottom
//               sx={{ maxWidth: { sm: "100%", md: "70%" } }}
//             >
//               ComunityApp was born out of a personal need. When one of our founder's family members faced a health issue at a young age, it became clear how challenging it can be to manage vital medical information. This experience inspired us to create a solution that helps families stay connected, informed, and prepared for any health-related situation.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion
//         sx={{ bgcolor: "#E7ECF1", color:"black" }}
//           expanded={expanded === "panel5"}
//           onChange={handleChange("panel5")}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel5d-content"
//             id="panel5d-header"
//           >
//             <Typography component="h3" variant="subtitle2">
//             Our Values
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography
//               variant="body2"
//               gutterBottom
//               sx={{ maxWidth: { sm: "100%", md: "70%" } ,color:"black" }}
//             >
//               1. <b>Security: </b>Your data's safety and confidentiality are our top priorities.<br />
// 2. <b>Simplicity:</b> We believe in providing an intuitive, user-friendly experience.<br />
// 3. <b>Empowerment:</b> We enable families to take charge of their health through organized information.<br />
// 4. <b>Trust:</b> You can rely on us to safeguard your health records with the highest standards of security.

//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//       </Box>
//     </Container>
//     </Box>
//   );
// }


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
    title: "About Us",
    sections: [
      {
        id: "panel1",
        summary: "About Us",
        details:
          "At ComunityApp, we empower families to securely manage, organize, and share their medical records. Our purpose is to provide peace of mind by ensuring that every family member's health information is safely stored and easily accessible when needed.",
      },
      {
        id: "panel2",
        summary: "Our Vision",
        details:
          "We aim to revolutionize the way families manage their health by creating a secure, user-friendly platform for storing and sharing medical records. Our goal is to foster proactive healthcare and strengthen family connections around the world.",
      },
      {
        id: "panel3",
        summary: "Our Mission",
        details:
          "Our mission is to simplify health record management for families. We prioritize data privacy and accessibility, ensuring seamless collaboration between family members and healthcare providers. With ComunityApp, you can take control of your health journey through organized and secure medical records.",
      },
      {
        id: "panel4",
        summary: "Our Story",
        details:
          "ComunityApp was born out of a personal need. When one of our founder's family members faced a health issue at a young age, it became clear how challenging it can be to manage vital medical information. This experience inspired us to create a solution that helps families stay connected, informed, and prepared for any health-related situation.",
      },
      {
        id: "panel5",
        summary: "Our Values",
        details: `1. <b>Security:</b> Your data's safety and confidentiality are our top priorities.<br />
                  2. <b>Simplicity:</b> We believe in providing an intuitive, user-friendly experience.<br />
                  3. <b>Empowerment:</b> We enable families to take charge of their health through organized information.<br />
                  4. <b>Trust:</b> You can rely on us to safeguard your health records with the highest standards of security.`,
      },
    ],
  },
  ES: {
    title: "Quienes Somos",
    sections: [
      {
        id: "panel1",
        summary: "Quienes somos?",
        details:
          "Somos un equipo multidisciplinario que reúne a expertos en tecnología, salud, retail y hospitalidad. Nuestra diversidad nos permite abordar los desafíos de las familias desde múltiples perspectivas, creando soluciones innovadoras que mejoran la vida diaria.",
      },
      {
        id: "panel2",
        summary: "Nuestra Visión",
        details:
          "Nuestro objetivo es revolucionar la forma en que las familias gestionan su salud mediante la creación de una plataforma segura y fácil de usar para almacenar y compartir registros médicos. Nuestro objetivo es fomentar la atención médica proactiva y fortalecer las conexiones familiares en todo el mundo.",
      },
      {
        id: "panel3",
        summary: "Nuestra Misión",
        details:
          "Nuestra misión es que cada familia pueda gestionar su salud sin estrés. Con privacidad y la accesibilidad de los datos, garantizando una colaboración fluida entre los miembros de la familia y los proveedores de atención médica.",
      },
      {
        id: "panel4",
        summary: "Nuestra Historia",
        details:
          "ComunityApp nació de una necesidad personal. Cuando un familiar de nuestros fundadores enfrentó un problema de salud a una edad temprana, se hizo evidente lo difícil que puede ser para toda la familia. Esta experiencia nos inspiró a crear una solución que ayude a las familias a mantenerse conectadas, informadas y preparadas para cualquier situación relacionada con la salud.",
      },
      {
        id: "panel5",
        summary: "Nuestros Valores",
        details: `1. <b>Seguridad:</b> La seguridad y confidencialidad de sus datos son nuestras principales prioridades.<br />
                  2. <b>Simplicidad:</b> Creemos en proporcionar una experiencia intuitiva y fácil de usar.<br />
                  3. <b>Empoderamiento:</b> Permitimos que las familias tomen el control de su salud a través de información organizada.<br />
                  4. <b>Confianza:</b> Puede confiar en nosotros para proteger sus registros de salud con los más altos estándares de seguridad.`,
      },
    ],
  },
};

export default function AboutUs({ language }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const langContent = content[language] || content.EN;

  return (
    <Box
      sx={{
        pt: { xs: 2, sm: 6 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#E7ECF1",
      }}
    >
      <Container
        id="aboutUs"
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
          color="black"
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          {langContent.title}
        </Typography>
        <Box sx={{ width: "100%" }}>
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
                  gutterBottom
                  sx={{ maxWidth: { sm: "100%", md: "70%" } }}
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
