import React from 'react'
import './ShowCase.css';
import FirstShow from './FirstShow';
import Rest from './Rest';
const ShowCase = () => {
  return (
    <div>
        <div className="container">
            <FirstShow/>
            <Rest/>
        </div>
    </div>
  )
}

export default ShowCase