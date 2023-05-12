import React, { useEffect } from 'react'
import './About.css';
import FirstAbout from './FirstAbout'
import OurTeam from './OurTeam';
import Blog from './Blog';
const About = () => {
      useEffect(() => {
        document.title = 'Vestarplus Team';
      }, []);
  return (
    <div className="hands">
        <div className="container">
            <FirstAbout/>
            <OurTeam/>
            <Blog/>
        </div>
    </div>
  )
}

export default About