import React, { useState, useEffect } from 'react';
import MarkdownToJSX from 'markdown-to-jsx';
import ReactPaginate from 'react-paginate';
import './Blog.css';
import t from '../images/tbb.png';
import t2 from '../images/temms.png';
import t3 from '../images/tech1.png';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Skeleton from '@mui/material/Skeleton';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPage, setCurrentPage]= useState(0)
  const handleOpen = (post) => {
    setSelectedPost(post);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const query = `
  query ($page: Int!) {
    user(username: "karllhughes") {
      name
      publication {
        posts(page: $page) {
          slug
          title
          brief
          coverImage
          cuid
          _id
          dateAdded
          totalReactions
          contentMarkdown
      
            
          
        }
      }
    }
  }
`;

  const fetchPosts = async (page = 0) => {
    const response = await fetch('https://api.hashnode.com', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer 23ab0b18-485a-492f-9e94-1b5fe68e7b7d',
      },
      body: JSON.stringify({
        query,
        variables: {
          page,
        },
      }),
    });

    const data = await response.json();

    if (data.errors) {
      throw new Error(data.errors[0].message);
    }

    const newPosts = data.data.user.publication.posts;

    if (newPosts.length === 0) {
      return []; // no more posts left
    }

    const remainingPosts = await fetchPosts(page + 1);
    return [...newPosts, ...remainingPosts];
  };

  useEffect(() => {
    fetchPosts().then((allPosts) => {
      setPosts(allPosts);
    });
  }, []);
  console.log(posts);
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

  function getRandomImage() {
    const images = [t, t2, t3];
    const index = Math.floor(Math.random() * images.length);
    return images[index];
  }

const handlePageChange = ({ selected }) => {
  setCurrentPage(selected);
};
const itemsPerPage = 6
const pageCount = Math.ceil(posts?.length/itemsPerPage)

