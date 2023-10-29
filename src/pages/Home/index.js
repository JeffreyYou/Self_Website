import React, { memo } from 'react'
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion'
// import { AnimatePresence } from 'framer-motion'

import Intro from "../../components/intro"
import { HomeWrapper } from './style'

import backgroundImage from '../../assets/images/picture01.jpg';
import { ReactComponent as RightArrowLogo } from "../../assets/icons/arrow-right.svg"



const Home = memo(() => {

  // const transitionVariants = {
  //   initial: { x: "-100%", transition: { duration: 0.5 } },
  //   animate: { x: 0 },
  //   exit: { x: "-100%" }
  // }
  const transitionVariants = {
    initial: {
      opacity: 0,
      y: "-50%"
    },
    animate: {
      opacity: 1,
      y: 0
    }
  }
  
  return (
    // <motion.div
      // style={{ flex: 1,  backgroundImage: "url(" + {backgroundImage} + ")" }}
      // variants={transitionVariants}
      // initial={"initial"}
      // animate={"animate"}
      // exit={"exit"}
      // className='wrapper-center home'
      // initial={{ x: "-100%"}}
      // animate={{ x:0, transition: {duration: 0.5, type: "spring"}}}
      // exit={{ x: "-100%"}}
      // , transition: {duration: 0.5}
      // backgroundImage: 'url("../images/picture02.jpg")'
    // >
    <div className='home-wrapper-wrapper'>
      <HomeWrapper>
        {/* <img className='bgc' src={require('../../assets/images/picture04.jpg')}></img> */}
        <Intro />

        {/* <NavLink to="/exp" key="toExp" className="go-right">
          <motion.div
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.6, duration: 0.3 }}
            className='right-arrow'
          >
            <RightArrowLogo className='logo' />
          </motion.div>
        </NavLink> */}

      </HomeWrapper>
    </div>


    // </motion.div>
  )
})

export default Home