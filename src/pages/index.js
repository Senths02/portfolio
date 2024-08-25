import * as React from "react"
import Layout from '../components/layout'
import "../styles/index.scss"
import profilePic from "../images/sumi_senthi_avatar.png"

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <main className="homeContainer">
        <div className="homeContent">
        <img alt="Sketch of Sumi with black framed glasses, in ink and pencil crayons" className="profile-picture" src={profilePic}/>
          <div className="bio">
            <p>Hello,<br/>I'm a designer + illustrator</p> 
            
            <hr aria-hidden="true" className="solid"></hr>
            <p>After working on digital experiences for over 8 years, i've learnt to value:</p> 
            <p>Human-centred approaches <br /> for effective solutions</p>
            <p>Play, as a driver for <br /> creativity and innovation</p>
            <p>🐙</p>
            <p>I have worked on:</p>
            <p>Web, mobile, and TV apps, explainer animations, and data visualisations</p>
          </div>
          <hr aria-hidden="true" className="solid"></hr>
          <ul className="contact">
            <li className="contactItem"><a href='mailto:sumi.senthinathan@gmail.com'>Email</a></li>
            <li className="contactItem"><a href='https://www.linkedin.com/in/sumisenthi/'>LinkedIn</a></li>
            {/* <li className="contactItem"><a href='https://www.instagram.com/sumishaped/'>Instagram</a></li> */}
          </ul>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
