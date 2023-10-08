import * as React from "react"
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Gallery from "../components/gallery"
import "../styles/index.scss"
import "../styles/else.scss"


// markup
const Else = () => {
    return(
        <StaticQuery 
        query={
            graphql`
            {
                allProjectsJson(filter: {category: {eq: "else"}}) {
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
            }`
        }
        render={ data => (
            <div>
                <Layout pageTitle="Else">
                    {/* <p className="page-description">Small experiments with generative art, data art and emerging technologies.</p> */}
                    <Gallery covers={data.allProjectsJson.nodes}></Gallery> 
                </Layout>  
            </div>
         )
        }/>
    )

}

export default Else