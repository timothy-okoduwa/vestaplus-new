import React, { useRef, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';
const MapForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessgae] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Start the loading state
    setIsSending(true);

    emailjs
      .sendForm(
        'service_byyuwql',
        'template_d1duudt',
        form.current,
        'XwYNL5h2iURg7ulSr'
      )
      .then(
        (result) => {
          toast.success('Your email has been sent 😉!', {
            position: 'top-left',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
             setName('');
             setEmail('');
             setPhoneNumber('');
             setMessgae('');
        },
        (error) => {
          toast.warn('Sorry, something went wrong 😞!', {
            position: 'top-left',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      )
      .finally(() => {
        // Reset the loading state
        setIsSending(false);
      });
   
  };

  return (
    <div className="pushes">
      <div>
        <div className="row">
          <div className="col-12 col-lg-6 mb-5">
            <form ref={form} onSubmit={sendEmail}>
              <ToastContainer />
              <Zoom duration="800" triggerOnce="true">
                <div>
                  <div className="mb-4">
                    <div className="labell">Full Name </div>
                    <input
                      type="text"
                      className="takila"
                      placeholder="Enter Full Name "
                      name="user_name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <div className="labell">Phone </div>
                    <input
                      type="text"
                      className="takila"
                      placeholder="Enter your phone number"
                      name="phone_number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <div className="labell">Email </div>
                    <input
                      type="text"
                      className="takila"
                      placeholder="Enter Email Address"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <div className="labell">Message </div>
                    <textarea
                      type="text"
                      className="takila2"
                      placeholder="Enter your Message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessgae(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <button
                      className={`subb ${
                        !name || !email || !phoneNumber || !message
                          ? 'disabled'
                          : ''
                      }`}
                      type="submit"
                      value="Send"
                      disabled={!name || !email || !phoneNumber || !message}
                    >
                      {isSending ? (
                        <CircularProgress
                          style={{
                            height: '30px',
                            width: '30px',
                            color: 'white',
                          }}
                        />
                      ) : (
                        'Submit'
                      )}
                    </button>
                  </div>
                </div>
              </Zoom>
            </form>
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
