import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Grid
} from '@mui/material'
import Car1 from '../../../assets/car1 (1).svg'
import Car2 from '../../../assets/car-front-svgrepo-com.svg'
import Car3 from '../../../assets/car1 (3).svg'
import Car4 from '../../../assets/car1 (4).svg'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export const WhyUs = () => {
  return (
    <Box
      sx={{
        padding: { xs: 5,   }, // Responsive right values for mobile and desktop

        margin: '2cm auto',
        maxWidth: '1250px', // Limit the container width
        width: '100%' // Ensure the container takes up full width on small screens
      }}
    >
      {/* Title Section */}

      {/* Grid Layout for Content */}
      <Grid container spacing={{ xs: 4, md: 22 }} alignItems='center'>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            m={1}
            sx={{
              position: 'relative', // Allows positioning elements within this container
              height: { xs: '350px', md: '510px' }, // Responsive height
              overflow: 'visible', // Ensure elements outside the container are visible
              right: { xs: '32px', md: '0px' }
            }}
          >
            {/* First Image */}
            <img
              src='https://autodealreactjs.vercel.app/assets/images/section/wcu-1.jpg'
              alt='Car Image'
              style={{
                borderRadius: '1cm',
                position: 'absolute',
                top: -50, // Align the first image at the top
                left: 0, // Align to the left
                width: '121%', // Occupy the container width
                height: '110%', // Adjust the height
                objectFit: 'cover', // Cover the designated area without distortion
                zIndex: 1 // Set the stacking order
              }}
            />

            {/* Checkicon Boxes with Animation */}
            {[
              { text: 'Proven Expertise', top: '23%' },
              { text: '1 Million Visits Per Day', top: '36%' },
              { text: '7,800 Car Sellers', top: '49%' }
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: 'absolute',
                  top: item.top, // Dynamically position each box
                  right: '-21%', // Align all boxes to the right
                  bgcolor: 'white',
                  borderRadius: '30px',
                  padding: '12px 18px',
                  boxShadow: '10px 34px 28px rgba(0, 0, 0, 0.2)',
                  zIndex: 2, // Ensure boxes appear above the image
                  display: 'flex',
                  flexDirection: index === 1 ? 'row-reverse' : 'row', // Reverse for the second box
                  alignItems: 'center', // Center align icon and text
                  animation: `moveBox 2s ease-in-out ${
                    index * 0.5
                  }s infinite alternate`, // Add animation
                  '@keyframes moveBox': {
                    '0%': {
                      transform: 'translateX(0)'
                    },
                    '100%': {
                      transform: 'translateX(-20px)' // Move 20px to the left
                    }
                  }
                }}
              >
                <Typography
                  variant='subtitle1'
                  sx={{
                    marginLeft: index === 1 ? 0 : 2, // Add margin for left-to-right flow
                    marginRight: index === 1 ? 2 : 0 // Add margin for right-to-left flow
                  }}
                >
                  <CheckCircleIcon sx={{ color: '#2E7D32' }} />
                  {item.text}
                </Typography>
              </Box>
            ))}

            {/* Second Image */}
            <img
              src='https://autodealreactjs.vercel.app/assets/images/section/wcu-2.png'
              alt='Overlay Image'
              style={{
                position: 'absolute',
                top: '52%', // Position the second image to overlap the first
                left: '10%', // Shift slightly to the right

                width: '145%', // Expand for effect
                height: '80%', // Adjust the height
                objectFit: 'contain', // Contain the image within its area
                zIndex: 1 // Place behind the first image and boxes
              }}
            />
          </Box>
        </Grid>

        {/* List Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            marginTop: { xs: 10, } // Responsive right values for mobile and desktop
          }}
        >
          <Typography
            variant='h5'
            sx={{
              textAlign: 'start',
              marginBottom: 3,

              fontWeight: '500',
              color: '#2E7D32',
              fontSize: { xs: 22, md: 27 } // Adjust font size on small screens
            }}
          >
            Why Choose Auto Decar
          </Typography>

          <Typography
            variant='h5'
            sx={{
              textAlign: 'start',
              marginBottom: 2,
              fontWeight: '400',
              color: '#333',
              fontSize: { xs: 12, md: 13 } // Adjust font size on small screens
            }}
          >
            Our experienced team excels in car sales with many years of
            successfully navigating the market, delivering informed decisions
            and optimal results.
          </Typography>

          <List>
            {[
              {
                icon: Car1,
                primary: 'New Range Rover, Defender, Discovery',
                secondary:
                  'Experience the joy of owning a brand new Range Rover, Defender, or Discovery today!'
              },
              {
                icon: Car2,
                primary: 'Pre-Owned Vehicles',
                secondary:
                  'AutoDecar has a great selection of pre-owned vehicles.'
              },
              {
                icon: Car3,
                primary: 'Certified Pre-Owned Vehicles',
                secondary:
                  'AutoDecar Demo has a great selection of certified pre-owned vehicles.'
              },
              {
                icon: Car4,
                primary: 'Financing',
                secondary:
                  'Get approved today and drive off in a new or used vehicle.'
              }
            ].map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  border: '1px solid rgba(199, 199, 199, 0.97)',
                  borderRadius: 4,
                  padding: 3,
                  marginBottom: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: index === 2 ? 'scale(1.1)' : 'scale(1.05)', // Only scale the third item
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' // Add box shadow
                  },
                  ...(item.primary === 'Pre-Owned Vehicles' && {
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    bgcolor: '#2E7D32',
                    color: 'white',
                    transform: 'scale(1.12)',
                    boxShadow: '0 21px 30px rgba(0, 0, 0, 0.2)'
                  })
                }}
              >
                <ListItemIcon
                  sx={{
                    transition: 'transform 0.3s ease', // Smooth transition for the flip
                    '&:hover': {
                      transform: 'scaleX(-1)' // Flip the icon horizontally on hover
                    }
                  }}
                >
                  <img src={item.icon} alt='' width={50} />
                </ListItemIcon>
                <ListItemText
                  primary={item.primary}
                  secondary={item.secondary}
                  primaryTypographyProps={{
                    fontSize: '0.975rem',
                    fontWeight: 500,
                    color:
                      item.primary === 'Pre-Owned Vehicles'
                        ? 'white'
                        : '#2E7D32' // Ensure white color for primary text
                  }}
                  secondaryTypographyProps={{
                    fontSize: '0.76rem',
                    fontWeight: 400,
                    color:
                      item.primary === 'Pre-Owned Vehicles'
                        ? 'white'
                        : 'inherit' // Ensure white color for primary text
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  )
}
