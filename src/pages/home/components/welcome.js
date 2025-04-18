import React from 'react'
import { graphql, Link, StaticQuery } from "gatsby"

function Welcome({data}) {
  return (
    <StaticQuery 
    query={graphql`
    query Pickle{
        allGraphCmsHomeWelcome {    
            edges {
              node {
                title1
                title2White
                title3Gold
                  welcomeText{
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
    <div className='welcome-main'>
       <div className='main-cont'>
       {data.allGraphCmsHomeWelcome.edges.map(({ node: welcome }) => (
        <>
         <span>{welcome.title1}</span>
         <h1>{welcome.title2White} <br /><span>{welcome.title3Gold}</span></h1>
         </>
        ))}
        {data.allGraphCmsHomeWelcome.edges.map(({ node: welcome }) => (
        <div dangerouslySetInnerHTML={{ __html: welcome.welcomeText.html }} /> 
      ))}
         <a href="/contact-us/" className="all-button">Read More</a>
       </div>
    </div>
    )}
    />
  );
}

export default Welcome

