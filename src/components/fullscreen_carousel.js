import * as React from 'react'

const FullscreenCarousel = ({ covers, subcategories}) => {

     return (
        <div>
            {covers.map((project) => {
                return (
                    // console.log(project.cover.publicURL)
                    <img key={project.id} src={project.cover.publicURL}/>
                )
            })}
        </div>
     )
}
export default FullscreenCarousel