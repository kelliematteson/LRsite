import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import ArticleList from '../components/ArticleList';



export default function HomePage({ data }) {
  
  const articles = data.articles.nodes;
  
  
  return (
    <Layout>
      <ArticleList articles={articles} />
    </Layout>
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
