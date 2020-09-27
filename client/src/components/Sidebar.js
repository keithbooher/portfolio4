import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faHome, faTools, faCode, faBookOpen, faEnvelope, faUserTie, faBars } from "@fortawesome/free-solid-svg-icons"

const Sidebar = ({ mobile }) => {
  const [showSidebar, setShowSidebar] = useState(null)
  let mobile_bars_class
  if (showSidebar) {
    mobile_bars_class = "sidebar_bars_open"
  }else if (showSidebar === null) {
    mobile_bars_class = "unitiated_sidebar_bars"
  } else {
    mobile_bars_class = "sidebar_bars"
  }
  return (
    <>
      {mobile ? 
        <>
          <div style={{ zIndex: 10 }} id="sidebar_bars" className={`link_active_color fixed hover font-size-25 ${mobile_bars_class}`} onClick={() => setShowSidebar(!showSidebar)}><FontAwesomeIcon icon={faBars} /></div>
          {showSidebar !== null && <MobileSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />}
        </>
      :
        <DesktopSidebar setShowSidebar={setShowSidebar} />    
      }
    </>
  )
}


const MobileSidebar = ({ showSidebar, setShowSidebar }) => {
  const refContainer = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleClickOutside = (event) => {
    if(event.target.getAttribute('id') === "sidebar_bars" || event.target.tagName === "svg" || event.target.tagName === "path") {
      return
    } else if (refContainer.current && !refContainer.current.contains(event.target)) {
      setShowSidebar(false)
    }
  }

  return (
      <>
        <div style={{ zIndex: 10 }} id="sidebar_container" ref={refContainer} className={`${showSidebar ? "sidebar_open" : "sidebar"} flex-column padding-xs align-items text-align-center sidebar_bg_color`}>
            
          <div className="margin-m-v relative" style={{ flexBasis: "10%" }}>
            <div className={`absolute store_text_color_alt font-size-30`} style={{ fontWeight: 700, zIndex: 2, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>K</div>
            <svg style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} aria-hidden="true" focusable="false" data-prefix="far" data-icon="brain" className={`bold font-size-45 svg-inline--fa fa-brain fa-w-17 store_text_color absolute`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M511.9 228.2c1.9-7.5 2.9-15.2 2.9-23 0-33-16.7-63-43.7-80.6-.4-39.7-29.4-72.8-67.5-79.8C389.9 17.8 361.8 0 330.3 0c-22.8 0-43.4 9.2-58.3 24.1A82.316 82.316 0 0 0 213.7 0c-31.4 0-59.6 17.8-73.3 44.9-38.1 7-67.1 40.1-67.5 79.8-27.1 17.6-43.7 47.6-43.7 80.6 0 7.7 1 15.4 2.9 23C11.9 246.3 0 272.2 0 299.5c0 33 16.7 63 43.7 80.6.5 47.5 38.5 86.2 85.8 88.3 15.9 26.7 44.9 43.6 76.8 43.6 26 0 49.2-11.2 65.6-28.8 16.4 17.6 39.6 28.8 65.6 28.8 31.9 0 60.9-16.9 76.8-43.6 47.4-2 85.4-40.8 85.9-88.3 27-17.6 43.7-47.7 43.7-80.6.1-27.3-11.8-53.2-32-71.3zm-264 194.6c0 22.8-18.6 41.2-41.5 41.2-32.9 0-39.5-29.5-45.6-47.6l-20.3 3.4c-24 4-48.5-15.3-48.5-40.5 0-2.8 4.7-27.4 4.7-27.4l-18.2-7.5c-36.9-15.2-41.3-66.1-5.5-86.6l19.5-11.2-9.9-20.1C65 190.7 94 166 107.7 160.4l18.9-7.7c-5-21.9-5.5-22.8-5.5-27.2 0-18.8 15.3-34 31.9-34.1l22.9 1.2 4.8-18.9c3.9-15.1 17.4-25.6 32.9-25.6 18.9 0 34.2 15.2 34.2 34l.1 340.7zm217.7-78.5l-18.3 7.5s4.6 24.6 4.6 27.4c0 25.2-24.5 44.4-48.5 40.5l-20.3-3.4c-6.1 18.2-12.7 47.6-45.6 47.6-22.9 0-41.5-18.5-41.5-41.2V82c0-18.8 15.3-34 34.2-34 15.5 0 29.1 10.5 32.9 25.6l4.8 18.9 22.9-1.2c16.5.1 31.9 15.4 31.9 34.1 0 4.4-.4 5.3-5.5 27.2l18.9 7.7c13.7 5.6 42.7 30.2 25.1 65.9l-9.9 20.1 19.5 11.2c36.1 20.7 31.7 71.6-5.2 86.8z"></path></svg>
          </div>


          <div className="flex-column justify-center" style={{ flexBasis: "65%" }}>
            <div className="flex-column space-evenly" style={{ height: "65%", margin: "auto 0px" }}>
              <NavLink  onClick={() => setShowSidebar(false)} exact activeClassName="link_active_color" to="/">
                <FontAwesomeIcon className="fade_in font-size-25" icon={faHome} />
              </NavLink>

              <NavLink  onClick={() => setShowSidebar(false)} activeClassName="link_active_color" to="/my_work">
                <FontAwesomeIcon className="fade_in font-size-25" icon={faCode} />
              </NavLink>

              <NavLink  onClick={() => setShowSidebar(false)} activeClassName="link_active_color" to="/skills">
                <FontAwesomeIcon className="fade_in font-size-25" icon={faTools} />
              </NavLink>

              <NavLink  onClick={() => setShowSidebar(false)} activeClassName="link_active_color" to="/about">
                <FontAwesomeIcon className="fade_in font-size-25" icon={faBookOpen} />
              </NavLink>

              {/* <NavLink  onClick={() => setShowSidebar(false)} activeClassName="link_active_color" to="/contact">
                <FontAwesomeIcon className="fade_in font-size-25" icon={faEnvelope} />
              </NavLink> */}

              <NavLink  onClick={() => setShowSidebar(false)} activeClassName="link_active_color" to="/employment">
                <FontAwesomeIcon className="fade_in font-size-25" icon={faUserTie} />
              </NavLink>
            </div>
          </div>


          <div className="flex-column align-items space-evenly" style={{ flexBasis: "25%" }}>
            <a><FontAwesomeIcon className="font-size-25" icon={faLinkedin} /></a>
            <a><FontAwesomeIcon className="font-size-25" icon={faGithub} /></a>
            <a><FontAwesomeIcon className="font-size-25" icon={faFacebook} /></a>
          </div>
        </div>


      </>
  )
}

const DesktopSidebar = ({ setShowSidebar }) => {
  const [ hoverItem, setHoverItem ] = useState(null)

  return (
    <div className="flex-column padding-xs align-items text-align-center sidebar_bg_color" style={{ flexBasis: "6em", zIndex: 10 }}>
      
      <div className="margin-m-v relative" style={{ flexBasis: "10%" }}>
        <div className={`absolute store_text_color_alt font-size-40`} style={{ fontWeight: 700, zIndex: 2, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>K</div>
        <svg style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} aria-hidden="true" focusable="false" data-prefix="far" data-icon="brain" className={`bold font-size-60 svg-inline--fa fa-brain fa-w-17 store_text_color absolute`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M511.9 228.2c1.9-7.5 2.9-15.2 2.9-23 0-33-16.7-63-43.7-80.6-.4-39.7-29.4-72.8-67.5-79.8C389.9 17.8 361.8 0 330.3 0c-22.8 0-43.4 9.2-58.3 24.1A82.316 82.316 0 0 0 213.7 0c-31.4 0-59.6 17.8-73.3 44.9-38.1 7-67.1 40.1-67.5 79.8-27.1 17.6-43.7 47.6-43.7 80.6 0 7.7 1 15.4 2.9 23C11.9 246.3 0 272.2 0 299.5c0 33 16.7 63 43.7 80.6.5 47.5 38.5 86.2 85.8 88.3 15.9 26.7 44.9 43.6 76.8 43.6 26 0 49.2-11.2 65.6-28.8 16.4 17.6 39.6 28.8 65.6 28.8 31.9 0 60.9-16.9 76.8-43.6 47.4-2 85.4-40.8 85.9-88.3 27-17.6 43.7-47.7 43.7-80.6.1-27.3-11.8-53.2-32-71.3zm-264 194.6c0 22.8-18.6 41.2-41.5 41.2-32.9 0-39.5-29.5-45.6-47.6l-20.3 3.4c-24 4-48.5-15.3-48.5-40.5 0-2.8 4.7-27.4 4.7-27.4l-18.2-7.5c-36.9-15.2-41.3-66.1-5.5-86.6l19.5-11.2-9.9-20.1C65 190.7 94 166 107.7 160.4l18.9-7.7c-5-21.9-5.5-22.8-5.5-27.2 0-18.8 15.3-34 31.9-34.1l22.9 1.2 4.8-18.9c3.9-15.1 17.4-25.6 32.9-25.6 18.9 0 34.2 15.2 34.2 34l.1 340.7zm217.7-78.5l-18.3 7.5s4.6 24.6 4.6 27.4c0 25.2-24.5 44.4-48.5 40.5l-20.3-3.4c-6.1 18.2-12.7 47.6-45.6 47.6-22.9 0-41.5-18.5-41.5-41.2V82c0-18.8 15.3-34 34.2-34 15.5 0 29.1 10.5 32.9 25.6l4.8 18.9 22.9-1.2c16.5.1 31.9 15.4 31.9 34.1 0 4.4-.4 5.3-5.5 27.2l18.9 7.7c13.7 5.6 42.7 30.2 25.1 65.9l-9.9 20.1 19.5 11.2c36.1 20.7 31.7 71.6-5.2 86.8z"></path></svg>
      </div>


      <div className="flex-column justify-center" style={{ flexBasis: "65%" }}>
        <div className="flex-column space-evenly" style={{ height: "65%", margin: "auto 0px" }}>
          <NavLink onMouseOver={() => setHoverItem("home")} onMouseOut={() => setHoverItem(null)} onClick={() => setShowSidebar(false)} exact activeClassName="link_active_color" to="/">
              {hoverItem === "home" ?
                <div className="fade_in font-size-16 bold">Home</div>
              :
                <FontAwesomeIcon className="fade_in font-size-25" icon={faHome} />
              }
          </NavLink>

          <NavLink onMouseOver={() => setHoverItem("my_work")} onMouseOut={() => setHoverItem(null)} onClick={() => setShowSidebar(false)} activeClassName="link_active_color" to="/my_work">
            {hoverItem === "my_work" ?
                <div className="fade_in font-size-16 bold">My Projects</div>
              :
              <FontAwesomeIcon className="fade_in font-size-25" icon={faCode} />
              }
          </NavLink>

          <NavLink onMouseOver={() => setHoverItem("skills")} onMouseOut={() => setHoverItem(null)} onClick={() => setShowSidebar(false)} activeClassName="link_active_color" to="/skills">
            {hoverItem === "skills" ?
                <div className="fade_in font-size-16 bold">Skills</div>
              :
              <FontAwesomeIcon className="fade_in font-size-25" icon={faTools} />
              }
          </NavLink>

          <NavLink onMouseOver={() => setHoverItem("about")} onMouseOut={() => setHoverItem(null)} onClick={() => setShowSidebar(false)} activeClassName="link_active_color" to="/about">
            {hoverItem === "about" ?
                <div className="fade_in font-size-16 bold">About</div>
              :
              <FontAwesomeIcon className="fade_in font-size-25" icon={faBookOpen} />
              }
          </NavLink>

          {/* <NavLink onMouseOver={() => setHoverItem("contact")} onMouseOut={() => setHoverItem(null)} onClick={() => setShowSidebar(false)} activeClassName="link_active_color" to="/contact">
            {hoverItem === "contact" ?
                <div className="fade_in font-size-16 bold">Contact</div>
              :
              <FontAwesomeIcon className="fade_in font-size-25" icon={faEnvelope} />
              }
          </NavLink> */}

          <NavLink onMouseOver={() => setHoverItem("employment")} onMouseOut={() => setHoverItem(null)} onClick={() => setShowSidebar(false)} activeClassName="link_active_color" to="/employment">
            {hoverItem === "employment" ?
                <div className="fade_in font-size-16 bold">Past Work</div>
              :
              <FontAwesomeIcon className="fade_in font-size-25" icon={faUserTie} />
              }
          </NavLink>
        </div>
      </div>


      <div className="flex-column align-items space-evenly" style={{ flexBasis: "25%" }}>
        <a><FontAwesomeIcon className="font-size-25" icon={faLinkedin} /></a>
        <a><FontAwesomeIcon className="font-size-25" icon={faGithub} /></a>
        <a><FontAwesomeIcon className="font-size-25" icon={faFacebook} /></a>
      </div>

    </div>
  )
}

export default Sidebar