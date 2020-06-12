import React from 'react'
import { Link } from 'gatsby'
// import Header from '../components/header'
// import Footer from '../components/footer'
import Layout from '../components/layout'

const AboutPage = () => {

    return (
        <Layout>
<h1>About</h1>
            <h2>Rob</h2>
            <h3>Bio</h3>
            <p>Rob is smart</p>
            <p>Rob works hard</p>
            <p>Rob wants to help</p>
            <p>So, <Link to='/contact'>Contact Rob</Link></p>
        </Layout>
    )
    // return (
    //     <div>
    //         <Header />
    //         <h1>About</h1>
    //         <h2>Rob</h2>
    //         <h3>Bio</h3>
    //         <p>Rob is smart</p>
    //         <p>Rob works hard</p>
    //         <p>Rob wants to help</p>
    //         <p>So, <Link to='/contact'>Contact Rob</Link></p>
    //         <Footer />
    //     </div>
    // )
}

export default AboutPage