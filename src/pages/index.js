import * as React from "react"
import Layout from '../components/layout'
import "../styles/index.scss"
import profilePic from "../images/sumi_senthi_avatar.png"

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <main className="homeContainer">
      <div aria-hidden="true" className="homeImage"></div>
        <div className="homeContent">
        <img alt="Portrait of Sumi with black framed glasses, in ink and pencil crayons" className="profile-picture" src={profilePic}/>
          <div className="bio">
            <p>Currently at the BBC working on UX/UI's, Data Vis, Illustrations, 3D Environments, and Animated Explainers.</p>
          </div>
          <ul className="contact">
            <li className="contactItem"><a href='mailto:sumisenthiart@gmail.com'>Email</a></li>
            <li className="contactItem"><a href='https://www.linkedin.com/in/sumisenthi/'>LinkedIn</a></li>
            <li className="contactItem"><a href='https://www.instagram.com/sumishaped/'>Instagram</a></li>
          </ul>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
