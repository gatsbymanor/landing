import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import React from "react"
import Iframe from "react-iframe"
import { graphql, Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

export default ({ data }) => {
  const { waitlistUrl } = data.gatsbyTheme

  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to={`/news/gatsbymanor-live`}>Gatsby Manor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to={`/news/gatsbymanor-live`}>
              Home
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Iframe url={waitlistUrl} />
    </React.Fragment>
  )
}


export const themeQuery = graphql`
  query themeWaitlistFormQuery($name: String!) {
    gatsbyTheme: contentfulGatsbyTheme(name: { eq: $name }) {
      name
      waitlistUrl
    }
  }
`