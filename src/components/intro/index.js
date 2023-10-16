import React, { memo } from 'react'

import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'


import {
  IntroWrapper,
  IntroTop,
  IntroMiddle,
  IntroBottom
} from './style'


const Intro = memo(() => {

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
  const location = useLocation()


  return (

    <IntroWrapper>
      <IntroTop>
        {/* <div className='before-hello'></div> */}
        {/* <div className='before-hello'></div> */}
      </IntroTop>

      <IntroMiddle>
        <motion.div
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0, duration: 0.3 }}
          className='hello-wrapper'
        >
          <div className='hello-1'>Hello</div>
          <div className='hello-2'>, my name is</div>
        </motion.div>

        <motion.div
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3, duration: 0.3 }}
          className='name-wrapper' >
          <div className='space'></div>
          <div className='name'>Qinsongen You</div>
          <div className='space'></div>
        </motion.div>

      </IntroMiddle>

      <IntroBottom>
        
      </IntroBottom>

      {/* <Route/> */}
    </IntroWrapper>


  )
})

export default Intro