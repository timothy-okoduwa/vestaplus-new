import React from 'react';
import r from '../images/rocket.png';
import f from '../images/fin.png';
import l from '../images/finlogo.svg';
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
              Building for{' '}
              <span className="il">
                the future <img src={r} alt="" className="bel" />
              </span>
            </div>
          </div>
          <div className="lifOf">
            Crafting innovative solutions that anticipate emerging needs and
            empower individuals and businesses to thrive in a rapidly evolving
            world.
          </div>
        </div>
      </div>

      <div className="takes">
        <Zoom duration="800" triggerOnce="true">
          <div className="dor">
            <div className="waiting-for">
              <div className="containerr-fluid">
                <div className="row mt-5">
                  <div className="col-12 col-md-5">
                    <div className="tickets">
                      <div className="container">
                        <div>
                          <img src={l} alt="" style={{ width: '20%' }} />
                          <div className="Financery">Financery</div>
                        </div>
                        <div className="startl">
                          Financery Dashboard- Manage all your finance, crypto
                          and stock all from one place.
                        </div>
                        <div className="u-alone">
                          <div className="presence">UI/UX Design</div>
                          <div className="presence2">Branding</div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-7">
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
            <div className="col-12 col-md-6 mb-5">
              <Zoom duration="800" triggerOnce="true">
                <div className="loast">
                  <div className="container">
                    <div className="lplp">
                      <div className="ynl">
                        <div>
                          <img src={s} alt="" style={{ width: '15%' }} />
                          <div className="Financery">schoolgate</div>
                        </div>
                        <div className="memind">
                          An E-learning platform for all ages.
                        </div>
                        <div>
                          <div className="u-alone">
                            <div className="presence">UI/UX Design</div>
                            <div className="presence2">Branding</div>
                          </div>
                          <div style={{ marginTop: '38px' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <img
                        src={u}
                        alt=""
                        style={{
                          width: '100%',
                          objectFit: 'contain',
                          borderRadius: '43px',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>

            <div className="col-12 col-md-6 mb-5">
              <Zoom duration="800" triggerOnce="true">
                <div className="loast2">
                  <div className="container">
                    <div className="lplp">
                      <div className="ynl">
                        <div>
                          <img src={b} alt="" style={{ width: '15%' }} />
                          <div className="Financery">booklib</div>
                        </div>
                        <div className="memind">
                          An online library with inspirationals books from
                          famous achievers.
                        </div>
                        <div>
                          <div className="u-alone">
                            <div className="presence">UI/UX Design</div>
                            <div className="presence2">Branding</div>
                            {/* <div className="presence3"> </div> */}
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <img
                        src={p}
                        alt=""
                        style={{
                          width: '100%',
                          objectFit: 'contain',
                          borderRadius: '43px',
                        }}
                      />
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
                  <div className="col-12 col-md-5">
                    <div className="tickets">
                      <div className="container">
                        <div>
                          <img src={cc} alt="" style={{ width: '20%' }} />
                          <div className="Financery">CryptoCowrie</div>
                        </div>
                        <div className="startl">
                          CryptoCowrie enable users to manage digital wallets,
                          buy/sell cryptocurrencies, track portfolios, trade on
                          exchanges, access market data, ensure security, and
                          participate in decentralised finance.
                        </div>
                        <div className="u-alone">
                          <div className="presence">UI/UX Design</div>
                          <div className="presence2">Branding</div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-7">
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
