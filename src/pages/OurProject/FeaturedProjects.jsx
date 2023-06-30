import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

const FeaturedProjects = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const docRef = doc(db, 'project', 'project');

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setUser(docSnap?.data());
      }
    });

    return () => unsubscribe();
  }, []);

  console.log(user);

  return (
    <div className="mentor">
      <div>
        <div className="skills">
          Featured <span className="strategy">Projects</span>
        </div>
        <div className="funn">Some of our works and projects</div>
        <div className="truru">
          <div className="row">
            {user?.project?.map((prod) => (
              <div className="col-12 col-lg-6 mb-5">
                <Link
                  to={`/more/${prod.projectName}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="loastf"
                    style={{ background: prod.projectCardColor }}
                  >
                    <div className="lplp">
                      <div className="ynl">
                        <div>
                          <div className="seses">
                            <img
                              src={prod.logoImage}
                              alt=""
                              style={{ width: '100%', objectFit: 'contain' }}
                            />
                          </div>

                          <div className="Financery mt-3">
                            {prod?.projectName}
                          </div>
                        </div>
                        <div className="memind mt-4">
                          {prod?.shortDescription}
                        </div>
                        <div>
                          <div className="u-alone">
                            {prod.tags.map((tag, index) => (
                              <div key={index} className="presence">
                                {tag}
                              </div>
                            ))}
                          </div>
                          <div>
                            <button
                              className="sbbbf mb-4"
                              style={{ background: prod.cardButtonColor }}
                            >
                              Start Building
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <img
                          src={prod.thubNail}
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
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
