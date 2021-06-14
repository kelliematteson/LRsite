import { graphql } from 'gatsby';
import React from 'react';
import ArticleList from '../components/ArticleList';




export default function HomePage({ data }) {
  
  const articles = data.articles.nodes;
  
  
  return (
    <>
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
