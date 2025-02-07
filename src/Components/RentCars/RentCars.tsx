import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
  Avatar,
  ListItem,
  ListItemText,
  ListItemAvatar,
  List,
  Checkbox,
  useTheme,
  Container,
  Autocomplete,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import InsightsIcon from "@mui/icons-material/Insights";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PetrolIcon from "../../assets/gas-station-petrol-svgrepo-com.svg";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import axios from "axios";
import Favorite from "@mui/icons-material/Favorite";
import { useLocation } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

export const RentCars = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [cars, setCars] = useState<any[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [showFilter, setShowFilter] = useState<string>("12");
  const [sortOption, setSortOption] = useState<string>("Default");
  const theme = useTheme();
  const Location = useLocation();
  console.log(Location.pathname);
  useEffect(() => {
    axios
      .get("https://674dbb7a635bad45618c929e.mockapi.io/carvanax/Cars")
      .then((response) => {
        setCars(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching car data:", error);
      });
  }, []);

 
  const displayedCars = showAll ? cars : cars.slice(0, 9);
  const filteredCars = cars.slice(0, parseInt(showFilter));
  const sortedCars =
    sortOption === "Ascending Price"
      ? [...filteredCars].sort((a, b) => a.Price - b.Price)
      : sortOption === "Descending Price"
      ? [...filteredCars].sort((a, b) => b.Price - a.Price)
      : filteredCars;

  return (
    <Container sx={{ marginTop: 4, marginBottom: 2 }}>
      {" "}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        {Location.pathname === "/cars" ? (
          <Box display="flex" justifyContent="space-between" width="100%">
            <Box>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  backgroundColor: "#2E7D32",
                  color: "white",
                  borderRadius: "8px",
                  fontWeight: 400,
                  "&:hover": {
                    backgroundColor: "#2E7D32",
                  },
                }}
              >
                All cars
              </Button>{" "}
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  backgroundColor: "lightgrey",
                  color: "black",
                  borderRadius: "8px",
                  borderColor: "transparent",
                  fontWeight: 400,
                  "&:hover": {
                    backgroundColor: "#2E7D32",
                    color: "white",
                  },
                }}
              >
                New Car
              </Button>{" "}
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  backgroundColor: "lightgrey",
                  color: "black",
                  borderRadius: "8px",
                  borderColor: "transparent",
                  fontWeight: 400,
                  "&:hover": {
                    backgroundColor: "#2E7D32",
                    color: "white",
                  },
                }}
              >
                Used car
              </Button>
            </Box>
            <Box
              display="flex"
              gap={2}
              alignItems="center"
              justifyContent="flex-start"
              sx={{
                borderRadius: "8px",
              }}
            >
              {/* Show Filter */}
              <Autocomplete
                options={["12", "14", "16"]}
                value={showFilter}
                onChange={(event, newValue) => setShowFilter(newValue || "12")}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Show"
                    size="small"
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: "13px",
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: "12px",
                      },
                    }}
                  />
                )}
                size="small"
                disableClearable
                sx={{
                  minWidth: "120px",
                  "& .MuiOutlinedInput-root": {
                    fontSize: "12px",
                  },
                }}
              />

              {/* Sort By */}
              <Autocomplete
                options={["Default", "Ascending Price", "Descending Price"]}
                value={sortOption}
                onChange={(event, newValue) =>
                  setSortOption(newValue || "Default")
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Sort By"
                    size="small"
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: "12px",
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: "12px",
                      },
                    }}
                  />
                )}
                size="small"
                disableClearable
                sx={{
                  minWidth: "160px",
                  "& .MuiOutlinedInput-root": {
                    fontSize: "12px",
                  },
                }}
              />
            </Box>
          </Box>
        ) : Location.pathname === "/about" ? (
          <>
            <Typography variant="h5" fontWeight={600}>
              Recommended Cars
            </Typography>
            <Button
              variant="outlined"
              onClick={() => setShowAll(!showAll)}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "primary.light",
                },
              }}
            >
              {showAll ? "Show Less" : "View All"}
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h5" fontWeight={600}>
              Used Cars By Body Type
            </Typography>
            <Button
              variant="outlined"
              onClick={() => setShowAll(!showAll)}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "primary.light",
                },
              }}
            >
              {showAll ? "Show Less" : "View All"}
            </Button>
          </>
        )}
      </Box>
      <Grid container spacing={3}>
        {" "}
        {displayedCars.map((car) => (
          <Grid item xs={12} sm={6} md={3} key={car.id}>
            {" "}
            <Card
              sx={{
                borderRadius: 4, 
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", 
                overflow: "hidden",
                position: "relative",
                transition: "transform 0.3s ease",
                height: "12cm", 
                width: "100%", 
                "&:hover": {
                  transform: "scale(1.05)", 
                },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="150" 
                  image={car.carImage}
                  alt="Sedan Car"
                  sx={{
                    objectFit: "cover",
                  }}
                />

                {/* Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    "&:hover": {
                      opacity: 1, 
                    },
                  }}
                >
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite sx={{ color: "red" }} />}
                    sx={{
                      color: "white", 
                    }}
                  />
                </Box>
              </Box>
              <CardContent sx={{ padding: "16px" }}>
                <Typography
                  variant="subtitle2"
                  fontWeight={500}
                  color="success.main"
                >
                  {car.Type}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  fontSize="16px"
                  marginY={0.5}
                >
                  {car.name}
                </Typography>
                <Box display="flex" gap={1} flexWrap="wrap" marginBottom={1}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <SpeedIcon fontSize="small" />
                    <Typography fontSize="12px" color="textSecondary">
                      {car.RunningKms}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <img src={PetrolIcon} width={16} alt="Petrol" />
                    <Typography fontSize="12px" color="textSecondary">
                      {car.Fuel}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <InsightsIcon fontSize="small" />
                    <Typography fontSize="12px" color="textSecondary">
                      {car.Gear}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="h6"
                  fontSize="18px"
                  fontWeight={700}
                  color="success.main"
                >
                  ₹{car.Price.toLocaleString()}
                </Typography>
                <Divider sx={{ marginY: 1 }} />
                <List disablePadding>
                  <ListItem disableGutters>
                    <ListItemAvatar>
                      <Avatar
                        alt="Owner Avatar"
                        src="https://i.pinimg.com/originals/93/d4/3c/93d43c25b863001ad11b70c3500c0e77.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={car.Owner}
                      secondary="Owner"
                      sx={{
                        "& .MuiListItemText-primary": {
                          fontSize: "14px",
                          fontWeight: 500,
                        },
                        "& .MuiListItemText-secondary": {
                          fontSize: "12px",
                          color: "textSecondary",
                        },
                      }}
                    />
                  </ListItem>
                </List>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    // marginTop: 1,
                    textTransform: "none",
                    borderRadius: 2,
                    fontWeight: 600,

                    backgroundColor: "white",
                    color: "#2E7D32",
                    borderColor: "#2E7D32",
                    "&:hover": {
                      backgroundColor: "#2E7D32",
                      color: "white",
                    },
                  }}
                >
                  View Car
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {Location.pathname === "/cars" ? (
        <Box mt={5}>
          {" "}
          <Pagination count={10} color="primary" />
        </Box>
      ) : (
        " "
      )}
    </Container>
  );
};
