import React from 'react';
import b from '../images/branding.svg';
import s from '../images/screen.svg';
import m from '../images/mobile.svg';
import w from '../images/web.svg';
import { Zoom } from 'react-awesome-reveal';
import r from '../images/rocket.png';
import d from '../images/doller.svg';
import bit from '../images/bitcoin.svg';
import wb from '../images/webb.svg';
import ecom from '../images/ecc.svg';
import edu from '../images/eduuu.svg';
const DownPart = () => {
  return (
    <div className="sby">
      <div>
        <div className="haveot">
          What <span className="padr">we do</span>{' '}
        </div>
        <div className="tuss">
          Our expertise spans design and tech, enabling us to create innovative
          products
          <br /> that drive growth, enhance efficiency, and exceed expectations
        </div>
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
          <div className="tuss olo mt-3">
            Our expertise in creating innovative solutions tailored to meet
            diverse needs and deliver exceptional value
          </div>
        </div>
        <div className="mkir">
          <div className="row">
            <div className="col-12 col-lg-6 mb-5">
              <Zoom duration="800" triggerOnce="true">
                <div className="fullterms">
                  <div className="containerd">
                    <div>
                      <div>
                        <img src={d} alt="" />
                      </div>
                      <div className="Fintech">Fintech</div>
                      <div className="goof">
                        We design fintech products that enhance financial
                        experiences, empowering individuals and businesses with
                        secure and user-friendly financial solutions
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
            <div className="col-12 col-lg-6 mb-5">
              <Zoom duration="800" triggerOnce="true">
                <div className="fullterms2">
                  <div className="containerd">
                    <div>
                      <div>
                        <img src={bit} alt="" />
                      </div>
                      <div className="crypto">Crypto & Web3</div>
                      <div className="humm">
                        We design innovative crypto and Web3 products that
                        enhance digital experiences, empowering users with
                        cutting-edge tools and decentralized solutions
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
            <div className="col-12 col-lg-6 mb-5">
              <Zoom duration="800" triggerOnce="true">
                <div className="fullterms3">
                  <div className="containerd">
                    <div>
                      <div>
                        <img src={wb} alt="" />
                      </div>
                      <div className="website">Websites</div>
                      <div className="nomind">
                        We help your business to build a websites/web
                        application that serves customers/ service needs,
                        increase business growth
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
            <div className="col-12 col-lg-6 mb-5">
              <Zoom duration="800" triggerOnce="true">
                <div className="fullterms4">
                  <div className="containerd">
                    <div>
                      <div>
                        <img src={ecom} alt="" />
                      </div>
                      <div className="ecoo">E-Commerce</div>
                      <div className="waitfor">
                        We design e-commerce products that enhance online
                        shopping experiences, empowering businesses and
                        consumers with seamless transactions and user- friendly
                        interfaces."
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
            <div className="col-12 col-lg-6 mb-5">
              <Zoom duration="800" triggerOnce="true">
                <div className="fullterms5">
                  <div className="containerd">
                    <div>
                      <div>
                        <img src={edu} alt="" />
                      </div>
                      <div className="edu">EduTech</div>
                      <div className="die">
                        We design educational technology products that enhance
                        learning experiences and empower students and educators
                      </div>
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

export default DownPart;
