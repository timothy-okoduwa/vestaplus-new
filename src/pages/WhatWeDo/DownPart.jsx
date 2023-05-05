import React from 'react';
import b from '../images/branding.svg';
import s from '../images/screen.svg';
import m from '../images/mobile.svg';
import w from '../images/web.svg';
import { Zoom } from 'react-awesome-reveal';
import r from '../images/rocky.png'
import d from '../images/doller.svg'
const DownPart = () => {
  return (
    <div className="sby">
      <div>
        <div className="haveot">
          What <span className="padr">we do</span>{' '}
        </div>
        <div className="tuss">Trusted by some of the world leading brands</div>
      </div>

      <div className="mkir">
        <div className="row">
          <div className="col-12 col-lg-6 mb-5">
            <Zoom duration="800" triggerOnce="true">
              <div className="usually">
                <div className="containerd">
                  <div>
                    <div>
                      <img src={b} alt="" />
                    </div>
                    <div className="brandd">Branding</div>
                    <div className="whiyr">
                      With good branding, you can give your brand a more human
                      side, to make your business stand out.
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
          <div className="col-12 col-lg-6 mb-5">
            <Zoom duration="800" triggerOnce="true">
              <div className="usually">
                <div className="containerd">
                  <div>
                    <div>
                      <img src={s} alt="" />
                    </div>
                    <div className="brandd">UX Design</div>
                    <div className="whiyr">
                      We design human centered products to attract audience and
                      make your product awesome by using proven design
                      processes.
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
          <div className="col-12 col-lg-6 mb-5">
            <Zoom duration="800" triggerOnce="true">
              {' '}
              <div className="usually">
                <div className="containerd">
                  <div>
                    <div>
                      <img src={m} alt="" />
                    </div>
                    <div className="brandd">Mobile App Development</div>
                    <div className="whiyr">
                      We help you develop mobile application that give your
                      users awesome experience and generate leads, and increase
                      sales
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
          <div className="col-12 col-lg-6 mb-5">
            <Zoom duration="800" triggerOnce="true">
              {' '}
              <div className="usually">
                <div className="containerd">
                  <div>
                    <div>
                      <img src={w} alt="" />
                    </div>
                    <div className="brandd">Web App Development</div>
                    <div className="whiyr">
                      We help your business to build a web application that
                      serves customers/ service needs, increase business growth
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      </div>

      <div className="mkir">
        <div>
          <div className="haveot">
            Products we have <span className="padr"> Built so far</span>{' '}
            <span>
              <img src={r} alt="" className="hopesay" />
            </span>
          </div>
          <div className="tuss olo">
            Trusted by some of the world leading brands
          </div>
        </div>
        <div className="mkir">
          <div className="row">
            <div className="col">
              <div className="fullterms">
                <div className="containerd">
                  <div>
                    <div>
                      <img src={d} alt="" />
                    </div>
                    <div className="brandd">Fintech</div>
                    <div className="whiyr">
                      With good branding, you can give your<br/> brand a more human
                      side, to make <br/>your business stand out.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">ruru</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownPart;
