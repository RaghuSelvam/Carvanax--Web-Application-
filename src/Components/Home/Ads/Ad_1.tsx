import { Box, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export const Ads = () => {
  return (
    <Box
      display='flex'
      flexWrap='wrap'
      justifyContent='center'
      gap={4}
      p={3}
      mt={7}
      sx={{
        '@media (max-width: 600px)': {
          flexDirection: 'column', // Stack items on small screens
        },
      }}
    >
      {/* First Ad Container */}
      <Box
        flex='1 1 calc(50% - 16px)'
        maxWidth='560px'
        height={200}
        display='flex'
        alignItems='center'
        p={3}
        borderRadius={4}
        sx={{
          backgroundColor: 'lightgrey',
          color: 'black',
          transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
          '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
            backgroundColor: '#f4f4f4',
          },
          '@media (max-width: 600px)': {
            width: '100%', // Full width on small screens
            height: 'auto', // Allow height to adjust for smaller screens
          },
        }}
      >
        <img
          src='https://autodealreactjs.vercel.app/assets/images/img-box/find-car-1.png'
          alt='Find Car'
          style={{
            width: '200px',
            height: 'auto',
            marginRight: '16px',
            marginTop: '-2cm',
          }}
        />
        <Box flex='1'>
          <Typography variant='body1' gutterBottom sx={{ fontWeight: 500, fontSize: '19px' }}>
            Are you looking for a car?
          </Typography>
          <Typography variant='body2' gutterBottom sx={{ fontWeight: 300, fontSize: '13px' }}>
            Save time and effort as you no longer need to visit multiple stores to find the right car.
          </Typography>
          <Box
            display='flex'
            alignItems='center'
            border='1px solid white'
            borderRadius='16px'
            padding='8px'
            bgcolor='#2E7D32'
            color='white'
            sx={{
              width: '250px',
              height: '45px',
              '&:hover': {
                backgroundColor: '',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              },
              '@media (max-width: 600px)': {
                width: '200px', // Adjust width on small screens
              },
            }}
          >
            <SearchIcon sx={{ marginRight: '8px' }} />
            Find Cars
          </Box>
        </Box>
      </Box>

      {/* Second Ad Container */}
      <Box
        flex='1 1 calc(50% - 16px)'
        maxWidth='560px'
        display='flex'
        alignItems='center'
        p={3}
        height={200}
        borderRadius={4}
        sx={{
          backgroundColor: 'black',
          color: 'white',
          transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
          '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
            backgroundColor: '#333',
          },
          '@media (max-width: 600px)': {
            width: '100%',
            height: 'auto',
          },
        }}
      >
        <img
          src='https://autodealreactjs.vercel.app/assets/images/img-box/find-car-2.png'
          alt='Sell Car'
          style={{
            width: '200px',
            height: 'auto',
            marginRight: '16px',
            marginTop: '-2.4cm',
          }}
        />
        <Box flex='1'>
          <Typography variant='body1' gutterBottom sx={{ fontWeight: 500, fontSize: '19px' }}>
            Do you want to sell a car?
          </Typography>
          <Typography variant='body2' gutterBottom sx={{ fontWeight: 300, fontSize: '13px' }}>
            Find your perfect car match and sell your car quickly with our user-friendly online service.
          </Typography>
          <Box
            display='flex'
            alignItems='center'
            borderRadius='16px'
            padding='8px'
            bgcolor='#2E7D32'
            color='white'
            sx={{
              width: '250px',
              height: '45px',
              '&:hover': {
                backgroundColor: '#555',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              },
              '@media (max-width: 600px)': {
                width: '200px',
              },
            }}
          >
            <SearchIcon sx={{ marginRight: '8px' }} />
            Find Cars
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
