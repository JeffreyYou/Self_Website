import React, { memo } from 'react'
import { motion } from 'framer-motion'

import { 
  WorkWrapper,
  Indent1,
  Title,
  WorkDemo,
  WorkCenter
} from './style'

const Work = memo(() => {

  const transitionVariants = {
    initial: {
      opacity: 0,
      y: "-30%"
    },
    animate: {
      opacity: 1,
      y: 0
    }
  }
  return (
    <div>
    <WorkWrapper>
      <Indent1/>
      <motion.div
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0, duration: 0.3 }}
      >
        <Title>Portfolio</Title>
      </motion.div>
      <WorkCenter>
        <motion.div
              variants={transitionVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3, duration: 0.3 }}
              className="motion-div"
        >

        <a href=''  className='a-link'>
            <motion.div 
                className='motion-box'
                // whileHover={ {scale: 1.2, backgroundColor: "#105b72c2"}}
                whileHover={ {scale: 1.2}}
                whileTap={ {scale: 0.9}}
                transition={{ delay: 0, duration: 0.5 }}
                >
              <WorkDemo><p className='text-info'>WeChat GPT</p></WorkDemo>
            </motion.div>
        </a>
        <a href='https://github.com/JeffreyYou' target="_blank" className='a-link'>
            <motion.div 
                className='motion-box'
                whileHover={ {scale: 1.2}}
                whileTap={ {scale: 0.9}}
                transition={{ delay: 0, duration: 0.3 }}
                >
              <WorkDemo><p className='text-info'>AI Character</p></WorkDemo>
            </motion.div>
        </a>
        <a href='https://github.com/JeffreyYou' target="_blank" className='a-link'>
            <motion.div 
                className='motion-box'
                whileHover={ {scale: 1.2}}
                whileTap={ {scale: 0.9}}
                transition={{ delay: 0, duration: 0.3 }}
                >
              <WorkDemo><p className='text-info'>Microservice Mall</p></WorkDemo>
            </motion.div>
        </a>
        </motion.div>
      <motion.div
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.6, duration: 0.3 }}
            className="motion-div"
      >
        <a href='https://github.com/JeffreyYou' target="_blank" className='a-link'>
            <motion.div 
                className='motion-box'
                whileHover={ {scale: 1.2}}
                whileTap={ {scale: 0.9}}
                transition={{ delay: 0, duration: 0.3 }}
                >
              <WorkDemo><p className='text-info'>Fast FTP</p></WorkDemo>
            </motion.div>
        </a>
        <a href='https://github.com/JeffreyYou' target="_blank" className='a-link'>
            <motion.div 
                className='motion-box'
                whileHover={ {scale: 1.2}}
                whileTap={ {scale: 0.9}}
                transition={{ delay: 0, duration: 0.3 }}
                >
              <WorkDemo><p className='text-info'>OpenAI SDK</p></WorkDemo>
            </motion.div>
        </a>
        <a href='https://github.com/JeffreyYou' target="_blank" className='a-link'>
            <motion.div 
                className='motion-box'
                whileHover={ {scale: 1.2}}
                whileTap={ {scale: 0.9}}
                transition={{ delay: 0, duration: 0.3 }}
                >
              <WorkDemo><p className='text-info'>WeChat GPT</p></WorkDemo>
            </motion.div>
        </a>
      </motion.div>
      </WorkCenter>
    </WorkWrapper>
    </div>
  )
})

export default Work