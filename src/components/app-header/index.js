import React, { memo, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'


import {
  AppHeaderWrapper,
  HeaderMiddle,
} from "./style"




const AppHeader = memo(() => {

  const info = ["Home", "Expertise", "Work", "Project", "Contact"];
  const link = ["/", "/exp", "/work", "/project", "/contact"];

  const location = useLocation();
  const handler = (e, link) => {
    if (location.pathname === link) {
      // e.preventDefault();
    }
  }


  return (
    <AppHeaderWrapper>
      <HeaderMiddle>
        {
          info.map((item, index) => {
            return (
              <NavLink to={link[index]} className="topics" key={item} onClick={ (e) => handler(e, link[index])}>
                {item}
              </NavLink>
            )
          })
        }

        <div className='shadow-animation' />
      </HeaderMiddle>

    </AppHeaderWrapper >
  )
})

export default AppHeader