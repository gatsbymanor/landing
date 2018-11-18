import React from "react"
import Iframe from "react-iframe"
import { graphql, Link } from "gatsby"
import { Menu, Icon, Button } from "semantic-ui-react"

export default ({ data }) => {
  const { name, demoUrl } = data.gatsbyTheme

  return (
    <React.Fragment>
      <Menu style={{ 'margin': 0 }}>
        <Menu.Item as={`a`} href={`https://gatsbymanor.com/products/${name}`}>
          <Icon name="angle left" /> Back to Gatsby Manor
        </Menu.Item>
        <Menu.Item as={Link} to={`/demo/${name}/waitlist`}>
          <Button color="blue">Add me to the waitlist!</Button>
        </Menu.Item>
      </Menu>
      <Iframe url={demoUrl} />
    </React.Fragment>
  )
}


export const themeQuery = graphql`
  query themeQuery($name: String!) {
    gatsbyTheme: contentfulGatsbyTheme(name: { eq: $name }) {
      name
      demoUrl
    }
  }
`