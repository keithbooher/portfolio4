import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import bg from "../images/black_fab.jpg"

const Container = ({ children }) => {



  return (
    <div 
      className="flex" 
      style={{ 
        height: "100vh", 
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      { children }
    </div>
  )
}

export default Container