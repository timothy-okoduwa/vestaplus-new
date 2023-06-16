import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
const cllaUDetails = [
  {
    title: 'Project Summary',
  },
  {
    title: 'User Persona',
  },
  {
    title: 'User Flow',
  },
  {
    title: 'Sitemap',
  },
  {
    title: 'Wireframe/Sketches',
  },
  {
    title: 'Style Guide',
  },
  {
    title: 'High Fidelity (Mobile)',
  },
  {
    title: 'High Fidelity (Web)',
  },
];

const Rest = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(-1);
  const childhoodRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight / 10;
      const imageContainerOffsetTop =
        document.querySelector('.image-container')?.offsetTop;

      if (
        imageContainerOffsetTop &&
        scrollPosition >= imageContainerOffsetTop
      ) {
        const visibleImageIndex = Math.floor(
          (scrollPosition - imageContainerOffsetTop) / windowHeight
        );

        setCurrentImageIndex(visibleImageIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCllaUClick = (index) => {
    setCurrentImageIndex(index);

    // Scroll the page to the corresponding image
    const imageContainer = document.querySelector('.image-container');
    if (imageContainer) {
      const imageElements = imageContainer.querySelectorAll('img');
      if (imageElements.length > index) {
        const imageElement = imageElements[index];
        const imageOffsetTop = imageElement.offsetTop;
        const imageContainerOffsetTop = imageContainer.offsetTop;
        const scrollPosition = imageOffsetTop - imageContainerOffsetTop;

        imageContainer.scrollTop = scrollPosition;

        window.scrollTo({
          top: imageContainerOffsetTop + scrollPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return project ? (
    <div className="stbyu">
      <div>
        <div className="winther">
          <div>
            <video
              src={project.bigVideo}
              autoPlay={true}
              loop={true}
              muted={true}
              preload="auto"
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
              className="spills"
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: '130px' }}>
        <div className="row">
          <div className="col-12 mb-5">
            <div>
              <div className="over">Project Summary</div>
              {/* <div className="always">
                <div className="datata">{project.overView}</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="" style={{ marginTop: '80px' }}>
        <div className="container">
          <div className="gistss">
            <div className="row">
              <div className="col-12 col-md-8">
                <div className="image-container">
                  {project?.ProImages?.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image}
                        alt=""
                        style={{ width: '100%', marginBottom: '50px' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="vard" ref={childhoodRef}>
                  <div>
                    <div className="childhood">
                      {cllaUDetails.map((detail, index) => (
                        <div
                          className={classNames('clla-u', {
                            active: index === currentImageIndex,
                          })}
                          key={index}
                          onClick={() => handleCllaUClick(index)}
                        >
                          <div className="sitemap">{detail.title}</div>
                          {/* <div className="invest">{detail.description}</div> */}
                          <div>
                            <IoIosArrowDroprightCircle className='zapp'/>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Rest;
