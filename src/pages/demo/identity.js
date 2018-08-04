import React from "react"
import Iframe from 'react-iframe'
import { Menu, Icon, Button } from 'semantic-ui-react'
import { Link } from 'gatsby'


const EXPERIMENT_NAME = "buy_test_2018_07_06"

class Eventually extends React.Component {

  trackClick = (gaEvent) => {
    // need this because of gatsby rendering
    if (window.ga) {
      window.ga('send', gaEvent);
    }
  }

  goToDownloadUrl = () => {

    this.trackClick({
      hitType: 'event',
      eventCategory: 'starters',
      eventAction: `download_starter_eventually`,
      eventLabel: EXPERIMENT_NAME,
      transport: 'beacon',
    })

    window.open("https://github.com/gatsbymanor/gatsby-theme-identity")
  }

  render() {
    return (
      <React.Fragment>
        <Menu style={{ 'margin': 0 }}>
          <Menu.Item as={Link} to="/">
            <Icon name="angle left" /> Back to Gatsby Manor
          </Menu.Item>
          <Menu.Item as={Link} to="/docs">
            <Button color="red">Get theme</Button>
          </Menu.Item>
        </Menu>
        <Iframe url="https://affectionate-hamilton-c29f6c.netlify.com/" />
      </React.Fragment>
    )
  }
}

export default Eventually
