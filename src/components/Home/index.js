import "./index.scss"
import LogoTitle from "../../assets/images/logo-s.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { AnimatedLetters } from "../AnimatedLetters"
import Logo from "./Logo"
import Loader from "react-loaders"
import CV from "../../assets/images/a.pdf"

export function Home(){
    const[letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['H','A','B','R','E','Z']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']
    const toRotate = ["Web Developer","Web Designer","UI/UX Designer","RPA Developer"]
    const [loopNum, setLoopNum] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false)
    const[text, setText] = useState('')
    const[delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 1000;


    useEffect(()=>{
      let ticker = setInterval(() => {
        tick();
      }, delta);

      return () => clearInterval(ticker)
    },[delta, text])

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)

        
    
        return () => clearTimeout(idTimeOut);
      }, [])


      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length -1): fullText.substring(0, text.length + 1) 
        setText(updatedText)
        
        if(isDeleting){
          setDelta(prevDelta => prevDelta /2 )
        }

        if(!isDeleting && updatedText === fullText){
          setIsDeleting(true)
          setDelta(period)
        }else if(isDeleting && updatedText === ''){
          setIsDeleting(false)
          setLoopNum(loopNum + 1)
          setDelta(500)
        }

      }

    return(
      <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                   <span className={letterClass}>H</span>
                   <span className={`${letterClass} _12`}>i,</span>  
                <br/>
                <span className={`${letterClass} _13`}>I</span>  
                <span className={`${letterClass} _14`}>'m</span>  
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2>{text}</h2>
               <Link to="/contact" className="flat-button">Contact Me</Link>
               <a style={{marginLeft:"2rem"}} href={CV} className="flat-button">Download CV</a>
            </div>
            <Logo/>
        </div>
        <Loader type="pacman"/>
        </>
    )
}