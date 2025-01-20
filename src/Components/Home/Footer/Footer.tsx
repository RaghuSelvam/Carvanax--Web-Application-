import {
  Box,
  Divider,
  Grid,
  Typography,
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import TrophyIcon from "../../../assets/trophy-svgrepo-com (1).svg";
import SoldOutIcon from "../../../assets/sold-svgrepo-com.svg";
import Offers from "../../../assets/bonus-svgrepo-com.svg";
import Compare from "../../../assets/scales-scale-svgrepo-com.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  const FooterHeadings = [
    {
      PrimaryHeading: "Top 1 Indians",
      SecondaryHeading: "Largest Auto portal",
      Icon: TrophyIcon,
    },
    {
      PrimaryHeading: "Car Sold",
      SecondaryHeading: "Every 5 minute",
      Icon: SoldOutIcon,
    },
    {
      PrimaryHeading: "Offers",
      SecondaryHeading: "Stay updated pay less",
      Icon: Offers,
    },
    {
      PrimaryHeading: "Compare",
      SecondaryHeading: "Decode the right car",
      Icon: Compare,
    },
  ];

  const footerLinks = [
    {
      title: "About Auto Decar",
      links: [
        "About us",
        "Careers With Us",
        "Terms & Conditions",
        "Privacy Policy",
        "Investors",
        "FAQs",
      ],
    },
    {
      title: "Popular Used Cars",
      links: [
        "Top Selling Cars",
        "Affordable Cars",
        "Luxury Cars",
        "Electric Cars",
        "Hybrid Cars",
        "Certified Cars",
      ],
    },
    {
      title: "Other",
      links: [
        "Contact Us",
        "Support",
        "Media Inquiries",
        "Blog",
        "Partnerships",
        "Dealership Opportunities",
      ],
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#24272C", color: "white", py: 5 }}>
      <Container maxWidth="lg">
        {/* Icons Section */}
        <List
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: 1,
          }}
        >
          {FooterHeadings.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                width: "auto",
                justifyContent: "center",
                my: 1, // Reduced margin
              }}
            >
              <ListItemAvatar>
                <Box
                  component="img"
                  src={item.Icon}
                  alt={item.PrimaryHeading}
                  width={30}
                  sx={{ filter: "invert(1)" }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.PrimaryHeading}
                secondary={item.SecondaryHeading}
                primaryTypographyProps={{
                  fontSize: "1rem", // Reduced font size
                }}
                secondaryTypographyProps={{
                  color: "grey.400",
                  fontSize: "0.65rem", // Reduced font size
                }}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 3, borderColor: "grey.700" }} />

        {/* Links Section */}
        <Grid container spacing={3}>
          {footerLinks.map((section, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "grey.200", fontWeight: 400 }}
              >
                {section.title}
              </Typography>
              <List sx={{ p: 0 }}>
                {section.links.map((link, linkIndex) => (
                  <ListItem
                    key={linkIndex}
                    sx={{ p: 0, py: 0.3 }} // Reduced padding
                    disablePadding
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "grey.400",
                        fontWeight: 400,
                        "&:hover": { color: "white", cursor: "pointer" },
                      }}
                    >
                      {link}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 3, borderColor: "grey.700" }} />

        {/* Newsletter Section */}
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Typography variant="body1" sx={{ color: "grey.400", mb: 1 }}>
            Stay on top of the latest car trends, tips, and tricks for selling
            your car.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mt: 1,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              sx={{
                width: { xs: "100%", sm: "50%" },
                backgroundColor: "white",
                borderRadius: "20px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                  "& fieldset": {
                    border: "none",
                  },
                  "&:hover fieldset": {
                    border: "2px solid #2E7D32",
                  },
                  "&.Mui-focused fieldset": {
                    border: "2px solid #2E7D32",
                  },
                },
              }}
            />

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2E7D32",
                color: "white",
                px: 4,
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#1E5732",
                },
              }}
            >
              Send
            </Button>
          </Box>

          {/* Social Media Icons */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
            {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map(
              (Icon, index) => (
                <Avatar
                  key={index}
                  sx={{
                    backgroundColor: "grey.800",
                    "&:hover": {
                      backgroundColor: "#2E7D32",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Icon fontSize="small" sx={{ color: "white" }} />
                </Avatar>
              )
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
