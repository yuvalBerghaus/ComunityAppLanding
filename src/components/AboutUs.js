import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AboutUs() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
    sx={{
      pt: { xs: 4, sm: 12 },
      pb: { xs: 8, sm: 16 },
      color: "white",
      bgcolor: "#06090a",
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
        color="white"
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        About us
      </Typography>
      <Box sx={{ width: "100%" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ bgcolor: "grey.900" , color:"white"}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle2">
            About Us
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              At ComunityApp, we empower families to securely manage, organize, and share their medical records. Our purpose is to provide peace of mind by ensuring that every family member's health information is safely stored and easily accessible when needed.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{ bgcolor: "grey.900" , color:"white"}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Our vision
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              We aim to revolutionize the way families manage their health by creating a secure, user-friendly platform for storing and sharing medical records. Our goal is to foster proactive healthcare and strengthen family connections around the world.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
            sx={{ bgcolor: "grey.900", color:"white" }}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2">
            Our Mission
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              Our mission is to simplify health record management for families. We prioritize data privacy and accessibility, ensuring seamless collaboration between family members and healthcare providers. With ComunityApp, you can take control of your health journey through organized and secure medical records.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
        sx={{ bgcolor: "grey.900" , color:"white"}}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Our story
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              ComunityApp was born out of a personal need. When one of our founder's family members faced a health issue at a young age, it became clear how challenging it can be to manage vital medical information. This experience inspired us to create a solution that helps families stay connected, informed, and prepared for any health-related situation.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
        sx={{ bgcolor: "grey.900", color:"white" }}
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5d-content"
            id="panel5d-header"
          >
            <Typography component="h3" variant="subtitle2">
            Our Values
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } ,color:"white" }}
            >
              1. <b>Security: </b>Your data's safety and confidentiality are our top priorities.<br />
2. <b>Simplicity:</b> We believe in providing an intuitive, user-friendly experience.<br />
3. <b>Empowerment:</b> We enable families to take charge of their health through organized information.<br />
4. <b>Trust:</b> You can rely on us to safeguard your health records with the highest standards of security.

            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
    </Box>
  );
}
