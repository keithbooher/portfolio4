import React from 'react';

const Content = ({ children }) => {

  return (
    <div className="padding-xl color-white" style={{ overflow: "scroll", backgroundColor: "rgba(1,1,1,0.2)", flexBasis: "auto", width: "100%", zIndex: 9 }}>
      { children }
    </div>
  )
}

export default Content