import React, { useEffect } from 'react'
import './About.css';
import FirstAbout from './FirstAbout'
import OurTeam from './OurTeam';
const About = () => {
      useEffect(() => {
        document.title = 'Vestarplus Team';
      }, []);
  return (
    <div className="hands">
        <div className="container">
            <FirstAbout/>
            <OurTeam/>
         
        </div>
    </div>
  )
}
//? former color #fac734, new color #DD9A1D
export default About