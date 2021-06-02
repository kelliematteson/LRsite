import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 200px;
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
`;


export default function Nav() {
    return(
        <Container>
            <nav>
                <ul>
                    <li>
                    <Link to="/">LOGO</Link>
                    </li>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </Container>
    )
}

