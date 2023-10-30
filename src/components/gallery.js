import * as React from 'react'
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import "../styles/gallery.scss"

const Gallery = ({ covers }) => {

     return (
        <div className="gallery-container">
            {covers.map((project) => {
                const image = withArtDirection(getImage(project.coverhoz), [
                    { 
                        media: "(max-width: 480px)", image: getImage(project.coververt),
                    },
                ]);

                return (
                    // console.log(project.cover.publicURL)
                    <div className={"gallery-item " + project.specialsize} key={project.id} >
                        {(project.title)? <h2 className='image-title'>{project.title}</h2>: null}
                        {/* {(project.subtitle) ? <p className='image-subtitle'>{project.subtitle}</p> : null } */}
                        <GatsbyImage className={"gallery-image " + project.specialsize} image={image} alt={project.description} loading="lazy"/>
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