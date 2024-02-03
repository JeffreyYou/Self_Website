import React, { memo, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, motionValue } from "framer-motion";
import {
  InfoWrapper,
  AboutMe,
  ImageWrapper,
  Image
} from './style';
// import { LoremIpsum } from "./components/LoremIpsum";
const Info = memo(() => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const transitionVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    }
  }


  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  function Content({ id }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    // console.log(scrollYProgress)
    const y = useParallax(scrollYProgress, 10);
    return (
      <section>
        <div ref={ref} style={{display: 'flex', flexDirection:'column', alignItems: 'flex-end'}}>
          <div className='placeholder'>
            <AboutMe>
              <div style={{ fontSize: '60px', padding: '50px', height:'100px', width: '100%', display: 'flex', justifyContent: 'center' }}>Hi, There!</div>
              <div style={{ display:'flex', flexDirection:'column', height: 'calc(100% - 200px)'}}>
                <div style={{ fontSize: '22px', padding: '0 50px 50px' }}>My Name is Jeffrey (Qinsongen) You, Nice to meet you!</div>
                <div style={{ fontSize: '22px', padding: ' 50px' }}>I'm a full-stack software enginner with the passion and enthusiasm to embarce the new and innovating technologies. Technology has become a big part of all of our lives, and I seek to become a big part of tech as well.</div>
                <div style={{ fontSize: '22px', padding: ' 50px' }}>I bevelie the hardest part of anything is starting it. Always say Watch Me, not Why Me.</div>
              </div>
            </AboutMe>
            <ImageWrapper><Image /></ImageWrapper>
          </div>
          <button>RESUME</button>
        </div>
        {/* <motion.h2 className='text' style={{ y }}>{`#00${id}`}</motion.h2> */}
        <motion.h2 className='text' style={{ y, visibility: 'hidden' }}>{`#00${id}`}</motion.h2>
      </section>
    );
  }
  return (

    <div>
      <InfoWrapper>
        <motion.div
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0, duration: 0.3 }}>
            {/* <motion.div
              className="progress-bar"
              style={{ scaleX }}

            />
            {[1, 2, 3, 4, 5].map((image) => (
              <Content id={image} />
            ))} */}
            <Content id={1} />
        </motion.div>
      </InfoWrapper>
    </div>
  )
})

export default Info