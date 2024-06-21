import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

const AccordionComponent = ({ accordionData }) => {
  return (
    <>
      {accordionData &&
        accordionData.map((item, index) => (
          <Box key={index} sx={{ marginY: "20px" }}>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", fontWeight: 600 }}
                >
                  Type
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.type_name}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", fontWeight: 600 }}
                >
                  Dimensions
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Overall: {item.dimension.overall}</Typography>
                <Typography>
                  Seating Capacity: {item.dimension.seating}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", fontWeight: 600 }}
                >
                  Engine
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Type: {item.engine.type}</Typography>
                <Typography>
                  Displacement: {item.engine.displacement}
                </Typography>
                <Typography>Max Output: {item.engine.output}</Typography>
                <Typography>Max Torque: {item.engine.torque}</Typography>
                <Typography>Fuel Type: {item.engine.fuel}</Typography>
                <Typography>Fuel Capacity: {item.engine.capacity}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", fontWeight: 600 }}
                >
                  Transmission
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.transmission}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", fontWeight: 600 }}
                >
                  Chassis
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Brake: {item.chassis.brake}</Typography>
                <Typography>Wheels: {item.chassis.wheels}</Typography>
              </AccordionDetails>
            </Accordion>
            {/* <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", fontWeight: 600 }}
                >
                  Variants
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {item.variants.map((variant, index) => (
                  <div key={index}>
                    <Typography>Color: {variant.color}</Typography>
                    <Typography>Price: {variant.price}</Typography>
                    <img
                      src={variant.img}
                      alt={variant.color}
                      style={{ width: "100px" }}
                    />
                  </div>
                ))}
              </AccordionDetails>
            </Accordion> */}
          </Box>
        ))}
    </>
  );
};

export default AccordionComponent;
