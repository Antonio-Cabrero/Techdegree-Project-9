import React, { useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import About from "./about"
import Skills from './skills'
import Projects from './projects'
import Contact from './contact'

const IndexPage = () => {

  const [content, setContent] = useState(<About />)

  const onNavbarClick = (button) => {

    const target = button.target.innerText
    switch (target) {
      case "ABOUT" : return setContent(<About />)
      case "SKILLS": return setContent(<Skills />)
      case "PROJECTS": return setContent(<Projects />)
      case "CONTACT": return setContent(<Contact />)
    }
  }

  return ( 
  <Layout handleMenu={onNavbarClick}>
    <SEO title="home" />
    {content}
  </Layout>
  )
}

export default IndexPage
