import { Box, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import React from "react";

const Hero = () => {
  return (
    <>
      <section>
        <Box
          sx={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(77,77,77,1) 64%, rgba(255,255,255,1) 100%)",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
          }}
          height={"100vh"}
        >
          <Typography
            sx={{
              position: "absolute",
              top: 60,
              left: "12%",
              textAlign: "center",
              letterSpacing: "90px",
              fontSize: "250px",
              color: "#333",
              opacity: 0.2,
              fontWeight: 900,
            }}
            variant="h1"
          >
            ZENIX
          </Typography>
          <img
            src="/zenix.png"
            alt="zenix"
            style={{
              position: "absolute",
              top: "30%",
              left: "15%",
              backgroundPosition: "center center",
              height: "60%",
              width: "70%",
              objectFit: "cover",
            }}
          />
          {/* <ArrowDownwardIcon
            fontSize="large"
            sx={{
              position: "absolute",
              bottom: 1,
              color: "#ef1616",
            }}
          /> */}
        </Box>
      </section>
    </>
  );
};

export default Hero;
