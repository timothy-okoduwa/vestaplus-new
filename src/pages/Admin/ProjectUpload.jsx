import React, { useState } from 'react';
import './Admin.css';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { BiUpload } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';
import MaterialButton from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import v from '../../components/images/oxy.svg';
import { doc, updateDoc, Timestamp, arrayUnion } from 'firebase/firestore';
import CircularProgress from '@mui/material/CircularProgress';
import { db, storage } from '../../firebase';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
const ProjectUpload = () => {
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

  const [bigImage, setBigImage] = useState([]);
  const [selectedBigImage, setSelectedBigImage] = useState(null);

  const [typographyImage, setTypographyImage] = useState([]);
  const [selectedTypographyImage, setSelectedTypographyImage] = useState(null);

  const [mobileImage2, setMobileImage2] = useState([]);
  const [selectedMobileImage2, setSelectedMobileImage2] = useState(null);

  const [webImage, setWebImage] = useState([]);
  const [selectedWebImage, setSelectedWebImage] = useState(null);

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

    const webimg = [];
    //upload multiple image to firebase storage
    for (let i = 0; i < webImage.length; i++) {
      const fileName = webImage[i] ? webImage[i].name : null;

      if (fileName) {
        const imagesRef = ref(storage, `images/${fileName}`);
        const fileRef = ref(imagesRef);
        const uploadTask = uploadBytesResumable(fileRef, webImage[i]);

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

        webimg.push(downloadURL);
      }
    }
    const mobile = [];
    //upload multiple image to firebase storage
    for (let i = 0; i < mobileImage2.length; i++) {
      const fileName = mobileImage2[i] ? mobileImage2[i].name : null;

      if (fileName) {
        const imagesRef = ref(storage, `images/${fileName}`);
        const fileRef = ref(imagesRef);
        const uploadTask = uploadBytesResumable(fileRef, mobileImage2[i]);

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

        mobile.push(downloadURL);
      }
    }
    const Typo = [];
    //upload multiple image to firebase storage
    for (let i = 0; i < typographyImage.length; i++) {
      const fileName = typographyImage[i] ? typographyImage[i].name : null;

      if (fileName) {
        const imagesRef = ref(storage, `images/${fileName}`);
        const fileRef = ref(imagesRef);
        const uploadTask = uploadBytesResumable(fileRef, typographyImage[i]);

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

        Typo.push(downloadURL);
      }
    }
    const big = [];
    //upload multiple image to firebase storage
    for (let i = 0; i < bigImage.length; i++) {
      const fileName = bigImage[i] ? bigImage[i].name : null;

      if (fileName) {
        const imagesRef = ref(storage, `images/${fileName}`);
        const fileRef = ref(imagesRef);
        const uploadTask = uploadBytesResumable(fileRef, bigImage[i]);

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
      logoImage: images,
      thubNail: thumb,
      bigImage: big,
      typographyImage: Typo,
      mobileImage: mobile,
      webImage: webimg,
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

  const handleBigImageChange = (e) => {
    if (e.target.files[0]) {
      setSelectedBigImage(e.target.files[0]);
      setBigImage([e.target.files[0]]);
    }
  };

  const handleTypographImageChange = (e) => {
    if (e.target.files[0]) {
      setSelectedTypographyImage(e.target.files[0]);
      setTypographyImage([e.target.files[0]]);
    }
  };

  const handleMobileImage2Change = (e) => {
    if (e.target.files[0]) {
      setSelectedMobileImage2(e.target.files[0]);
      setMobileImage2([e.target.files[0]]);
    }
  };

  const handleWebImageChange = (e) => {
    if (e.target.files[0]) {
      setSelectedWebImage(e.target.files[0]);
      setWebImage([e.target.files[0]]);
    }
  };

  return (
    <div className="pt-5">
      <div>
        <div className="container">
          <div>
            <img src={v} alt="" onClick={move} style={{ cursor: 'pointer' }} />
          </div>

          <div className="moverdi">
            <div className="row">
              <div className="col-12 col-lg-2"></div>
              <div className="col-12 col-lg-8">
                <div>
                  <div className="badtins">
                    <div className="container">
                      <div className="pcpc">Project Card</div>
                      <div className="row">
                        <div className="col-12 col-lg-4">
                          <div className="mb-4">
                            <TextField
                              id="outlined-basic"
                              type="text"
                              label="Project card color"
                              variant="outlined"
                              style={{ width: '100%' }}
                              value={projectCardColor}
                              onChange={(e) =>
                                setProjectCardColor(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="mb-4">
                            <div className="mb-5">
                              <div className="push-down container">
                                <div className="hiih"> Project Logo</div>

                                <div className="row jikl">
                                  {logoImage.map((image, index) => (
                                    <div
                                      className="col-6  "
                                      key={index}
                                      style={{
                                        position: 'relative',
                                      }}
                                    >
                                      <img
                                        src={URL.createObjectURL(image)}
                                        alt={`Product mage ${index}`}
                                        className="tambo img-fluid"
                                        style={{
                                          borderRadius: '9px',
                                          border: '1px solid lightgrey',
                                          objectFit: 'cover',
                                          margin: '5px',
                                          // set image height
                                          width: '100%', // set image width to fill the column
                                        }}
                                      />
                                    </div>
                                  ))}

                                  <div className="">
                                    <div className="realise">
                                      <Button
                                        as="label"
                                        htmlFor="upload"
                                        style={{
                                          cursor: 'pointer',
                                          display: 'flex',
                                          alignItems: 'center',
                                          borderRadius: '18px',
                                        }}
                                      >
                                        <BiUpload
                                          style={{
                                            fontSize: '20px',
                                            marginRight: '10px',
                                          }}
                                        />
                                        upload image
                                        <Form.Control
                                          id="upload"
                                          type="file"
                                          required
                                          style={{ display: 'none' }}
                                          onChange={handleLogoImageChange}
                                        />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-lg-4">
                          <div className="mb-4">
                            <TextareaAutosize
                              className="kuki"
                              aria-label="minimum height"
                              minRows={4.5}
                              placeholder="short description"
                              style={{ width: '100%' }}
                              value={shortDescription}
                              onChange={(e) =>
                                setShortDescription(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="mb-4">
                            <TextField
                              id="outlined-basic"
                              type="text"
                              label="ui/ux design"
                              variant="outlined"
                              style={{ width: '100%' }}
                              value={ux}
                              onChange={(e) => setUx(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="mb-4">
                            <TextField
                              id="outlined-basic"
                              type="text"
                              label="branding"
                              variant="outlined"
                              style={{ width: '100%' }}
                              value={branding}
                              onChange={(e) => setBranding(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="mb-4">
                            <TextField
                              id="outlined-basic"
                              type="text"
                              label="web development"
                              variant="outlined"
                              style={{ width: '100%' }}
                              value={web}
                              onChange={(e) => setWeb(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="mb-4">
                            <TextField
                              id="outlined-basic"
                              type="text"
                              label="button color"
                              variant="outlined"
                              style={{ width: '100%' }}
                              value={cardButtonColor}
                              onChange={(e) =>
                                setCardButtonColor(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="mb-4">
                            <div className="push-down container">
                              <div className="hiih"> Project Thumbnail</div>

                              <div className="row jikl">
                                {thumbNailImage.map((image2, index) => (
                                  <div
                                    className="col-6  "
                                    key={index}
                                    style={{
                                      position: 'relative',
                                    }}
                                  >
                                    <img
                                      src={URL.createObjectURL(image2)}
                                      alt={`Product mage ${index}`}
                                      className="tambo img-fluid"
                                      style={{
                                        borderRadius: '9px',
                                        border: '1px solid lightgrey',
                                        objectFit: 'cover',
                                        margin: '5px',
                                        // set image height
                                        width: '100%', // set image width to fill the column
                                      }}
                                    />
                                  </div>
                                ))}

                                <div className="">
                                  <div className="realise">
                                    <Button
                                      as="label"
                                      htmlFor="uploadThumbNail"
                                      style={{
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        borderRadius: '18px',
                                      }}
                                    >
                                      <BiUpload
                                        style={{
                                          fontSize: '20px',
                                          marginRight: '10px',
                                        }}
                                      />
                                      upload image
                                      <Form.Control
                                        id="uploadThumbNail"
                                        type="file"
                                        required
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={handleThumbNailImageChange}
                                      />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="badtins2">
                    <div className="container">
                      <div className="pcpc">Project Page</div>
                      <div className="row">
                        <div className="col-12 col-lg-4">
                          <div className="mb-5">
                            <TextField
                              id="outlined-basic"
                              type="text"
                              label="project Name"
                              variant="outlined"
                              style={{ width: '100%' }}
                              value={projectName}
                              onChange={(e) => setProjectName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="mb-5">
                            <TextField
                              id="outlined-basic"
                              type="text"
                              label="project Name color"
                              variant="outlined"
                              style={{ width: '100%' }}
                              value={projectNameColor}
                              onChange={(e) =>
                                setProjectNameColor(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="mb-5">
                            <TextareaAutosize
                              className="kuki"
                              aria-label="minimum height"
                              minRows={4.5}
                              placeholder="project long text "
                              style={{ width: '100%' }}
                              value={projectLongText}
                              onChange={(e) =>
                                setProjectLongText(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="mb-5">
                            <TextField
                              id="outlined-basic"
                              type="text"
                              label="project button color 1 "
                              variant="outlined"
                              style={{ width: '100%' }}
                              value={buttoncolor1}
                              onChange={(e) => setButtonColor1(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="mb-5">
                            <TextField
                              id="outlined-basic"
                              type="text"
                              label="project button color 2 "
                              variant="outlined"
                              style={{ width: '100%' }}
                              value={buttoncolor2}
                              onChange={(e) => setButtonColor2(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="mb-5">
                            <TextField
                              id="outlined-basic"
                              type="text"
                              label="project button text color 2 "
                              variant="outlined"
                              style={{ width: '100%' }}
                              value={buttonTextcolor2}
                              onChange={(e) =>
                                setButtonTextColor2(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="mb-5">
                            <div className="push-down container">
                              <div className="hiih"> Project big image</div>

                              <div className="row jikl">
                                {bigImage.map((image3, index) => (
                                  <div
                                    className="col-6  "
                                    key={index}
                                    style={{
                                      position: 'relative',
                                    }}
                                  >
                                    <img
                                      src={URL.createObjectURL(image3)}
                                      alt={`Product mage ${index}`}
                                      className="tambo img-fluid"
                                      style={{
                                        borderRadius: '9px',
                                        border: '1px solid lightgrey',
                                        objectFit: 'cover',
                                        margin: '5px',
                                        // set image height
                                        width: '100%', // set image width to fill the column
                                      }}
                                    />
                                  </div>
                                ))}

                                <div className="">
                                  <div className="realise">
                                    <Button
                                      as="label"
                                      htmlFor="uploadBig"
                                      style={{
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        borderRadius: '18px',
                                      }}
                                    >
                                      <BiUpload
                                        style={{
                                          fontSize: '20px',
                                          marginRight: '10px',
                                        }}
                                      />
                                      upload image
                                      <Form.Control
                                        id="uploadBig"
                                        type="file"
                                        required
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={handleBigImageChange}
                                      />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="mb-5">
                            <TextareaAutosize
                              className="kuki"
                              aria-label="minimum height"
                              minRows={4.5}
                              placeholder="project overview  "
                              style={{ width: '100%' }}
                              value={overView}
                              onChange={(e) => setOverView(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="mb-5">
                            <TextareaAutosize
                              className="kuki"
                              aria-label="minimum height"
                              minRows={4.5}
                              placeholder="project 'the problem'   "
                              style={{ width: '100%' }}
                              value={theProblem}
                              onChange={(e) => setTheProblem(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="mb-5">
                            <div className="push-down container">
                              <div className="hiih">
                                {' '}
                                Project style Guide image
                              </div>

                              <div className="row jikl">
                                {typographyImage.map((image3, index) => (
                                  <div
                                    className="col-6  "
                                    key={index}
                                    style={{
                                      position: 'relative',
                                    }}
                                  >
                                    <img
                                      src={URL.createObjectURL(image3)}
                                      alt={`Product mage ${index}`}
                                      className="tambo img-fluid"
                                      style={{
                                        borderRadius: '9px',
                                        border: '1px solid lightgrey',
                                        objectFit: 'cover',
                                        margin: '5px',
                                        // set image height
                                        width: '100%', // set image width to fill the column
                                      }}
                                    />
                                  </div>
                                ))}

                                <div className="">
                                  <div className="realise">
                                    <Button
                                      as="label"
                                      htmlFor="uploadTypo"
                                      style={{
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        borderRadius: '18px',
                                      }}
                                    >
                                      <BiUpload
                                        style={{
                                          fontSize: '20px',
                                          marginRight: '10px',
                                        }}
                                      />
                                      upload image
                                      <Form.Control
                                        id="uploadTypo"
                                        type="file"
                                        required
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={handleTypographImageChange}
                                      />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="mb-5">
                            <TextareaAutosize
                              className="kuki"
                              aria-label="minimum height"
                              minRows={4.5}
                              placeholder="project mobile screen   "
                              style={{ width: '100%' }}
                              value={mobileScreen}
                              onChange={(e) => setMobileScreen(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="mb-5">
                            <div className="push-down container">
                              <div className="hiih"> Project mobile images</div>

                              <div className="row jikl">
                                {mobileImage2.map((image5, index) => (
                                  <div
                                    className="col-6  "
                                    key={index}
                                    style={{
                                      position: 'relative',
                                    }}
                                  >
                                    <img
                                      src={URL.createObjectURL(image5)}
                                      alt={`Product mage ${index}`}
                                      className="tambo img-fluid"
                                      style={{
                                        borderRadius: '9px',
                                        border: '1px solid lightgrey',
                                        objectFit: 'cover',
                                        margin: '5px',
                                        // set image height
                                        width: '100%', // set image width to fill the column
                                      }}
                                    />
                                  </div>
                                ))}
                                <div className="">
                                  <div className="realise">
                                    <Button
                                      as="label"
                                      htmlFor="uploadMobile"
                                      style={{
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        borderRadius: '18px',
                                      }}
                                    >
                                      <BiUpload
                                        style={{
                                          fontSize: '20px',
                                          marginRight: '10px',
                                        }}
                                      />
                                      upload image
                                      <Form.Control
                                        id="uploadMobile"
                                        type="file"
                                        required
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={handleMobileImage2Change}
                                      />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="mb-5">
                            <TextareaAutosize
                              className="kuki"
                              aria-label="minimum height"
                              minRows={4.5}
                              placeholder="project web screen   "
                              style={{ width: '100%' }}
                              value={webScreen}
                              onChange={(e) => setWebScreen(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-lg-4">
                          <div className="mb-5">
                            <div className="push-down container">
                              <div className="hiih"> Project web images</div>

                              <div className="row jikl">
                                {webImage.map((image3, index) => (
                                  <div
                                    className="col-6  "
                                    key={index}
                                    style={{
                                      position: 'relative',
                                    }}
                                  >
                                    <img
                                      src={URL.createObjectURL(image3)}
                                      alt={`Product mage ${index}`}
                                      className="tambo img-fluid"
                                      style={{
                                        borderRadius: '9px',
                                        border: '1px solid lightgrey',
                                        objectFit: 'cover',
                                        margin: '5px',
                                        // set image height
                                        width: '100%', // set image width to fill the column
                                      }}
                                    />
                                  </div>
                                ))}

                                <div className="">
                                  <div className="realise">
                                    <Button
                                      as="label"
                                      htmlFor="uploadWeb"
                                      style={{
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        borderRadius: '18px',
                                      }}
                                    >
                                      <BiUpload
                                        style={{
                                          fontSize: '20px',
                                          marginRight: '10px',
                                        }}
                                      />
                                      upload image
                                      <Form.Control
                                        id="uploadWeb"
                                        type="file"
                                        required
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={handleWebImageChange}
                                      />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
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
              </div>
              <div className="col-12 col-lg-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectUpload;
