import { Avatar, IconButton, Divider, Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatIcon from "@mui/icons-material/Chat";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import SpeedIcon from "@mui/icons-material/Speed";
import { Box, Typography, Stack } from "@mui/material";
import {
  Speed,
  LocalGasStation,
  Settings,
  EventNote,
  ColorLens,
  People,
  DriveEta,
  CarRepair,
} from "@mui/icons-material";
import { FormControlLabel, Checkbox, TextField } from "@mui/material";

import InsightsIcon from "@mui/icons-material/Insights";
import PetrolIcon from "../../assets/gas-station-petrol-svgrepo-com.svg";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Slider from "react-slick";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Chip from "@mui/material/Chip";
import VerifiedIcon from "@mui/icons-material/Verified";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import BusinessIcon from "@mui/icons-material/Business";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AOS from "aos";
import "aos/dist/aos.css";
import { RentCars } from "../RentCars/RentCars";

const CarDetails = () => {
  const [liked, setLiked] = useState(false);
  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "https://autodealreactjs.vercel.app/assets/images/section/listing-detai-2.jpg",
    "https://autodealreactjs.vercel.app/assets/images/section/listing-detai-1.jpg",
    "https://autodealreactjs.vercel.app/assets/images/section/listing-detai-3.jpg",
    "https://tse2.mm.bing.net/th?id=OIP.knViN7HinLtTir3OM7WhhQHaHa&pid=Api&P=0&h=180",
    "https://autodealreactjs.vercel.app/assets/images/section/listing-detai-3.jpg",
  ];

  const settingsThumbs = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    afterChange: (index: number) => setSelectedImage(images[index]),
  };

  // Coordinates for Chennai
  const chennaiLocation = { lat: 13.0827, lng: 80.2707 };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submit logic here
  };
  return (
    <Box sx={{ margin: "1cm 2.8cm" }}>
      {" "}
      <Box display="flex" justifyContent="space-between">
        {/* Car Details Section */}
        <Box data-aos="fade-right">
          <Typography variant="h4" fontWeight="500">
            2017 BMV X1 xDrive 20d xline
          </Typography>
          <Stack direction="row" spacing={2} my={1}>
            <Stack direction="row" spacing={1} alignItems="center">
              <SpeedIcon fontSize="small" />
              <Typography variant="body2" color="textSecondary">
                85,908 kms
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <img src={PetrolIcon} width={16} alt="Petrol" />
              <Typography variant="body2" color="textSecondary">
                Diesel
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <InsightsIcon fontSize="small" />
              <Typography variant="body2" color="textSecondary">
                Automatic
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <PersonOutlineIcon fontSize="small" />
              <Typography variant="body2" color="textSecondary">
                1st Owner
              </Typography>
            </Stack>
          </Stack>
          <Typography
            variant="h5"
            color="success.main"
            fontWeight="bold"
            mt={2}
          >
            $70,064
          </Typography>
          <Typography variant="body2" color="textSecondary" mt={1}>
            Monthly installment payment: $4,000
          </Typography>{" "}
          <Box mt={1}>
            <Stack direction="row" spacing={2} alignItems="center">
              {/* Avatars */}
              <Stack direction="row" spacing={2}>
                <Avatar
                  sx={{
                    bgcolor: "white",
                    border: "1px solid lightgrey",
                    width: 30,
                    height: 30,
                  }}
                >
                  <IconButton>
                    <ShareIcon fontSize="medium" sx={{ fontSize: "13px" }} />
                  </IconButton>
                </Avatar>
                <Avatar
                  sx={{
                    bgcolor: "white",
                    border: "1px solid lightgrey",
                    width: 30,
                    height: 30,
                  }}
                >
                  <IconButton onClick={handleLikeToggle}>
                    {liked ? (
                      <FavoriteIcon
                        color="error"
                        fontSize="medium"
                        sx={{ fontSize: "13px" }}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        fontSize="small"
                        fontSize="medium"
                        sx={{ fontSize: "13px" }}
                      />
                    )}
                  </IconButton>
                </Avatar>
              </Stack>
            </Stack>
          </Box>
          <Box
            sx={{ border: "1px solid lightgrey", borderRadius: "20px" }}
            height={220}
            mt={3}
            data-aos="fade-up"
          >
            <List sx={{ width: "100%" }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      width: 60, // Set custom width
                      height: 60, // Set custom height for a perfect circle
                    }}
                  >
                    <img
                      src="https://mui.com/static/images/avatar/2.jpg"
                      alt=""
                      width={60}
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="John"
                  primaryTypographyProps={{
                    sx: {
                      marginLeft: "18px", // Shift the primary text slightly to the left
                    },
                  }}
                  secondary={
                    <Box
                      display="inline-flex"
                      alignItems="center"
                      position="relative"
                    >
                      {/* Chip */}
                      <Chip
                        label="Verified Dealer"
                        sx={{
                          backgroundColor: "#F2FBE8",
                          color: "green",
                          left: "16px", // Space for the icon
                          position: "relative",
                          height: "22px",
                          fontSize: "9px",
                          paddingLeft: "21px", // Space for the icon
                        }}
                      />
                      {/* Icon Inside */}
                      <VerifiedIcon
                        sx={{
                          position: "absolute",
                          left: "30px", // Adjust to center inside the chip
                          color: "green",
                          fontSize: "15px",
                        }}
                      />
                    </Box>
                  }
                />
              </ListItem>
            </List>{" "}
            <Typography
              sx={{ fontWeight: 400, fontSize: "14px", color: "grey" }}
              ml={2}
            >
              {" "}
              <BusinessIcon /> 2972 Westheimer Rd. Santa Ana, Illinois 85486
            </Typography>
            <Divider sx={{ border: "1px solid grey", margin: 1 }} />{" "}
            <Typography sx={{ fontWeight: 400, fontSize: "14px" }} ml={2}>
              {" "}
              Contact dealer
            </Typography>
            <Box width="100%" ml={1.6} mt={1} display="flex" gap={2}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  textTransform: "none",
                  borderRadius: "9px",
                }}
                startIcon={<PhoneIcon />}
              >
                Call to Seller
              </Button>
              <Button
                variant="contained"
                startIcon={<WhatsAppIcon />}
                sx={{
                  bgcolor: "#7ED321",
                  color: "white",
                  textTransform: "none",
                  borderRadius: "9px",
                }}
              >
                Chat
              </Button>
              <Button
                variant="contained"
                startIcon={<BookmarkAddedIcon />}
                sx={{
                  bgcolor: "#ff8a65",
                  color: "white",
                  textTransform: "none",
                  borderRadius: "9px",
                }}
              >
                Book Now
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Avatars and Action Icons Section */}
        <div
          style={{ maxWidth: "600px", margin: "0 auto" }}
          data-aos="fade-left"
        >
          {/* Main Viewer */}
          <div style={{ marginBottom: "20px" }}>
            <img
              src={selectedImage || images[0]}
              alt="Product"
              style={{
                width: "17CM",
                height: "400px",
                objectFit: "cover",
                borderRadius: "13px",
              }}
            />
          </div>

          {/* Thumbnail Carousel */}
          <Slider {...settingsThumbs}>
            {images.map((img, index) => (
              <div key={index} onClick={() => setSelectedImage(img)}>
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "14px",
                    cursor: "pointer",
                    padding: "5px",
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Box>{" "}
      <Box data-aos="fade-right">
        <Typography variant="h6" fontWeight="500" gutterBottom my={2}>
          Description
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          fontWeight="300"
          fontSize={13}
        >
          This 2017 X1 xDrive 20d xLine is a luxury compact SUV designed for
          comfort and performance. It is powered by a diesel engine and comes
          with an automatic transmission, offering a smooth and efficient
          driving experience. The vehicle has covered 85,908 kilometers and has
          had only one previous owner, ensuring it has been well-maintained.
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          fontWeight="300"
          fontSize={13}
          paragraph
        >
          With a spacious interior, modern technology, and a stylish exterior,
          this SUV is ideal for both daily commuting and longer journeys. The
          vehicle's impressive fuel efficiency and overall performance make it
          an excellent choice for those seeking a blend of luxury, practicality,
          and reliability.
        </Typography>
      </Box>
      <Box data-aos="fade-up">
        <Typography variant="h6" fontWeight="500" gutterBottom my={2}>
          Car Overview
        </Typography>

        <Grid container spacing={2}>
          {/* First Row */}
          <Grid item xs={6} sm={4}>
            <Typography variant="body2" color="textSecondary">
              <Speed fontSize="small" sx={{ color: "text.secondary" }} />{" "}
              Condition: <strong>New</strong>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="body2" color="textSecondary">
              <CarRepair fontSize="small" sx={{ color: "text.secondary" }} />{" "}
              Cylinders: <strong>6</strong>
            </Typography>
          </Grid>

          <Grid item xs={6} sm={4}>
            <Typography variant="body2" color="textSecondary">
              <LocalGasStation
                fontSize="small"
                sx={{ color: "text.secondary" }}
              />{" "}
              Fuel Type: <strong>Petrol</strong>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="body2" color="textSecondary">
              <EventNote fontSize="small" sx={{ color: "text.secondary" }} />{" "}
              VIN Number: <strong>39847059856</strong>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="body2" color="textSecondary">
              <DriveEta fontSize="small" sx={{ color: "text.secondary" }} />{" "}
              Doors: <strong>4</strong>
            </Typography>
          </Grid>

          {/* Second Row */}
          <Grid item xs={6} sm={4}>
            <Typography variant="body2" color="textSecondary">
              <EventNote fontSize="small" sx={{ color: "text.secondary" }} />{" "}
              Year: <strong>2024</strong>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="body2" color="textSecondary">
              <ColorLens fontSize="small" sx={{ color: "text.secondary" }} />{" "}
              Color: <strong>Blue, Gray</strong>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="body2" color="textSecondary">
              <People fontSize="small" sx={{ color: "text.secondary" }} />{" "}
              Seats: <strong>7</strong>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="body2" color="textSecondary">
              <Settings fontSize="small" sx={{ color: "text.secondary" }} />{" "}
              Transmission: <strong>Auto</strong>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="body2" color="textSecondary">
              <Speed fontSize="small" sx={{ color: "text.secondary" }} /> City
              MPG: <strong>20</strong>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="body2" color="textSecondary">
              <Speed fontSize="small" sx={{ color: "text.secondary" }} />{" "}
              Highway MPG: <strong>24</strong>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="body2" color="textSecondary">
              <DriveEta fontSize="small" sx={{ color: "text.secondary" }} />{" "}
              Drive Type: <strong>AWD – All-wheel drive</strong>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <RentCars />
      <Box
        sx={{
          margin: "0 auto",
          padding: 3,
          borderRadius: 2,
        }}
        data-aos="fade-down"
      >
        <Typography variant="h6" sx={{ marginBottom: 2, textAlign: "center" }}>
          Leave a Reply
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginBottom: 3, textAlign: "center" }}
        >
          Your email address will not be published.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email address"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Your Message"
                variant="outlined"
                fullWidth
                value={review}
                onChange={(e) => setReview(e.target.value)}
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={saveInfo}
                    onChange={(e) => setSaveInfo(e.target.checked)}
                    color="primary"
                  />
                }
                label="Save your name, email for the next time"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                sx={{ marginTop: 2, bgcolor: "#2E7D32" }}
              >
                Post Comment
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default CarDetails;
