import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import React from 'react'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { createGlobalStyle } from 'styled-components'
import { Navbar, Nav, Button, Jumbotron, Container, Grid, Row, Col } from "react-bootstrap"

import { SubscribeForm } from "../../components/SubscribeForm"


const GlobalStyle = createGlobalStyle`
  .async-hide { opacity: 0 !important } 

  html,
  body,
  #___gatsby,
  #___gatsby > div {
    width: 100%;
    height: 100%;
  }

  body {
    background: black;
  }

`


class IndexPage extends React.Component {

    render() {

      return (
        <div>
          <GlobalStyle />

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

          <Jumbotron style={{ 
            textAlign: "center",
            background: "white",
            borderRadius: "0",
          }}>
            <h1>{this.props.data.landingCopy.ctaHeader}</h1>
              <SubscribeForm
                mailchimp_url={`https://gatsbymanor.us17.list-manage.com/subscribe/post-json?u=6d5879814f1b3ecd3667f0c47&amp;id=433682c973`}
                success_msg="Thank you! You will get your discount code via email shortly!">
                {(submitHandler, emailHandler) =>
                  <React.Fragment>
                    <p style={{ fontSize: `1.5rem` }}>
                      {this.props.data.landingCopy.ctaBody.ctaBody}
                    </p>
                    <input
                      style={{
                        borderWidth: `1px`,
                        borderStyle: `solid`,
                        borderRadius: `1px`,
                        width: `250px`,
                        padding: `0.7rem`,
                        margin: `0 0.5rem 0.5rem 0`
                      }}
                      type="email"
                      name="email"
                      placeholder="my@email.com"
                      onChange={emailHandler}
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      onClick={(e) => submitHandler(e)}>
                      Click to subscribe
                    </Button>
                  </React.Fragment>
                }
              </SubscribeForm>
          </Jumbotron>

          <Container>
            <Row>
              {this.props.data.themes.edges.map(({ node }) => {
                const { name, waitlistUrl, demoUrl, demoImage } = node

                const { fluid } = demoImage
                return (
                  <Col sm={12} style={{ margin: "2rem 0" }}>
                    <Link to={`/demo/${name}`}>
                      <Img fluid={fluid} />
                    </Link>
                  </Col>
                )
              })}
            </Row>
          </Container>

        </div>
      )
    }
}


export default IndexPage


export const pageQuery = graphql`
  query NewShopImageQuery {
    landingCopy: contentfulCallToAction(title: { eq: "[v1][shop] send to shop" }) {
      ctaHeader
      ctaBody {
        ctaBody
      }
    }

    themes: allContentfulGatsbyTheme {
      edges {
        node {
          description {
            description
          }
          demoUrl
          name
          waitlistUrl
          demoImage {
            fluid {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }

  }
`
