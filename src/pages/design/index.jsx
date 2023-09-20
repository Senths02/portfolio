import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../../components/layout'
import Gallery from "../../components/gallery"
import "../../styles/case-studies.scss"
// import { GatsbyImage, getImage} from "gatsby-plugin-image"

const ContentIndex = ({data}) => {
    return(
        <div>
            <Layout pageTitle="Design">
                <div className="case-studies-container">
                    { data.allMarkdownRemark.nodes.map( content => (
                        <div className="case-study-cover" key={content.id}>
                            <div className="cover-icon-wrapper">
                                <img className="cover-icon" alt="" src={content.frontmatter.coverIcon.publicURL}/>
                            </div>
                            <div className="case-study-title-wrapper">
                                <h2 className="case-study-title">{content.frontmatter.title}</h2>
                            </div>
                            <div className="cover-content-wrapper">
                                <div className="cover-content">
                                    <p className="image-subtitle">{content.frontmatter.company} | {content.frontmatter.date}</p>
                                    <Link className="case-study-link" to={"/design" + content.frontmatter.slug}>
                                        <button type="button" className="case-study-button">Case study</button>
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