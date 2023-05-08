import React from 'react';
import b from '../images/bosspics.png';
import c from '../images/chinexpics.png';
import d from '../images/debbypics.png';
import e from '../images/timpics.png';
import f from '../images/blesspics.png';
import g from '../images/judepics.png';
const OurTeam = () => {
  return (
    <div className="pushess">
      <div>
        <div className="gettoknow">GET TO KNOW</div>
        <div className="ourR">Our Team</div>
      </div>

      <div>
        <div className="oikuj">
          <div className="row">
            <div className="col-12 col-lg-4 mb-5 d-flex justify-content-center">
              <div>
                <div className="wawawa wawawa-1">
                  <img src={b} alt="" className="band" />
                </div>
                <div className="sly">Sylvester Nnachi</div>
                <div className="product">Product Designer</div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 d-flex justify-content-center">
              <div>
                <div className="wawawa wawawa-2">
                  <img src={c} alt="" className="band" />
                </div>
                <div className="sly">Chinedu Ogbonna</div>
                <div className="product">Digital Marketer</div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 d-flex justify-content-center">
              <div>
                <div className="wawawa wawawa-1">
                  <img src={d} alt="" className="band" />
                </div>
                <div className="sly">Deborah Ehru</div>
                <div className="product">UI/UX Designer</div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 d-flex justify-content-center">
              <div>
                <div className="wawawa wawawa-2">
                  <img src={e} alt="" className="band" />
                </div>
                <div className="sly">Timothy Okoduwa</div>
                <div className="product">Frontend Engineer</div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 d-flex justify-content-center">
              <div>
                <div className="wawawa wawawa-1">
                  <img src={f} alt="" className="band" />
                </div>
                <div className="sly">Blessing Ogbonna</div>
                <div className="product">Graphics Designer</div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 d-flex justify-content-center">
              <div>
                <div className="wawawa wawawa-2">
                  <img src={g} alt="" className="band" />
                </div>
                <div className="sly">Jude Nwosu</div>
                <div className="product">Graphics Designer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
