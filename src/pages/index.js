import 'semantic-ui-css/semantic.min.css';

import React from 'react'
import styled from "styled-components";
import {
  Grid,
  Icon,
  Card,
  Container,
  Image,
  Header,
  Button,
  Form,
  Modal,
} from 'semantic-ui-react'

import { starters } from "../data/starters";
import { Link } from "gatsby";
import axios from "axios";


const styledJumbotron = styled(Container)`
  margin: 5rem auto auto auto;
`;


const styledHeader = styled(Header)`
  &&& {
    font-size: 3.5rem;
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

    return (
      <div>

        <Container textAlign='center'>

          <Container as={styledJumbotron}>
            <Header as={styledHeader}>Gatsby Manor</Header>
            <StyledSubheader>
              Professional design Gatsby starters at afforable prices.
            </StyledSubheader>
          </Container>

          <Grid centered columns={1}>
            <Grid.Row>
              {this.state.links.map((obj, idx) => {
                const { name, demo, perks, image } = obj;
                const { price, email, message, open, experiment } = this.state

                const viewStarterEvent = {
                  hitType: 'event',
                  eventCategory: 'starters',
                  eventAction: `view_${name}`,
                  eventLabel: experiment,
                  transport: 'beacon',
                }

                const buyStarterEvent = {
                 hitType: 'event',
                 eventCategory: 'starters',
                 eventAction: `buy_${name}`,
                 eventLabel: experiment,
                 transport: 'beacon',
               }

                return (
                  <Grid.Column key={idx}>
                    <Card key={idx} as={StyledCard}>
                      <Image src={image} />
                      <Card.Content>
                        <Card.Header>{name}</Card.Header>
                        <Card.Description>{perks}</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Link to={demo} onClick={() => { this.trackClick(viewStarterEvent) }}>
                          <Button basic color='green' fluid>Demo</Button>
                        </Link>
                      </Card.Content>
                      <Card.Content extra>
                        <Button onClick={() => this.handleBuyClick(buyStarterEvent)} basic color='blue' fluid>Buy now</Button>

                        <Modal size={'small'} open={open} onClose={this.close}>
                          <Modal.Header>Hi! You caught us before we are ready.</Modal.Header>

                          <Modal.Content>
                            <p>
                              We're working to hard to get you a high quality starter at a fair price.
                              If you'd like us to send you a reminder when we're ready, tell us your desired
                              price and your email.
                            </p>

                            <Form
                              name={this.state.experiment}
                              method="post"
                              data-netlify="true"
                              data-netlify-honeypot="bot-field"
                              onSubmit={(e) => this.handleSubmit(e)}>

                              <input type="hidden" name="form-name" value={this.state.experiment} />
                              <Form.Field>
                                <label>What do you want to pay? (in USD)</label>
                                <input type="number" name="price" value={price} min="0" max="10000" onChange={this.handleChange} placeholder='99' />
                              </Form.Field>
                              <Form.Field>
                                <label>Email (optional)</label>
                                <input type="email" name="email" value={email} onChange={this.handleChange} placeholder='me@email.com'  />
                              </Form.Field>
                              <Form.Field>
                                <label>Send us a note (optional)</label>
                                <input type="text" name="message" value={message} onChange={this.handleChange} placeholder='Message' />
                              </Form.Field>

                              <Button type="submit" basic color='blue'>Notify me</Button>
                            </Form>
                          </Modal.Content>

                        </Modal>
                      </Card.Content>
                    </Card>

                  </Grid.Column>
                )
              })}
            </Grid.Row>
          </Grid>

          <Container as={styledJumbotron}>
            <Container>
              <Icon onClick={() => this.trackExternalClick(`https://twitter.com/thegatsbymanor`, twitterEvent)} as={StyledIcon} name="twitter" />
              <Icon onClick={() => this.trackExternalClick(`http://eepurl.com/dzJSxL`, subscribeEvent)} as={StyledIcon} name="mail" />
            </Container>
          </Container>
        </Container>
      </div>
    )
  }

}


export default IndexPage
