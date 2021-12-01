import * as React from "react"
import Gallery from "../components/gallery"
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import "../styles/index.scss"

// markup
const Illustration = () => {
    return(
        <StaticQuery 
        query={
            graphql`
            {
                allProjectsJson(filter: {category: {eq: "illustration"}}) {
                    nodes {
                    id
                    caption
                    title
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
                <Layout pageTitle="Illustration">
                <Gallery covers={data.allProjectsJson.nodes}></Gallery> 
                </Layout>  
            </div>
         )
        }/>
    )

}

export default Illustration