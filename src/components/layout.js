import 'semantic-ui-css/semantic.min.css';

import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import {
  Menu,
  Container,
} from 'semantic-ui-react'


const Layout = ({ children, data }) => (
  <div>
    <React.Fragment>
      <Helmet
        title="Gatsby Manor, starters for GatsbyJS"
        meta={[
          { property: 'og:image', content: 'https://storage.googleapis.com/gatsby_manor_assets/gatsbymanor_og_image.jpg' },
          { property: 'og:url', content: 'https://gatsbymanor.com' },
          { property: 'og:title', content: 'Gatsby Manor, starters for GatsbyJS' },
          { property: 'og:description', content: 'Gatsby starters for all types of projects.' },
        ]}
      />
      <Container>
        <Menu text>
          <Menu.Item as={Link} to="/" style={{
            fontSize: `1.2rem`
          }}>
            Gatsby Manor
          </Menu.Item>
          {/* <Menu.Item as={Link} to="/" style={{
            fontSize: `1.2rem`
          }}>
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/docs" style={{
            fontSize: `1.2rem`
          }}>
            Docs
          </Menu.Item>
          <Menu.Item as={Link} to="/tutorial" style={{
            fontSize: `1.2rem`
          }}>
            Tutorial
          </Menu.Item> */}
        </Menu>
      </Container>
      {children}
    </React.Fragment>
  </div>
)

export default Layout
