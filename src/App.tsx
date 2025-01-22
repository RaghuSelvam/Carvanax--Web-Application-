import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { NavbarSection } from './Components/Home/Navbar/Navbar'
import HeroSection from './Components/Home/Hero/Hero'
import { RentCars } from './Components/RentCars/RentCars'
import { Footer } from './Components/Home/Footer/Footer'
import { Ads } from './Components/Home/Ads/Ad_1'
import { Ad_2 } from './Components/Home/Ads/Ad_2'
import LogoSlider from './Components/Home/BrandSlider/BrandSlider'
import { Aboutus } from './Components/AboutUs/Aboutus'
import { DashBoard } from './Components/Dashboard/DashBoardLayOut'
import { Contact } from './Components/Contact/Contact'
import { Login } from './Components/Auth/Login/Login'
import { Register } from './Components/Auth/Register/Register'
import { Cars } from './Components/Cars/Cars'
import CarDetails from './Components/Cars/CarDetails'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { PartnersAd } from './Components/Home/Ads/PartnersAd'
import { WhyUs } from './Components/Home/WhyUS/WhyUs'

function App () {
  return (
    <Router>
      <MainContent />
    </Router>
  )
}

function MainContent () {
  const location = useLocation()

  // Define routes where the NavbarSection should not appear
  const noNavbarRoutes = ['/', '/register', ]

  // Log the current pathname for debugging
  console.log('Current Pathname:', location.pathname)

  return (
    <>
      {/* Conditionally render NavbarSection */}
      {!noNavbarRoutes.includes(location.pathname) && <NavbarSection />}

      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/home'
          element={
            <>
              <HeroSection />
              <WhyUs />
              <RentCars />
              <PartnersAd />
              <Ads />
              <Ad_2 />
              <LogoSlider />
            </>
          }
        />
        <Route path='/cars' element={<Cars />} />
        <Route path='/about' element={<CarDetails />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
      </Routes>

      {!noNavbarRoutes.includes(location.pathname) && <Footer />}
    </>
  )
}

export default App
