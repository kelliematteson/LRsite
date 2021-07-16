import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';


const TagStyles = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  gap 1rem;
`;

function countArticlesInTags(articles) {
  
  const counts = articles
    .map((article) => article.tags)
    .flat()
    .reduce((acc, tag) => {

      const existingTag = acc[tag._id];
      if(existingTag) {
      
        existingTag.count += 1;
      } else {
      
      acc[tag._id] = {
        id: tag._id,
        name: tag.name,
        count: 1, 
      }
    }
      return acc;
    }, {});
    
    const sortedTags = Object.values(counts).sort((a,b) => b.count - a.count);
    return sortedTags;
}

export default function TagFilter() {
   
  const { tags, articles } = useStaticQuery(graphql`
    query {
      tags: allSanityTag {
        nodes {
          name
          _id
        }
      }
      articles: allSanityArticle {
        nodes {
          tags {
            _id
            name
          }
        }
      }
    }
  `);
  console.clear();
  

  const tagsWithCounts = countArticlesInTags(articles.nodes);
  console.log(tagsWithCounts);

  
    return (
        <TagStyles>
          {tagsWithCounts.map((tag) => (
          <Link to={`/tag/${tag.name}`} key={tag.name}>
            <span>{tag.name}</span>
            <span>{tag.count}</span>
            </Link>
          ))}
        </TagStyles>
    )
}