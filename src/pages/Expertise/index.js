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
      title1: "Programming Language ",
      content1: "Java, Python, C++, Javascript, Shell, etc. ",
      title2: "Java Core & Testing ",
      content2: "OOP, Collections Framework, Multithreading, ExecutorService, JVM, Garbage Collection, Swagger, JMeter, Junit5, Mockito, Jacoco.",
      title3: "Database ",
      content3: "MySQL, MongoDB, Redis, Hibernate, MyBatis, Spring Data Repository.",
      title4: "Spring Framework ",
      content4: "Spring Boot, Spring MVC, Spring AOP, Spring Security, Spring Cloud.",
      title5: "Design Pattern ",
      content5: "MVC (Model-View-Controller), DDD (Domain-Driven Design), TDD (Test-Driven Development)",

      // content4: "Tools: Git, Linux, AWS, Postman, Swagger, Agile, Maven, Nginx, JMeter, Jvisualvm "
    },
    {
      title: "Frontend",
      underline: "#2d49d8",
      stack: "React, NextJS",
      title1: "Frontend Technology ",
      content1: "HTML, CSS, JavaScript, React, Next.js.",
      title2: "Javascript ",
      content2: "Promise, Event Loop, TypeScript, DOM, Async/Await, Module, Closure, ES6.",
      title3: "React & Next.js ",
      content3: "React Hooks, React Router, Redux, Zustand, Webpack, Immutable, Server Side Rendering (SSR), Search Engine Optimization (SEO).", 
      title4: "Network & Security ",
      content4: "Restful APIs, HTTP, Websocket, SSL/TSL, AJAX, Cookie, JWT, CORS, Web Storage, OAuth2.0.",
      title5: "Styling & UI Libraries & Animation",
      content5: "Flex Box, SCSS, Styled Component, Framer Motion, React Spring, Ant Design.",      
    },
    {
      title: "Microservice",
      underline: "#ff6b2b",
      stack: "Docker, CloudComputing",
      title1: "Cloud Technology",
      content1: "Docker, AWS, SpringCloud, Kubernetes.",
      title2: "Microservice ",
      content2: "Eureka, Zookeeper, Nacos, SpringCloud Gateway, Kafka, RabbitMQ, OpenFeign, Sentinel, Hystrix, Sleuth, Zipkin.",
      title3: "Technology & Tools ",
      content3: "Git, Linux, Vim, Postman, Agile, Slack, Draw.io, Maven, Nginx, Virtual Box, LangChain, LlamaIndex, OpenAI.",
      title4: "Cloud Service ",
      content4: "AWS (RDS, S3, EC2), Cloudflare, Firebase, Vercel.",
      title5: "CI / CD ",
      content5: "GitHub Actions, Docker Compose, Jenkins, Kubernetes, Prometheus.",
    }

  ]

  return (
    // <motion.div
    // initial={{ x: "-100%" }}
    // animate={{ x: 0 }}
    // exit={{ x: "-100%" }}
    // >
    <div style={{height:"100vh"}}>
      <ExpertiseWrapper>
        <ExpertiseTop/>
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
    </div>
  )
})

export default Expertise