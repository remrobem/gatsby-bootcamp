// Gatsby API runs when Gatsby is generating new site. each page and markdown is a node?

const path = require("path")
// used to create slug for markdown file.slug used in url for page displaying markdown
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    console.log("node: ", JSON.stringify(node, undefined, 4))
    const slug = path.basename(node.fileAbsolutePath, ".md")
    console.log("slug: ", slug)

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  // console.log('graphql: ', graphql)
  // console.log('actions: ', actions)
  const { createPage } = actions
  //   1. get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")
  //   2. get markdown date
  // graphql returns promise
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  //   3. create pages
  // console.log('response: ', JSON.stringify(res, undefined, 4))
  // console.log('response error: ', res.error)
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
