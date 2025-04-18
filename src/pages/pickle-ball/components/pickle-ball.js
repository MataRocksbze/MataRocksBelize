import React from 'react'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
const headerImg = "../../../images/ballHeader-Main.png";

function Pickle() {
  return (
    <div className='pickle-main'>
      <div className="content-header">
        <div className="header-overlay"></div>
        <StaticImage
          src={headerImg}
          quality={60}
          formats={["auto", "webp"]}
        />
        <div className="header-cont">
          <h1>Pickle Ball</h1>
        </div>
      </div>
      <div className='main-cont'>
         <h1>Experience San Pedro's Only Pickleball Court <br /><span>Only at Mata Rocks!</span></h1>
         <p>Mata Rocks Resort is the only resort in San Pedro, Belize to offer guests the exciting sport of pickleball! This makes it the perfect place to try out this fun and social activity during your vacation.<br />
Pickleball is a paddle sport that combines elements of tennis, badminton, and ping-pong. This information is not from the provided sources and may need to be independently verified. It is played with a paddle and a perforated plastic ball on a court about a third of the size of a tennis court. This information is not from the provided sources and may need to be independently verified. Pickleball is easy to learn and is a great way to get exercise and have fun, making it the perfect activity for vacationers of all ages and skill levels.
After an invigorating pickleball match, guests can relax on the beautiful beachfront, take a dip in the refreshing swimming pool, or enjoy a cocktail at the On The Rocks beachfront bar. Guests can also rent golf carts, the preferred mode of transportation in San Pedro, to explore the island or take a short trip to the airport.
         </p>
         <a href="/coming-soon/" className="all-button">Contact Us</a>
      </div>
    </div>
  )
}

export default Pickle
