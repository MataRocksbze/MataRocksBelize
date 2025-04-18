import * as React from "react"
import "./coming-soon.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


import Comingsoon from "./components/coming-soon"



const RoomListings = () => (
  <Layout>
    <Seo title="Mata Rock Resort | Coming Soon" />
    <Comingsoon />
  </Layout>
)

export default RoomListings;
