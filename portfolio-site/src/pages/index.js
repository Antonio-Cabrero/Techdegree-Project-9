import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "./Contact"

const IndexPage = () => (
  <Layout >
    <SEO title="Home" />
    <Contact />
  </Layout>
)

export default IndexPage
