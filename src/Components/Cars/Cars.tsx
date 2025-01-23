import { Box, Typography } from "@mui/material";
import React from "react";
import { FilterSection } from "./FilterSection";
import { RentCars } from "../RentCars/RentCars";
import { useLocation } from "react-router-dom";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { RentCarsVersionTwo } from "../RentCars/RentcarsVersion2";
export const Cars = () => {
  const Location = useLocation();
  console.log(Location.pathname);
  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      "&:hover, &:focus": {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  }); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <Box m={9}>
      {/* <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <StyledBreadcrumb
            component="a"
            href="#"
            label="Home"
            icon={<HomeIcon fontSize="small" />}
          />
          <StyledBreadcrumb component="a" href="#" label="Catalog" />
          <StyledBreadcrumb
            label="Accessories"
            deleteIcon={<ExpandMoreIcon />}
            onDelete={handleClick}
          />
        </Breadcrumbs>
      </div> */}
      <Box >
        {" "}
        <Typography variant="h6" component="h2">
          10,000+ Get The Best Deals On Used Cars
        </Typography>
        <Typography variant="h6" component="h6" sx={{ fontSize: "12px",color:'grey',fontWeight:400 }}>
          Explore our selection of high-quality, pre-owned vehicles. Our
          inventory includes top brands like Toyota, Mercedes, Honda, and more.
          Find the perfect used car for your needs.
        </Typography>
      </Box>

      <Box display="flex" mt={5}>
        <FilterSection />
        <RentCarsVersionTwo />
      </Box>
    </Box>
  );
};
