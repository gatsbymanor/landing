const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const allGatsbyThemesQuery = `
    {
      gatsbyThemes: allContentfulGatsbyTheme {
        edges {
          node {
            demoUrl
            name
            waitlistUrl
          }
        }
      }
    }
  `


  const allGatsbyThemesQueryResult = await graphql(allGatsbyThemesQuery)
  allGatsbyThemesQueryResult.data.gatsbyThemes.edges.forEach(({ node }) => {
    const { name, demoUrl } = node

    createPage({
      path: `/demo/${name}`,
      component: path.resolve(`./src/templates/themeDemo.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        name: name,
      },
    })

    createPage({
      path: `/demo/${name}/waitlist`,
      component: path.resolve(`./src/templates/themeWaitlistForm.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        name: name,
      },
    })


  })

  return
}