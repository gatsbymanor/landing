import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import React from "react"
import Iframe from "react-iframe"
import { graphql, Link } from "gatsby"
import { Navbar, Nav, Button } from "react-bootstrap"

export default ({ data }) => {
  const { name, demoUrl } = data.gatsbyTheme

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
          <Link to={`/demo/${name}/waitlist`} style={{ color: "white" }}>
            <Button variant="primary">
                Add me to the waitlist!
            </Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>

      <Iframe url={demoUrl} />
    </React.Fragment>
  )
}


export const themeQuery = graphql`
  query themeQuery($name: String!) {
    gatsbyTheme: contentfulGatsbyTheme(name: { eq: $name }) {
      name
      demoUrl
    }
  }
`