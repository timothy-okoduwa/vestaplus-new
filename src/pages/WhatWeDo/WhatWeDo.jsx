import React, { useEffect } from 'react'
import './WhatWeDo.css';
import WhatFirst from './WhatFirst';
import DownPart from './DownPart';
const WhatWeDo = () => {
   useEffect(() => {
     document.title = 'Vestarplus | Our Core Values';
   }, []);
  return (
    <div>
        <div className="container">
            <WhatFirst/>
            <DownPart/>
        </div>
    </div>
  )
}

export default WhatWeDo