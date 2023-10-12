import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../../components/layout'
import CaseStudyMenu from "../../components/caseStudyMenu"
import "../../styles/global.scss"

export default function CaseStudyTemplate({
  data,
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <div className="cs-content-container">
          <Layout>
          <CaseStudyMenu></CaseStudyMenu>
          <nav role="navigation" aria-label="breadcrumbs" className="breadcrumb-nav">
              <div>
                <ol className="breadcrumbGroup">
                  <li className="crumb"><Link to="/">Home</Link><span className="breadcrumb-divider" aria-hidden="true">/</span></li>
                  <li className="crumb"><Link to="/design">Design</Link><span className="breadcrumb-divider" aria-hidden="true">/</span></li>
                  <li className="crumb"><Link to={"/design" + frontmatter.slug}>{frontmatter.prettySlug}</Link></li>
                </ol>
              </div>
          </nav>
          <div className="cs-content">
          <p className="cs-subtitle">{frontmatter.company} | {frontmatter.date}</p>
            <h1 className="cs-title">{frontmatter.title}</h1>
            <div className="cs-markdown" dangerouslySetInnerHTML={{ __html: html }}></div>
          </div>
          </Layout>
        </div>
    )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "YYYY")
        slug
        prettySlug
        title
        company
        coverIcon {
            publicURL
        }
      }
    }
  }`