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
  List,
  ExpertiseTop
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
      content1: "Proficient in OOP languages such as Java, Python, C++, etc. ",
      content2: "Java Core: JVM, Multithreading, Collections Framework, Garbage Collection, Thread Pool",
      content3: "Database: MySQL, MongoDB, Redis, Master Slave Replication, ElasticSearch ",
      // , Partitioning, Sharding, Caching
      content4: "Framework: Spring, SpringBoot, Maven, Hadoop, MyBatis",
      content5: "Tools: Git, Linux, AWS, Postman, Agile, Swagger API, JMeter, Jvisualvm, Slack, Drawio"

      // content4: "Tools: Git, Linux, AWS, Postman, Swagger, Agile, Maven, Nginx, JMeter, Jvisualvm "
    },
    {
      title: "Frontend",
      underline: "#2d49d8",
      stack: "React, NextJS",
      content1: "Experienced in HTML/CSS, Javascript, React, Next.js",
      content2: "Style Pattern: SCSS, Styled Component, Tailwind, Framer Motion, React Spring, Ant Design",
      content3: "Tools: React Hooks, React Router, Redux, Zustand, webpack", 
      content4: "Network: HTTPs, Websocket, SSL, Axios, Cookie, Session, Token ",
      content5: "Optimization: Immutable, Role-Based Access Control, Server Side Rendering (SSR), Search Engine Optimization (SEO)",      
    },
    {
      title: "Microservice",
      underline: "#ff6b2b",
      stack: "Docker, SpringCloud",
      content1: "Skilled in Docker, AWS, CI/CD, SpringCloud,",
      content2: "Components: Nacos, Eureka, SpringCloud Gateway, SpringCloud Security, Kafka, OpenFeign, Redission, ",
      content3: "API Gateway: Route, Filter, Predicate, Load Balancing, Distributed Session, ",
      content4: "Security: Distributed lock, Rate Limiter, Circuit Breaker, OAuth2 ",
      content5: "Dev-Ops: Docker, Jenkins, Kubernetes, Prometheus",
    }

  ]

  return (
    // <motion.div
    // initial={{ x: "-100%" }}
    // animate={{ x: 0 }}
    // exit={{ x: "-100%" }}
    // >
      <ExpertiseWrapper>
        <ExpertiseTop/>
        <ExpertiseContent>
          <motion.div
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <Title>My Expertise</Title>
          </motion.div>

          <List>
            <motion.div
              variants={transitionVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <SkillBar data={data[0]} svgComponent={<ComputerLogo style={{ width: "45px", height: "45px" }} />} />
              <SkillBar data={data[1]} svgComponent={<ReactLogo style={{ width: "50px", height: "50px" }} />} />
              <SkillBar data={data[2]} svgComponent={<DockerLogo style={{ width: "50px", height: "50px" }} />} />
            </motion.div>
          </List>
        </ExpertiseContent>
      </ExpertiseWrapper>
    // </motion.div>
  )
})

export default Expertise