import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


const WorkContainer = styled.div`
    padding: 1.5rem;
`;

const ArticleGridStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 4rem;
    grid-auto-rows: auto auto auto auto auto;
    margin-left: 240px;
    box-sizing: border-box;
   @media(max-width: 768px) {
       margin-left: 20px;
   }
`;
const TagButtonStyles = styled.div`
display: flex;
flex-direction: row;

`;
const EachButtonStyles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const ArticleStyles = styled.div`
    display: grid;

    @supports not (grid-template-rows: subgrid) {
        --rows: auto auto auto 1fr;
    }
    grid-template-rows: var(--rows, subgrid);
    grid-row: span 5;
    grid-gap: 1rem;
    h2,
    p {
        margin: 0;
    }
    a {
        text-decoration: none;
        color: black;
    }
    &:hover {
        .gatsby-image-wrapper {
            opacity: 0.7;
            filter: grayscale(100%);
        }
    }
`;


function SingleArticle({ article }) {
    
    return <ArticleStyles>
        <a href={article.link}><GatsbyImage image={getImage(article.image.asset.gatsbyImageData)} alt="" className="image"/></a>
        <a href={article.link}><p className="articleTitle">{article.name}</p></a>
        <p className="articlePublication">{article.publication}</p>
        <p className="articleText">{article.text}</p>
        {/* <TagButtonStyles>
            <EachButtonStyles>
                {article.tags.map((tag) => <p className="smallTag">{tag.name}</p>) }
            </EachButtonStyles>
        </TagButtonStyles> */}
        
    </ArticleStyles>
}

export default function ArticleList({ articles }) {
    
    return (
        <WorkContainer>
        <ArticleGridStyles>
            {articles.map((article) => (
            <SingleArticle key={article.id} article={article} />
            ))}
            
        </ArticleGridStyles>
        </WorkContainer>
        
        
    )
}