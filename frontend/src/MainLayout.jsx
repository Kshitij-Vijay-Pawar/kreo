import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';
import { Outlet } from 'react-router';

const MainLayout = ({ handleOrderPopup, orderPopup }) => (
  <>
    <Navbar handleOrderPopup={handleOrderPopup} />
    <Outlet />
    <Footer />
    <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
  </>
);

export default MainLayout;