import React, { useEffect, useState } from 'react';
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const MyWork = ({ mobile }) => {
  const [ projects, setProjects ] = useState(null)

  const getProjects = async () => {
    let { data } = await axios.get("https://strapi-portfolio-kb.herokuapp.com/projects")
    setProjects(data)
  }

  useEffect(() => {
    getProjects()
    return () => {};
  }, []);

  let containerStyle = {
    zIndex: 9
  }

  return (
    <div style={containerStyle}>
      <h1 style={{ marginTop: "0px" }} className="text-align-center font-size-50">My Work</h1>
      {mobile ?
        <MobileLayout projects={projects} />
      :
        <DesktopLayout projects={projects} />    
      }

    </div>
  )
}

const MobileLayout = ({ projects }) => {
  return (
    <div className="flex-column">
      {projects ? 
        projects.map((project, index) => {
          return (
            <div key={index} className="border-bottom" style={{ paddingBottom: "10px" }}>
              <h1 className="text-align-center">{project.project_name}</h1>
              { project.project_name === "Acute Commerce" ? 
                  <div className="flex justify-center margin-bottom-m"><svg style={{ height: "150px", fill: "#8904cc" }} className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.65 452.08L59.91 10.35C52.76 3.2 43.97 0 35.35 0 17.31 0 0 14.01 0 35.17V476.9C0 496.29 15.71 512 35.1 512h441.73c31.27 0 46.93-37.8 24.82-59.92zM48 464V66.32l63.08 63.08-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31 45.26 45.25-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31 45.25 45.25-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31 45.25 45.26-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31L445.68 464H48zm80-80h124.54L128 259.46V384z"/></svg></div>
                : 
                  <img />
                }
              <div dangerouslySetInnerHTML={{ __html: project.description }} />
            </div>
          )
        })
      :
        <div className="spinner_container"><FontAwesomeIcon className="font-size-40" icon={faSpinner} spin /> </div>
      }
    </div>
  )
}

const DesktopLayout = ({ projects }) => {
  return (
    <div className="flex flex-wrap space-evenly">
      {projects ? 
        projects.map((project, index) => {
          let flex_basis_percent = "25"
          let font_size = "25"

          switch (projects.length) {
            case 1:
              flex_basis_percent = "50"                      
              break;
            case 2:
              flex_basis_percent = "50%"      
              font_size = "20"
              break;
            case 3:
              flex_basis_percent = "33.33"
              font_size = "18"
              break;
            default:
              flex_basis_percent = "25"
              font_size = "20"
              break;
          }
          return (
            <div key={index} className={`flex-basis-${flex_basis_percent} font-size-${font_size}`}>
              {projects.length === 1 && <div className="flex-basis-auto" />}
              <div className="padding-s">
                <h2 className="text-align-center">{project.project_name}</h2>
                { project.project_name === "Acute Commerce" ? 
                  <div className="flex justify-center margin-bottom-m"><svg style={{ height: "250px", fill: "#8904cc" }} className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.65 452.08L59.91 10.35C52.76 3.2 43.97 0 35.35 0 17.31 0 0 14.01 0 35.17V476.9C0 496.29 15.71 512 35.1 512h441.73c31.27 0 46.93-37.8 24.82-59.92zM48 464V66.32l63.08 63.08-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31 45.26 45.25-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31 45.25 45.25-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31 45.25 45.26-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31L445.68 464H48zm80-80h124.54L128 259.46V384z"/></svg></div>
                : 
                  <img />
                }
                <div dangerouslySetInnerHTML={{ __html: project.description }} />
              </div>
              {projects.length === 1 && <div className="flex-basis-auto" />}
            </div>
          )
        })
      :
        <div className="spinner_container"><FontAwesomeIcon className="font-size-40" icon={faSpinner} spin /> </div>
      }
    </div>
  )
}

export default MyWork