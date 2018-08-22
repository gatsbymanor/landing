import 'semantic-ui-css/semantic.min.css';
import React from 'react'
import Img from "gatsby-image"
import styled from "styled-components";
import chatAnim from '../images/chat.gif'
import {
  Grid,
  Icon,
  Card,
  Container,
  Header,
  Button,
  Modal,
  Menu,
  Image,
} from 'semantic-ui-react'

import { starters } from "../data/starters"
import { SubscribeForm } from "../components/SubscribeForm"
import { JumprockForm } from "../components/JumprockForm"
import { Link, graphql } from "gatsby"

const styledJumbotron = styled(Container)`
  margin: 5rem auto auto auto;
`;

const StyledCard = styled.div`
  &&& {
    margin: 2rem auto auto auto;
  }
`

const StyledIcon = styled.i`
  &&& {
    margin-top: 20px;
    font-size: 2rem;
  }
`

const EXPERIMENT_NAME = "buy_test_2018_07_06"

class IndexPage extends React.Component {

    state = {
      links: starters,
      open: false,
      requestStarterModal: false,
    }

    trackClick = (gaEvent) => {
      // need this because of gatsby rendering
      if (window.ga) {
        window.ga('send', gaEvent);
      }
    }

    // FIXME: Duplicate. Used for subscribe button modal
    show = () => {
      this.trackClick({
        hitType: 'event',
        eventCategory: 'modal',
        eventAction: `open_subscribe`,
        eventLabel: EXPERIMENT_NAME,
        transport: 'beacon',
      })

      this.setState({ open: true })
    }

    close = () => this.setState({ open: false })

    // FIXME: Duplicate. Used for requestStarter card modal
    showRequestStarterModal = () => {
      this.trackClick({
        hitType: 'event',
        eventCategory: 'modal',
        eventAction: `open_request_stater`,
        eventLabel: EXPERIMENT_NAME,
        transport: 'beacon',
      })

      this.setState({ requestStarterModal: true })
    }

    closeRequestStarterModal = () => this.setState({ requestStarterModal: false })

    goToTwitter = () => {
      this.trackClick({
        hitType: 'event',
        eventCategory: 'social_networks',
        eventAction: `visit_twitter`,
        eventLabel: 'visit_external_link',
        transport: 'beacon',
      })

      window.open(`https://twitter.com/thegatsbymanor`)
    }

    trackViewStarter = (name) => {
      this.trackClick({
        hitType: 'event',
        eventCategory: 'starters',
        eventAction: `view_${name}`,
        eventLabel: EXPERIMENT_NAME,
        transport: 'beacon',
      })
    }

