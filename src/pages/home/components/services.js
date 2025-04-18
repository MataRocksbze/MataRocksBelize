import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

function Services() {
  return (
    <div className='services-main'>
        <div className='service-header'>
            <div className='row'>
                <div className='col-sm-6'>
                    <h2>Get It All with Us</h2>
                    <h1>Explore the Island Your Way!</h1>
                </div>
                <div className='col-sm-6'>
                   <p>Mata Rocks offers complimentary bikes so you can explore the island at
your own pace. For effortless cruising, golf cart rentals are available. No matter your style, you'll find
the perfect way to discover Ambergris Caye and make the most of your stay.</p>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-4'>
                <a href="/coming-soon/">
                 <StaticImage alt="" src="../../../images/new-golf-cart.png"  formats={["auto", "webp", "avif"]} />
                  <div className='hero-button'>
                    <span>Read More</span>
                  </div>
                  <div className='service-cont'>
                     <h1>Golf Cart Rentals</h1>
                     <p>Golf carts are the preferred mode of transportation in San Pedro.
                     At Mata Rocks we can arrange your golf cart for ease of rental. Inquire at the front desk.</p>
                  </div>
                </a>
            </div>
            <div className='col-sm-4'>
                <a href="/coming-soon/">
                 <StaticImage alt="" src="../../../images/bikes-1.png" quality={60} formats={["auto", "webp", "avif"]} />
                  <div className='hero-button'>
                    <span>Read More</span>
                  </div>
                  <div className='service-cont'>
                     <h1>Bicycles</h1>
                     <p>On property we have complimentary bikes for our guests to use at their leisure. Be aware that we only have a limited number and they are on a first come first serve basis.</p>
                  </div>
                </a>
            </div>
            <div className='col-sm-4'>
                <a href="/coming-soon/">
                 <StaticImage alt="" src="../../../images/kayaks.png" quality={60} formats={["auto", "webp", "avif"]} />
                  <div className='hero-button'>
                    <span>Read More</span>
                  </div>
                  <div className='service-cont'>
                     <h1>Kayaks & Paddle Boards</h1>
                     <p>We have complimentary kayaks and paddle boards available for our guests. Inquire about them at the front desk. Just like the bikes, these are on a first come first serve basis.</p>
                  </div>
                </a>
            </div>
        </div>
      
    </div>
  )
}

export default Services
