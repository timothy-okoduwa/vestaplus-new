import React from 'react';
import r from '../images/rocky.png';
import f from '../images/fin.png';
import l from '../images/finacery logo.svg';
import s from '../images/scl.svg';
import u from '../images/ugat.png';
import b from '../images/booklib.svg';
import p from '../images/pstt.png';
import cc from '../images/crypto.svg';
import oo from '../images/coin.png';
import { Zoom } from 'react-awesome-reveal';

const Building = () => {
  return (
    <div className="building">
      <div>
        <div>
          <div className="lighr">
            <div className="bui">
              {' '}
              <span className="bu">Building for </span>{' '}
              <span className="il">the future</span>
            </div>
            <div>
              <img src={r} alt="" className="bel" />
            </div>
          </div>
          <div className="lifOf">
            Trusted by some of the world leading brands
          </div>
        </div>
      </div>

      <div className="takes">
        <Zoom duration="800" triggerOnce="true">
          <div className="dor">
            <div className="waiting-for">
              <div className="containerr-fluid">
                <div className="row mt-5">
                  <div className="col-12 col-lg-5">
                    <div className="tickets">
                      <div>
                        <div>
                          <img src={l} alt="" style={{ width: '35%' }} />
                        </div>
                        <div className="startl">
                          Financery Dashboard- Manage all your finance, crypto
                          and stock all from one place.
                        </div>
                        <div className="u-alone">
                          <div className="presence">UI/UX Design</div>
                          <div className="presence2">Branding</div>
                        </div>
                        <div>
                          <button className="sbb">Start Building</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7">
                    <div>
                      <img src={f} alt="" className="nono" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Zoom>

        <div className="caving">
          <div className="row">
            <div className="col-12 col-lg-6 mb-5">
              <Zoom duration="800" triggerOnce="true">
                <div className="loast">
                  <div className="lplp">
                    <div className="ynl">
                      <div>
                        <img src={s} alt="" />
                      </div>
                      <div className="memind">
                        An E-learning platform for all ages.
                      </div>
                      <div>
                        <div className="u-alone">
                          <div className="presence">UI/UX Design</div>
                          <div className="presence2">Branding</div>
                        </div>
                        <div>
                          <button className="sbbb mb-4">Start Building</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={u} alt="" style={{ width: '100%' }} />
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>

            <div className="col-12 col-lg-6 mb-5">
              <Zoom duration="800" triggerOnce="true">
                <div className="loast2">
                  <div className="lplp">
                    <div className="ynl">
                      <div>
                        <img src={b} alt="" />
                      </div>
                      <div className="memind">
                        An online library with inspirationals books from famous
                        achievers
                      </div>
                      <div>
                        <div className="u-alone">
                          <div className="presence">UI/UX Design</div>
                          <div className="presence2">Branding</div>
                          {/* <div className="presence3"> </div> */}
                        </div>
                        <div>
                          <button className="sbbb2 ">Start Building</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={p} alt="" style={{ width: '96%' }} />
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
        </div>

        <Zoom duration="800" triggerOnce="true">
          <div className="dor">
            <div className="waiting-for2">
              <div className="containerr-fluid">
                <div className="row mt-5">
                  <div className="col-12 col-lg-5">
                    <div className="tickets">
                      <div>
                        <div>
                          <img src={cc} alt="" style={{ width: '50%' }} />
                        </div>
                        <div className="startl">
                          Start a ride hailing business, or Logistics startup
                          today. Let's build your product from start to finish,
                          go to market in 8 weeks.
                        </div>
                        <div className="u-alone">
                          <div className="presence">UI/UX Design</div>
                          <div className="presence2">Branding</div>
                        </div>
                        <div>
                          <button className="sbb2p">Start Building</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7">
                    <div>
                      <img src={oo} alt="" className="nono" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Building;
