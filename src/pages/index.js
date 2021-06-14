import { graphql } from 'gatsby';
import React from 'react';
import ArticleList from '../components/ArticleList';




export default function HomePage({ data }) {
  
  const articles = data.articles.nodes;
  
  
  return (
    <>
    <h2>Featured Stories</h2>
      <ArticleList articles={articles} />
    </>
  )
}

export const query = graphql`
query ArticleQuery {
  articles: allSanityArticle {
    nodes {
      id
      image {
        asset {
          gatsbyImageData
        }
      }
      link
      tag
      name
      slug {
        current
      }
      text
      publication
    }
  }
}
`;
