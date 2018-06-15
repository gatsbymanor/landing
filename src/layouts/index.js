import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


const Layout = ({ children, data }) => (
  <div>
  <Helmet
    title="Gatsby Manor, starters for GatsbyJS"
    meta={[
      { property: 'og:image', content: 'https://storage.googleapis.com/gatsby_manor_assets/gatsbymanor_og_image.jpg' },
      { property: 'og:url', content: 'https://gatsbymanor.com' },
      { property: 'og:title', content: 'Gatsby Manor, starters for GatsbyJS' },
      { property: 'og:description', content: 'Gatsby starters for all types of projects.' },
    ]}
  />

    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
