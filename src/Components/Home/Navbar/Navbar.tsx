import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  InputBase,
  IconButton,
  Typography,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'
import { auth } from '../../Auth/FireBase/FireBaseApp'
import { signOut } from 'firebase/auth'

export const NavbarSection = () => {
  const [user, setUser] = useState(null)
  const [showSearch, setShowSearch] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      console.log('User logged out successfully')
      navigate('/', { replace: true })
    } catch (error) {
      console.error('Error signing out: ', error.message)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navigationLinks = [
    { label: 'Home', path: '/Home' },
    { label: 'Cars', path: '/Cars' },
    { label: 'About', path: '/About' },
    { label: 'Dashboard', path: '/Dashboard' },
    { label: 'Contact', path: '/Contact' }
  ]

  const renderDrawer = () => (
    <Drawer
      anchor='right'
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <List>
        {navigationLinks.map((link, index) => (
          <ListItem
            button
            key={index}
            component={Link}
            sx={{ textDecoration: 'none', width: '7cm', color: '#2E7D32' }}
            to={link.path}
            onClick={() => setDrawerOpen(false)}
          >
            <ListItemText primary={link.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )

  return (
    <AppBar
      position='sticky'
      sx={{
        backgroundColor: isScrolled ? 'white' : 'transparent',
        borderRadius: isScrolled ? '10px' : '0',
        boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.5)',
        width: isScrolled ? '76%' : '100%', // Adjusts width based on scroll state
        transition:
          'background-color 0.3s ease, box-shadow 0.3s ease, width 0.3s ease, transform 0.3s ease', // Added transform transition
        margin: '0 auto', // Centers the AppBar horizontally
        transform: isScrolled ? 'translateY(20px)' : 'translateY(0)' // Adds a gap effect
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography
            to='/'
            style={{
              textDecoration: 'none',
              color: isScrolled ? 'black' : 'black',
              fontSize: isMobile ? '1.2rem' : '1.2rem',
              fontWeight: '400'
            }}
            component={Link}
          >
            CARVANAX
          </Typography>

          {!isMobile && (
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              {navigationLinks.map((link, index) => (
                <Button
                  key={index}
                  sx={{
                    color:
                      location.pathname === link.path
                        ? '#2E7D32'
                        : isScrolled
                        ? 'black'
                        : 'black',
                    fontSize: isTablet ? '14px' : '16px',
                    textTransform: 'none'
                  }}
                  component={Link}
                  to={link.path}
                >
                  {link.label}
                </Button>
              ))}
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center' }}>
            {showSearch ? (
              <InputBase
                placeholder='Search…'
                sx={{
                  color: isScrolled ? 'black' : 'black',
                  border: `1px solid ${isScrolled ? '#ccc' : 'white'}`,
                  borderRadius: '4px',
                  padding: '4px 8px',
                  transition: 'width 0.3s ease',
                  width: isMobile ? '100px' : '150px'
                }}
                autoFocus
                onBlur={() => setShowSearch(false)}
              />
            ) : (
              <IconButton
                onClick={() => setShowSearch(true)}
                sx={{
                  color: isScrolled ? 'black' : 'black'
                }}
              >
                <SearchIcon />
              </IconButton>
            )}

            {isMobile ? (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ color: 'black' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                <Button
                  sx={{
                    color: isScrolled ? 'black' : 'black',
                    textTransform: 'none'
                  }}
                  component={Link}
                  to='/login'
                >
                  Login
                </Button>
                <Button
                  sx={{
                    color: isScrolled ? 'black' : 'black',
                    textTransform: 'none',
                    marginLeft: '16px'
                  }}
                  component={Link}
                  to='/register'
                >
                  Register
                </Button>
                <Button
                  variant='outlined'
                  onClick={handleSignOut}
                  sx={{
                    textTransform: 'none',
                    borderColor: isScrolled ? 'black' : 'black',
                    color: isScrolled ? 'black' : 'black',
                    marginLeft: '16px'
                  }}
                >
                  Sign Out
                </Button>
              </>
            )}
          </div>
        </Toolbar>
      </Container>
      {renderDrawer()}
    </AppBar>
  )
}
