import React from 'react';
import f from '../images/fin.png';
import l from '../images/finacery logo.svg';
import s from '../images/scl.svg';
import u from '../images/ugat.png';
import b from '../images/booklib.svg';
import p from '../images/pstt.png';
import cc from '../images/crypto.svg';
import oo from '../images/coin.png';
import { Zoom } from 'react-awesome-reveal';
const FeaturedProjects = () => {
  return (
    <div className="mentor">
      <div>
        <div className="skills">
          Featured <span className="strategy">Projects</span>{' '}
        </div>
        <div className="funn">Trusted by some of the world leading brands</div>
        <div className="truru">
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
            <div className="col-12 col-lg-6 mb-5">
              <Zoom duration="800" triggerOnce="true">
                <div className="loast2 advisors">
                  <div className="lplp">
                    <div className="ynl">
                      <div>
                        <img src={l} alt="" />
                      </div>
                      <div className="memind">
                        Start a ride hailing business, or Logistics startup
                        today. Let's build your product from start to finish, go
                        to market in 8 weeks.
                      </div>
                      <div>
                        <div className="u-alone">
                          <div className="presence">UI/UX Design</div>
                          <div className="presence2">Branding</div>
                        </div>
                        <div>
                          <button className="sbbb2 degin">
                            Start Building
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={f} alt="" style={{ width: '96%' }} />
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
            <div className="col-12 col-lg-6 mb-5">
              <Zoom duration="800" triggerOnce="true">
                <div className="loast2 nvm">
                  <div className="lplp">
                    <div className="ynl">
                      <div>
                        <img src={cc} alt="" />
                      </div>
                      <div className="memind">
                        Start a ride hailing business, or Logistics startup
                        today. Let's build your product from start to finish, go
                        to market in 8 weeks.
                      </div>
                      <div>
                        <div className="u-alone">
                          <div className="presence">UI/UX Design</div>
                          <div className="presence2">Branding</div>
                        </div>
                        <div>
                          <button className="sbbb2 cbh mb-4">
                            Start Building
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={oo} alt="" style={{ width: '96%' }} />
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
