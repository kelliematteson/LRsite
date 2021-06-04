import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';


const Container = styled.div`
    max-width: 220px;
    width: 18%;
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

    @media (max-width: 768px) {
        max-width: 100%;
        width: 100%;
        height: 150px;
        flex-direction: row;
        display: inline-flex;
        justify-content: space-around;
    }
`;

const Header = styled.h1`
    font-size: 3rem;
    color: white;
    text-transform: uppercase;
    display: inline-flex;
    margin-top: 3rem;

    @media (max-width: 768px) {
        display: none;
    }

`;


const Navigation = styled.nav`
    padding: 1vw;
    flex-direction: column;
    
    > a {
        font-size: 2rem;
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
            <Header>{title}</Header>
            <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
            </Navigation>
        </Container>
    )
}

