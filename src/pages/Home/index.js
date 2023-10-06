import React, { memo } from 'react'

import Intro from "../../components/intro"
const Home = memo(() => {
  return (
    <div style={{flex:1}}>
      <Intro/>
    </div>
  )
})

export default Home