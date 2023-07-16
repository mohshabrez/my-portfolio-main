import { useEffect, useState } from "react"
import { AnimatedLetters } from "../AnimatedLetters"
import "./index.scss"
import Loader from "react-loaders"
import project1 from "../../assets/images/project1.png"
import project2 from "../../assets/images/project2.png"
import project3 from "../../assets/images/project3.png"
import project4 from "../../assets/images/project4.png"
import project5 from "../../assets/images/project5.png"
import project6 from "../../assets/images/project6.png"
import project7 from "../../assets/images/project7.png"
import project8 from "../../assets/images/project8.png"
import project9 from "../../assets/images/project9.png"
import project10 from "../../assets/images/project10.png"
import project11 from "../../assets/images/project11.png"
import blog1 from "../../assets/images/nlog1.png"
import blog2 from "../../assets/images/blog2.png"
import design1 from "../../assets/images/design1.png"
import blog3 from "../../assets/images/blog3.webp"
import blog4 from "../../assets/images/blog4.webp"
import blog5 from "../../assets/images/blog5.webp"
import blog6 from "../../assets/images/blog6.webp"
import blog7 from "../../assets/images/blog7.webp"
import blog8 from "../../assets/images/blog8.webp"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"



export function MyWork(){
    const[letterClass, setLetterClass] = useState('text-animate')

    const projects = [{id:1, image: project1, title:"Socialio", liveLink:"https://socialeoo.netlify.app/", githublink:"https://github.com/mohshabrez/socialio_master"},{id:2, image: project2, title:"TravLo", liveLink:"https://travlo-e-commerece.netlify.app/", githublink:"https://github.com/mohshabrez/TravLo-E-Commerce"},{id:3, image: project3, title:"Mail", liveLink:"https://codesandbox.io/s/react-ps-set-10-from-rockey-8s2dm6", githublink:"https://github.com/mohshabrez/Shabrez-s-Mail-Box"},
    {id:4, image: project4, title:"TicTacToe", liveLink:"https://tictaactoee.netlify.app/", githublink:"https://github.com/mohshabrez/Tictactoe"},
    {id:5, image: blog1, title:"CSS Responsivness", liveLink:"https://portfloio-shabrez.netlify.app/responsive.html", githublink:""},
    {id:6, image: blog2, title:"About me", liveLink:"https://portfloio-shabrez.netlify.app/aboutme", githublink:""},
    {id:7, image: design1, title:"Design Layout", liveLink:"https://landingassig.netlify.app/", githublink:"https://github.com/mohshabrez/layout"},
    {id:8, image: blog3, title:"Equal operator", liveLink:"https://shabrezdev.hashnode.dev/difference-between-vs", githublink:""},
    {id:9, image: blog4, title:"Type Error", liveLink:"https://shabrezdev.hashnode.dev/type-error-reference-error", githublink:""},
    {id:10, image: blog5, title:"Reduce method", liveLink:"https://shabrezdev.hashnode.dev/reduce-method-in-javascript", githublink:""},
    {id:11, image: blog6, title:"Find method", liveLink:"https://shabrezdev.hashnode.dev/find-method-in-javascript", githublink:""},
    {id:12, image: blog7, title:"Filter method", liveLink:"https://shabrezdev.hashnode.dev/filter-method-in-javascript", githublink:""},
    {id:13, image: blog8, title:"Map method", liveLink:"https://shabrezdev.hashnode.dev/map-method-in-javascript", githublink:""},
    {id:14, image: project5, title:"Old Portfolio", liveLink:"https://portfloio-shabrez.netlify.app/", githublink:"https://github.com/mohshabrez/Markfour-five_portfolio"},
    {id:15, image: project6, title:"Minion Speak", liveLink:"https://minion-speak-eng-tran.netlify.app/", githublink:"https://github.com/mohshabrez/Mark_six_minion_speak"},
    {id:16, image: project7, title:"Emoji Intrepreter", liveLink:"https://csb-ef5ins.netlify.app/", githublink:"https://github.com/mohshabrez/Mark_Eight_Emoji_Interpreter_mod"},
    {id:17, image: project8, title:"Hidden Travels", liveLink:"https://csb-1ryvet.netlify.app/", githublink:"https://github.com/mohshabrez/Mark_Nine_travel_map"},
    {id:18, image: project9, title:"Cash Register", liveLink:"https://cash-registeration-app.netlify.app/", githublink:"https://github.com/mohshabrez/Mark_ten_cash_register_app"},
    {id:19, image: project10, title:"BirthDay lucky", liveLink:"https://is-ur-bday-lucky.netlify.app/", githublink:"https://github.com/mohshabrez/Mark_eleven_birthday_lucky"},
    {id:20, image: project11, title:"palindorm birthday", liveLink:"https://bdy-palndrome.netlify.app/", githublink:"https://github.com/mohshabrez/Mark_thirteen_palindrome_bdy"},
    {id:21, image: project11, title:"palindorm birthday", liveLink:"https://bdy-palndrome.netlify.app/", githublink:"https://github.com/mohshabrez/Mark_thirteen_palindrome_bdy"},
    ]

    const [startIndex, setStartIndex] = useState(0);
    const nextSlide = () => {
        const newIndex = Math.min(startIndex + 3, projects.length);
        setStartIndex(newIndex);
        
      };
    
      const prevSlide = () => {
        const newIndex = Math.max(startIndex - 3, 0);
        setStartIndex(newIndex);
       
      };
      
      const visibleProjects = projects.slice(startIndex, startIndex + 3);
   
    useEffect(() => {
        const idTimeOut = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(idTimeOut);
      }, [])

    return(
       <>
        <div className="contianer myWork-page">
            <div className="text-zone">
                <h1>
                   <AnimatedLetters letterClass={letterClass} strArray={['M','y',' ', 'W','o','r','k']}
                    idx={15}
                   /> 
                </h1>
                <div className="projects">
                <div className="projectsDiv">
                    <h2><AnimatedLetters letterClass={letterClass} strArray={['Projects','-','Blogs','-','Designs']}
                    idx={15}/></h2>
                    <div className="projectCard">
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={prevSlide} disabled={startIndex === 0}  color="#fff" className="work-icon-left" />
                        {visibleProjects.map((pro) => {
                            return(
                                <div className="proCard" key={pro.id}>
                                    <img src={pro.image} />
                                    <div className="probtns">
                                        <a href={pro.liveLink} target="_blank" rel="noreferrer" className="flat-button">Live Link</a>
                                        <a href={pro.githublink} target="_blank"  rel="noreferrer" className="flat-button">Github</a>
                                    </div>
                                </div>
                            )
                        })}
                        <FontAwesomeIcon icon={faArrowAltCircleRight} onClick={nextSlide} disabled={startIndex + 4  >= projects.length}  color="#fff" className="work-icon-right" />
                    </div>
                </div>
            </div>
            </div>
           
        </div>
        <Loader type="pacman"/>
       </>
    )
}