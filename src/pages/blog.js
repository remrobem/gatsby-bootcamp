import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "./blog.module.scss"

const BlogPage = () => {
  const blogHeader = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            publishedDate(formatString: "MMMM D, YYYY")
            slug
          }
        }
      }
    }
  `)

return (
  <Layout>
    <div>
      <ol className={styles.posts}>
        {blogHeader.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={styles.post} key={edge.node.title}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
              </Link>
              <p>{edge.node.publishedDate}</p>
            </li>
          )
        })}
      </ol>
    </div>
  </Layout>
)
}
  // const BlogPage = () => {
  //   const blogHeader = useStaticQuery(graphql`
  //     query {
  //       allMarkdownRemark {
  //         edges {
  //           node {
  //             frontmatter {
  //               title
  //               date
  //             }
  //             fields {
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `)
  // console.log("blogHeader: ", blogHeader)
  // return (
  //   <Layout>
  //     <div>
  //       <ol className={styles.posts}>
  //         {blogHeader.allMarkdownRemark.edges.map(edge => {
  //           return (
  //             <li className={styles.post} key={edge.node.frontmatter.title}>
  //               <Link to={`/blog/${edge.node.fields.slug}`}>
  //                 <h2>{edge.node.frontmatter.title}</h2>
  //               </Link>
  //               <p>{edge.node.frontmatter.date}</p>
  //             </li>
  //           )
  //         })}
  //       </ol>
  //     </div>

  
// return (
//     <div>
//         <Header />
//         <h1>BLOGS</h1>
//         <p>posts will show up here</p>
//         <Footer />
//     </div>
// )
// }

export default BlogPage
