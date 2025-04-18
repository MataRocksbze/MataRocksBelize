import * as React from "react"
import "./restaurant.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


import Restaurant from "./components/restaurant"



const RoomListings = () => (
  <Layout>
    <Seo title="Mata Rock Resort | Dine with Us" />
    <Restaurant />
  </Layout>
)

export default RoomListings;
