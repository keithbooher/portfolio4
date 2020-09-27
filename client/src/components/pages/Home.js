import React from 'react';

const Home = ({ mobile }) => {
  let containerStyle = {
    position: "absolute", 
    top: "50%",
    left: "18%",
    width: "60%",
    transform: "translate(0%, -60%)",
    zIndex: 9,
    fontSize: "35px",
    overFlow: "scroll",
    maxHeight: "100vh"
  }
  if (mobile) {
    containerStyle = {
      position: "absolute", 
      top: "50%",
      left: "8%",
      width: "90%",
      transform: "translate(0%, -60%)",
      zIndex: 9,
      fontSize: "20px",
      overFlow: "scroll",
      maxHeight: "100vh"
    }
  }
  return (
    <div style={containerStyle}>
      <h1>Hi, Im Keith!</h1>
      <h1>I develop websites and applications</h1>
      <h2>I value intuitiveness and creativity</h2>
    </div>
  )
}

export default Home