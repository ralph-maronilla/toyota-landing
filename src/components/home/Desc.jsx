import { Box, Grid, Paper, Typography, styled } from "@mui/material";
import React from "react";
import DescCards from "../DescCards";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#fff",
  border: "1px solid #fff",
}));

const Desc = () => {
  return (
    <>
      <section className="section desc-section">
        <div className="overlay"></div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            placeContent: "center",
            zIndex: 10,
            width: "100%",
            height: "30%",
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="h4"
            sx={{ letterSpacing: "5px", textAlign: "center", fontWeight: 600 }}
          >
            A New Generation{" "}
            <span style={{ color: "#ef1616" }}>Electrified</span>{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            placeContent: "center",
            zIndex: 10,
            width: "100%",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <DescCards
            title="SLICK & MODERN EXTERIOR"
            desc=" For a modern and luxurious design, the all-new Zenix offers all
                that with its elegant yet striking front to make you stand out"
          />
          <DescCards
            title="STYLISH COMFORT"
            desc="Well-equipped with the latest technology and safety features, inside the all-new Zenix’s spacious interiors & sleek touches, fitted to make every drive premium and comfortable."
          />
          <DescCards
            title="CONVENIENT & RELIABLE"
            desc="When it comes to innovative features designed to give drivers more control & convenience, the all-new Zenix is all about reliability on the road."
          />
          <DescCards
            title="HIGHLY EFFICIENT WITH LOW EMISSIONS"
            desc="When it comes to innovative features designed to give drivers more control & convenience, the all-new Zenix is all about reliability on the road."
          />
        </Box>
      </section>
    </>
  );
};

export default Desc;
