import * as React from 'react'
import {  graphql, StaticQuery, Link } from 'gatsby'
import "../styles/global.scss"
import "../styles/case-studies.scss"


const CaseStudyMenu = () => {
  return (
    <StaticQuery 
        query={
          graphql`
              {
                allMarkdownRemark {
                  nodes {
                      html
                      id
                      frontmatter {
                          date(formatString: "YYYY")
                          slug
                          title
                          company
                          coverIcon {
                              publicURL
                          }
                          iconLight {
                            publicURL
                          }
                      }
                  }
                }
              }`
            }
        render={ data => (
          <div>
            <nav role="navigation" className="cs-menu">
              <div>
                <ul className="cs-menu-group">
                { data.allMarkdownRemark.nodes.map( cs => (
                  <li key={cs.id} className="cs-menu-item">
                    <Link className="cs-menu-link" to={"/design" + cs.frontmatter.slug}>
                      <button className="cs-menu-button">
                        <img className="cs-menu-icon" alt="" src={cs.frontmatter.coverIcon.publicURL}/>
                        <img className="cs-menu-icon" alt="" src={cs.frontmatter.iconLight.publicURL}/>
                        <p>{cs.frontmatter.slug}</p>
                      </button>
                    </Link>
                  </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        )
        }
  />)
}

export default CaseStudyMenu