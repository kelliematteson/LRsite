import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';




const ArticleGridStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 4rem;
    grid-auto-rows: 400px auto auto auto;
    margin-left: 240px;
`;

const ArticleStyles = styled.div`
    display: grid;

    @supports not (grid-template-rows: subgrid) {
        --rows: auto auto auto 1fr;
    }
    grid-template-rows: var(--rows, subgrid);
    grid-row: span 4;
    grid-gap: 1rem;
    h2,
    p {
        margin: 0;
    }
    a {
        text-decoration: none;
        color: black;
    }
`;

function SingleArticle({ article }) {
    
    return <ArticleStyles>
        <GatsbyImage image={getImage(article.image.asset.gatsbyImageData)} />
        <a href={article.link}><h2>{article.name}</h2></a>
        <p>{article.publication}</p>
        <p>{article.text}</p>
        
    </ArticleStyles>
}

export default function ArticleList({ articles }) {
    
    return (
        <ArticleGridStyles>
            {articles.map((article) => (
            <SingleArticle key={article.id} article={article} />
            ))}
            
        </ArticleGridStyles>
    )
}