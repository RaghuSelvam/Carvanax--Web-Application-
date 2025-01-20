import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography, Box, Container } from "@mui/material";

const LogoSlider = () => {
  const logos = [
    "https://autodealreactjs.vercel.app/assets/images/partner/partner1.png",
    "https://autodealreactjs.vercel.app/assets/images/partner/partner2.png",
    "https://autodealreactjs.vercel.app/assets/images/partner/partner3.png",
    "https://autodealreactjs.vercel.app/assets/images/partner/partner4.png",
    "https://autodealreactjs.vercel.app/assets/images/partner/partner5.png",
    "https://autodealreactjs.vercel.app/assets/images/partner/partner6.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    customPaging: (i) => (
      <Box
        sx={{
          width: 9,
          height: 9,
          borderRadius: "50%",
          backgroundColor: "#2E7D32",
          opacity: 0.6,
          transition: "background-color 0.3s ease, transform 0.3s ease",
          "&.slick-active": {
            backgroundColor: "red", // Change to the color of your choice
            transform: "scale(1.2)",
            opacity: 11,
          },
        }}
      />
    ),
    dotsClass: "slick-dots custom-dots", // Add a custom class for further styling if needed
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        minHeight: "10vh",
        textAlign: "center",
        p: 4,
        width: "100%",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontSize: "22px" }}>
        What would you like to find?
      </Typography>
      <Box
        sx={{
          width: "98%",
          borderRadius: 2,
          padding: 3,
        }}
      >
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 120,
                padding: 2,
              }}
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default LogoSlider;
