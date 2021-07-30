import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';


const TagStyles = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 240px;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background: var(--offwhite);
    border-radius: 2px;
    text-decoration: none;
    font-size: 2rem;
    color: #15134A;
    .count {
      background: var(--offwhite);
      padding: 2px 5px;
      font-size: 16px;
    }
    
    &[aria-current='page'] {
      background: var(--pink);
      color: white;
      opacity: 100%;
    }
    &[aria-current='page'] .count {
      background: var(--pink);
      color: white;
      opacity: 100%;
    }
  }
 
  a:hover {
    opacity: 60%;
  }
  @media(max-width: 1024px) {
   flex-wrap: wrap;
   margin-left: 240px;
   a {
     font-size: 1.5rem;
   }
  }
  @media(max-width: 768px) {
    margin-left: 20px;
  }
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
          <Link to="/">
            <span>All</span>
    {/* <span className="count">{articles.nodes.length}</span> */}
          </Link>
          {tagsWithCounts.map((tag) => (
          <Link to={`/${tag.name}`} key={tag.name}>
            <span>{tag.name}</span>
            {/* <span className="count">{tag.count}</span> */}
            </Link>
          ))}
        </TagStyles>
    )
}