import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

function Pickleball() {
  // Fetch data using a GraphQL query
  const data = useStaticQuery(graphql`
    query PickleballQuery {
      allGraphCmsHomePickleball {
        edges {
          node {
            title1
            title2White
            title3Gold
            title2BWhite
            content {
              html
            }
          }
        }
      }
    }
  `);

  // Get the first node (assuming you're fetching only one item)
  const pickleData = data.allGraphCmsHomePickleball.edges[0].node;

  return (
    <div className="pickleball-main">
      <div className="main-cont">
        <span>{pickleData.title1}</span>
        <h1>
          {pickleData.title2White} <span>{pickleData.title3Gold}</span>
          <br />
          {pickleData.title2BWhite}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: pickleData.content.html }} />
        <a href="/pickle-ball" className="all-button">Read More</a>
      </div>
    </div>
  );
}

export default Pickleball;

{/*import React from 'react'
import { graphql, Link, StaticQuery } from "gatsby"

function Pickleball({data}) {
  return (
    <StaticQuery 
    query={graphql`
    query Pickle{
        allGraphCmsHomePickleball {    
            edges {
              node {
                title1
                title2White
                title2BWhite
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
    <div className='pickleball-main'>
       <div className='main-cont'>
       {data.allGraphCmsHomePickleball.edges.map(({ node: welcome }) => (
        <>
         <span>{welcome.title1}</span>
         <h1>{welcome.title2White} <span>{welcome.title3Gold}</span><br />{welcome.title2BWhite}</h1>
         </>
        ))}
        {data.allGraphCmsHomePickleball.edges.map(({ node: pick }) => (
        <div dangerouslySetInnerHTML={{ __html: pick.content.html}} /> 
        ))}
      <a href="/pickle-ball" className="all-button">Read More</a>
       </div>
    </div>
    )}
    />
  );
}

export default Pickleball*/}
