import { Box, Typography, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Ads = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-around"
      gap={2}
      p={2}
    >
      {/* First Ad Container */}
      <Box
        flex="1 1 calc(50% - 16px)"
        maxWidth="500px"
        display="flex"
        alignItems="center"
        p={3}
        borderRadius={2}
        sx={{
          backgroundColor: "lightgrey",
          color: "black",
          transition: "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)", // Increased box-shadow for a stronger hover effect
            backgroundColor: "#f4f4f4", // Light background on hover for better contrast
          },
        }}
      >
        <img
          src="https://autodealreactjs.vercel.app/assets/images/img-box/find-car-1.png"
          alt="Find Car"
          style={{
            width: "100px",
            height: "auto",
            marginRight: "16px",
          }}
        />
        <Box flex="1">
          <Typography variant="body1" gutterBottom>
            <strong>Are you looking for a car?</strong>
          </Typography>
          <Typography variant="body2" gutterBottom>
            Save time and effort as you no longer need to visit multiple stores to find the right car.
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            border="1px solid white"
            borderRadius="16px"
            padding="8px"
            bgcolor="white"
            color="black"
            sx={{
              width: "250px", // Increased width
              height: "35px", // Decreased height
              "&:hover": {
                backgroundColor: "",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
              },
            }}
          >
            <SearchIcon sx={{ marginRight: "8px" }} />
            <InputBase placeholder="Search cars" fullWidth />
          </Box>
        </Box>
      </Box>

      {/* Second Ad Container */}
      <Box
        flex="1 1 calc(50% - 16px)"
        maxWidth="500px"
        display="flex"
        alignItems="center"
        p={3}
        borderRadius={2}
        sx={{
          backgroundColor: "black",
          color: "white",
          transition: "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)", // Increased box-shadow for a stronger hover effect
            backgroundColor: "#333", // Dark background on hover
          },
        }}
      >
        <img
          src="https://autodealreactjs.vercel.app/assets/images/img-box/find-car-2.png"
          alt="Sell Car"
          style={{
            width: "100px",
            height: "auto",
            marginRight: "16px",
          }}
        />
        <Box flex="1">
          <Typography variant="body1" gutterBottom>
            <strong>Do you want to sell a car?</strong>
          </Typography>
          <Typography variant="body2" gutterBottom>
            Find your perfect car match and sell your car quickly with our user-friendly online service.
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            border="1px solid white"
            borderRadius="16px"
            padding="8px"
            bgcolor="#333"
            color="white"
            sx={{
              width: "250px", // Increased width
              height: "35px", // Decreased height
              "&:hover": {
                backgroundColor: "#555", // Lighter background on hover
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
            <SearchIcon sx={{ marginRight: "8px" }} />
            <InputBase
              placeholder="Search cars"
              fullWidth
              sx={{ color: "white" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
