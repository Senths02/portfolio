import * as React from 'react'
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import "../styles/gallery.scss"

const Gallery = ({ covers }) => {

     return (
        <div className="gallery-container">
            {covers.map((project) => {
                const image = withArtDirection(getImage(project.coverhoz), [
                    { 
                        media: "(max-width: 576px)", image: getImage(project.coververt),
                    },
                ]);

                return (
                    // console.log(project.cover.publicURL)
                    <div key={project.id} >
                        <GatsbyImage className="gallery-image" image={image} alt={project.description} loading="lazy"/>
                        <p className="image-caption" >{project.caption}</p>
                        {(project.process)? <p className="contributions">{project.process.contributions}</p>: null}
                    </div>
                )
            })
            }
        </div>
     )
}
export default Gallery