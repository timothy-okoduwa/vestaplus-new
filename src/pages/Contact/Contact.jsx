import React, { useEffect } from 'react'
import './Contact.css';
import FirstCon from './FirstCon';
import MapForm from './MapForm';
const Contact = () => {
    useEffect(() => {
      document.title = 'Contact Us | Vestarplus';
    }, []);
  return (
    <div className="hands">
      <div className="container">
        <FirstCon />

        <MapForm />
      </div>
    </div>
  );
}

export default Contact