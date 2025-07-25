import React from 'react'
import Hero from '../components/Hero/Hero';
import Category from '../components/Category/Category';
import Category2 from '../components/Category/Category2';
import Services from '../components/Services/Services';
import Banner from '../components/Banner/Banner';
import Products from '../components/Products/Products';
import Blogs from '../components/Blogs/Blogs';
import Partners from '../components/Partners/Partners';


import headphone from "../assets/hero/headphone.png";
import smartwatch2 from "../assets/category/smartwatch2-removebg-preview.png";

import Aurora from '../bites/auro';


const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
};



const Home = ({ handleOrderPopup }) => {

  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden">

      {/* Aurora as background */}
      <div className='absolute inset-0 z-0'>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.8}
          amplitude={1.5}
          speed={0.5}
        />
      </div>

      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
    </div>
  )
}

export default Home
