import React from 'react'
import { graphql, Link, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col, Carousel } from "react-bootstrap"
const slide1 = "../../../images/slide2.png"
const slide2 = "../../../images/mataRocks-hero.jpg"
const slide3 = "../../../images/slide3.png"
const slide4 = "../../../images/slide4.png"

function Hero({data}) {
  return (
    <StaticQuery 
    query={graphql`
    query Slideshow{
        allGraphCmsHomeSlideShow {    
            edges {
              node {
                  slideshowImages {
                    imageTitle
                    imageAltText
                    image {
                      gatsbyImageData(quality: 60)
                      url
                    }
                  }
              }
            }
          }
      }
    `}


render={data => ( 
    <div className="hero-main">
        <div className='hero-absolute'>
        <div className="hero-carousel" >
                


{data.allGraphCmsHomeSlideShow.edges.map(({ node: gallery }) => (
    
    <Carousel fade>
       {(gallery.slideshowImages || []).map((galleryMap, id) => (
    <Carousel.Item >
      <img src={galleryMap.image.url}
                    key={galleryMap.id}
                    quality={60}
                    formats={["auto", "webp", "avif"]}
                    placeholder="blurred"
                    alt={galleryMap.imageAltText}/> 
       </Carousel.Item>
      ))}
    </Carousel>
   ))}

	     </div>
          <div className='absolute-cont'>
              <p>Be Our Guests</p>
              <h1>Escape to Paradise At <br /><span>Mata Rocks Resort</span></h1>
              <span>Discover the ultimate oceanfront getaway on San Pedro Ambergris, Belize's tropical gem. Arrive by air or sea
                    and immerse yourself in relaxation and adventure. Click below to explore our resort and all the island
                    has to offer!
              </span>
          </div>
        </div>
      
    </div>
    )}
    />
  );
}

export default Hero
