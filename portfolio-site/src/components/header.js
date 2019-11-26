import PropTypes from "prop-types"
import React from "react"
import Navbar from './Navbar'
import css from '../styles/header.module.css'

const Header = ({ siteTitle, handleNavbar }) => (
  
  <header className={css.Header}>
    <div className={css.Header_container}>
      <h1 className={css.Header_title}>   {siteTitle}    </h1>
      <Navbar handleClick={handleNavbar}/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
