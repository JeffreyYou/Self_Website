import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense } from "react"
import "./assets/css/global.css"


import Home from "./pages/Home"
import Expertise from './pages/Expertise'
import Project from './pages/Project'
import Contact from './pages/Contact'
import AppHeader from "./components/app-header"
import Work from "./pages/work"
import ContactBar from "./components/contact-bar"

function App() {
  return (
    <div className="root-page">
      <BrowserRouter>
        <AppHeader/>
        <ContactBar/>
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/exp' element={<Expertise/>}/>
                <Route path='/work' element={<Work/>}/>
                <Route path='/project' element={<Project/>}/>
                <Route path='/contact' element={<Contact/>}/>
          </Routes> 
        </Suspense>
      </BrowserRouter>
    </div>

  );
}

export default App;
