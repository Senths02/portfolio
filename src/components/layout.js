import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import "../styles/global.scss"

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
            siteMetadata {
                title
            }
            }
        }
        `)
  return (
    <div>
      <title>{ data.site.siteMetadata.title }: {pageTitle}</title>
      <Link to="/"><h1 className="header">{ data.site.siteMetadata.title }</h1></Link>
      {/* Nav */}
      <nav>
        <ul className="navContainer">
          <li className="navItem"><Link to="/illustration">Illustration</Link></li>
          <li className="navItem"><Link to="/design">Design</Link></li>
          <li className="navItem"><Link to="/else">&#123;Else&#125;</Link></li>
        </ul>
      </nav>
      {children}
    </div>
  )
}
export default Layout