const startIndex =currentPage*itemsPerPage
const endIndex = startIndex + itemsPerPage
const currentData = posts?.slice(startIndex, endIndex);


  return (
    <>
      <div className="container">
        <div className="forP">
          <div>
            <div className="newAB">New & Noteworthy</div>
          </div>
          {posts.length === 0 ? (
            <div className="loading">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-4 mb-5">
                    <Skeleton variant="rectangular" width='100%' height={220} style={{borderRadius:'8px 8px 0 0'}} />
                    <Skeleton
                      variant="rectangular"
                      width='90%'
                      height={20}
                      style={{ marginTop: '20px' }}
                    />
                    <Skeleton
                      variant="rectangular"
                      width='50%'
                      height={13}
                      style={{ marginTop: '10px' }}
                    />
                  </div>
                  <div className="col-12 col-lg-4 mb-5">
                    <Skeleton variant="rectangular" width='100%' height={220} style={{borderRadius:'8px 8px 0 0'}} />
                    <Skeleton
                      variant="rectangular"
                      width='90%'
                      height={20}
                      style={{ marginTop: '20px' }}
                    />
                    <Skeleton
                      variant="rectangular"
                      width='50%'
                      height={13}
                      style={{ marginTop: '10px' }}
                    />
                  </div>
                  <div className="col-12 col-lg-4 mb-5">
                    <Skeleton variant="rectangular" width='100%' height={220} style={{borderRadius:'8px 8px 0 0'}} />
                    <Skeleton
                      variant="rectangular"
                      width='90%'
                      height={20}
                      style={{ marginTop: '20px' }}
                    />
                    <Skeleton
                      variant="rectangular"
                      width='50%'
                      height={13}
                      style={{ marginTop: '10px' }}
                    />
                  </div>
                  <div className="col-12 col-lg-4 mb-5">
                    <Skeleton variant="rectangular" width='100%' height={220} style={{borderRadius:'8px 8px 0 0'}} />
                    <Skeleton
                      variant="rectangular"
                      width='90%'
                      height={20}
                      style={{ marginTop: '20px' }}
                    />
                    <Skeleton
                      variant="rectangular"
                      width='50%'
                      height={13}
                      style={{ marginTop: '10px' }}
                    />
                  </div>
                  <div className="col-12 col-lg-4 mb-5">
                    <Skeleton variant="rectangular" width='100%' height={220} style={{borderRadius:'8px 8px 0 0'}} />
                    <Skeleton
                      variant="rectangular"
                      width='90%'
                      height={20}
                      style={{ marginTop: '20px' }}
                    />
                    <Skeleton
                      variant="rectangular"
                      width='50%'
                      height={13}
                      style={{ marginTop: '10px' }}
                    />
                  </div>
                  <div className="col-12 col-lg-4 mb-5">
                    <Skeleton variant="rectangular" width='100%' height={220} style={{borderRadius:'8px 8px 0 0'}} />
                    <Skeleton
                      variant="rectangular"
                      width='90%'
                      height={20}
                      style={{ marginTop: '20px' }}
                    />
                    <Skeleton
                      variant="rectangular"
                      width='50%'
                      height={13}
                      style={{ marginTop: '10px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bgp">
              <div className="row">
                {currentData.map((post) => (
                  <div className="col-12 col-lg-4 mb-4">
                    <div>
                      <Card
                        style={{ border: 'none', cursor: 'pointer' }}
                        onClick={() => handleOpen(post)}
                      >
                        <Card.Img
                          variant="top"
                          src={post.coverImage || getRandomImage()}
                          style={{ height: '220px', objectFit: 'cover' }}
                        />
                        <Card.Body className="mt-2">
                          <Card.Title>
                            <div className="tecc">{post.title}</div>
                          </Card.Title>
                          <Card.Text>
                            <div className="sept">
                              {formatDate(post.dateAdded)}
                            </div>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <>
        <div>
          <Modal show={open} onHide={handleClose} className="pt-5 " size="lg">
            <div className="linee">
              <MdCancel onClick={handleClose} />
            </div>
            <div>
              {' '}
              <Modal.Title className="titt">{selectedPost?.title}</Modal.Title>
            </div>
            <div className="okokok mt-4">
              <div className="rigyt">
                By <span className="sly">Sylvester Nnachi</span>
              </div>
              <div className="rigyt">
                {' '}
                {formatDate(selectedPost?.dateAdded)}
              </div>

              <div className="rigyt">4 Mins read</div>
            </div>

            <div className="okokok pt-3 pb-4">
              <div className="key">
                <a
                  href="https://web.facebook.com/vestarplusng"
                  target="_blank"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <FaFacebookF />
                </a>
              </div>
              <div className="key">
                <a
                  href="https://www.instagram.com/vestarplus/"
                  target="_blank"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <FaInstagram />
                </a>
              </div>
              <div className="key">
                <a
                  href="https://twitter.com/vestarplus"
                  target="_blank"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <FaTwitter />
                </a>
              </div>
              <div className="key">
                <a
                  href="https://www.linkedin.com/company/vestarplus/mycompany/"
                  target="_blank"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <img
              src={selectedPost?.coverImage || getRandomImage()}
              style={{ height: '340px', objectFit: 'cover', padding: '10px' }}
            />

            <Modal.Body>
              {' '}
              <MarkdownToJSX className="edeygo" options={options}>
                {selectedPost?.contentMarkdown}
              </MarkdownToJSX>
            </Modal.Body>

            <div className="btb">
              <div className="usToday">Contact us today for your:</div>
              <div className="baseat">
                <div className="wert">Website Development</div>
                <div className="bhu">Mobile App Development</div>
              </div>
              <div className="baseat">
                <div className="ui">UI & UX Design</div>
                <div className="graph">Graphics Design</div>
              </div>

              <div className="ohn ">
                Let’s build something awesome together!
              </div>
              <div className="shilalo">
                Email:project@vestarplus.com
                <br /> Call: +234 802 2861 622
              </div>
            </div>
          </Modal>
        </div>
      </>
      <div
        className="wrongs"
        style={{ display: 'flex', justifyContent: 'center',marginTop:'-100px',marginBottom:'90px' }}
      >
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          activeClassName="active"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          previousLabel="<"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          nextLabel=">"
          disabledClassName="disabledd"
        />
      </div>
    </>
  );
};

export default Blog;
