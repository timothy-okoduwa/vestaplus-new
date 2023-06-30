import React, { useState, useEffect } from 'react';
import './Admin.css';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { BiUpload } from 'react-icons/bi';
import { FaCloudUploadAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import MaterialButton from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import v from '../../components/images/oxy.svg';
import { doc, updateDoc, Timestamp, arrayUnion } from 'firebase/firestore';
import CircularProgress from '@mui/material/CircularProgress';
import { db, storage } from '../../firebase';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
const ProjUpload2 = () => {
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  // ! this states are for the project card

  // ? take not i have not added images to this states just yet

  const [projectCardColor, setProjectCardColor] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [ux, setUx] = useState('');
  const [web, setWeb] = useState('');
  const [branding, setBranding] = useState('');
  const [cardButtonColor, setCardButtonColor] = useState('');
  // ! it ends here for the project card

  // * this next states for the project page (everything will be inside here)

  // ? take not i have not added images to this states just yet

  const [projectName, setProjectName] = useState('');
  const [projectNameColor, setProjectNameColor] = useState('');
  const [projectLongText, setProjectLongText] = useState('');
  const [buttoncolor1, setButtonColor1] = useState('');
  const [buttoncolor2, setButtonColor2] = useState('');
  const [buttonTextcolor2, setButtonTextColor2] = useState('');
  const [overView, setOverView] = useState('');
  const [theProblem, setTheProblem] = useState('');
  const [mobileScreen, setMobileScreen] = useState('');
  const [webScreen, setWebScreen] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  // * it ends here for the project page

  const [logoImage, setlogoImage] = useState([]);
  const [selectedLogoImage, setSelectedLogoImage] = useState(null);

  const [thumbNailImage, setThumbNailImage] = useState([]);
  const [selectedThumbNailImage, setSelectedThumbNailImage] = useState(null);

  const [bigVideo, setbigVideo] = useState([]);
  const [selectedbigVideo, setSelectedbigVideo] = useState(null);

  const [productImages, setProductImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  //? images function

  const [info, setInfo] = useState({ error: null, loading: false });

  const uuid = uuidv4();
  const navigate = useNavigate();
  const { loading } = info;

  const move = () => {
    navigate('/');
  };

  const addProject = async () => {
    setInfo({ ...info, error: null, loading: true });
    setIsButtonClicked(true);
    const proImages = [];
    const uploadTasks = [];

    for (let i = 0; i < productImages.length; i++) {
      const fileName = productImages[i] ? productImages[i].name : null;

      if (fileName) {
        const imagesRef = ref(
          storage,
          `images/productImages/${uuid}/${fileName}`
        );
        const fileRef = ref(imagesRef);
        const uploadTask = uploadBytesResumable(fileRef, productImages[i]);

        uploadTasks.push(uploadTask);

        uploadTask.on('state_changed', (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(`Upload of image ${i} is ${progress}% done`);
          setUploadProgress((prevProgress) => {
            const updatedProgress = [...prevProgress];
            updatedProgress[i] = progress;
            return updatedProgress;
          });
        });

        const snapshot = await uploadTask;
        const downloadURL = await getDownloadURL(snapshot.ref);

        proImages.push(downloadURL);
      }
    }

    const big = [];
    //upload multiple image to firebase storage
    for (let i = 0; i < bigVideo.length; i++) {
      const fileName = bigVideo[i] ? bigVideo[i].name : null;

      if (fileName) {
        const imagesRef = ref(storage, `images/${fileName}`);
        const fileRef = ref(imagesRef);
        const uploadTask = uploadBytesResumable(fileRef, bigVideo[i]);

        let totalBytesTransferred = 0;
        let totalBytes = 0;

        uploadTask.on('state_changed', (snapshot) => {
          // Keep track of the total bytes transferred and total bytes of all files
          totalBytesTransferred += snapshot.bytesTransferred;
          totalBytes += snapshot.totalBytes;

          // Calculate the overall progress percentage
          const progress = Math.round(
            (totalBytesTransferred / totalBytes) * 100
          );
          console.log(`Upload is ${progress}% done`);
          setUploadProgress(progress);
        });

        const snapshot = await uploadTask;
        const downloadURL = await getDownloadURL(snapshot.ref);

        big.push(downloadURL);
      }
    }
    const thumb = [];
    //upload multiple image to firebase storage
    for (let i = 0; i < thumbNailImage.length; i++) {
      const fileName = thumbNailImage[i] ? thumbNailImage[i].name : null;

      if (fileName) {
        const imagesRef = ref(storage, `images/${fileName}`);
        const fileRef = ref(imagesRef);
        const uploadTask = uploadBytesResumable(fileRef, thumbNailImage[i]);

        let totalBytesTransferred = 0;
        let totalBytes = 0;

        uploadTask.on('state_changed', (snapshot) => {
          // Keep track of the total bytes transferred and total bytes of all files
          totalBytesTransferred += snapshot.bytesTransferred;
          totalBytes += snapshot.totalBytes;

          // Calculate the overall progress percentage
          const progress = Math.round(
            (totalBytesTransferred / totalBytes) * 100
          );
          console.log(`Upload is ${progress}% done`);
          setUploadProgress(progress);
        });

        const snapshot = await uploadTask;
        const downloadURL = await getDownloadURL(snapshot.ref);

        thumb.push(downloadURL);
      }
    }
    const images = [];
    //upload multiple image to firebase storage
    for (let i = 0; i < logoImage.length; i++) {
      const fileName = logoImage[i] ? logoImage[i].name : null;

      if (fileName) {
        const imagesRef = ref(storage, `images/${fileName}`);
        const fileRef = ref(imagesRef);
        const uploadTask = uploadBytesResumable(fileRef, logoImage[i]);

        let totalBytesTransferred = 0;
        let totalBytes = 0;

        uploadTask.on('state_changed', (snapshot) => {
          // Keep track of the total bytes transferred and total bytes of all files
          totalBytesTransferred += snapshot.bytesTransferred;
          totalBytes += snapshot.totalBytes;

          // Calculate the overall progress percentage
          const progress = Math.round(
            (totalBytesTransferred / totalBytes) * 100
          );
          console.log(`Upload is ${progress}% done`);
          setUploadProgress(progress);
        });

        const snapshot = await uploadTask;
        const downloadURL = await getDownloadURL(snapshot.ref);

        images.push(downloadURL);
      }
    }

    const docRef = doc(db, 'project', 'project');
    const newProject = {
      projectCardColor: projectCardColor,
      shortDescription: shortDescription,
      ux: ux,
      web: web,
      branding: branding,
      cardButtonColor: cardButtonColor,
      projectName: projectName,
      projectNameColor: projectNameColor,
      projectLongText: projectLongText,
      buttoncolor1: buttoncolor1,
      buttoncolor2: buttoncolor2,
      buttonTextcolor2: buttonTextcolor2,
      overView: overView,
      tags: tags,
      ProImages: proImages,
      logoImage: images,
      thubNail: thumb,
      bigVideo: big,
      theProblem: theProblem,
      mobileScreen: mobileScreen,
      webScreen: webScreen,
      dateAdded: Timestamp.fromDate(new Date()),
      projectId: uuid,
    };
    await updateDoc(docRef, {
      project: arrayUnion(newProject),
    });
    setProjectCardColor('');
    setUx('');
    setWeb('');
    setBranding('');
    setCardButtonColor('');
    setProjectName('');
    setProjectNameColor('');
    setProjectLongText('');
    setButtonColor1('');
    setButtonColor2('');
    setButtonTextColor2('');
    setOverView('');
    setTheProblem('');
    setMobileScreen('');
    setWebScreen('');
    navigate('/project');
  };

  const handleLogoImageChange = (e) => {
    if (e.target.files[0]) {
      setSelectedLogoImage(e.target.files[0]);
      setlogoImage([e.target.files[0]]);
    }
  };

  const handleThumbNailImageChange = (e) => {
    if (e.target.files[0]) {
      setSelectedThumbNailImage(e.target.files[0]);
      setThumbNailImage([e.target.files[0]]);
    }
  };

  const handlebigVideoChange = (e) => {
    if (e.target.files[0]) {
      setSelectedbigVideo(e.target.files[0]);
      setbigVideo([e.target.files[0]]);
    }
  };

  useEffect(() => {
    setUploadProgress(new Array(productImages.length).fill(0));
  }, [productImages]);

  function allowDrop(event) {
    event.preventDefault();
  }

  const drop = (event) => {
    event.preventDefault();
    const images = [];
    const maxImages = 10; // maximum number of images
    const files = event.dataTransfer.files;

    if (files.length > maxImages) {
      for (let i = 0; i < maxImages; i++) {
        const file = files[i];
        const imgUrl = URL.createObjectURL(file);
        setSelectedImage(imgUrl);
        images.push(file);
      }
    } else {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imgUrl = URL.createObjectURL(file);
        setSelectedImage(imgUrl);
        images.push(file);
      }
    }

    setProductImages(images);
  };
  const handleSelect = (event) => {
    const images = [];
    const maxImages = 10; // maximum number of images

    if (event.target.files.length > maxImages) {
      for (let i = 0; i < maxImages; i++) {
        const file = event.target.files[i];
        const imgUrl = URL.createObjectURL(file);
        setSelectedImage(imgUrl);
        images.push(file);
      }
    } else {
      for (let i = 0; i < event.target.files.length; i++) {
        const file = event.target.files[i];
        const imgUrl = URL.createObjectURL(file);
        setSelectedImage(imgUrl);
        images.push(file);
      }
    }

    setProductImages(images);
  };

  function handleClick(event) {
    // Trigger click on input element to open file selection dialog
    event.preventDefault();
    const fileInput = document.getElementById('file-input');
    fileInput.click();
  }

  const handleDeleteImage = (index) => {
    const updatedImages = [...productImages];
    updatedImages.splice(index, 1);
    setProductImages(updatedImages);
    // add this line to prevent the default form submission behavior
  };
  const handleLogoImageDelete = (index) => {
    const updatedImages = [...logoImage];
    updatedImages.splice(index, 1);
    setlogoImage(updatedImages);
    // add this line to prevent the default form submission behavior
  };
  const handleVideoDelete = (index) => {
    const updatedImages = [...bigVideo];
    updatedImages.splice(index, 1);
    setbigVideo(updatedImages);
    // add this line to prevent the default form submission behavior
  };
  const handleThumbnailImageDelete = (index) => {
    const updatedImages = [...thumbNailImage];
    updatedImages.splice(index, 1);
    setThumbNailImage(updatedImages);
    // add this line to prevent the default form submission behavior
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && currentTag !== '') {
      event.preventDefault();
      setTags([...tags, currentTag]);
      setCurrentTag('');
    }
  };

  const handleTagDelete = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  return (
    <>
      {' '}
      <div className="container mt-5">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src={v} alt="" onClick={move} style={{ cursor: 'pointer' }} />
          <button className="cafmu">Logout</button>
        </div>
        <div className="mt-5">
          <div className="pcpc">Upload Project</div>
          <div className="row mt-4">
            <div className="col-12 col-lg-2"></div>
            <div className="col-12 col-lg-8 mt-5">
              <div>
                <div className="procard">Project Card</div>

                <div>
                  <div className="row">
                    <div className="col-12 mt-5">
                      <div>
                        <div className="label">Project Description</div>
                        <div>
                          <input
                            type="text"
                            className="inn"
                            value={shortDescription}
                            onChange={(e) =>
                              setShortDescription(e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mt-5">
                      <div className="label">Project Tags</div>
                      <div className="tag-container">
                        {tags.map((tag, index) => (
                          <div key={index} className="tag">
                            {tag}
                            <button onClick={() => handleTagDelete(index)}>
                              x
                            </button>
                          </div>
                        ))}
                        <input
                          type="text"
                          value={currentTag}
                          onChange={(event) =>
                            setCurrentTag(event.target.value)
                          }
                          onKeyDown={handleKeyDown}
                          className="tag-input"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-5 mb-5">
                      <div>
                        <div className="label">
                          Project Card Background Colour
                        </div>
                        <div>
                          <input
                            type="text"
                            className="inn"
                            value={projectCardColor}
                            onChange={(e) =>
                              setProjectCardColor(e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-5 mb-5">
                      <div>
                        <div className="label">Button Colour</div>
                        <div>
                          <input
                            type="text"
                            className="inn"
                            value={cardButtonColor}
                            onChange={(e) => setCardButtonColor(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mb-5">
                      <div>
                        <div className="label">Project Logo</div>
                        <div>
                          <div className="inn2 ">
                            {logoImage.length === 0 && (
                              <div className="dynamics">
                                <div>
                                  {' '}
                                  <FaCloudUploadAlt className="cloud" />
                                </div>
                                <div>Click “Upload” to upload project Logo</div>
                                <div className="highg">
                                  <label
                                    className="uppp"
                                    as="label"
                                    htmlFor="upload"
                                  >
                                    Upload Image
                                    <Form.Control
                                      id="upload"
                                      type="file"
                                      required
                                      style={{ display: 'none' }}
                                      onChange={handleLogoImageChange}
                                    />
                                  </label>
                                </div>
                              </div>
                            )}
                            <div>
                              {logoImage?.length > 0 && (
                                <div>
                                  {logoImage.map((image, index) => (
                                    <div
                                      className="col-12  "
                                      key={index}
                                      style={{
                                        position: 'relative',
                                      }}
                                    >
                                      <img
                                        src={URL.createObjectURL(image)}
                                        alt={`Product mage ${index}`}
                                        className="tambo"
                                        style={{
                                          borderRadius: '9px',
                                          border: '1px solid lightgrey',
                                          objectFit: 'contain',
                                          margin: '5px',

                                          width: '100%',
                                        }}
                                      />
                                      <div>
                                        {' '}
                                        <div
                                          style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            height: '34px',
                                            width: '34px',
                                            borderRadius: '50%',
                                            background: '#F6F6F7',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            color: 'black',
                                            fontWeight: 'bolder',
                                          }}
                                          onClick={(index) =>
                                            handleLogoImageDelete(index)
                                          }
                                        >
                                          X
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mb-5">
                      <div>
                        <div className="label">Project Thumbnail</div>
                        <div>
                          <div className="inn2 ">
                            {thumbNailImage.length === 0 && (
                              <div className="dynamics">
                                <div>
                                  {' '}
                                  <FaCloudUploadAlt className="cloud" />
                                </div>
                                <div>
                                  Click “Upload” to upload project thumbnail
                                </div>
                                <div className="highg">
                                  <label
                                    className="uppp"
                                    as="label"
                                    htmlFor="uploadThumbNail"
                                  >
                                    Upload Image
                                    <Form.Control
                                      id="uploadThumbNail"
                                      type="file"
                                      required
                                      accept="image/*"
                                      style={{ display: 'none' }}
                                      onChange={handleThumbNailImageChange}
                                    />
                                  </label>
                                </div>
                              </div>
                            )}
                            <div>
                              {thumbNailImage?.length > 0 && (
                                <div>
                                  {thumbNailImage.map((image, index) => (
                                    <div
                                      className="col-12  "
                                      key={index}
                                      style={{
                                        position: 'relative',
                                      }}
                                    >
                                      <img
                                        src={URL.createObjectURL(image)}
                                        alt={`Product mage ${index}`}
                                        className="tambo"
                                        style={{
                                          borderRadius: '9px',
                                          border: '1px solid lightgrey',
                                          objectFit: 'contain',
                                          margin: '5px',

                                          width: '100%',
                                        }}
                                      />
                                      <div>
                                        {' '}
                                        <div
                                          style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            height: '34px',
                                            width: '34px',
                                            borderRadius: '50%',
                                            background: '#F6F6F7',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            color: 'black',
                                            fontWeight: 'bolder',
                                          }}
                                          onClick={(index) =>
                                            handleThumbnailImageDelete(index)
                                          }
                                        >
                                          X
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-2"></div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        {/* this is the page side */}
        {/* this is the page side */}
        {/* this is the page side */}
        {/* this is the page side */}
        {/* this is the page side */}
        {/* this is the page side */}
        {/* this is the page side */}
        {/* this is the page side */}
        <div className="mt-5">
          <div className="row mt-4">
            <div className="col-12 col-lg-2"></div>
            <div className="col-12 col-lg-8 mt-5">
              <div>
                <div className="procard">Project Page</div>

                <div>
                  <div className="row">
                    <div className="col-12 mt-5">
                      <div>
                        <div className="label">Project Long Text</div>
                        <div>
                          <input type="text" className="inn" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mt-5">
                      <div>
                        <div className="label">Project Summary</div>
                        <div>
                          <input type="text" className="inn" />
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-lg-6 mt-5 mb-5">
                      <div>
                        <div className="label">Project Name</div>
                        <div>
                          <input
                            type="text"
                            className="inn"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-5 mb-5">
                      <div>
                        <div className="label"> Project Name Colour</div>
                        <div>
                          <input
                            type="text"
                            className="inn"
                            value={projectNameColor}
                            onChange={(e) =>
                              setProjectNameColor(e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-5 mb-5">
                      <div>
                        <div className="label">Project Button Color 1</div>
                        <div>
                          <input
                            type="text"
                            className="inn"
                            value={buttoncolor1}
                            onChange={(e) => setButtonColor1(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-5 mb-5">
                      <div>
                        <div className="label"> Project Button Color 2</div>
                        <div>
                          <input
                            type="text"
                            className="inn"
                            value={buttoncolor2}
                            onChange={(e) => setButtonColor2(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-5 mb-5">
                      <div>
                        <div className="label">Project Long Text</div>
                        <div>
                          <input
                            type="text"
                            className="inn"
                            value={projectLongText}
                            onChange={(e) => setProjectLongText(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-5 mb-5">
                      <div>
                        <div className="label">
                          {' '}
                          Project Button Text Color 2
                        </div>
                        <div>
                          <input
                            type="text"
                            className="inn"
                            value={buttonTextcolor2}
                            onChange={(e) =>
                              setButtonTextColor2(e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mb-5">
                      <div>
                        <div className="label">Project Video</div>
                        <div>
                          <div className="inn2 ">
                            {bigVideo.length === 0 && (
                              <div className="dynamics">
                                <div>
                                  {' '}
                                  <FaCloudUploadAlt className="cloud" />
                                </div>
                                <div>
                                  Click “Upload” to upload project Video
                                </div>
                                <div className="highg">
                                  <label
                                    className="uppp"
                                    as="label"
                                    htmlFor="uploadBig"
                                  >
                                    Upload Video
                                    <Form.Control
                                      id="uploadBig"
                                      type="file"
                                      required
                                      accept="video/*"
                                      style={{ display: 'none' }}
                                      onChange={handlebigVideoChange}
                                    />
                                  </label>
                                </div>
                              </div>
                            )}
                            <div>
                              {bigVideo?.length > 0 && (
                                <div>
                                  {bigVideo.map((video, index) => (
                                    <div
                                      className="col-12  "
                                      key={index}
                                      style={{
                                        position: 'relative',
                                      }}
                                    >
                                      <video
                                        src={URL.createObjectURL(video)}
                                        alt={`Product video ${index}`}
                                        className="tambo img-fluid"
                                        style={{
                                          borderRadius: '9px',

                                          objectFit: 'cover',
                                          marginTop: '10px',
                                          width: '100%',
                                        }}
                                        controls
                                        muted
                                      />
                                      <div>
                                        {' '}
                                        <div
                                          style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            height: '34px',
                                            width: '34px',
                                            borderRadius: '50%',
                                            background: '#F6F6F7',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            color: 'black',
                                            fontWeight: 'bolder',
                                          }}
                                          onClick={(index) =>
                                            handleVideoDelete(index)
                                          }
                                        >
                                          X
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mb-5">
                      <div className="label">Product Images</div>
                      <div className="borer container brilliant">
                        <div className="own-eyes">
                          <div>
                            <div
                              className="dashed"
                              onDragOver={allowDrop}
                              onDrop={drop}
                            >
                              {productImages.length === 0 && (
                                <div className="moddd">
                                  <div className="uppl">
                                    Upload your Product Images Here (10 Images
                                    Max)
                                  </div>
                                  <div className="faint">
                                    Drag files here or Click “Upload” to open
                                    your “File Manager”
                                  </div>
                                  <div className="mt-3">
                                    <FaCloudUploadAlt className="cloud" />
                                  </div>
                                  <div className="highg">
                                    <button
                                      className="uppp"
                                      onClick={handleClick}
                                    >
                                      Upload Images
                                    </button>
                                    <input
                                      type="file"
                                      id="file-input"
                                      multiple
                                      accept="image/*"
                                      onChange={handleSelect}
                                      style={{ display: 'none' }}
                                    />
                                  </div>
                                </div>
                              )}
                              {productImages?.length > 0 && (
                                <div>
                                  <div className="row">
                                    {productImages?.map((image, index) => (
                                      <div
                                        className="col d-flex justify-content-center"
                                        key={index}
                                      >
                                        <div
                                          className="my-3"
                                          style={{ position: 'relative' }}
                                        >
                                          <img
                                            src={URL.createObjectURL(image)}
                                            alt="Uploaded"
                                            className="happed"
                                          />
                                          <div
                                            style={{
                                              position: 'absolute',
                                              top: '50%',
                                              left: '50%',
                                              transform:
                                                'translate(-50%, -50%)',
                                            }}
                                          >
                                            <div
                                              className="pRogress"
                                              style={{
                                                background: '#000000',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                height: '40px',
                                                width: '40px',
                                              }}
                                            >
                                              {uploadProgress[index] > 0 && (
                                                <CircularProgress
                                                  style={{
                                                    height: '25px',
                                                    width: '25px',
                                                    color: 'white',
                                                  }}
                                                  variant="determinate"
                                                  value={uploadProgress[index]}
                                                />
                                              )}
                                            </div>
                                          </div>
                                          {!isButtonClicked && (
                                            <div
                                              style={{
                                                position: 'absolute',
                                                top: '10px',
                                                right: '10px',
                                                height: '34px',
                                                width: '34px',
                                                borderRadius: '50%',
                                                background: '#F6F6F7',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                cursor: 'pointer',
                                                color: 'black',
                                                fontWeight: 'bolder',
                                              }}
                                              onClick={(index) =>
                                                handleDeleteImage(index)
                                              }
                                            >
                                              X
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <MaterialButton
                  variant="contained"
                  className="bu"
                  onClick={addProject}
                >
                  {loading ? (
                    <>
                      <CircularProgress
                        style={{
                          color: 'white',
                          height: '30px',
                          width: '30px',
                        }}
                      />
                    </>
                  ) : (
                    <> post project </>
                  )}
                </MaterialButton>
              </div>
            </div>
            <div className="col-12 col-lg-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjUpload2;
