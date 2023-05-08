import React from 'react';
import { Zoom } from 'react-awesome-reveal';
const MapForm = () => {
  return (
    <div className="pushes">
      <div>
        <div className="row">
          <div className="col-12 col-lg-6 mb-5">
            <Zoom duration="800" triggerOnce="true">
              <div>
                <div className="mb-4">
                  <div className="labell">Full Name </div>
                  <input
                    type="text"
                    className="takila"
                    placeholder="Enter Full Name "
                  />
                </div>
                <div className="mb-4">
                  <div className="labell">Phone </div>
                  <input
                    type="text"
                    className="takila"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mb-4">
                  <div className="labell">Email </div>
                  <input
                    type="text"
                    className="takila"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div className="mb-4">
                  <div className="labell">Message </div>
                  <textarea
                    type="text"
                    className="takila2"
                    placeholder="Enter your Message"
                  />
                </div>
                <div className="mb-4">
                  <button className="subb">Submit</button>
                </div>
              </div>
            </Zoom>
          </div>
          <div className="col-12 col-lg-6">
             <Zoom duration="800" triggerOnce="true">
                <div>
              <div className="terapy">
                <iframe
                  title="map"
                  width="100%"
                  height="100%"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=95, Coker Road, Coker Lagos Nigeria.&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
              <div className="shana">
                <div className="tryin">Visit Us</div>
                <div className="coker">
                  95, Coker Road,
                  <br /> Coker Lagos Nigeria.
                </div>
              </div>
            </div>
             </Zoom>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapForm;
