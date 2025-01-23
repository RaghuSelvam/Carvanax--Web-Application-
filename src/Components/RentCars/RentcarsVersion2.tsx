import {
  Box,
  Typography,
  Button,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Grid,
  Chip
} from '@mui/material'
import SpeedIcon from '@mui/icons-material/Speed'
import InsightsIcon from '@mui/icons-material/Insights'
import PetrolIcon from '../../assets/gas-station-petrol-svgrepo-com.svg'
import ChatIcon from '@mui/icons-material/Chat' // Importing the chat icon
import { useEffect, useState } from 'react'
import axios from 'axios'

export const RentCarsVersionTwo = () => {
  const [cars, setCars] = useState<any[]>([])

  useEffect(() => {
    axios
      .get('https://674dbb7a635bad45618c929e.mockapi.io/carvanax/Cars')
      .then(response => {
        setCars(response.data)
      })
      .catch(error => {
        console.error('Error fetching car data:', error) // Handle any errors
      })
  })

  return (
    <Box sx={{}}>
      {cars.map(car => (
        <Grid item xs={12} sm={6} md={3} key={car.id}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 3, // Increased gap for better spacing
              borderRadius: '23px',
              overflow: 'hidden',
              border: '1px solid #ddd', // Lighter border for a softer appearance
              boxShadow: '0 4px 12px rgba(133, 131, 131, 0.22)', // Added shadow for depth
              height: '6.5cm',
              margin: 3, // Padding added for everything except the image
              position: 'relative' // Ensures absolute positioning works inside this container
            }}
          >
            {/* Car Image Section */}
            <Box sx={{ flexShrink: 0, position: 'relative' }}>
              <img
                src={car.carImage}
                alt='Car'
                width={328}
                style={{
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  objectFit: 'cover'
                }} // Ensure image covers container and no extra space
              />
              <Chip
                label='New'
                color='primary'
                sx={{
                  position: 'absolute',
                  top: 8, // Positioning from the top
                  left: 8, // Positioning from the left
                  backgroundColor: '#2E7D32', // Custom green color
                  color: 'white',
                  fontWeight: '400',
                  height: '23px',
                  fontSize: '12px',
                  width: '53px',
                  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)' // Shadow for the chip
                }}
              />{' '}
              <Chip
                label='4'
                color='default' // Use default to apply custom background color
                icon={<SpeedIcon sx={{ fontSize: 16, color: '#6E6E6E' }} />} // Add icon (SpeedIcon used here as an example)
                sx={{
                  position: 'absolute',
                  top: 8, // Positioning from the top
                  left: 68, // Positioning from the right
                  backgroundColor: 'lightgrey', // Grey color for background
                  color: '#6E6E6E', // Grey color for the text
                  fontWeight: '500',
                  height: '23px',
                  fontSize: '10px',
                  width: '38px', // Adjusted width to accommodate the label and icon
                  display: 'flex',
                  alignItems: 'center' // Ensure proper alignment of text and icon
                }}
              />
              <Chip
                label={car.ModelYear}
                color='secondary'
                sx={{
                  position: 'absolute',
                  top: 8, // Positioning from the top
                  right: 8, // Positioning from the right
                  backgroundColor: '#2E7D32', // Custom green color
                  color: 'white',
                  fontWeight: '400',
                  height: '23px',
                  fontSize: '11px',
                  width: '51px',
                  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)' // Shadow for the chip
                }}
              />
            </Box>

            {/* Car Details Section */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
                 <Typography sx={{ fontSize: 12, fontWeight: 400, marginTop: 1 ,color:"green"}}>
                {car.Type}
              </Typography>
              <Typography sx={{ fontSize: 18, fontWeight: 500, marginTop: 1 }}>
                {car.brand}
              </Typography>
              <Box display='flex' gap={2} mt={2}>
                <Typography
                  sx={{ fontSize: 12, fontWeight: 380, color: 'grey' }}
                >
                  <SpeedIcon fontSize='small' />
                  {car.RunningKms}
                </Typography>
                <Typography
                  sx={{ fontSize: 12, fontWeight: 380, color: 'grey' }}
                >
                  <img src={PetrolIcon} width={16} alt='Petrol' /> {car.Fuel}
                </Typography>
                <Typography
                  sx={{ fontSize: 12, fontWeight: 380, color: 'grey' }}
                >
                  <InsightsIcon fontSize='small' /> {car.Gear}
                </Typography>
              </Box>
              <Typography
                sx={{ fontSize: 19, fontWeight: 580, color: 'green' }}
                mt={1}
              >
                ₹ {car.Price}
              </Typography>
              <Button
                variant='outlined'
                sx={{
                  borderColor: 'green',
                  color: 'green',
                  textTransform: 'none',
                  borderRadius: 3,
                  height: 41,
                  width: 160,
                  mt: 2,
                  '&:hover': {
                    backgroundColor: '#2E7D32',
                    color: 'white'
                  }
                }}
              >
                View details
              </Button>
            </Box>
            {/* Divider Between Sections */}
            <Divider
              orientation='vertical'
              flexItem
              sx={{ borderColor: '#ddd', margin: '30px 15px' }}
            />
            <Box
              display='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              sx={{ padding: 2 }}
            >
              {/* Avatar List Section */}
              <Box display='flex' justifyContent='center' mb={2}>
                <List
                  sx={{
                    width: '100%',
                    maxWidth: 280,
                    bgcolor: 'background.paper',
                    borderRadius: '8px',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                    padding: 1
                  }}
                >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt='Ben Stokes'
                        src='https://tse1.mm.bing.net/th?id=OIP.lTNcHj68Gsh12xM6WTayxQHaFD&pid=Api&P=0&h=180'
                        sx={{ boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)' }} // Added shadow to avatar
                      />
                    </ListItemAvatar>
                    <ListItemText primary={car.Owner} secondary='Owner' />
                  </ListItem>
                </List>
              </Box>

              <Button
                variant='contained'
                sx={{
                  backgroundColor: '#2E7D32',
                  color: 'white',
                  textTransform: 'none',
                  borderRadius: 8,
                  height: 40,
                  width: 140,
                  mt: 2,
                  '&:hover': {
                    backgroundColor: 'white',
                    color: '#2E7D32'
                  },
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' // Light shadow effect for the button
                }}
                startIcon={<ChatIcon />} // Adding the chat icon to the left of the text
              >
                Chat
              </Button>
            </Box>
          </Box>
        </Grid>
      ))}
    </Box>
  )
}