    render() {
      const { open, requestStarterModal } = this.state
      console.log(this.props);

      return (
        <div>

          <Container>
            <Menu text>
              <Menu.Item as={Link} to="/" style={{
                fontSize: `1.5rem`
              }}>
                Gatsby Manor
              </Menu.Item>
            </Menu>

            <Container as={styledJumbotron} textAlign='center'>
              <Header
                style={{
                  fontSize: `2.5rem`
                }}>
                Themes for Gatsby
              </Header>

              <SubscribeForm
                mailchimp_url={`https://gatsbymanor.us17.list-manage.com/subscribe/post-json?u=6d5879814f1b3ecd3667f0c47&amp;id=a66cece897`}
                success_msg="Thanks for signing up! You will get a message when we have a new update!">
                {(submitHandler, emailHandler) =>
                  <React.Fragment>
                    <p style={{ fontSize: `1.5rem` }}>
                      Hi there <span role='img' aria-label="greeting wave emoji">👋🏽</span>, you probably came here after reading our announcement article on Gatsbyjs.org.
                      Our previous solution to Gatsby themes was hard to use <span role='img' aria-label="sweat smile emoji">😅</span>.
                      We are working on a new solution built into Gatsby core <span role='img' aria-label="construction zone emoji">🚧🛠</span>.
                      To be notified of our releases, join our newsletter.
                      We promise not to spam <span role='img' aria-label="smile with halo emoji">😇</span>.
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

            {/* <Container as={styledJumbotron} textAlign='center'>
              <Header
                style={{
                  fontSize: `2.5rem`
                }}>
                That was the TL;DR, here's the longer story...
              </Header>
              <p style={{ fontSize: `1.2rem` }}>
                Hi! My name is Steven and the truth is, I'm an asshole <span role='img' aria-label="sweat smile emoji">😅</span>. <br />
                I'm the Founder and developer of this open source project and I have let you down on the first try.
                But let me tell you the story of how we got to this point.
              </p>
            </Container>

            <Container as={styledJumbotron} textAlign='center'>
              <Header
                style={{
                  fontSize: `2.5rem`
                }}>
                You were excited and then you were not
              </Header>
              <p style={{ fontSize: `1.2rem` }}>
                You probably read the announcement article on Gatsbyjs.org and
                came here excited to see a large catalog of themes!
                You wanted to choose your favorite theme, read the installation docs,
                install your theme in a few minutes, and then deploy your website,
                all within the span of a few hours. But then you saw this page and wondered...WTF!?
              </p>
            </Container>

            <Container as={styledJumbotron} textAlign='center'>
              <Header
                style={{
                  fontSize: `2.5rem`
                }}>
                There were themes... once upon a time!
              </Header>
              <p style={{ fontSize: `1.2rem` }}>
                To be fair, there were themes once. But the theme library was not big.
                We only had six themes. But they were not complete. The animations were missing.
                The CLI tool we used to install the themes was clunky.
              </p>
              <p style={{ fontSize: `1.2rem` }}>
                You probably read the announcement article on Gatsbyjs.org and
                came here excited to see a large catalog of themes!
                You wanted to choose your favorite theme, read the installation docs,
                install your theme in a few minutes, and then deploy your website,
                all within the span of a few hours.
              </p>
            </Container> */}

            <Container as={styledJumbotron} textAlign='center'>
              <Header
                style={{
                  fontSize: `2.5rem`
                }}>
                Starter Themes (coming soon)
              </Header>

              <Grid columns={2} stackable>
                <Grid.Row>
                  <Grid.Column>
                    <Image src={this.props.data.readOnly.sizes.src} />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src={this.props.data.dimension.sizes.src} />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src={this.props.data.parallelism.sizes.src} />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src={this.props.data.story.sizes.src} />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src={this.props.data.identity.sizes.src} />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src={this.props.data.eventually.sizes.src} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>


            </Container>

            {/* <Grid stackable columns={1}>
              <Grid.Row>

                <Grid.Column>
                  <Card as={StyledCard}>
                    <Link to="/">
                      <Image
                        title="Eventually gatsby starter"
                        alt="Thumbnail image of Eventually gatsby starter"
                        src={chatAnim}
                      />
                    </Link>
                    <Card.Content>
                      <Card.Header as={Link} to="/">Need a custom starter?</Card.Header>
                      <Card.Description>Contact us</Card.Description>
                    </Card.Content>
                  </Card>

                </Grid.Column>

              </Grid.Row>
            </Grid> */}

            <Container
              textAlign='center'
              style={{
                padding: `5rem 0`
              }}>
              <Icon onClick={this.goToTwitter} as={StyledIcon} name="twitter" />
            </Container>
          </Container>
        </div>
      )
    }
}


export default IndexPage


export const pageQuery = graphql`
  query ImageQuery {
    readOnly: imageSharp(id: { regex: "/read-only.jpg/" }) {
      sizes(maxWidth: 600) {
        src
        sizes
      }
    }
    story: imageSharp(id: { regex: "/story.jpg/" }) {
      sizes(maxWidth: 600) {
        src
        sizes
      }
    }
    parallelism: imageSharp(id: { regex: "/parallelism.jpg/" }) {
      sizes(maxWidth: 600) {
        src
        sizes
      }
    }
    identity: imageSharp(id: { regex: "/identity.jpg/" }) {
      sizes(maxWidth: 600) {
        src
        sizes
      }
    }
    eventually: imageSharp(id: { regex: "/eventually.jpg/" }) {
      sizes(maxWidth: 600) {
        src
        sizes
      }
    }
    dimension: imageSharp(id: { regex: "/dimension.jpg/" }) {
      sizes(maxWidth: 600) {
        src
        sizes
      }
    }
  }
`
