import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Container, Button, Col } from "react-bootstrap"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
const headerImg = "../../../images/roomsHeader.png";

function Rooms() {
  const data = useStaticQuery(graphql`
    query RoomsListings{
          allGraphCmsRooms {
            edges {
              node {
                id
                roomTitle
                adultCount
                area
                bathroomCount
                bedCount
                childCount
                price
                slug
                cloudbedsLink
                description {
                  html
                  text
                  raw
                }
                roomImage {
                  id
                  imageAltText
                  imageTitle
                  image{
                    gatsbyImageData(placeholder: NONE, quality: 60)
                    url
                  }
                }
                roomOrder # ADD THIS LINE
              }
            }
          }
      }

  `);

// Log original unsorted order
console.log("Original Rooms:", data.allGraphCmsRooms.edges.map(room => ({
  title: room.node.roomTitle,
  order: room.node.roomOrder
})));

// Sort the rooms based on roomOrder
const sortedRooms = data.allGraphCmsRooms.edges.sort((a, b) => {
  const orderA = parseFloat(a.node.roomOrder);
  const orderB = parseFloat(b.node.roomOrder);
  return orderA - orderB;
});

// Log sorted order
console.log("Sorted Rooms:", sortedRooms.map(room => ({
  title: room.node.roomTitle,
  order: room.node.roomOrder
})));
  return (
    <div className="all-rooms">
      <div className="content-header">
        <div className="header-overlay"></div>
        <StaticImage
          src={headerImg}
          quality={60}
          formats={["auto", "webp"]}
        />
        <div className="header-cont">
          <h1>All Rooms</h1>
        </div>
      </div>
      <div className="rooms-main">
        <div className="rooms-grid">

            <div className="data-wrapper">
              <div className="gallery">
                <div className="image-gallery">
                  <div className="photos">
                  {sortedRooms.map(({ node: blockMap }) => (  // Use sortedRooms here
                    <div key={blockMap.id}> {/* Add a key to the parent div */}
                      <div className="main-content">
                        <div className="data-wrapper">
                          <div className="estate-type">
                            <div className="image-field">

                                <img src={blockMap.roomImage.image.url}
                                      quality={60}
                                      formats={["auto", "webp", "png", "jpg"]}
                                      alt={blockMap.roomImage.imageAltText}
                                  />

                              <div className="overlay">
                                <div className="content">
                                  <Container>
                                    <div className="block">
                                      <div className="desc">
                                        <div className="desc-main">
                                          <h2>{blockMap.roomTitle}</h2>

                                        </div>
                                        <div className="secondary-cont">
                                          <p>

                                            <div className="blurb" dangerouslySetInnerHTML={{ __html:blockMap.description.html}} />

                                            <br />
                                            - {blockMap.adultCount} Adults <br />
                                            - {blockMap.childCount} Children {/* Corrected typo here */}
                                            <br />
                                            - {blockMap.bedCount} Beds
                                            <br />
                                            - {blockMap.bathroomCount} Bathroom
                                            <br />
                                            - {blockMap.area} Size
                                            <br />
                                          </p>
                                        </div>
                                        <div className="book-now-block">
                                        <a href={`${blockMap.cloudbedsLink}`} target="_blank" className="book-button">Book Now </a>

                                        </div>
                                      </div>
                                    </div>
                                  </Container>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
      <a class="all-button" href="/rooms">View All Rooms</a>
    </div>
  );
}

export default Rooms;