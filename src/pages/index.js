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
} from 'semantic-ui-react'

import { starters } from "../data/starters";
import { Link } from "gatsby";


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

class IndexPage extends React.Component {

  state = {
    links: starters,
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
                const { name, demo, perks, image, } = obj;

                const viewStarterEvent = {
                  hitType: 'event',
                  eventCategory: 'starters',
                  eventAction: `view_${name}`,
                  eventLabel: 'buy_test_2018_06_30',
                  transport: 'beacon',
                }

                const buyStarterEvent = {
                 hitType: 'event',
                 eventCategory: 'starters',
                 eventAction: `buy_${name}`,
                 eventLabel: 'buy_test_2018_06_30',
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
                        <Button basic color='blue' fluid onClick={() => { this.trackExternalClick("http://eepurl.com/dzJSxL", buyStarterEvent) }}>Buy now</Button>
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
