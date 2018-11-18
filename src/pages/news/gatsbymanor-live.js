import 'semantic-ui-css/semantic.min.css'
import React from 'react'

import {
  Container,
  Header,
  Button,
  Menu,
} from 'semantic-ui-react'

import { SubscribeForm } from "../../components/SubscribeForm"
import { graphql } from "gatsby"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #___gatsby,
  #___gatsby > div {
    width: 100%;
    height: 100%;
  }

  #___gatsby > div {
    display: grid;
  }
`


class IndexPage extends React.Component {

    render() {

      return (
        <div>
          <GlobalStyle />

          <Container>
            <Menu text>
              <Menu.Item style={{
                fontSize: `1.5rem`
              }}>
                Gatsby Manor
              </Menu.Item>
            </Menu>
          </Container>

          <Container>
            <Container textAlign='center'>
              <Header
                style={{
                  fontSize: `2.5rem`
                }}>
                {this.props.data.landingCopy.ctaHeader}
              </Header>

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
                      color='blue'
                      onClick={(e) => submitHandler(e)}>
                      Click to subscribe
                    </Button>
                  </React.Fragment>
                }
              </SubscribeForm>
            </Container>

            <Container
              textAlign='center'
              style={{
                margin: `5rem 0`
              }}>
              <div style={{
                fontSize: `1.5rem`,
                textAlign: "center",
              }}>
                <a href="https://gatsbymanor.com">Subscribe then click here to visit the gatsby themes shop!</a>
              </div>
            </Container>
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
  }
`
