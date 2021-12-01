import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  letterSpacing: "0.1em",
  padding: "1.6em",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: ".8em",
}

const headingStyles2 = {
  marginTop: 0,
  marginBottom: "1.6em",
  lineHeight: "1.4em",
}


// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <span role="img" aria-label="face screaming in fear">😱</span>
      <h1 style={headingStyles}>Oh no, you broke the internet!</h1>
      <h2 style={headingStyles2}>Just kidding, the page can't be found</h2>
      <div>
        <Link to="/">Go Home</Link>
      </div>
    </main>
  )
}

export default NotFoundPage
