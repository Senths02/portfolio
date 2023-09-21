import * as React from 'react'
import {  graphql, StaticQuery, Link } from 'gatsby'
import "../styles/global.scss"
import siteName from "../images/sumi_senthi.png"


const Layout = ({ pageTitle, children }) => {
  return (
    <StaticQuery 
        query={
          graphql`
              {
                site {
                  siteMetadata {
                      title
                  }
                }
              }`
            }
        render={ data => (
          <div>
            {/* <div className="skip">
              <a href="#main">Skip to content</a>
            </div> */}
            <title>{pageTitle} | { data.site.siteMetadata.title }</title>
            {/* Nav */}
            <nav role="navigation" className="primaryNavigation">
              <div><Link aria-current="page" className="navItem home" to="/"><img className="logo" alt="" src={siteName}/></Link></div>
            <span className="vh home-title">Sumisenthi home page</span>
              <div>
                <ul className="navigationGroup">
                  <li className="navItem"><Link to="/design">Design</Link></li>
                  <li className="navItem"><Link to="/illustration">Illustration</Link></li>
                  <li className="navItem"><Link to="/else">Else</Link></li>
                </ul>
              </div>
            </nav>
            {children}
          </div>
        )
        }
  />)
}

export default Layout