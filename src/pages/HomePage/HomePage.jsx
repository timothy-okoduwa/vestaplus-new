import React from 'react';
import './HomePage.css';
import HomeFirst from './HomeFirst';
import OurClient from './OurClient';
import Building from './Building';
import Blogs from './Blogs';
const HomePage = () => {
  return (
    <div className="hands">
      <div>
        <div className="container">
          <HomeFirst />
        </div>
        <OurClient />
        <div className="container">
            <Building />
            <Blogs/>
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;
