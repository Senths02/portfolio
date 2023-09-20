import * as React from "react"
import { graphql } from "gatsby"
// import { GatsbyImage, getImage} from "gatsby-plugin-image"

export default function CaseStudyTemplate({
  data,
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <div>
        {/* <GatsbyImage image={getImage(frontmatter.coverImage)} alt="cmimage" /> */}
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.company} | {frontmatter.date}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
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
        title
        company
        coverIcon {
            publicURL
        }
      }
    }
  }
`