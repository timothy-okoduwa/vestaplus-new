import React from 'react';
import r from '../images/book.png';
import t from '../images/tech1.png';
import tp from '../images/temms.png';
import tb from '../images/tbb.png';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Blogs = () => {
  return (
    <div className="Blogs">
      <div>
        <div>
          <div className="lighr">
            <div className="bui">
              {' '}
              <span className="bu">Read our </span>{' '}
              <span className="il">
                Blog <img src={r} alt="" className="bel2" />{' '}
              </span>
            </div>
            <div></div>
          </div>
          <div className="lifOf">
            Explore our insightful blog, where we share valuable knowledge,
            industry <br /> trends, and expert perspectives to keep you informed
            and inspired
          </div>
        </div>
      </div>

      <div className="ccc">
        <div className="row">
          <div className="col-12 col-lg-4 mb-4">
            <div>
              <Link to="/blog" style={{ textDecoration: 'none' }}>
                <Card style={{ border: 'none' }}>
                  <Card.Img variant="top" src={t} />
                  <Card.Body className="mt-2">
                    <Card.Title>
                      <div className="tecc">Technology</div>
                    </Card.Title>
                    <Card.Text>
                      <div className="Programming">
                        Programming and its usefulness in technology
                      </div>
                      <div className="sept">13 Sept, 2021</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-4">
            <div>
              <Link to="/blog" style={{ textDecoration: 'none' }}>
                <Card style={{ border: 'none' }}>
                  <Card.Img variant="top" src={tp} />
                  <Card.Body className="mt-2">
                    <Card.Title>
                      <div className="tecc">Technology</div>
                    </Card.Title>
                    <Card.Text>
                      <div className="Programming">
                        Robotics vs Artificial Intelligence and Human life
                      </div>
                      <div className="sept">13 Sept, 2021</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-4">
            <div>
              <Link to="/blog" style={{ textDecoration: 'none' }}>
                <Card style={{ border: 'none' }}>
                  <Card.Img variant="top" src={tb} />
                  <Card.Body className="mt-2">
                    <Card.Title>
                      <div className="tecc">Technology</div>
                    </Card.Title>
                    <Card.Text>
                      <div className="Programming">
                        The importance of teamwork and productivity
                      </div>
                      <div className="sept">13 Sept, 2021</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
