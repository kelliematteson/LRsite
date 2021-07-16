import { graphql } from 'gatsby';
import React from 'react';
import ArticleList from '../components/ArticleList';
import TagFilter from '../components/TagFilter';




export default function HomePage({ data }) {
  
  const articles = data.articles.nodes;
  
  
  return (
    <>
    <h2>Featured Stories</h2>
      <TagFilter />
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
