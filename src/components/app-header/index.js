import React, { memo, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import {
  AppHeaderWrapper,
  HeaderMiddle,
} from "./style"




const AppHeader = memo(() => {

  const info = ["Home", "Expertise", "Work", "Project", "Contact"];
  const link = ["/", "/exp", "/work", "/project", "/contact"];

  // const location = useLocation();
  // const handler = (e, link) => {
  //   if (location.pathname === link) {
  //     // e.preventDefault();
  //   }
  // }
  // const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [buttonIndex, setButtonIndex] = useState(0);
  const navigate = useNavigate();
  const handleNavigation = (path, index) => {
    // setLoading(true);
    setButtonIndex(index)
    setTimeout(() => {
      navigate(path)
    }, 200);
  };

  return (
    <AppHeaderWrapper>
      <HeaderMiddle>
        {
          info.map((item, index) => {
            return (
              <div className={`topics ${buttonIndex === index ? 'active' : '' }` } key={item} onClick={()=> handleNavigation(link[index], index) }>
                {item}
              </div>
            )
          })
        }

        <div className='shadow-animation' />
      </HeaderMiddle>

    </AppHeaderWrapper >
  )
})

export default AppHeader