import React from 'react'
import { Link } from 'gatsby'

// import Header from '../components/header'
// import Footer from '../components/footer'

import Layout from '../components/layout'

const IndexPage = () => {

  return (
    <Layout>
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