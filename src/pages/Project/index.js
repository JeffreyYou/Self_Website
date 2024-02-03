import React, { memo } from 'react'
import { motion } from 'framer-motion'

import { 
  WorkWrapper,
  Indent1,
  Title,
  WorkDemo,
  WorkCenter
} from './style'

const Project = memo(() => {

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

        <a href='https://github.com/JeffreyYou'  className='a-link'  rel="noreferrer">
            <motion.div 
                className='motion-box microservice'
                // whileHover={ {scale: 1.2, backgroundColor: "#105b72c2"}}
                whileHover={ {scale: 1.2}}
                whileTap={ {scale: 0.9}}
                transition={{ delay: 0, duration: 0.5 }}
                >
              <WorkDemo><p className='text-info'>Microservices Platform</p></WorkDemo>
            </motion.div>
        </a>
        <a href='https://github.com/JeffreyYou' target="_blank" className='a-link'  rel="noreferrer">
            <motion.div 
                className='motion-box ai-character'
                whileHover={ {scale: 1.2}}
                whileTap={ {scale: 0.9}}
                transition={{ delay: 0, duration: 0.3 }}
                >
              <WorkDemo><p className='text-info'>Digital Character</p></WorkDemo>
            </motion.div>
        </a>
        <a href='https://github.com/JeffreyYou/WeChatGPT-Web' target="_blank" className='a-link'  rel="noreferrer">
            <motion.div 
                className='motion-box wechat-gpt'
                whileHover={ {scale: 1.2}}
                whileTap={ {scale: 0.9}}
                transition={{ delay: 0, duration: 0.3 }}
                >
              <WorkDemo><p className='text-info'>WeChat GPT</p></WorkDemo>
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
        <a href='https://github.com/JeffreyYou/Fast-Realibal-FTP' target="_blank" className='a-link'  rel="noreferrer">
            <motion.div 
                className='motion-box fast-ftp'
                whileHover={ {scale: 1.2}}
                whileTap={ {scale: 0.9}}
                transition={{ delay: 0, duration: 0.3 }}
                >
              <WorkDemo><p className='text-info'>File Transfer Protocol</p></WorkDemo>
            </motion.div>
        </a>
        <a href='https://github.com/JeffreyYou/OpenAI_SDK' target="_blank" className='a-link'  rel="noreferrer">
            <motion.div 
                className='motion-box open-ai'
                whileHover={ {scale: 1.2}}
                whileTap={ {scale: 0.9}}
                transition={{ delay: 0, duration: 0.3 }}
                >
              <WorkDemo><p className='text-info'>OpenAI SDK</p></WorkDemo>
            </motion.div>
        </a>
        <a href='https://github.com/JeffreyYou/Self_Website' target="_blank" className='a-link'  rel="noreferrer">
            <motion.div 
                className='motion-box website'
                whileHover={ {scale: 1.2}}
                whileTap={ {scale: 0.9}}
                transition={{ delay: 0, duration: 0.3 }}
                >
              <WorkDemo><p className='text-info'>Portfolio Website</p></WorkDemo>
            </motion.div>
        </a>
      </motion.div>
      </WorkCenter>
    </WorkWrapper>
    </div>
  )
})

export default Project