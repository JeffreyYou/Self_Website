import { BrowserRouter} from "react-router-dom"
import { Suspense, useEffect, useState} from "react"
import "./assets/css/global.css"
import Loading from "./components/loading"

import AppHeader from "./components/app-header"
import ContactBar from "./components/contact-bar"
import AnimatedRoute from "./components/animate-route"

import HomeBackgroundImage from './assets/images/picture01.jpg'
import ExpertiseBackgroundImage from './assets/images/picture02.jpg'
import ProjectBackgroundImage from './assets/images/picture03.jpg'
import JeffreyProfile from './assets/images/Jeffrey.jpg'
import FTPImage from './assets/images/ftp.jpg'
import AiCharacterImage from './assets/images/ai_character.jpg'


function App() {
  const imagesToPreload = [ExpertiseBackgroundImage, HomeBackgroundImage, ProjectBackgroundImage, FTPImage, AiCharacterImage, JeffreyProfile];

  useEffect(() => {
    imagesToPreload.forEach((image) => {
      const img = new Image();
      img.onload = () => {
        console.log("loaded image", image)
      }
      img.onerror = () => {
        console.error("Error loading image", image);
      };
      img.src = image;
    })
  }, [])

  return (
    <div className="root-page">
      <BrowserRouter>
        <AppHeader />
        <Suspense fallback={null}>
          <AnimatedRoute />
        </Suspense>
        <ContactBar />
      </BrowserRouter>
    </div>

  );
}

export default App;
