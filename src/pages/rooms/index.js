import * as React from "react"
import "./rooms.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


import Rooms from "./components/rooms"



const RoomListings = () => (
  <Layout>
    <Seo title="Mata Rock Resort | All Rooms" />
    <Rooms />
  </Layout>
)

export default RoomListings;
