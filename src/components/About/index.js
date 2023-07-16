import "./index.scss"
import { useEffect, useState } from "react"
import { AnimatedLetters } from "../AnimatedLetters"
import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3, faGit, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons"
import Loader from "react-loaders"
import image from "../../assets/images/image.jpg"
import { faAward, faFolderPlus, faFolderTree, faIdBadge } from "@fortawesome/free-solid-svg-icons"

export function About(){
    const[letterClass, setLetterClass] = useState('text-animate')
   
    useEffect(() => {
        const idTimeOut = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(idTimeOut);
      }, [])
    
    
    return(
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                   <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t', ' ','m','e']}
                    idx={15}
                   /> 
                </h1>
                <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a smart
            person with big dreams, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
            </div>
            <div className="stage-cube-cont">
              <div className="about-section">
                <div className="about-mee">
                    <div className="about-me-image">
                        <img src={image} alt="profile-image" />
                    </div>
                </div>
                    <div className="about-cards">
                        <article className="about-card">
                            <FontAwesomeIcon icon={faAward}  color="#fff" className="about-icon" />
                            <h5>Experience</h5>
                            <small>1.6+ yrs Exp</small>
                        </article>
                        <article className="about-card">
                            <FontAwesomeIcon icon={faFolderTree}  color="#fff" className="about-icon"  />
                            <h5>Projects</h5>
                            <small>10+ Projects</small>
                        </article>
                    </div>
               </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}