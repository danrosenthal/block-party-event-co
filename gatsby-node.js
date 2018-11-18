/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  return new Promise((resolve, reject) => {
    const storeTemplate = path.resolve('src/templates/blog-post.js')
    resolve(
      graphql(`
        {
          allContentfulPost (limit:100) {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then((result) => {
        console.log(result)
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulPost.edges.forEach((edge) => {
          createPage ({
            path: "blog/" + edge.node.slug,
            component: storeTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })
}