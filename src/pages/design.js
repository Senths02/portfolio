import * as React from "react"
import Gallery from "../components/gallery"
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import "../styles/index.scss"

// markup
export default function Design() {
    return(
        <StaticQuery 
        query={
            graphql`
            {
                allProjectsJson(filter: {category: {eq: "design"}}) {
                    nodes {
                    id
                    subcategory
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
                <Layout pageTitle="Design">
                <Gallery covers={data.allProjectsJson.nodes}></Gallery> 
                </Layout>  
            </div>
         )
        }/>
    )

}