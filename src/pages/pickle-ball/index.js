import * as React from "react"
import "./pickle-ball.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


import Pickle from "./components/pickle-ball"



const RoomListings = () => (
  <Layout>
    <Seo title="Mata Rock Resort | Pickle Ball in San Pedro" />
    <Pickle />
  </Layout>
)

export default RoomListings;
