const googleTrackingCode = (process.env.NODE_ENV === `production`) ? "UA-113726758-1" : "UA-113726758-2"

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: googleTrackingCode,
      },
    },
  ],
}
