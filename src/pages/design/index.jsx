import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../../components/layout'
import Gallery from "../../components/gallery"
import "../../styles/case-studies.scss"
// import { GatsbyImage, getImage} from "gatsby-plugin-image"

const ContentIndex = ({data}) => {
    return(
        <div>
            <Layout pageTitle="Design">
                <div className="cs-thumbs-container">
                    { data.allMarkdownRemark.nodes.map( content => (
                        <div className="cs-thumb" key={content.id}>
                            <div className="cs-thumb-icon-wrapper">
                                <img className="cs-thumb-icon" alt="" src={content.frontmatter.coverIcon.publicURL}/>
                            </div>
                            <div className="cs-thumb-title-wrapper">
                                <h2 className="cs-thumb-title">{content.frontmatter.title}</h2>
                            </div>
                            <div className="cs-thumb-content-wrapper">
                                <div className="cs-thumb-content">
                                    <p className="cs-thumb-subtitle">{content.frontmatter.company} | {content.frontmatter.date}</p>
                                    <Link className="cs-link" to={"/design" + content.frontmatter.slug}>
                                        <button type="button" className="cs-button">Case study</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="design-gallery-container">
                    <Gallery covers={data.allProjectsJson.nodes}></Gallery>
                </div>
            </Layout>
        </div>
    )
}

export default ContentIndex


export const pageQuery = graphql` {
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
            }
        }
    }

    allProjectsJson(filter: {category: {eq: "design"}}) {
        nodes {
        id
        caption
        title
        subtitle
        specialsize
        description
        coververt {
            publicURL
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                )
            }
        }
        coverhoz {
            publicURL
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                )
            }
        }
        }
    }
}
`