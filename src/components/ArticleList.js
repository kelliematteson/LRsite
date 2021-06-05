import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


const ArticleGridStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 4rem;
    grid-auto-rows: auto auto 400px;
`;

const ArticleStyles = styled.div`
    display: grid;
`;

function SingleArticle({ article }) {
    
    return <ArticleStyles>
        <h2>{article.name}</h2>
        <GatsbyImage image={getImage(article.image.asset.gatsbyImageData)} />
        <p>{article.text}</p>
        <p>{article.publication}</p>
        <a href={article.link}><p>Read the whole Story</p></a>
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