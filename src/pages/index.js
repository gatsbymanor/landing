import 'semantic-ui-css/semantic.min.css';

import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";
import { Grid, Card, Container, Image, Header, Button } from 'semantic-ui-react'

import matt from '../images/matthew.png'
import { media } from "../components/media";

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

    const styledJumbotronFooter = styled(Header)`
      &&& {
        font-size: 2rem;
      }
    `;

    return (
      <Container textAlign='center'>
        <Container as={styledJumbotron}>
          <Header as={styledHeader}>Gatsby Manor</Header>
          <p>Gatsby Starters for all types of projects</p>
        </Container>

        <Grid centered columns={4}>
          <Grid.Row>
            {this.state.links.map((obj, idx) => {

              return (
                <Grid.Column>
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
          <p>Get the latest updates!</p>
          <Button color='blue'>Subscribe</Button>
        </Container>
      </Container>
    )
  }

}


export default IndexPage
