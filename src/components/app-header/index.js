import React, { memo, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Button } from 'antd'

import {
    AppHeaderWrapper,
    HeaderMiddle,
} from "./style"


import { useSpring, animated } from '@react-spring/web'

const AppHeader = memo(() => {  

    const info = ["Home", "Expertise", "Work", "Project", "Contact"];
    const link = ["/", "/exp", "/work", "/project", "/contact"];

  return (
    <AppHeaderWrapper>
        <HeaderMiddle>
            {
              info.map( (item, index) => {
                return (
                  <NavLink to={link[index]} className="topics" key={item}> 
                    {item}
                  </NavLink>
                )
              })
            }
            <div className='shadow-animation'/>
        </HeaderMiddle>

    </AppHeaderWrapper>
  )
})

export default AppHeader