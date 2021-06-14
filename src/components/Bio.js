import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export default function Bio() {

    const data = useStaticQuery(graphql`
        query BioQuery {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    
    
    `);

    const BioContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px 0 0 250px;
    padding: 1rem;
    border: solid var(--pink) 4px;
    @media (max-width: 768px) {
      margin-left: 50px;
    }
  `;
    const BioText = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    `;
    const { title } = data.site.siteMetadata;
    const { description } = data.site.siteMetadata;

    return(
        <>
        <BioContainer>
        <StaticImage
        src="../images/leenaRao.png"
        alt="a photo of the writer"
        placeholder="blurred"
        style={{ marginLeft: `1rem`,
        minWidth: `200px`}}
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        />
        <BioText>
        {title}
        <br />
        {description}
        </BioText>
        </BioContainer>
        </>
    )
}