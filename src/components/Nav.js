import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';





const Container = styled.div`
    width: 200px;
    height: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: relative;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--pink);
    z-index: 1;
    * {
        text-decoration: none;
      }
      a {
        font-style: normal;
      }
      a:before {
        display: none;
      }

    @media (max-width: 768px) {
         max-width: 100%;
         width: 100%;
         height: 90px;
         flex-direction: row;
         display: inline-flex;
         justify-content: space-around;
    }
`;

const Header = styled.div`
    box-sizing: border-box;   
    display: flex;
    flex-flow: column;
    max-width: 100%;
    width: 240px;
    background-color: var(--pink);
    opacity: 0.95;
    padding-top: 3.5rem;
    margin: auto;
    
    h1 {
      font-size: 4rem;
      text-align: center;
      margin: auto;
      text-decoration: none;

      color: white;
      :after {
        content: '';
        display: block;
        width: 0;
        height: 3px;
        background: white;
        transition: width 0.5s;
        position: relative;
        top: 5px;
      }
      :hover::after {
        width: 100%;
        text-underline-offset: 0.4em;
      }
    

    @media (max-width: 768px) {
        positiion: fixed;
        margin-top: 0;
        margin-left: 0;
        h1 {
            font-size: 3rem;
        }
    }

`;


const Navigation = styled.nav`
    padding: 2vw;
    flex-direction: column;
    
    > a {
        font-size: 2.5rem;
        font-family: adobe-garamond-pro, serif;
        font-weight: 400;
        color: #fff;
        margin: 0 10px 15px;
        display: block;
        text-decorationcolor: #fff;
        text-decoration: none;
        box-shadow: none;
        text-align: center;
        &[aria-current='page']{
            color: black;
        }
        :hover {
            opacity: 50%;
        }
    }

    @media (max-width: 768px) {
        display: inline-flex;
        flex-direction: row;

        > a {
            margin: 0 10px 0;
        }
    }
`;



export default function Nav() {
    const data = useStaticQuery(graphql`
    query MyQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);
    const { title } = data.site.siteMetadata;
    




// export default function Nav() {
    return(
        <Container>
            <Header><Link to="/">
                <h1>{title}</h1>
                </Link></Header>
            <Navigation>
                    <Link to="/"><p>Work</p></Link>
                    <Link to="/about"><p>About</p></Link>
            </Navigation>
        </Container>
    )
}

