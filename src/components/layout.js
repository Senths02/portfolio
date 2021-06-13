import * as React from 'react'
import { Link } from 'gatsby'
import "../styles/global.scss"

const Layout = ({ pageTitle, children }) => {
  return (
    <main>
      <title>{pageTitle}</title>
      <Link to="/"><h1 className="header">Sumi Senthi</h1></Link>
      {/* Nav */}
      <nav>
        <ul className="navContainer">
          <li className="navItem"><Link to="/illustration">Illustration</Link></li>
          <li className="navItem"><Link to="/design">Design</Link></li>
          <li className="navItem"><Link to="/else">&#123;Else&#125;</Link></li>
        </ul>
      </nav>
      {children}
    </main>
  )
}
export default Layout