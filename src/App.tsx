import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavbarSection } from "./Components/Home/Navbar/Navbar";
import { HeroSection } from "./Components/Home/Hero/Hero";
import { RentCars } from "./Components/RentCars/RentCars";
import { Footer } from "./Components/Home/Footer/Footer";
import { Ads } from "./Components/Home/Ads/Ad_1";
import { Ad_2 } from "./Components/Home/Ads/Ad_2";
import LogoSlider from "./Components/Home/BrandSlider/BrandSlider";
import { Aboutus } from "./Components/AboutUs/Aboutus";
import { DashBoard } from "./Components/Dashboard/DashBoardLayOut";
import { Contact } from "./Components/Contact/Contact";
import { Login } from "./Components/Auth/Login";
import { Register } from "./Components/Auth/Register";
import { Cars } from "./Components/Cars/Cars";
import CarDetails from "./Components/Cars/CarDetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  return (
    <Router>
      <NavbarSection />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <RentCars />
              <Ads />
              <Ad_2 />
              <LogoSlider />
            </>
          }
        />
        <Route path="/cars" element={<><Cars/> </>} />
        <Route path="/about" element={<><CarDetails/> </>} />
        <Route path="/dashboard" element={<><DashBoard/> </>} />
        <Route path="/contact" element={<><Contact/></>} />
        <Route path="/login" element={<><Login/> </>} />
        <Route path="/register" element={<><Register/> </>} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
