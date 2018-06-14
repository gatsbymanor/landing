import 'semantic-ui-css/semantic.min.css';

import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";
import { Grid, Card, Container, Image, Header, Button } from 'semantic-ui-react'

import matt from '../images/matthew.png'
import { media } from "../components/media";
import { SubscribeForm } from "../components/SubscribeForm";

class IndexPage extends React.Component {

  state = {

    links: [
      'hello/world',
      'world/hellow',
      'appels/meals',
      'owner/repo',
    ]
  }

  render() {

    const styledJumbotron = styled(Container)`
      margin: 60px auto;

      ${media.small`
      `};

      ${media.medium`
      `};
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

        ${media.small`

        `};

        ${media.medium`
        `};
      }
    `


    // Mailchimp endpoint
    // From: https://us17.admin.mailchimp.com/lists/integration/embeddedcode?id=XXXXXX
    // Where `XXXXXX` is the MC list ID
    // Note: we change `/post` to `/post-json`

    const MAILCHIMP_URL = `https://gatsbymanor.us17.list-manage.com/subscribe/post-json?u=6d5879814f1b3ecd3667f0c47&amp;id=a66cece897`

    return (
      <Container textAlign='center'>
        <Container as={styledJumbotron}>
          <Header as={styledHeader}>Gatsby Manor</Header>
          <StyledSubheader>
            Gatsby Starters for all types of projects
          </StyledSubheader>
        </Container>

        <Grid centered columns={4}>
          <Grid.Row>
            {this.state.links.map((obj, idx) => {

              return (
                <Grid.Column key={idx}>
                  <Card key={idx} style={{}}>
                    <Image src={matt} />
                    <Card.Content>
                      <Card.Header>{obj}</Card.Header>
                      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Button basic color='blue' fluid>Download</Button>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              )
            })}
          </Grid.Row>
        </Grid>

        <Container as={styledJumbotron}>
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
    )
  }

}


export default IndexPage
