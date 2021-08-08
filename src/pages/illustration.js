import * as React from "react"
import FullscreenCarousel from "../components/fullscreen_carousel"
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import "../styles/index.scss"

// markup
const Illustration = () => {

    const data = useStaticQuery(graphql`
    {
        allProjectsJson(filter: {category: {eq: "illustration"}}) {
            nodes {
            id
            cover {
                publicURL
            }
            subcategory
            title
            }
        }
    }`);

  return (
    <Layout pageTitle="Illustration">
        <FullscreenCarousel covers={data.allProjectsJson.nodes}></FullscreenCarousel>
    </Layout>
  )
}



export default Illustration