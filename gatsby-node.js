const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const docsTemplate = path.resolve(`src/templates/docsTemplate.js`)

  try {
    let { data } = await graphql(`
      {
        allMarkdownRemark(
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `)

    data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: docsTemplate,
        context: {}, // additional data can be passed via context
      })
    })


  } catch (e) {
    throw e
  }

}
