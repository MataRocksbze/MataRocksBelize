import React from 'react'
import { graphql, Link, StaticQuery } from "gatsby"

function About({data}) {
  return (
    <StaticQuery 
    query={graphql`
    query Restaurant{
        allGraphCmsHomeRestaurant {    
            edges {
              node {
                title1
                title2White
                title3Gold
                  content{
                      html
                      markdown
                      raw
                      text
                    }
              }
            }
          }
      }
    `}


render={data => ( 
    <div className='about-main'>
        <div className='cont'>
            <div className='row'>
                 <div className='col-sm-6'>
                 {data.allGraphCmsHomeRestaurant.edges.map(({ node: welcome }) => (
                    <>
                        <h2>{welcome.title1}</h2>
                        <h1>{welcome.title2White}<span> {welcome.title3Gold}</span></h1>
                    </>
                  ))}
                  {data.allGraphCmsHomeRestaurant.edges.map(({ node: welcome }) => (
                  <div dangerouslySetInnerHTML={{ __html: welcome.content.html }} /> 
                  ))}
                 <a className="all-button" href="/restaurant-and-bar/" >Restaurant & Bar</a>
                 </div>
                 <div className='col-sm-6'>
                    
                </div>
            </div>
        </div>
    
    </div>
    )}
    />
  );
}

export default About
