import 'semantic-ui-css/semantic.min.css';

import React from 'react'
import styled from "styled-components";
import {
  Grid,
  Icon,
  Card,
  Container,
  Header,
  Button,
  Modal,
  Menu,
} from 'semantic-ui-react'

import { SubscribeForm } from "../components/SubscribeForm"
import { JumprockForm } from "../components/JumprockForm"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout.js"


export default function DocsTemplate({ data }) {

  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (


    <Layout>
      <Container>

        <Grid stackable>
          <Grid.Row>
            <Grid.Column>

              <div>
                <div>
                  <h1>{frontmatter.title}</h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </div>
              </div>

              <Container style={{
                padding: '4rem'
              }}>
                <SubscribeForm
                  mailchimp_url={`https://gatsbymanor.us17.list-manage.com/subscribe/post-json?u=6d5879814f1b3ecd3667f0c47&amp;id=a66cece897`}
                  success_msg="Thanks for signing up! You will get a message when we have a new update!">
                  {(submitHandler, emailHandler) =>
                    <React.Fragment>
                      <h2 style={{
                        fontSize: `2rem`
                      }}>
                        Subscribe to the latest news on Gatsby themes.
                      </h2>
                      <p style={{
                        fontSize: `1.2rem`
                      }}>
                        Get updates on themes announcements, and new features in your inbox!
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

            </Grid.Column>
          </Grid.Row>
        </Grid>


      </Container>
    </Layout>

  )
}

export const pageQuery = graphql`
  query DocsPageQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
