import React, { memo } from 'react'

import {
    ContactBarWrapper
} from "./style"

import GithubLogo from "../../assets/icons/github.svg"
const ContactBar = memo(() => {
  return (
    <ContactBarWrapper>
        <img className='github' src={GithubLogo}>Github</img>
        <div className='LinkedIn'>Github</div>
        <div className='github'>Github</div>
    </ContactBarWrapper>
  )
})

export default ContactBar