import React from "react"
import Iframe from 'react-iframe'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'gatsby'

class Eventually extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Menu style={{ 'margin': 0 }}>
          <Menu.Item as={Link} to="/">
            <Icon name="angle left" /> Back to Gatsby Manor
          </Menu.Item>
        </Menu>
        <Iframe url="https://dazzling-lichterman-21ec21.netlify.com/"/>
      </React.Fragment>
    )
  }
}

export default Eventually
