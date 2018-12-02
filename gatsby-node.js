/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const storeTemplate = path.resolve('src/templates/blog-post.js')
    resolve(
      graphql(`
        {
          allPost {
            edges {
              node {
                id
                title
              }
            }
          }
        }
      `).then(result => {
        console.log(result)
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allPost.edges.forEach(edge => {
          createPage({
            path: 'blog/' + slugify(edge.node.title),
            component: storeTemplate,
            context: {
              id: edge.node.id,
            },
          })
        })
        return
      })
    )
  })
}

function slugify(string) {
  const a = 'àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
  const b = 'aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
  const p = new RegExp(a.split('').join('|'), 'g')
  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with ‘and’
    .replace(/[^\w-]+/g, '') // Remove all non-word characters
    .replace(/--+/g, '-') // Replace multiple — with single -
    .replace(/^-+/, '') // Trim — from start of text .replace(/-+$/, '') // Trim — from end of text
}
