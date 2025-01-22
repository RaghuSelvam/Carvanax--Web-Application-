import React from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  Divider,
  Link
} from '@mui/material'
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'
import { Ad_2 } from '../Home/Ads/Ad_2'
import { Ads } from '../Home/Ads/Ad_1'
import LogoSlider from '../Home/BrandSlider/BrandSlider'

export const Contact = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'url("https://autodealreactjs.vercel.app/assets/images/slider/slide3.jpg") no-repeat center center fixed',
        backgroundPosition:"100%",
        backgroundSize: 'cover', // Make sure the image covers the full container
        padding: '40px',
        color: '#fff', // Set text color to white for better contrast
        position: 'relative',
      }}
    >
      {/* Fullscreen Map Container */}
      <Box
        sx={{
          width: '100%',
          height: '400px',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '10px',
          boxShadow: 1,
          marginBottom: 4,
          background: 'rgba(0, 0, 0, 0.5)', // Dark overlay to make map text more visible
        }}
      >
        <iframe
          title='Kumbakonam Map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.242727426394!2d79.37676841485528!3d10.960069392205606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab0a6b6b94d07%3A0x52da52bc464e98b2!2sKumbakonam%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1694627899238!5m2!1sen!2sus'
          width='100%'
          height='100%'
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
        ></iframe>
      </Box>

      {/* Main Content */}
      <Card
        sx={{
          maxWidth: 1600,
          width: '100%',
          padding: 4,
          borderRadius: 4,
          boxShadow: 6,
          // backgroundColor: 'rgba(219, 214, 214, 0.9)', // Slight background to separate content from image
        }}
      >
        {/* Header Section */}
        <Typography
          variant='h4'
          component='h1'
          sx={{
            textAlign: 'center',
            marginBottom: 1,
            color: '#333',
            fontWeight: 'bold',
            textTransform: 'none', // Make title look more prominent
            letterSpacing: '1px',
          }}
        >
          Drop Us a Line
        </Typography>

        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            marginBottom: 6,
            maxWidth: 800,
            marginX: 'auto',
            color: '#666',
          }}
        >
          Feel free to connect with us through our online channels for updates,
          news, and more.
        </Typography>

        {/* Main Grid Container */}
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                padding: 3,
                borderRadius: 3,
                boxShadow: 2,
                backgroundColor: '#f9f9f9',
              }}
            >
              <Typography variant='h6' sx={{ marginBottom: 2 }}>
                Contact Us
              </Typography>
              <Divider sx={{ marginBottom: 3 }} />

              {/* Form Fields in Two Columns */}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label='Name'
                    placeholder='Your name'
                    size='medium'
                    variant='outlined'
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '6px',
                      },
                    }}
                    InputLabelProps={{
                      style: { fontSize: '0.875rem' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label='Email Address'
                    placeholder='Your email'
                    size='medium'
                    variant='outlined'
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '6px',
                      },
                    }}
                    InputLabelProps={{
                      style: { fontSize: '0.875rem' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label='Phone Number'
                    placeholder='Phone Number'
                    size='medium'
                    variant='outlined'
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '6px',
                      },
                    }}
                    InputLabelProps={{
                      style: { fontSize: '0.875rem' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label='Subject'
                    placeholder='Enter Keyword'
                    size='medium'
                    variant='outlined'
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '6px',
                      },
                    }}
                    InputLabelProps={{
                      style: { fontSize: '0.875rem' },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label='Your Message'
                    placeholder='Type your message here'
                    variant='outlined'
                    size='medium'
                    multiline
                    rows={4}
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '6px',
                      },
                    }}
                    InputLabelProps={{
                      style: { fontSize: '0.875rem' },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant='contained'
                    color='primary'
                    size='large'
                    fullWidth
                    sx={{
                      textTransform: 'none',
                      borderRadius: 2,
                      boxShadow: 3,bgcolor:"#2E7D32",
                      '&:hover': {
                        backgroundColor: '#2b7fff'
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={6}>
  <Card
    sx={{
      padding: 5,
      borderRadius: 3,
      boxShadow: 2,
      backgroundColor: '#f9f9f9',height:"11.8cm"
    }}
  >
    <Typography variant='h6' sx={{ marginBottom: 1, fontSize: '0.875rem' }}>
      Address
    </Typography>
    <Divider sx={{ marginBottom: 2 }} />
    <Typography variant='body2' sx={{ marginBottom: 2, fontSize: '0.875rem' }}>
      101 E 129th St, East Chicago, IN 46312 <br />
      United States
    </Typography>

    <Typography variant='h6' sx={{ marginTop: 2, marginBottom: 1, fontSize: '0.875rem' }}>
      Information:
    </Typography>
    <Typography variant='body2' sx={{ marginBottom: 0, fontSize: '0.875rem' }}>
      1-333-345-6868 <br />
      themesflat@gmail.com
    </Typography>

    <Typography variant='h6' sx={{ marginTop: 2, marginBottom: 1, fontSize: '0.875rem' }}>
      Open Time:
    </Typography>
    <Typography variant='body2' sx={{ marginBottom: 1, fontSize: '0.875rem' }}>
      Monday - Friday: 08:00 - 20:00 <br />
      Saturday - Sunday: 10:00 - 18:00
    </Typography>

    <Typography variant='h6' sx={{ marginTop: 2, marginBottom: 1, fontSize: '0.875rem' }}>
      Follow Us:
    </Typography>
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-start' }}>
      <Link href='#' target='_blank'>
        <Facebook color='primary' fontSize='small' />
      </Link>
      <Link href='#' target='_blank'>
        <Twitter color='primary' fontSize='small' />
      </Link>
      <Link href='#' target='_blank'>
        <Instagram color='secondary' fontSize='small' />
      </Link>
      <Link href='#' target='_blank'>
        <LinkedIn color='primary' fontSize='small' />
      </Link>
    </Box>
  </Card>
</Grid>

        </Grid>
      </Card>
      <LogoSlider/>
    </Box>
  )
}
