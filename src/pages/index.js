import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
const url = "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=947&q=80";

const IndexPage = () => {

  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <h1>Wonderfull Cake!</h1>
      <StaticImage src = {url} alt = "Cake" />
      <h1>Another Cake!</h1>
      <StaticImage src = "../images/Cake.jpg" alt = "Cake Brown" />
    </Layout>
  )
}

export default IndexPage