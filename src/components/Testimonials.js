import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const testimonialsData = {
  EN: [
    {
      avatar: <Avatar alt="Ester A" src="/static/images/avatar/1.jpg" />,
      name: "Ester A",
      occupation: "CMO",
      testimonial:
        "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
    },
    {
      avatar: <Avatar alt="Migdalia A" src="/static/images/avatar/2.jpg" />,
      name: "Migdalia A",
      occupation: "Product Designer",
      testimonial:
        "ComunityApp has made managing my family's medical records a breeze! The app is user-friendly, keeps everything organized, and makes sharing information with doctors so easy. Highly recommend it!",
    },
    {
      avatar: <Avatar alt="Cindy B" src="/static/images/avatar/3.jpg" />,
      name: "Cindy B",
      occupation: "Wellness Consultant",
      testimonial:
        "ComunityApp is fantastic! It has simplified our family's health record management and made everything so accessible. It's incredibly easy to use and has been a lifesaver for keeping track of medical info.",
    },
    {
      avatar: <Avatar alt="Julia S" src="/static/images/avatar/4.jpg" />,
      name: "Julia S",
      occupation: "Full-Time Mom",
      testimonial:
        "ComunityApp has been a lifesaver for our busy family! As a full-time mom, managing everyone's medical records used to be stressful. Now, everything is organized in one place, and I can easily update and share information. It's made our lives so much easier!",
    },
    {
      avatar: <Avatar alt="Jonathan T" src="/static/images/avatar/5.jpg" />,
      name: "Jonathan T",
      occupation: "Fitness Trainer",
      testimonial:
        "I've tried other similar products, but this one stands out for its innovative features. It's clear that the makers put a lot of thought into creating a solution that truly addresses user needs.",
    },
    {
      avatar: <Avatar alt="Daniel W" src="/static/images/avatar/6.jpg" />,
      name: "Daniel W",
      occupation: "Lifestyle Coach",
      testimonial:
        "As a fitness trainer, keeping track of my clients' health records is crucial. ComunityApp has made this task effortless and efficient. The app is user-friendly, and I can easily manage and update information on the go. It's a must-have for anyone in the fitness industry!",
    },
  ],
  ES: [
    {
      avatar: <Avatar alt="Stephanie M.C." src="/static/images/avatar/1.jpg" />,
      name: "Stephanie M.C.",
      occupation: "Bienes y Raíces",
      testimonial:
        "Antes andaba paranoica antes de ir al Dr. Ahora estoy más tranquila porque sé que tengo toda mi información médica en un solo lugar. Gracias ComunityApp!",
    },
    {
      avatar: <Avatar alt="Maria A" src="/static/images/avatar/2.jpg" />,
      name: "Maria A",
      occupation: "Ama de casa",
      testimonial:
        "Mi familia pasó por un momento difícil y gracias a ComunityApp pudimos mantener a toda la familia actualizada de los avances de los tratamientos.",
    },
    {
      avatar: <Avatar alt="Carolina B" src="/static/images/avatar/3.jpg" />,
      name: "Carolina B",
      occupation: "Contabilidad",
      testimonial:
        "Al principio me tomó tiempo empezar a guardar todo, somos una familia grande. Pero ahora ya me siento mucho más tranquila sabiendo que tengo todo organizado. Cero estrés.",
    },
    {
      avatar: <Avatar alt="Daniela S" src="/static/images/avatar/4.jpg" />,
      name: "Daniela S",
      occupation: "Madre de Familia",
      testimonial:
        "Tuve una emergencia y me quedé en shock sin saber qué hacer. Busqué algo para resolver. Esta app hace el trabajo. Un poco difícil meter toda la información al principio, pero vale la pena al final.",
    },
    {
      avatar: <Avatar alt="Paul T" src="/static/images/avatar/5.jpg" />,
      name: "Paul T",
      occupation: "Ingeniero de Sistemas",
      testimonial:
        "Al principio tuve mis dudas por temas de seguridad y privacidad, pero después de probarla y ver cómo funciona, me siento mucho más tranquilo. La recomiendo.",
    },
    {
      avatar: <Avatar alt="Juan Carlos D" src="/static/images/avatar/6.jpg" />,
      name: "Juan Carlos D",
      occupation: "Músico",
      testimonial:
        "Andaba de gira en el extranjero y tuve un problema de salud. Me dije a mí mismo que no podía seguir así. Busqué, instalé y guardé todo. Me tomó un tiempo, pero lo logré.",
    },
  ],
};

export default function Testimonials({ language = "EN" }) {
  const testimonials = testimonialsData[language] || testimonialsData.EN;

  return (
    <Container
      id="testimonials"
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
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography
          component="p"
          role="heading"
          aria-level={3}
          variant="h4"
          color="text.primary"
          fontWeight="bold"
          gutterBottom
        >
          {language === "EN" ? "Testimonials" : "Testimonios"}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {language === "EN"
            ? "See what real users say about ComunityApp—how it helps them stay organized, prepared, and in control of their family's health records."
            : "Opiniones reales sobre ComunityApp: cómo esta app ayuda a organizar, preparar y controlar los registros médicos familiares."}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}