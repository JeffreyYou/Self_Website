import React, { memo, lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../../pages/Home'
import Expertise from '../../pages/Expertise'
import Project from '../../pages/Project'

import { AnimatePresence } from 'framer-motion'
const HomeLazy = lazy(() => import ("../../pages/Home") )
const ExpertiseLazy = lazy(() => import ("../../pages/Expertise") )
const InfoLazy = lazy(() => import ("../../pages/Info") )
const ProjectLazy = lazy(() => import ("../../pages/Project") )


const AnimatedRoute = memo(() => {

    const location = useLocation();
    return (
        <AnimatePresence >
            <Routes location={location} key={location.key}>
                {/* <Route exact path='/' element={<HomeLazy />} /> */}
                <Route exact path='/' element={<HomeLazy />} />
                <Route path='/exp' element={<ExpertiseLazy />} />
                <Route path='/project' element={<ProjectLazy />} />
                <Route path='/about' element={<InfoLazy />} />
            </Routes>
        </AnimatePresence>
    )
})

export default AnimatedRoute