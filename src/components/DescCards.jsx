import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import React from "react";

const DescCards = ({ title, desc }) => {
  return (
    <>
      <Card
        sx={{
          width: 500,
          height: 200,
          display: "flex",
          justifyContent: "center",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "15px",
          padding: "20px 30px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          webkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          color: "#fff",
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                letterSpacing: "5px",
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              {title}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "14px" }}>
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default DescCards;
