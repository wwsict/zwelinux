import * as React from 'react'
import { Link } from 'gatsby'


const IndexPage = () => {
  return(
    <main>
      <h1>My Gatsby My Love</h1>
      <Link to="/about">About</Link>
      <p>New to Gatsby, Welcome Me!</p>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage