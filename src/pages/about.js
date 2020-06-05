import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>Rob</h2>
            <h3>Bio</h3>
            <p>Rob is smart</p>
            <p>Rob works hard</p>
            <p>Rob wants to help</p>
            <p>So, <Link to='/contact'>Contact Rob</Link></p>
        </div>
    )
}

export default AboutPage