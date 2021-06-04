import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { gatsbyImageData } from 'gatsby-plugin-image';
import ArticleList from '../components/ArticleList';


export default function HomePage({ data }) {
  const articles = data.articles.nodes;
  return (
    <Layout>
      <ArticleList articles={articles}/>
    </Layout>
  )
}

export const query = graphql`
  query ArticleQuery {
    articles: allSanityArticle {
      nodes {
        name
        publication
        text
        slug {
          current
        }
        link
        _id
        image {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
