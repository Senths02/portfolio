import * as React from "react"
import Layout from '../components/layout'
import "../styles/index.scss"
import profilePic from "../images/sumi_senthi_avatar.png"

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <main className="homeContainer">
      {/* <div aria-hidden="true" className="homeImage"></div> */}
        <div className="homeContent">
        <img alt="Sketch of Sumi with black framed glasses, in ink and pencil crayons" className="profile-picture" src={profilePic}/>
          <div className="bio">
            <p>Hello. <br/> I'm a human-centred Designer and Illustrator. My focus has been on emerging technologies and editorial content for the past 6 years.</p>
          </div>
          <hr aria-hidden="true" className="solid"></hr>
          <ul className="contact">
            <li className="contactItem"><a href='mailto:sumisenthiart@gmail.com'>Email</a></li>
            <li className="contactItem"><a href='https://www.linkedin.com/in/sumisenthi/'>LinkedIn</a></li>
            {/* <li className="contactItem"><a href='https://www.instagram.com/sumishaped/'>Instagram</a></li> */}
          </ul>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
