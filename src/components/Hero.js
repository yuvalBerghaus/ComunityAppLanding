import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import btn_appstore_en from "../assets/button_apple.png";
import btn_googleplay_en from "../assets/button_google.png";
import btn_web from "../assets/button_web.png";
import heroImage from "../assets/hero.png";
import heroMobileImage from "../assets/hero_mobile.png";

export default function Hero() {
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
            Your&nbsp;
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
              Medical&nbsp;
            </Typography>
            Records. Secured. Organized.
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            Take full control of your family's medical records in a secure,
            private and seamless way.
          </Typography>
          <Typography textAlign="center" variant="caption">
            <Stack
              direction={{ xs: "column", sm: "row" }}
              useFlexGap
              justifyContent="center"
              spacing={2}
              sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
            >
              <Link
                href="https://apps.apple.com/pa/app/comunityapp/id6514324016?l=en-GB"
                variant="body2"
              >
                <Button>
                  <img src={btn_appstore_en} alt="App Store" />
                </Button>
              </Link>

              <Link href="https://play.google.com/store/apps/details?id=com.community_react_native" variant="body2">
                <Button>
                  <img src={btn_googleplay_en} alt="Google Play" />
                </Button>
              </Link>

              <Link href="https://app.comunityapp.com/user/login" variant="body2">
                <Button>
                  <img src={btn_web} alt="Web" />
                </Button>
              </Link>
            </Stack>
          </Typography>
        </Stack>

        {/* Box containing both images */}
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: "center",
            display: "flex", // Flexbox for side-by-side layout
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
          {/* Hero.png image */}
          <Box
            sx={{
              flex: 2, // Take up more space
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "10px 0 0 10px",
            }}
          />
          {/* Hero_Mobile.png image */}
          <Box
            sx={{
              flex: 1, // Take up less space
              backgroundImage: `url(${heroMobileImage})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "0 10px 10px 0",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
