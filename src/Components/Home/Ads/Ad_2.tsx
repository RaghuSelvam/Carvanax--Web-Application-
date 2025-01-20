import { Box, Card, CardContent, Typography, Button, Grid } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BuildIcon from "@mui/icons-material/Build";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Right arrow icon

export const Ad_2 = () => {
  const Ad_2Data = [
    {
      Header: "Browse Inventory",
      SubHeader: "Find the ideal car for you and browse our affordable inventory.",
      MainHeader: "Search Inventory",
      icon: <SearchIcon sx={{ fontSize: 40, color: "#2E7D32" }} />,
    },
    {
      Header: "Get An Offer",
      SubHeader: "What's your car worth? Get the best value for your vehicle.",
      MainHeader: "Get Trade-in Value",
      icon: <LocalOfferIcon sx={{ fontSize: 40, color: "#2E7D32" }} />,
    },
    {
      Header: "Apply For Financing",
      SubHeader: "Fill out our credit approval form for your next used vehicle loan.",
      MainHeader: "Apply Now",
      icon: <CreditCardIcon sx={{ fontSize: 40, color: "#2E7D32" }} />,
    },
    {
      Header: "Expert Service",
      SubHeader: "Expert technicians will keep your vehicle in top running condition.",
      MainHeader: "Schedule Service",
      icon: <BuildIcon sx={{ fontSize: 40, color: "#2E7D32" }} />,
    },
  ];

  return (
    <Box p={3}>
      <Grid container spacing={3}>
        {Ad_2Data.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                p: 3,
                borderRadius: 3,
                textAlign: "center",
                boxShadow: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.1)", // Slightly scale up the icon when hovered
                  },
                }}
              >
                {item.icon}
              </Box>

              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.Header}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {item.SubHeader}
                </Typography>
              </CardContent>

              <Button
                variant="contained"
                color="primary"
                sx={{
                  textTransform: "none",
                  borderRadius: 2,
                  px: 3,
                  py: 1,
                  backgroundColor: "#2E7D32", // Matching green background
                  "&:hover": {
                    backgroundColor: "#1b5e20", // Darker shade of green on hover
                  },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transform: "perspective(600px) rotateY(0deg)", // Initial state
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "perspective(600px) rotateY(180deg)", // Flip on hover
                  },
                  width: "100%", // Ensures the button takes up the full width on smaller screens
                }}
              >
                <Typography variant="body2" sx={{ flexGrow: 1 }}>
                  {item.MainHeader}
                </Typography>
                <ArrowForwardIcon sx={{ ml: 1 }} /> {/* Right arrow icon */}
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
