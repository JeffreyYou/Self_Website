import React, { memo } from 'react'

import { 
    IntroWrapper,
    IntroTop,
    IntroMiddle,
    IntroBottom
} from './style'

const Intro = memo(() => {
  return (
    <IntroWrapper>
        <IntroTop>
            <div className='hello'>Hello, my name is</div>
        </IntroTop>

        <IntroMiddle>
            <div>Qinsongen You</div>

        </IntroMiddle>

        <IntroBottom/>


    </IntroWrapper>
  )
})

export default Intro