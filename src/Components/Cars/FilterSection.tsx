import {
  Box,
  Button,
  IconButton,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import React from "react";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const DEFAULT_WIDTH = 250;
const DEFAULT_BORDER_RADIUS = 7;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      borderRadius: DEFAULT_BORDER_RADIUS,
    },
  },
};

const dataSets = [
  ["Any Brand", "Audi", "Dong Feng", "BMW", "Ferrari"],
  ["Any Body", "Convertible", "Coupe", "Cross Over"],
  ["Any Fuel", "Petrol", "Diesel"],
  ["Any Transmission", "Automatic", "Petrol"],
  ["Any Location", "Chennai", "Mumbai", "Banglore", "Pune", "Kerala"],
  ["Any Color", "Blue", "Red", "Orange"],
];

const labels = ["Brand", "Body", "Fuel", "Transmission", "Location", "Color"];

const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

function getStyles(name, selectedNames, theme) {
  return {
    fontWeight: selectedNames.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export const FilterSection = () => {
  const theme = useTheme();
  const [selectedNames, setSelectedNames] = React.useState(
    dataSets.map((dataSet) => [dataSet[0]]) // Initialize state with the first option as default
  );

  const [priceRange, setPriceRange] = React.useState([50000, 113517]);
  const [yearRange, setYearRange] = React.useState([2017, 2024]);
  const [kmRange, setKmRange] = React.useState([50000, 100000]);
  const [selectedFeatures, setSelectedFeatures] = React.useState({
    "Front A/C": false,
    "Backup Camera": false,
    "Cruise Control": false,
    Navigation: false,
    "Power Locks": false,
    "Audio system": false,
    "Touchscreen display": false,
    "GPS navigation": false,
    "Phone connectivity": false,
    "In-car Wi-Fi": false,
    "Chrome-plated grill": false,
    "Smart headlight cluster": false,
    "Premium wheels": false,
    "Body character lines": false,
    "High-quality paint": false,
  });

  const handleChange = (event, index) => {
    const {
      target: { value },
    } = event;
    const updatedSelectedNames = [...selectedNames];
    updatedSelectedNames[index] =
      typeof value === "string" ? value.split(",") : value;
    setSelectedNames(updatedSelectedNames);
  };

  const handleFeatureChange = (event) => {
    setSelectedFeatures({
      ...selectedFeatures,
      [event.target.name]: event.target.checked,
    });
  };

  const handleClearAll = () => {
    setSelectedNames(dataSets.map((dataSet) => [dataSet[0]]));
    setPriceRange([50000, 113517]);
    setYearRange([2017, 2024]);
    setKmRange([50000, 100000]);
    setSelectedFeatures({
      "Front A/C": false,
      "Backup Camera": false,
      "Cruise Control": false,
      Navigation: false,
      "Power Locks": false,
      "Audio system": false,
      "Touchscreen display": false,
      "GPS navigation": false,
      "Phone connectivity": false,
      "In-car Wi-Fi": false,
      "Chrome-plated grill": false,
      "Smart headlight cluster": false,
      "Premium wheels": false,
      "Body character lines": false,
      "High-quality paint": false,
    });
  };
  function ValueLabelComponent(props) {
    const { children, value } = props;

    return (
      <Tooltip enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }

  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.node,
  };
  return (
    <Box
      sx={{
        borderRadius: `20px`,
        border: "2px solid #fffafa",
        height: "auto",
        padding: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "8cm",
        m: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <h6 style={{ margin: 0 }}>Filters and Sort</h6>
        <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0 }}>
          <IconButton
            onClick={handleClearAll}
            sx={{
              color: "primary.main",
              textTransform: "none",
              padding: "8px",
              fontSize: "16px",
            }}
          >
            <ClearIcon sx={{ fontSize: "16px" }} />
          </IconButton>

          <Typography
            onClick={handleClearAll}
            sx={{
              cursor: "pointer",
              fontSize: "12px",
              marginLeft: 0,
            }}
          >
            Clear
          </Typography>
        </Box>
      </Box>

      {dataSets.map((dataSet, index) => (
        <FormControl
          key={index}
          sx={{
            m: 1,
            width: DEFAULT_WIDTH,
            borderRadius: `${DEFAULT_BORDER_RADIUS}px`,
            ".MuiOutlinedInput-root": {
              height: "46px",
              fontSize: "0.9rem",
              padding: "0 10px",
              borderRadius: `${DEFAULT_BORDER_RADIUS}px`,
            },
            ".MuiInputLabel-root": {
              fontSize: "0.85rem",
            },
          }}
        >
          <InputLabel id={`select-label-${index}`}>{labels[index]}</InputLabel>
          <Select
            labelId={`select-label-${index}`}
            id={`select-${index}`}
            value={selectedNames[index]}
            onChange={(event) => handleChange(event, index)}
            input={<OutlinedInput label={labels[index]} />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    sx={{
                      backgroundColor: "#2E7D32",
                      color: "white",
                      fontSize: "0.6rem",
                      height: "21px",
                      width: "90px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {dataSet.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, selectedNames[index], theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
      <Box>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={20}
        />
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={20}
        />
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={20}
        />
      </Box>
      <Typography variant="h6" sx={{ mb: 2 }} sx={{ fontSize: "14px" }}>
        Featured Options
      </Typography>

      {/* Checkbox options for features */}
      {Object.keys(selectedFeatures).map((feature) => (
        <FormControlLabel
          key={feature}
          control={
            <Checkbox
              checked={selectedFeatures[feature]}
              onChange={handleFeatureChange}
              name={feature}
              color="primary"
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: "18px", // Adjust the checkbox size
                },
              }}
            />
          }
          label={feature}
          componentsProps={{
            typography: {
              sx: {
                margin: 0,
                fontSize: "0.75rem", // Adjust font size of the label
              },
            },
          }}
        />
      ))}
    </Box>
  );
};
