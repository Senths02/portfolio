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
            <p>Hello,<br/>I'm a designer + illustrator</p> 
            
            <hr aria-hidden="true" className="solid"></hr>
            <p>After working on digital experiences for over 8 years i've learnt to value:</p>
            <p>Empathy-driven approaches <br/>for long-term solutions</p>
            <p>Being flexible with <br/> tools and technologies</p>
            <p>A playful ethos for innovation</p>
            <p>🐙</p>
            <p>I also love learning new things.</p>
            <p>I'm currently learning about the natural sciences, and the impact on technology.</p>
          </div>
          <hr aria-hidden="true" className="solid"></hr>
          <p>Open to work:</p> 
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
