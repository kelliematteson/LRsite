import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';



export default function Footer () {
    const Footer = styled.footer`
    position: fixed;
    background: var(--pink);
    bottom: 0;
    left: 0;
    height: 150px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 100;
    @media (max-width: 768px) {
      position: static;
      height: 100px;
      width: 100%;
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 0;
      
    }
  `;
  const Navigation = styled.nav`
  padding: 10px;
  flex-direction: column;
  > a {
    font-size: 1rem
    color: #fff;
    margin: 0 0 2em;
    display: block;
    text-decorationcolor: #fff;
    text-decoration: none;
    box-shadow: none;
    text-align: center;
  }
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const SubNav = styled(Navigation)`
  left: 0;
  flex-direction: row;
  display: inline-flex;
  text-align: center;
  width: 100%;
  text-align: center;
  justify-content: center;
  > a {
    font-size: 0.8rem;
    margin: 0 1em;
  }
`;

const Social = styled(SubNav)`
  width: 90%;
  justify-content: space-around;
  > a {
    margin: 5;
    width: 20px;
  }
  a:hover {
    opacity: 50%;
  }
`;
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    social {
                        facebook
                        twitter
                        linkedin
                        instagram
                    }
                }
            }
        }
    `);

    const { social } = data.site.siteMetadata;
    return(
        
        <Footer>
            <Social>
                <a href={`https://facebook.com/${social.facebook}`} target="_blank" rel="noopener noreferrer">
                <StaticImage src="../images/whiteFacebook.png" alt="facebook" />
                </a>
                <a href={`https://linkedin.com/${social.linkedin}`} target="_blank" rel="noopener noreferrer">
                <StaticImage src="../images/whiteLinkedin.png" alt="linked in" />
                </a>
                <a href={`https://instagram.com/${social.instagram}`} target="_blank" rel="noopener noreferrer">
                <StaticImage src="../images/whiteInstagram.png" alt="instagram" />
                </a>
                <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noopener noreferrer">
                <StaticImage src="../images/whiteTwitter.png" alt="twitter" />
                </a>
            </Social>
        <p className="signature">&copy; Kellie Matteson {new Date().getFullYear()}</p>
        </Footer>
    
    )
}