import React from 'react'
const Rest = ({ project }) => {
  return project ? (
    <div className="stbyu">
      <div>
        <div className="winther">
          <div>
            <img src={project.bigImage} alt="" style={{ width: '100%' }} />
          </div>
        </div>
        <div style={{ marginTop: '130px' }}>
          <div className="row">
            <div className="col-12 col-lg-6 mb-5">
              <div>
                <div className="over">Overview</div>
                <div className="always">{project.overView}</div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-5">
              <div>
                <div className="over">The Problem</div>
                <div className="always">{project.theProblem}</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '90px' }}>
          <div>
            <img
              src={project.typographyImage}
              alt=""
              style={{ width: '100%' }}
            />
          </div>
        </div>

        <div style={{ marginTop: '70px' }}>
          <div className="row">
            <div className="col-12 ">
              <div>
                <div className="mbs">Mobile Screen</div>
                <div className="fame">{project.mobileScreen}</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '100px' }}>
          <div className="row">
            <div>
              <img src={project.mobileImage} alt="" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
        <div style={{ marginTop: '70px' }}>
          <div className="row">
            <div className="col-12 ">
              <div>
                <div className="mbs">Web Pages</div>
                <div className="fame">{project.webScreen}</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '90px', marginBottom: '190px' }}>
          <div>
            <img src={project.webImage2} alt="" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Rest