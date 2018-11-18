import React from "react"
import Iframe from "react-iframe"
import { graphql, Link } from "gatsby"
import { Menu, Icon, Button } from "semantic-ui-react"

export default ({ data }) => {
  const { name, waitlistUrl } = data.gatsbyTheme

  return (
    <React.Fragment>
      <Menu style={{ 'margin': 0 }}>
        <Menu.Item as={`a`} href={`https://gatsbymanor.com/collections/all`}>
          <Icon name="angle left" /> Back to Gatsby Manor
        </Menu.Item>
      </Menu>
      <Iframe url={waitlistUrl} />
    </React.Fragment>
  )
}


export const themeQuery = graphql`
  query themeWaitlistFormQuery($name: String!) {
    gatsbyTheme: contentfulGatsbyTheme(name: { eq: $name }) {
      name
      demoUrl
      waitlistUrl
    }
  }
`