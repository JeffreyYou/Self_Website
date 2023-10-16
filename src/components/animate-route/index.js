import React, { memo, lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'


import { AnimatePresence } from 'framer-motion'
const HomeLazy = lazy(() => import ("../../pages/Home") )
const ExpertiseLazy = lazy(() => import ("../../pages/Expertise") )
const ProjectLazy = lazy(() => import ("../../pages/Project") )
const ContactLazy = lazy(() => import ("../../pages/Contact") )
const WorkLazy = lazy(() => import ("../../pages/work") )


const AnimatedRoute = memo(() => {

    const location = useLocation();
    return (
        <AnimatePresence >
            <Routes location={location} key={location.key}>
                <Route exact path='/' element={<HomeLazy />} />
                <Route path='/exp' element={<ExpertiseLazy />} />
                <Route path='/work' element={<WorkLazy />} />
                <Route path='/project' element={<ProjectLazy />} />
                <Route path='/contact' element={<ContactLazy />} />
            </Routes>
        </AnimatePresence>
    )
})

export default AnimatedRoute