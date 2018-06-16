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
  Menu
} from 'semantic-ui-react'

import { media } from "../components/media";
import { SubscribeForm } from "../components/SubscribeForm";
import { starters } from "../data/starters";


const styledJumbotron = styled(Container)`
  margin: 5rem auto auto auto;
`;

const styledJumbotronFooter = styled(Container)`
  margin: 5rem auto 8rem auto;
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

const StyledSubscribeButton = styled.button`
  &&& {
    cursor: pointer;
    font-weight: bold;
    margin-top: 1rem;
    margin-left: 0.7rem;
  }
`

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

  handleClick = url => {
    // send event to google analytics

    window.open(url)
  }

  render() {

    // Mailchimp endpoint
    // From: https://us17.admin.mailchimp.com/lists/integration/embeddedcode?id=XXXXXX
    // Where `XXXXXX` is the MC list ID
    // Note: we change `/post` to `/post-json`

    const MAILCHIMP_URL = `https://gatsbymanor.us17.list-manage.com/subscribe/post-json?u=6d5879814f1b3ecd3667f0c47&amp;id=a66cece897`

    return (
      <div>

        <Container textAlign='center'>

          <Container as={styledJumbotron}>
            <Header as={styledHeader}>Gatsby Manor</Header>
            <StyledSubheader>
              Gatsby Starters for all types of projects
            </StyledSubheader>

            <Container>
              <Icon onClick={() => this.handleClick(`https://twitter.com/thegatsbymanor`)} as={StyledIcon} name="twitter" />
              <Icon onClick={() => this.handleClick(`https://github.com/gatsbymanor/www`)} as={StyledIcon} name="github" />
              <Icon onClick={() => this.handleClick(`http://eepurl.com/dl_n2P`)} as={StyledIcon} name="mail" />
            </Container>
          </Container>

          <Grid centered columns={1}>
            <Grid.Row>
              {this.state.links.map((obj, idx) => {

                return (
                  <Grid.Column key={idx}>
                    <Card key={idx} as={StyledCard}>
                      <Image src={obj.image} />
                      <Card.Content>
                        <Card.Header>{obj.name}</Card.Header>
                        <Card.Description>{obj.perks}</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <a onClick={() => this.handleClick(obj.source)}>
                          <Button basic color='blue' fluid>Download</Button>
                        </a>
                      </Card.Content>
                      <Card.Content extra>
                        <a onClick={() => this.handleClick(obj.demo)}>
                          <Button basic color='green' fluid>Demo</Button>
                        </a>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                )
              })}
            </Grid.Row>
          </Grid>

          <Container as={styledJumbotronFooter}>
            <Header as={styledHeader}>Join our newsletter!</Header>
            <StyledSubheader>
              Subscribe for news and updates about Starters
            </StyledSubheader>
            <SubscribeForm
              mailchimp_url={MAILCHIMP_URL}>
              {(submit) => (
                <Button type="submit" as={StyledSubscribeButton} color='blue'
                  onClick={(e) => submit(e)}>
                    Subscribe
                </Button>
              )}
            </SubscribeForm>
          </Container>
        </Container>
      </div>
    )
  }

}


export default IndexPage
