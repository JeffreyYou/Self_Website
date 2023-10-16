import React, { memo } from 'react'
import { motion } from 'framer-motion'

import {
    ContactBarWrapper,
    LogoBox
} from "./style"

import {ReactComponent as GithubLogo} from "../../assets/icons/github.svg"

import {ReactComponent as LinkedInLogo} from "../../assets/icons/linkedin.svg"
import {ReactComponent as GmailLogo} from "../../assets/icons/gmail.svg"

const ContactBar = memo(() => {
    const openPage = (link) => {
        window.open(link, "abc")
    }
  return (
    <ContactBarWrapper>

        <a href='https://github.com/JeffreyYou' target="_blank">
            <motion.div 
                className='motion-box'
                whileHover={ {scale: 1.2}}
                whileTap={ {scale: 0.9}}
                >
                <GithubLogo className='github' />
            </motion.div>
        </a>
        <a href='https://www.linkedin.com/in/jeffreyyou-540610103/' target="_blank">
            <motion.div 
                className='motion-box'
                whileHover={ {scale: 1.2}}
                whileTap={ {scale: 0.9}}><LinkedInLogo className='linkedin'/></motion.div>
        </a>
        <a href='mailto:yqse521749@gmail.com' target="_blank">
            <motion.div 
                className='motion-box'
                whileHover={ {scale: 1.2}}
                whileTap={ {scale: 0.9}}><GmailLogo className='gmail'/></motion.div>
        </a>





    </ContactBarWrapper>
  )
})

export default ContactBar