import React from 'react';
import b from '../images/bosspics.png';
import c from '../images/chinexpics.png';
import d from '../images/debbypics.png';
import e from '../images/timpics.png';
import f from '../images/news.png';
import g from '../images/judepics.png';
const OurTeam = () => {
  return (
    <div className="pushess">
      <div>
        <div className="ourR">
          {' '}
          Our <span className="gdgd">Team</span>
        </div>
        <div className=" gettoknow">GET TO KNOW</div>
      </div>

      <div>
        <div className="oikuj">
          <div className="row">
            <div className="col-12 col-lg-4 mb-5 heyye">
              <div>
                <div className="wawawa ">
                  <img src={b} alt="images" className="band" />
                </div>
                <div className="slyy">Sylvester Nnachi</div>
                <div className="product">Product Designer</div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 d-flex justify-content-center">
              <div>
                <div className="wawawa">
                  <img src={c} alt="images" className="band" />
                </div>
                <div className="slyy">Chinedu Ogbonna</div>
                <div className="product">Digital Marketer</div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 starte">
              <div>
                <div className="wawawa ">
                  <img src={d} alt="images" className="band" />
                </div>
                <div className="slyy">Deborah Ehru</div>
                <div className="product">UI/UX Designer</div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 d-flex heyye">
              <div>
                <div className="wawawa">
                  <img src={e} alt="images" className="band" />
                </div>
                <div className="slyy">Timothy Okoduwa</div>
                <div className="product">Frontend Developer</div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 d-flex justify-content-center">
              <div>
                <div className="wawawa ">
                  <img src={f} alt="images" className="band" />
                </div>
                <div className="slyy">Peace Ukaoha</div>
                <div className="product">Product Manager</div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 starte">
              <div>
                <div className="wawawa">
                  <img src={g} alt="images" className="band" />
                </div>
                <div className="slyy">Jude Nwosu</div>
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
