import React from 'react';
import { Routes, Route } from "react-router"; 
import MainLayout from './MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Registration from './pages/Registration';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => setOrderPopup(!orderPopup);

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Routes>
      {/* All normal pages use MainLayout */}
      <Route element={
        <MainLayout handleOrderPopup={handleOrderPopup} orderPopup={orderPopup} />
      }>
        <Route path="/" element={<Home handleOrderPopup={handleOrderPopup} />} />
        <Route path="/home" element={<Home handleOrderPopup={handleOrderPopup} />} />
        <Route path="/about" element={<About />} />
      </Route>
      {/* Registration page does NOT use MainLayout */}
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

export default App;