import * as React from "react"
import Layout from '../components/layout'
import InstagramIcon from "../icons/instagram_icon.svg"
import TwitterIcon from "../icons/twitter_icon.svg"
import LinkedInIcon from "../icons/linkedin_icon.svg"
import "../styles/index.scss"

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <main>
        <div className="homeContent">
          <div className="bio">
            <p>Illustrator + Designer, <br /> exploring the intersections of Art, Data and Technology.</p>
            <p>Mostly I just like making stuff...</p>
          </div>
          <ul className="social">
            <li className="social-icon"><a href='https://www.instagram.com/sumiscribblebot/'><img src={InstagramIcon} /></a></li>
            <li className="social-icon"><a href='https://twitter.com/SumiSenthi'><img src={TwitterIcon} /></a></li>
            <li className="social-icon"><a href='https://www.linkedin.com/in/sumisenthi/'><img src={LinkedInIcon} /></a></li>
          </ul>
          <a className="email" href='mailto:sumisenthiart@gmail.com'>sumisenthiart at gmail dot com</a>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
