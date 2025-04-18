import React from 'react'
import { Container, Button, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { StaticQuery, graphql, Link } from "gatsby"

function Rooms() {
  return (
    <div className='rooms-main'>
     {/*} <div className='head'>
        <p>Accomodations</p>
        <h1>Rooms / Suites</h1>
      </div>*/}
      <div className="gallery">
          
          <div className="image-gallery">
          
            <div className="photos">
       
              <div >
                 <div className="main-content">
                      <div className="data-wrapper">
                      
                          <div className="estate-type">
                              <div className="image-field">
                               <StaticImage alt="" src="../../../images/room001.jpg" quality={60} formats={["auto", "webp"]} />
              
                                
                                <div className="overlay">
                               
                                    
                                  <div className="content">
                                      <Container> 
                                      <div className="block">
                                             
                                      <div className="desc"> 
                                        <div className='desc-main'>
                                          <h2>Ocean Front Jr. Suite</h2>
                                          <p>$191 USD/N</p>
                                        </div>
                                        <div className='secondary-cont'>
                                            <p>Our spacious ocean view junior suite is the ideal choice...<br />
                                               - 4 Guests <br />
                                               - Daily Cleaning< br/>
                                               - 1 Bathroom<br />
                                               - Housekeeping<br />
                                               - Wi-Fi<br />


                                            </p>
                                        </div>
                                        <a className='book-button' target="_blank" href="https://us2.cloudbeds.com/reservation/Ii3x4t#room_type=OFS">
                                        Book Now
                                        </a>
                                       
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
             
              <div >
                 <div className="main-content">
                      <div className="data-wrapper">
                      
                          <div className="estate-type">
                              <div className="image-field">
                               <StaticImage alt="" src="../../../images/room002.jpg" quality={60} formats={["auto", "webp"]} />
              
                                
                                <div className="overlay">
                                <div className="overlay-2"></div>
                                      
                                  <div className="content">
                                      <Container> 
                                      <div className="block">
                                             
                                      <div className="desc"> 
                                      <div className='desc-main'>
                                          <h2>Ocean Suite Balcony</h2>
                                          <p>$185 USD/N</p>
                                        </div>
                                     
                                        <div className='secondary-cont'>
                                            <p>Ocean View Junior Suite Balcony with king size bed, a day bed...<br />
                                               - 4 Guests <br />
                                               - 2 Beds< br/>
                                               - 1 Bathroom<br />
                                               - Housekeeping<br />
                                               - Wi-Fi<br />


                                            </p>
                                        </div>
                                        <a className='book-button' target="_blank" href="https://us2.cloudbeds.com/reservation/Ii3x4t#room_type=OJS" >
                                        Book Now
                                        </a>
                                       
                                       
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
             
              <div >
                 <div className="main-content">
                      <div className="data-wrapper">
                      
                          <div className="estate-type">
                              <div className="image-field">
                               <StaticImage alt="" src="../../../images/room003.jpg" quality={60} formats={["auto", "webp"]} />
              
                                
                                <div className="overlay">
                                <div className="overlay-2"></div>
                                     
                                  <div className="content">
                                      <Container> 
                                      <div className="block">
                                             
                                      <div className="desc"> 
                                      <div className='desc-main'>
                                          <h2>Ocean Pool Deck</h2>
                                          <p>$165 USD/N</p>
                                        </div>
                                     
                                        <div className='secondary-cont'>
                                            <p>Step into a bright and airy ocean view room with direct pool deck access.<br />
                                               - 2 Adults <br />
                                               - 2 Children< br/>
                                               - 1 Bed<br />
                                               - 1 Bathroom<br />
                                               - Wi-Fi<br />


                                            </p>
                                        </div>
                                        <a className='book-button' target="_blank" href="https://us2.cloudbeds.com/reservation/Ii3x4t#room_type=8">
                                        Book Now
                                        </a>
                                       
                                       
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
             
              <div >
                 <div className="main-content">
                      <div className="data-wrapper">
                      
                          <div className="estate-type">
                              <div className="image-field">
                               <StaticImage alt="" src="../../../images/room004.jpg" quality={60} formats={["auto", "webp"]} />
              
                                
                                <div className="overlay">
                                <div className="overlay-2"></div>
                                     
                                  <div className="content">
                                      <Container> 
                                      <div className="block">
                                             
                                      <div className="desc">
                                      <div className='desc-main'>
                                          <h2>Ocean View Balcony</h2>
                                          <p>$175 USD/N</p>
                                        </div>
                                     
                                        <div className='secondary-cont'>
                                            <p>Room with private balcony, perfect for a romantic getaway.<br />
                                               - 4 Guests <br />
                                               - 1 Bathroom< br/>
                                               - 1 Bed<br />
                                               - Housekeeping<br />
                                               - Wi-Fi<br />


                                            </p>
                                        </div>
                                        <a className='book-button' href="https://us2.cloudbeds.com/reservation/Ii3x4t#room_type=OVB" target="_blank">
                                          Book Now
                                        </a>
                                       
                                       
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
            
             
              </div>
          
          </div>
         </div>
      <div className='row'>
     <a className="all-button" href="/rooms">
            View All Rooms
        </a>
      </div>
    </div>
  )
}

export default Rooms
