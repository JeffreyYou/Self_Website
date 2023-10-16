import React, { memo } from 'react'
import { motion } from 'framer-motion'

import SkillBar from '../../components/skill-bar'

import { ReactComponent as ReactLogo } from "../../assets/icons/react.svg"
import { ReactComponent as ComputerLogo } from "../../assets/icons/computer.svg"
import { ReactComponent as DockerLogo } from "../../assets/icons/docker.svg"

import {
  ExpertiseWrapper,
  ExpertiseContent,
  Title,
  List
} from './style'

const Expertise = memo(() => {
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

  const data = [
    {
      title: "Backend",
      underline: "#e0058d",
      stack: "Java, SpringBoot",
      content1: "Programming Languages: Java, Python, C++, Shell.",
      content2: "Framework: Spring, SpringBoot",
      content3: "Databse: MySQL, Redis, MongoDB, MyBatis, Hibernate",
      content4: "Spring Cloud, Nacos, Feing"
    },
    {
      title: "Frontend",
      underline: "#2d49d8",
      stack: "React, NextJS",
      content1: "HTML/CSS, Javascript, React.js, Next.js",
      content2: "Spring framework, SpringBoot",
      content3: "HTTP, WebSocket",
      content4: "Spring Cloud, Nacos, Feing"
    },
    {
      title: "Dev-Ops",
      underline: "#ff6b2b",
      stack: "Docker, Microservice",
      content1: "Docker, Jenkins, Kubernetes",
      content2: "Spring framework, SpringBoot",
      content3: "HTTP, WebSocket",
      content4: "Spring Cloud, Nacos, Feing"
    }

  ]

  return (
    <motion.div
    // initial={{ x: "-100%" }}
    // animate={{ x: 0 }}
    // exit={{ x: "-100%" }}
    >
      <ExpertiseWrapper>

        <ExpertiseContent>
          <motion.div
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0, duration: 0.3 }}
          >
            <Title>My Expertise</Title>
          </motion.div>

          <List>
            <motion.div
              variants={transitionVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <SkillBar data={data[0]} svgComponent={<ComputerLogo style={{ width: "45px", height: "45px" }} />} />
              <SkillBar data={data[1]} svgComponent={<ReactLogo style={{ width: "50px", height: "50px" }} />} />
              <SkillBar data={data[2]} svgComponent={<DockerLogo style={{ width: "50px", height: "50px" }} />} />
            </motion.div>
          </List>
        </ExpertiseContent>
      </ExpertiseWrapper>
    </motion.div>
  )
})

export default Expertise