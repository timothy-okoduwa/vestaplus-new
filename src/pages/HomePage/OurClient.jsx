import React from 'react'
import t from '../images/10hourslab.png'
import b from '../images/bridge.png'
import g from '../images/gigm.png'
import i from '../images/iroko.png'
import m from '../images/mission.png'
import o from '../images/orangetm.png'
import p from '../images/palladium.png'

const OurClient = () => {
  return (
    <div className="OurClient">
      <div className='container'>
              <div>
        <div className="our">
          {' '}
          <span className="ta">Our </span> <span className="ke">Clients</span>
        </div>
        <div className='trud'>Trusted by some of the world leading brands</div>
      </div>

      <div className='need'>
        <div>
            <div className="row">
                <div className="col-12 col-sm-3 mb-5 ">
                    <div className='will'>
                        <img src={g} alt='' className='will1t1' />
                    </div>
                </div>
                <div className="col-12 col-sm-3 mb-5 ">
                      <div className='will'>
                        <img src={t} alt="" className='will1t2' />
                    </div>
                </div>
                <div className="col-12 col-sm-3 mb-5 ">
                      <div className='will'>
                        <img src={m} alt="" className='will1t3' />
                    </div>
                </div>
                <div className="col-12 col-sm-3 mb-5 ">
                      <div className='will'>
                        <img src={o} alt="" className='will1t4' />
                    </div>
                </div>
                <div className="col-12 col-sm-3 mb-5 ">
                      <div className='will'>
                        <img src={p} alt="" className='will1t5' />
                    </div>
                </div>
                <div className="col-12 col-sm-3 mb-5 ">
                      <div className='will'>
                        <img src={i} alt="" className='will1t6' />
                    </div>
                </div>
                <div className="col-12 col-sm-3 mb-5 ">
                      <div className='will'>
                        <img src={b} alt="" className='will1t7' />
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>

    </div>
  );
}

export default OurClient