import React, { useEffect, useState } from 'react';
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const WorkExperience = ({ mobile }) => {
  const [ experience, setExperience ] = useState(null)

  const getExperience = async () => {
    let { data } = await axios.get("https://strapi-portfolio-kb.herokuapp.com/pages?Name=Experience")
    setExperience(data[0])
  }

  useEffect(() => {
    getExperience()
    return () => {};
  }, []);

  let contentContainerStyle = {}
  if (mobile) {
    contentContainerStyle = {
      margin: "30px 0px 0px 0px",
      lineHeight: "1.5"
    }
  } else {
    contentContainerStyle = {
      width: "80%",
      margin: "0px auto",
      lineHeight: "1.5"
    }
  }

  return (
    <div style={{ zIndex: 9, fontSize: "20px", width: (mobile ? "100%" : "80%"), margin: "0px auto" }}>
      <h1 className="text-align-center font-size-50">Work Experience</h1>
      {experience ? 
        experience.contents.map((experience_section, index) => {
          return (
            <div key={index} style={contentContainerStyle} dangerouslySetInnerHTML={{ __html: experience_section.content }} />
          )
        })
      :
        <div className="spinner_container"><FontAwesomeIcon className="font-size-40" icon={faSpinner} spin /> </div>
      }
    </div>
  )
}

export default WorkExperience