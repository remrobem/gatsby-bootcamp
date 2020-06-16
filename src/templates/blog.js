import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

// because it is a templete, cannot use useStaticQuery?
// export causes the query to run
// result passed as props to Blog
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      {props.data.markdownRemark.frontmatter.title}
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default Blog
