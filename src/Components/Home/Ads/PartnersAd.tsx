import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";

export const PartnersAd = () => {
  const partners = [
    "https://autodealreactjs.vercel.app/assets/images/partner/par1.png",
    "https://autodealreactjs.vercel.app/assets/images/partner/par2.png",
    "https://autodealreactjs.vercel.app/assets/images/partner/par3.png",
    "https://autodealreactjs.vercel.app/assets/images/partner/par4.png",
    "https://autodealreactjs.vercel.app/assets/images/partner/par5.png",
    "https://autodealreactjs.vercel.app/assets/images/partner/par6.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
            backgroundColor: "red",
            transform: "scale(1.2)",
            opacity: 1,
          },
        }}
      />
    ),
    dotsClass: "slick-dots custom-dots",
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
        alignItems: "center",
        minHeight: "10vh",
        textAlign: "center",
        p: 6,
        width: "100%",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontSize: "22px" }}>
        Our Partners
      </Typography>
      <Box 
        sx={{
          width: "80%",
          borderRadius: 2, 
        }}
      >
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 130,
              }}
            >
              <img
                src={partner}
                alt={`Partner ${index + 1}`}
                style={{
                  maxWidth: "90%",
                  maxHeight: "90%",
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
