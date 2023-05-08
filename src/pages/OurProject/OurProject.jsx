import React from 'react';
import './OurProject.css';
import ProFirst from './ProFirst';
import FeaturedProjects from './FeaturedProjects';
const OurProject = () => {
  return (
    <div className="hands">
      <div className="container">
        <ProFirst />

        <FeaturedProjects />
      </div>
    </div>
  );
};

export default OurProject;
