import React, { useEffect, useState } from 'react';
import './ShowCase.css';
import FirstShow from './FirstShow';
import Rest from './Rest';
import { useParams } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
const ShowCase = () => {
  const { projectName } = useParams();
  const [project, setProject] = useState(null);
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'project'));
        querySnapshot.forEach((doc) => {
          const businessData = doc.data();
          const project = businessData.project;
          const product = project?.find(
            (product) => product.projectName === projectName
          );
          if (product) {
            // console.log(product); // Add this line to check if the product state is being set
            setProject(product || {});
            setBusiness(businessData || {});
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    getProduct();
  }, [db, projectName]);

  useEffect(() => {
    document.title = ' Vestarplus | ShowCase ';
  }, []);
  return (
    <div>
      <div className="container">
        <FirstShow project={project} />
        <Rest project={project} />
      </div>
    </div>
  );
};

export default ShowCase;
