import React, { memo, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, motionValue } from "framer-motion";
import { InfoWrapper } from './style';
// import { LoremIpsum } from "./components/LoremIpsum";
const Info = memo(() => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 30,
    restDelta: 0.001
  });


  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  function Content({ id }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    // console.log(scrollYProgress)
    const y = useParallax(scrollYProgress, 300);

    return (
      <section>
        <div ref={ref}>
          {/* <div className='title'>MidJourney</div> */}
          <div className='placeholder'></div>
        </div>
        <motion.h2 className='text' style={{ y }}>{`#00${id}`}</motion.h2>
      </section>
    );
  }
  return (

    <div>
      <InfoWrapper>
        <motion.div
          className="progress-bar"
          style={{ scaleX }}
        />
        <div>123</div>
        {[1, 2, 3, 4, 5].map((image) => (
          <Content id={image} />
        ))}
      </InfoWrapper>
    </div>
  )
})

export default Info