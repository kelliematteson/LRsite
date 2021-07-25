import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import '../styles/custom.css';


const ContentStyles = styled.div`
    background: var(--offwhite);
    padding: 1rem;
    height: 100%;
    @media (max-width: 768px) {
        padding-bottom: 200px;
    }
`;




export default function Layout({ children }) {

    
    return(
        <>
            <GlobalStyles />
            <ContentStyles>
                <Nav />
                {children}
                <Footer />
            </ContentStyles>
        </>
    )
}