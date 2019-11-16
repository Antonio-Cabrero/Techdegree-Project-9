import React, { useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import About from "./about"
import Skills from './skills'
import Projects from './projects'
import Contact from './contact'
import { useTransition, animated } from "react-spring"

const IndexPage = () => {

  const [contentIndex, setContentIndex] = useState(0)
  const contentArr = [
     ({style}) => <animated.div style={{...style}}> <About /> </animated.div>,
     ({style}) => <animated.div style={{...style}}> <Skills /> </animated.div>, 
     ({style}) => <animated.div style={{...style}}> <Projects /> </animated.div>,
     ({style}) => <animated.div style={{...style}}>  <Contact /> </animated.div>,
  ]

  const onNavbarClick = (button) => {

    const target = button.target.innerText
    switch (target) {
      case "ABOUT" :  return setContentIndex(0)
      case "SKILLS":  return setContentIndex(1)
      case "PROJECTS": return setContentIndex(2)
      case "CONTACT": return setContentIndex(3)
    }
  }
  const transition = useTransition(contentIndex , p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
  })

  return ( 
  <Layout handleMenu={onNavbarClick}>
    <SEO title="home" />      
    {transition.map(({item, props , key}) => {
      const Page = contentArr[item]
      return <Page key={key} style={props} />
    })}
  </Layout>
  )
}

export default IndexPage
