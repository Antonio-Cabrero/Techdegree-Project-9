/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import css from "../styles/layout.module.css"

const Layout = ({ children, handleMenu }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <div className={css.Layout_wrap}>
      <Header siteTitle={data.site.siteMetadata.title} handleNavbar={handleMenu}/>
      
        <main className={css.Layout_main}>{children}</main>
      
      <footer style={{
        background: "transparent",
        color: "white",
        margin: "2em auto",
        maxWidt: "fit-contnent",
        marginBottom: "auto"
      }}> Some Social Media here</footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
