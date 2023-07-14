import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MarkdownToJSX from 'markdown-to-jsx';
import './Blog.css';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import { HiArrowNarrowLeft, HiArrowNarrowUp } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import t from '../images/tbb.png';
import m from '../images/man-shrugging.png';

const BlogRead = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 2024; // Adjust the threshold value as needed
      setShowButton(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigate = useNavigate();
  const move = () => {
    navigate('/blog');
  };

  const selectedPost = useSelector((state) => state.selectedPost);

  if (!selectedPost) {
    return (
      <div style={{ textAlign: 'center' }}>
        <div>
          <div>
            <img src={m} alt="shrig" style={{ width: '5%' }} />
          </div>
          No blog post found.
        </div>
        <div className="backkik" onClick={move}>
          <HiArrowNarrowLeft /> Back to blog
        </div>
      </div>
    );
  }

  const {
    title,
    readingTime,
    dateAdded,
    contentMarkdown,
    coverImage,
    ownerName,
  } = selectedPost;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  };

  const Image = ({ src, alt }) => (
    <img
      src={src}
      alt={alt || ''}
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
    <div style={{ position: 'relative' }}>
      <div
        className={`opps ${showButton ? 'show' : ''}`}
        onClick={handleScrollToTop}
      >
        <HiArrowNarrowUp />
      </div>
      <div className="container">
        <div className="stress">
          <div className="">
            <div onClick={move} className=" slotsss">
              <HiArrowNarrowLeft /> Back
            </div>
          </div>
          <div className="title">{title}</div>
          <div>
            <div className="okokok mt-3">
              <div className="rigyt">
                By <span className="sly">{ownerName}</span>
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
                alt="gh"
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
                  Email: project@vestarplus.com
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
