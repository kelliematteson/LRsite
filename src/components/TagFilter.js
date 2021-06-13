
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

function countTags(tags) {
    // const counts = tags
        
        // const sortedTags = Object.values(counts).sort(
        //     (a,b) => b.count - a.count
        // );
        // return sortedTags;
}
export default function TagFilter() {
    const { tags } = useStaticQuery(graphql`
    query TagQuery {
         tags: allSanityArticle {
          nodes {
            tag
            _id
            name
          }
        }
      }
    `);
    

    const countedTags = countTags(tags.nodes);
    console.log({ countedTags });
    
    return (
        <div>
        <p>Tag Filter!</p>
        </div>
    )
}