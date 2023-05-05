import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <div className="container">
      <div className="promises">
        <div>
          <div className="row">
            <div className="col-12 col-lg-7">
              <div className="sched">
                Schedule time to <span className="know">talk with us.</span>
              </div>
              <div className="letss">Let’s talk about your goals</div>
              <div className="reje">
                <button className="magnify">Book 30 Minutes Session</button>
                <button className="capmi">Contact Us</button>
              </div>
            </div>
            <div className="col-12 col-lg-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer