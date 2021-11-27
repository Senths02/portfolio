import * as React from 'react'
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import "../styles/gallery.scss"

const Gallery = ({ covers, subcategories}) => {

     return (
        <div className="gallery-container">
            {covers.map((project) => {
                const images = withArtDirection(getImage(project.coverhoz), [
                    { 
                        media: "(max-width: 450px)", image: getImage(project.coververt),
                    },
                ]);

                return (
                    // console.log(project.cover.publicURL)
                    <GatsbyImage className="gallery-image" key={project.id} image={images} alt={project.description} />
                )
            })}
        </div>
     )
}
export default Gallery