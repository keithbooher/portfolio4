import React, { useEffect, useState } from 'react';
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const About = ({ mobile }) => {
  const [ about, setAbout ] = useState(null)

  const getAbout = async () => {
    let { data } = await axios.get("https://strapi-portfolio-kb.herokuapp.com/pages?Name=About")
    setAbout(data[0])
  }

  useEffect(() => {
    getAbout()
    return () => {};
  }, []);

  let contentContainerStyle = {}
    let divider_style = {
      width: "75%",
      margin: "20px auto"
    }
  if (mobile) {
    contentContainerStyle = {
      margin: "30px 0px 0px 0px"
    }
    divider_style.width = "85%"
  } else {
    contentContainerStyle = {
      width: "80%",
      margin: "0px auto"
    }
  }


  return (
    <div style={{ zIndex: 9, fontSize: (mobile ? "18px" : "23px"), lineHeight: "1.3", width: (mobile ? "100%" :"80%"), margin: "0px auto" }}>
      <h1 style={{ marginTop: "0px" }} className="text-align-center font-size-40">About</h1>
      {about ? 
        about.contents.map((about_section, index) => {
          return (
            <>
             <div style={contentContainerStyle} key={index} dangerouslySetInnerHTML={{ __html: about_section.content }} />
             { index !== about.contents.length - 1 && <div style={divider_style} className="border-bottom" />}
            </>
          )
        })
      :
        <div className="spinner_container"><FontAwesomeIcon className="font-size-40" icon={faSpinner} spin /> </div>
      }
    </div>
  )
}

export default About