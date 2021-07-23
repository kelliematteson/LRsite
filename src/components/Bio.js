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

    const AboutContainer = styled.div`
        display: flex;
        flex-direction: column;
    `;

    const BioContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20%;
    padding: 1rem;
    @media (max-width: 768px) {
      margin-left: 50px;
    }
  `;
    const BioText = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    
    `;
    const { title } = data.site.siteMetadata;
    const { description } = data.site.siteMetadata;

    return(
        <>
        <AboutContainer>
            <h2 className="aboutTitle">About {title}</h2>
            <hr className="line" />
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
                {description}
                </BioText>
            </BioContainer>
            <hr className="line" />
        </AboutContainer>
        </>
    )
}