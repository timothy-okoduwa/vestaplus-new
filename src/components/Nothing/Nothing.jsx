import React from 'react';
import './Nothing.css';
import { useNavigate } from 'react-router-dom';
import v from '../images/oxy.svg';
const Nothing = () => {
  const navigate = useNavigate();
  const move = () => {
    navigate('/');
  };
  return (
    <div className="container ">
      <div className="roling">
        <div>
          <div className="forbut">
            <img src={v} alt="" />
          </div>
          <div>
            <div className="fourtofour">404</div>
          </div>
          <div>
            <div className="oops">Oops, Page not found.</div>
          </div>
          <div className="forbut mt-4">
            <button className="cafmu" onClick={move}>
              Go Back Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nothing;
