import React from 'react';
import { useSelector } from 'react-redux';
import MarkdownToJSX from 'markdown-to-jsx';
import './Blog.css';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import t from '../images/tbb.png';
const BlogRead = () => {
    const navigate = useNavigate();
    const move=()=>{
        navigate('/blog');
    }
  const selectedPost = useSelector((state) => state.selectedPost);

  if (!selectedPost) {
    // Handle the case when there's no post data available
    return (
      <div style={{ textAlign: 'center' }}>
        No blog post found.
        <div className="backkik" onClick={move}>
          <HiArrowNarrowLeft /> Back to blog
        </div>
      </div>
    );
  }

  const { title, readingTime, dateAdded, contentMarkdown, coverImage } =
    selectedPost;
  // Function to format date to the desired format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  };
  const Image = ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className="blog-post-image"
      style={{ width: '100%' }}
    />
  );

  const options = {
    overrides: {
      img: {
        component: Image,
      },
    },
  };
  return (
    <div>
      <div className="container">
        <div className="stress">
          <div className="backkik" onClick={move}>
            <HiArrowNarrowLeft /> Back
          </div>
          <div className="title">{title}</div>
          <div>
            <div className="okokok mt-3">
              <div className="rigyt">
                By <span className="sly">Sylvester Nnachi</span>
              </div>
              <div className="rigyt"> {formatDate(dateAdded)}</div>

              <div className="rigyt">{readingTime} Mins read</div>
            </div>

            <div className="okokok mt-4 ">
              <div className="key">
                <a
                  href="https://web.facebook.com/vestarplusng"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <FaFacebookF />
                </a>
              </div>
              <div className="key">
                <a
                  href="https://www.instagram.com/vestarplus/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <FaInstagram />
                </a>
              </div>
              <div className="key">
                <a
                  href="https://twitter.com/vestarplus"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <FaTwitter />
                </a>
              </div>
              <div className="key">
                <a
                  href="https://www.linkedin.com/company/vestarplus/mycompany/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div>
              <img
                src={coverImage || t}
                style={{
                  height: '450px',
                  objectFit: 'cover',
                  width: '100%',
                  marginTop: '50px',
                  borderRadius: '9px 9px 0 0',
                }}
              />
            </div>
            <div>
              <MarkdownToJSX className="edeygo" options={options}>
                {contentMarkdown}
              </MarkdownToJSX>
            </div>
            <div>
              <div className="btb">
                <div className="usToday">Contact us today for your:</div>
                <div className="baseat">
                  <div className="wert mb-3">Website Development</div>
                  <div className="bhu mb-3">Mobile App Development</div>
                </div>
                <div className="baseat">
                  <div className="ui mb-3">UI & UX Design</div>
                  <div className="graph mb-3">Graphics Design</div>
                </div>

                <div className="ohn ">
                  Let’s build something awesome together!
                </div>
                <div className="shilalo">
                  Email:project@vestarplus.com
                  <br /> Call: +234 802 2861 622
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogRead;
