import { Box, Button, Typography } from "@mui/material";
import React from "react";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import SpeedIcon from "@mui/icons-material/Speed";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import "./Hero.css";
import { NavbarSection } from "../Navbar/Navbar";
export const HeroSection = () => {
  return (
    <Box className="Herobanner">
      {" "}
      <NavbarSection />
      <Box p={11}>
        <Typography variant="h2" sx={{ fontWeight: 600, color: "white" }}>
          2012 Nissan Leaf SV
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "white" }}
          mt={16}
        >
          <Box display="flex" gap={3} sx={{ marginTop: "-3cm" }}>
            <Box spacing={1} display="flex" alignItems="center" gap={1}>
              <FontAwesomeIcon icon={faCar} />{" "}
              <Typography
                variant="h6"
                sx={{ fontWeight: 500, fontSize: "15px", color: "white" }}
              >
                Used Car
              </Typography>
            </Box>
            <Box spacing={1} display="flex" alignItems="center" gap={1}>
              <SpeedIcon />{" "}
              <Typography
                variant="h6"
                sx={{ fontWeight: 500, fontSize: "15px", color: "white" }}
              >
                66.322ml
              </Typography>
            </Box>{" "}
            <Box spacing={1} display="flex" alignItems="center" gap={1}>
              <CurrencyExchangeIcon />{" "}
              <Typography
                variant="h6"
                sx={{ fontWeight: 500, fontSize: "15px", color: "white" }}
              >
                Est.$151/mon
              </Typography>
            </Box>
          </Box>
        </Typography>

        <Box display="flex" alignItems="center">
          <Button
            variant="contained"
            sx={{
              bgcolor: "white",
              color: "black",
              textTransform: "none",
              borderRadius: "11px",
              width: "4cm",
              height: "1.1cm",
            }}
          >
            Chat
          </Button>

          <List sx={{ width: "100%", maxWidth: 360 }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.pinimg.com/originals/93/d4/3c/93d43c25b863001ad11b70c3500c0e77.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Kathryn Murphy"
                secondary="3 hrs ago"
                sx={{
                  "& .MuiListItemText-primary": {
                    color: "white",
                  },
                  "& .MuiListItemText-secondary": {
                    color: "white",fontSize:"10px"
                  },
                }}
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};
