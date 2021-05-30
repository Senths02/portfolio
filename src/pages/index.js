import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Sumi's Portfolio</title>
      <h1 style={headingStyles}>
        Under Construction - Come back soon
        <br />
        <span role="img" aria-label="Octopus emojis">
          🐙🐙🐙
        </span>
      </h1>
    </main>
  )
}

export default IndexPage
