 import Loader from "react-loaders"
import "./index.scss"
import { AnimatedLetters } from "../AnimatedLetters"
import { useEffect, useState } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

export function Contact(){
    const[letterClass, setLetterClass] = useState('text-animate')
   
    useEffect(() => {
        const idTimeOut = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(idTimeOut);
      }, [])
    
    
    return(
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15}/>
                </h1>
                <p>
                I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
                </p>
                <div className="contact-form">
                    <form>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="name" required/>
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="email" required/>
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="subject" required/>
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>

                </div>
            </div>
            <div className="info-map">
                Mohammed Shabrez,
                <br/>
                India,
                <br/>
                Hindupuram, Mukkadipeta, 515201
                <br/>
                AndhraPradesh,
                <br/>
                <span>sheikshabrez90@gmail.com</span>
                <p>+91 9440152021</p>
               
            </div>
            <div className="map-wrap">
                <MapContainer center={[13.818538, 77.498875]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[13.818538, 77.498875]}>
                        <Popup>I live here, come over for a cup of coffee :)</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}