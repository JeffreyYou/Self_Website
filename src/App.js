import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense } from "react"
import "./assets/css/global.css"

import Loading from "./components/loading"

import AppHeader from "./components/app-header"
import ContactBar from "./components/contact-bar"
import AnimatedRoute from "./components/animate-route"

function App() {
  return (
    <div className="root-page">
      <BrowserRouter>
        <AppHeader />
        
        <Suspense fallback={<Loading/>}>
          <AnimatedRoute />
        </Suspense>
        <ContactBar />
      </BrowserRouter>
    </div>

  );
}

export default App;
