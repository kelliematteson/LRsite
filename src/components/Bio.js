import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Leena } from './Leena';

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
    const LargeAboutContainer = styled.div`
    padding: 1.5rem;
    `;
    const AboutContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin-left: 240px;
        justify-content: center;
        @media(max-width: 768px) {
            margin-left: 20px;
        }
    `;

    const BioContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    @media(max-width: 1024px) {
        flex-direction: column;
        
    }
    
  `;
    const BioText = styled.div`
    width: 70%;
    margin-left: 20px;
    padding: 20px;
    @media(max-width: 1024px) {
        width: 100%;
    }
    
    `;
    
    const { title } = data.site.siteMetadata;
    const { description } = data.site.siteMetadata;

    return(
        <>
        <LargeAboutContainer>
        <AboutContainer>
            <h2 className="aboutTitle">About {title}</h2>
            <hr className="line" />
                <BioContainer>
                    <Leena />
                    <BioText>
                    {description}
                    </BioText>
                </BioContainer>
        <hr className="line" />
        <a class="contactEmail" href="mailto:leenakrao@gmail.com"><button>Get In Touch</button></a>
        </AboutContainer>
        </LargeAboutContainer>
        </>
    )
}