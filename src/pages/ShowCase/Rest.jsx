import React from 'react'
import s from '../images/sch.png'
import c from '../images/certin.png'
import o from '../images/overcome.png'
import n from '../images/name.png'
import d from '../images/damn.png'
import p from '../images/cft.png'
import scr from '../images/screens.png'
const Rest = () => {
  return (
    <div className="stbyu">
      <div>
        <div className="winther">
          <div>
            <img src={s} alt="" style={{ width: '100%' }} />
          </div>
        </div>
        <div style={{ marginTop: '130px' }}>
          <div className="row">
            <div className="col-12 col-lg-6 mb-5">
              <div>
                <div className="over">Overview</div>
                <div className="always">
                  Always ready to push the boundaries, especially when it comes
                  to
                  <br /> our own platform, we used our analytical eye to create
                  a site that <br />
                  was visually engaging and also optimised for maximum
                  <br />
                  performance. It also perfectly.
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-5">
              <div>
                <div className="over">The Problem</div>
                <div className="always">
                  Always ready to push the boundaries, especially when it comes
                  to
                  <br /> our own platform, we used our analytical eye to create
                  a site that <br />
                  was visually engaging and also optimised for maximum
                  <br />
                  performance. It also perfectly.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '90px' }}>
          <div>
            <img src={c} alt="" style={{ width: '100%' }} />
          </div>
        </div>

        <div style={{ marginTop: '70px' }}>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div>
                <div className="mbs">Mobile Screen</div>
                <div className="fame">
                  Always ready to push the boundaries, especially when it comes
                  to our own platform, we used our analytical eye to create a
                  site that was visually engaging and also optimised for maximum
                  performance. It also perfectly.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '100px' }}>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div>
                <img src={o} alt="" style={{ width: '100%' }} />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div style={{ marginTop: '100px' }}>
                <img src={n} alt="" style={{ width: '100%' }} />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div>
                <img src={d} alt="" style={{ width: '100%' }} />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div style={{ marginTop: '100px' }}>
                <img src={p} alt="" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '70px' }}>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div>
                <div className="mbs">Web Pages</div>
                <div className="fame">
                  Always ready to push the boundaries, especially when it comes
                  to our own platform, we used our analytical eye to create a
                  site that was visually engaging and also optimised for maximum
                  performance. It also perfectly.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '90px',marginBottom:'190px' }}>
          <div>
            <img src={scr} alt="" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rest