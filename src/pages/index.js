import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

// import Header from '../components/header'
// import Footer from '../components/footer'


const IndexPage = () => {

  return (
    <Layout>
      <Head title="Home" />
      <h1>Hey</h1>
      <h2>
        I'm Rob.
      </h2>
      <p>Need a developer? <Link to='/contact'>Contact Me</Link> </p>
    </Layout>

  )


  // return (
  //   <div>
  //     <Header />
  //     <h1>Hey</h1>
  //     <h2>
  //       I'm Rob.
  //     </h2>
  //     <p>Need a developer? <Link to='/contact'>Contact Me</Link> </p>
  //     <Footer />
  //   </div>
  // )
}

export default IndexPage