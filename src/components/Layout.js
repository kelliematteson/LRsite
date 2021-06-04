import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './header';


const ContentStyles = styled.div`
    background: var(--offwhite);
    padding: 2rem;
    height: 100%;
`;




export default function Layout({ children }) {

    return(
        <>
            <GlobalStyles />
            <ContentStyles>
                <Nav />
                <Header />
                {children}
                <Footer />
            </ContentStyles>
        </>
    )
}