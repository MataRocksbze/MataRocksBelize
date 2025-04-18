import * as React from "react"
import PropTypes from "prop-types"

import "../less/animations.scss"
import 'bootstrap/dist/css/bootstrap.css';
import App from "./sticky-header";
import Footer from "./footer";
import Logo from "../images/logo";


import { useStaticQuery, graphql } from "gatsby"




const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryAll {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="App">
        <App />
      
        <div>
        <main>{children}</main>
        </div>
       <div className="sticky-footer">
          <div className="cont">
            <div>
              <Logo />
            </div>
            {/* <div>
               <p>Discover the ultimate oceanfront getaway on SanPedro Ambergris, Belize’s tropical gem.</p>
               <span>
                 <a href="/rooms">
                 
                  All Rooms
                 </a>
               </span>
             </div>*/}
             <div>
               <a href="https://us2.cloudbeds.com/en/reservation/Ii3x4t?currency=usd" target="_blank">Book Now</a>
             </div>
          </div>
        </div>
        <Footer />
                
        </div>
          
            
     
    </>
);
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
