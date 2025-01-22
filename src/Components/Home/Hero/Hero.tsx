import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import './Hero.css'

const HeroSection = () => {
  const carouselItems = [
    {
      img: 'https://autodealreactjs.vercel.app/assets/images/slider/slide2.jpg',
      title: '2012 Nissan Leaf SV',
      description: 'Used Car • 66,322 miles • Est. $151/month'
    },
    {
      img: 'https://autodealreactjs.vercel.app/assets/images/slider/slide5.jpg',
      title: '2023 Tesla Model Y',
      description: 'Electric Vehicle • 15,000 miles • Est. $450/month'
    },
    {
      img: 'https://autodealreactjs.vercel.app/assets/images/slider/slide1.jpg',
      title: '2023 Tesla Model Y',
      description: 'Electric Vehicle • 15,000 miles • Est. $450/month'
    }
  ]

  return (
    <Box className='Herobanner'>
      <Carousel
        indicators={false} // Disable dots
        navButtonsAlwaysVisible
        interval={1000}
        animation='fade'
        navButtonsProps={{
          style: {
            backgroundColor: 'rgba(214, 208, 208, 0.5)', // Semi-transparent black
            color: 'white', // White arrow color
            borderRadius: '20%', // Round button
            height: '60px', // Button height
            width: '61px', // Button width
            top: 'calc(50% - 20px)', // Center vertically
            transform: 'translateY(-50%)'
          },
          className: 'carousel-nav-buttons' // Add a custom class for hover effects
        }}
        navButtonsWrapperProps={{
          style: {
            top: '50%',
            transform: 'translateY(-50%)' // Center wrapper vertically
          }
        }}
      >
        {carouselItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              height: '100vh',
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <Box p={11} color='white'>
              <Typography variant='h2' sx={{ fontWeight: 600 }}>
                {item.title}
              </Typography>
              <Typography variant='h6' sx={{ fontWeight: 500 }} mt={2}>
                {item.description}
              </Typography>
              <Box display='flex' alignItems='center' gap={2} mt={1}>
                <Button
                  variant='contained'
                  sx={{
                    bgcolor: 'white',
                    color: 'black',
                    textTransform: 'none',
                    borderRadius: '11px'
                  }}
                >
                  Chat
                </Button>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt='User'
                        src='https://i.pinimg.com/originals/93/d4/3c/93d43c25b863001ad11b70c3500c0e77.jpg'
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary='Kathryn Murphy'
                      secondary='3 hrs ago'
                      sx={{
                        '& .MuiListItemText-primary': { color: 'white' },
                        '& .MuiListItemText-secondary': {
                          color: 'white',
                          fontSize: '10px'
                        }
                      }}
                    />
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  )
}

export default HeroSection
