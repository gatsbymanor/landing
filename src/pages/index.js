import 'semantic-ui-css/semantic.min.css';

import React from 'react'
import Img from "gatsby-image"
import axios from "axios"
import styled from "styled-components";
import {
  Grid,
  Icon,
  Card,
  Container,
  Header,
  Button,
  Form,
  Modal,
  Menu,
} from 'semantic-ui-react'

import { starters } from "../data/starters"
import { SubscribeForm } from "../components/SubscribeForm"
import { Link, graphql } from "gatsby"



const styledJumbotron = styled(Container)`
  margin: 5rem auto auto auto;
`;


const styledHeader = styled(Header)`
  &&& {
    font-size: 2.5rem;
  }
`;

const StyledSubheader = styled.p`
  &&& {
    font-size: 1.5rem;
  }
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

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class IndexPage extends React.Component {

  state = {
    links: starters,
    name: "",
    email: "",
    price: "",
    message: "",
    open: false,
    experiment: "buy_test_2018_07_06",

  }

  trackExternalClick = (url, gaEvent) => {
    // send event to google analytics
    // need this because of gatsby rendering
    if (window.ga) {
      window.ga('send', gaEvent);
    }

    window.open(url)
  }

  trackClick = (gaEvent) => {
    if (window.ga) {
      window.ga('send', gaEvent);
    }
  }


  handleSubmit = e => {
    e.preventDefault();

    axios({
      method: 'post',
      url: '/',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: encode({ "form-name": this.state.experiment, ...this.state })
    })
    .then(function (response) {
      console.log(response.status);
    })
    .catch(function (error) {
      console.log(error);
    })

    this.close()

  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleBuyClick = (gaEvent) => {

    this.show()
    this.trackClick(gaEvent)
  }

  show = () => this.setState({ open: true })

  close = () => this.setState({ open: false })

  render() {

    const twitterEvent = {
      hitType: 'event',
      eventCategory: 'social_networks',
      eventAction: `visit_twitter`,
      eventLabel: 'visit_external_link',
      transport: 'beacon',
    }

    const subscribeEvent = {
      hitType: 'event',
      eventCategory: 'social_networks',
      eventAction: `visit_mailchimp_form`,
      eventLabel: 'visit_external_link',
      transport: 'beacon',
    }

    const { price, email, message, open, experiment } = this.state
    const { EventuallyImage } = this.props.data

    return (
      <div>

        <Container>

          <Menu text>
            <Menu.Item as={Link} to="/">
              Gatsby Manor
            </Menu.Item>

            <Menu.Item position="right">
              <Button color='blue' onClick={this.show}>Subscribe</Button>
            </Menu.Item>
          </Menu>

          <Modal size={'small'} open={open} onClose={this.close}>
            <Modal.Header>Join our newsletter to get updates!</Modal.Header>

            <Modal.Content>

              <SubscribeForm
                mailchimp_url={`https://gatsbymanor.us17.list-manage.com/subscribe/post-json?u=6d5879814f1b3ecd3667f0c47&amp;id=a66cece897`}
                success_msg="Thanks for signing up! You will get a message when we have a new update!">
                {(submitHandler, emailHandler) =>
                  <React.Fragment>
                    <p>
                      Get notified when we release new starters
                      and make other exciting announcements.
                    </p>
                    <input
                      style={{
                        borderWidth: `1px`,
                        borderStyle: `solid`,
                        borderRadius: `1px`,
                        width: `250px`,
                        padding: `0.7rem`,
                        margin: `0 0.5rem 0 0`
                      }}
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                      onChange={emailHandler}
                    />
                    <Button
                      type="submit"
                      color='blue'
                      onClick={(e) => submitHandler(e)}>
                      Notify me
                    </Button>
                  </React.Fragment>
                }
              </SubscribeForm>
            </Modal.Content>

          </Modal>

          <Container as={styledJumbotron} textAlign='center'>
            <Header as={styledHeader}>Professional design Gatsby starters</Header>
          </Container>

          <Grid columns={1}>
            <Grid.Row>
              {this.state.links.map((obj, idx) => {
                const { name, demo, perks } = obj;

                const viewStarterEvent = {
                  hitType: 'event',
                  eventCategory: 'starters',
                  eventAction: `view_${name}`,
                  eventLabel: experiment,
                  transport: 'beacon',
                }

                return (
                  <Grid.Column key={idx}>
                    <Card key={idx} as={StyledCard}>
                      <Link to={demo} onClick={() => { this.trackClick(viewStarterEvent) }}>
                        <Img
                          title="Eventually gatsby starter"
                          alt="Thumbnail image of Eventually gatsby starter"
                          sizes={EventuallyImage.sizes}
                        />
                      </Link>
                      <Card.Content>
                        <Card.Header as={Link} to={demo} onClick={() => { this.trackClick(viewStarterEvent) }}>{name}</Card.Header>
                        <Card.Description>{perks}</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Link to={demo} onClick={() => { this.trackClick(viewStarterEvent) }}>
                          <Button color='green' fluid>Preview</Button>
                        </Link>
                      </Card.Content>

                    </Card>

                  </Grid.Column>
                )
              })}
            </Grid.Row>
          </Grid>

          <Container as={styledJumbotron} textAlign='center'>
            <Icon onClick={() => this.trackExternalClick(`https://twitter.com/thegatsbymanor`, twitterEvent)} as={StyledIcon} name="twitter" />
          </Container>
        </Container>
      </div>
    )
  }

}


export default IndexPage

export const pageQuery = graphql`
  query EventuallyImageQuery {
    EventuallyImage: imageSharp(id: { regex: "/eventually.jpg/" }) {
      sizes(maxWidth: 640 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
