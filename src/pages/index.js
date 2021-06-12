import * as React from "react"
import InstagramIcon from "../icons/instagram_icon.svg"
import TwitterIcon from "../icons/twitter_icon.svg"
import LinkedInIcon from "../icons/linkedin_icon.svg"
import "../styles/global.scss"

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Sumi Senthi</title>
      <h1 className="header">Sumi Senthi</h1>
      {/* Nav */}
      <div className="bio">
        <p>Illustrator + Designer, <br /> exploring the intersections of Art, Data and Technology.</p>
        <p>Mostly I just like making stuff...</p>
      </div>
      <div className="social">
        <a className="social-icon" href='https://www.instagram.com/sumiscribblebot/'><img src={InstagramIcon} /></a>
        <a className="social-icon" href='https://twitter.com/SumiSenthi'><img src={TwitterIcon} /></a>
        <a className="social-icon" href='https://www.linkedin.com/in/sumisenthi/'><img src={LinkedInIcon} /></a>
      </div>
      <a className="email" href='mailto:sumisenthiart@gmail.com'>sumisenthiart at gmail dot com</a>
    </main>
  )
}

export default IndexPage
