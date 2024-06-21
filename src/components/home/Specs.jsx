import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AccordionComponent from "../AccordionComponent";

const accordionData = [
  {
    type: "hybrid",
    type_name: "2.0 Q Hybrid CVT",
    variants: [
      {
        color: "ZENIX 2.0 Q HYBRID CVT Blackish Brown Mica",
        price: "₱ 1,953,000",
        img: "/zenix-blak-2.png",
      },
      {
        color: "ZENIX 2.0 Q HYBRID CVT Platinum White Pearl Mica",
        price: "₱ 1,968,000",
        img: "/zenix-pearl.png",
      },
    ],
    dimension: {
      overall: "4,755 x 1,850 x 1,790",
      seating: 7,
    },
    engine: {
      type: "Hybrid; 4-cylinder, In-Line, 16-Valve DOHC; Chain Drive",
      displacement: "1987cc",
      output: "186",
      torque: "188/4,400-5,200",
      fuel: "Gasoline",
      capacity: 52,
    },
    transmission: "CVT",
    chassis: {
      brake: "Disc Type",
      wheels: "18 inches Alloy",
    },
  },
  {
    type: "non-hybrid",
    type_name: "2.0V CVT",
    variants: [
      {
        color: "ZENIX 2.0 V CVT Silver Metallic",
        price: "₱ 1,670,000",
        img: "/silver.png",
      },
      {
        color: "ZENIX 2.0 V CVT Platinum White Pearl Mica",
        price: "₱ 1,685,000",
        img: "/zenix-pearl.png",
      },
    ],
    dimension: {
      overall: "4,755 x 1,845 x 1,790",
      seating: 7,
    },
    engine: {
      type: "4-cylinder, In-Line, 16-Valve DOHC; Chain Drive",
      displacement: "1987cc",
      output: "",
      torque: "205/4,500-4,900",
      fuel: "Gasoline",
      capacity: 52,
    },
    transmission: "CVT",
    chassis: {
      brake: "Disc Type",
      wheels: "17 inches Alloy",
    },
  },
];

const Specs = () => {
  const [selectedVariant, setSelectedVariant] = useState("hybrid");
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    console.log(accordionData);
    console.log("selected variant", selectedVariant);

    if (selectedVariant) {
      const filteredData = accordionData?.filter(
        (item) => item.type === selectedVariant
      );
      // const filteredData = accordionData.filter((item) => {
      //   if (item.type === selectedVariant) {
      //     console.log("match");
      //     return true;
      //   } else {
      //     console.log("not match");
      //     return false;
      //   }
      // });
      // console.log("Filtered Data:", filteredData); // Debugging line
      setCarData(filteredData);
    }
  }, [selectedVariant]);
  useEffect(() => {
    console.log(carData);
  }, [carData]);
  return (
    <div className="section specs-section ">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          placeContent: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#aaa",

            fontWeight: 700,
            marginY: "30px",
          }}
        >
          Specifications
        </Typography>
      </Box>
      <Box sx={{ width: 300, my: 5 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Variant</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedVariant}
            label="Variant"
            onChange={(e) => {
              setSelectedVariant(e.target.value);
            }}
          >
            <MenuItem value={"hybrid"}>2.0 Q HYBRID CVT</MenuItem>
            <MenuItem value={"non-hybrid"}>2.0 V CVT</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {carData.length > 0 &&
            carData[0].variants.map((variant, index) => (
              <React.Fragment key={index}>
                <img
                  src={variant.img}
                  alt={variant.color}
                  style={{ width: "400px", height: "200px" }}
                />
              </React.Fragment>
            ))}
        </Box>

        <AccordionComponent accordionData={carData} />
      </Box>
    </div>
  );
};

export default Specs;
