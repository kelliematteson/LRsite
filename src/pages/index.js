import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ArticleList from '../components/ArticleList';
import TagFilter from '../components/TagFilter';
import SEO from '../components/SEO';




export default function HomePage({ data }) {
  
  const articles = data.articles.nodes;
  
  
  return (
    <>
    <SEO />
    <h2 className="featuredStoriesTitle">Featured Stories</h2>
      <TagFilter />
      <ArticleList articles={articles} />
    </>
  )
}

export const query = graphql`
query ArticleQuery($tag: [String]) {
  articles: allSanityArticle(filter: {
    tags: {
      elemMatch: {
        name: {
          in: $tag
        }
      }
    }
  }) {
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
      tags {
        id
        name
      }
    }
  }
}
`;
