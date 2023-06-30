import React, { useState, useEffect } from 'react';
import NavBar1 from './components/Navbars/NavBar1';
import HomePage from './pages/HomePage/HomePage';
import Footer from './pages/Footer/Footer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { UserAuthContextProvider } from './components/context/UserAuthContext';
import ProtectedRoute from './components/wow/ProtectedRoute';
import ScrollToTop from './ScrollToTop';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
import OurProject from './pages/OurProject/OurProject';
import Contact from './pages/Contact/Contact';
import About from './pages/AboutUs/About';
import ShowCase from './pages/ShowCase/ShowCase';
import Admin from './pages/Admin/Admin';
import CreateAdmin from './pages/Admin/CreateAdmin';
import ProjectUpload from './pages/Admin/ProjectUpload';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import Blog from './pages/Blog/Blog';
import BlogRead from './pages/Blog/BlogRead';
import Nothing from './components/Nothing/Nothing';
import ProjUpload2 from './pages/Admin/ProjUpload2';

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const docRef = doc(db, 'project', 'project');

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const projectData = docSnap.data();
        if (projectData && projectData.project) {
          setUser(projectData.project);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <UserAuthContextProvider>
      <BrowserRouter>
        <>
          {' '}
          <NavBar1 prod={user} />
        </>

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/project" element={<OurProject />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/more/:projectName" element={<ShowCase />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/create-admin" element={<CreateAdmin />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/blog-read/:slug" element={<BlogRead />} />

          <Route
            path="/project-upload"
            element={
              <ProtectedRoute>
                <ProjectUpload />
              </ProtectedRoute>
            }
          />
          <Route path="/404" element={<Nothing />} />

          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        <Footer prod={user} />
        <ScrollToTop />
      </BrowserRouter>
    </UserAuthContextProvider>
  );
};

export default App;
