import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Grid
} from '@mui/material';
import Car1 from '../../../assets/car1 (1).svg';
import Car2 from '../../../assets/car-front-svgrepo-com.svg';
import Car3 from '../../../assets/car1 (3).svg';
import Car4 from '../../../assets/car1 (4).svg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const WhyUs = () => {
  return (
    <Box
      sx={{
        padding: { xs: 3, sm: 4, md: 6 },
        margin: { xs: '1cm auto', md: '2cm auto' },
        maxWidth: '1250px',
        width: '100%'
      }}
    >
      <Grid container spacing={4} alignItems='center'>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              height: { xs: '300px', sm: '400px', md: '500px' },
              overflow: 'visible',
              right: { xs: '10px', md: '0px' }
            }}
          >
            {/* First Image */}
            <img
              src='https://autodealreactjs.vercel.app/assets/images/section/wcu-1.jpg'
              alt='Car Image'
              style={{
                borderRadius: '15px',
                position: 'absolute',
                top: -30,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 1
              }}
            />

            {/* Check Icon Boxes */}
            {[
              { text: 'Proven Expertise', top: '20%' },
              { text: '1 Million Visits Per Day', top: '35%' },
              { text: '7,800 Car Sellers', top: '50%' }
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: 'absolute',
                  top: item.top,
                  right: { xs: '-5%', sm: '-10%', md: '-15%' },
                  bgcolor: 'white',
                  borderRadius: '20px',
                  padding: '10px 16px',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: index === 1 ? 'row-reverse' : 'row',
                  alignItems: 'center',
                  animation: `moveBox 2s ease-in-out ${index * 0.5}s infinite alternate`,
                  '@keyframes moveBox': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-15px)' }
                  }
                }}
              >
                <CheckCircleIcon sx={{ color: '#2E7D32', marginRight: 1 }} />
                <Typography variant='subtitle1'>{item.text}</Typography>
              </Box>
            ))}

            {/* Second Image */}
            <img
              src='https://autodealreactjs.vercel.app/assets/images/section/wcu-2.png'
              alt='Overlay Image'
              style={{
                position: 'absolute',
                top: '55%',
                left: '10%',
                width: '100%',
                height: '60%',
                objectFit: 'contain',
                zIndex: 1
              }}
            />
          </Box>
        </Grid>

        {/* List Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant='h5'
            sx={{
              textAlign: 'start',
              marginBottom: 2,
              fontWeight: '500',
              color: '#2E7D32',
              fontSize: { xs: 20, md: 26 }
            }}
          >
            Why Choose Auto Decar
          </Typography>

          <Typography
            variant='body1'
            sx={{
              textAlign: 'start',
              marginBottom: 2,
              fontWeight: '400',
              color: '#333',
              fontSize: { xs: 14, md: 16 }
            }}
          >
            Our experienced team excels in car sales with years of expertise, 
            ensuring informed decisions and optimal results.
          </Typography>

          <List>
            {[
              {
                icon: Car1,
                primary: 'New Range Rover, Defender, Discovery',
                secondary: 'Own a brand new Range Rover, Defender, or Discovery today!'
              },
              {
                icon: Car2,
                primary: 'Pre-Owned Vehicles',
                secondary: 'AutoDecar offers a great selection of pre-owned vehicles.'
              },
              {
                icon: Car3,
                primary: 'Certified Pre-Owned Vehicles',
                secondary: 'Browse our certified pre-owned vehicle selection.'
              },
              {
                icon: Car4,
                primary: 'Financing',
                secondary: 'Get approved today and drive off in your dream car.'
              }
            ].map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  border: '1px solid rgba(199, 199, 199, 0.97)',
                  borderRadius: 4,
                  padding: 2,
                  marginBottom: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
                  },
                  ...(item.primary === 'Pre-Owned Vehicles' && {
                    bgcolor: '#2E7D32',
                    color: 'white',
                    transform: 'scale(1.08)',
                    boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2)'
                  })
                }}
              >
                <ListItemIcon
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scaleX(-1)' }
                  }}
                >
                  <img src={item.icon} alt='' width={40} />
                </ListItemIcon>
                <ListItemText
                  primary={item.primary}
                  secondary={item.secondary}
                  primaryTypographyProps={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: item.primary === 'Pre-Owned Vehicles' ? 'white' : '#2E7D32'
                  }}
                  secondaryTypographyProps={{
                    fontSize: '0.85rem',
                    fontWeight: 400,
                    color: item.primary === 'Pre-Owned Vehicles' ? 'white' : 'inherit'
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};
