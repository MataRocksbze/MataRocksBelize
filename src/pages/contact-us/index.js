import * as React from "react"
import "./contact.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


import Contact from "./components/contact"



const RoomListings = () => (
  <Layout>
    <Seo title="Mata Rock Resort | Contact Us" />
    <Contact />
  </Layout>
)

export default RoomListings;
