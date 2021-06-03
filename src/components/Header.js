import React from 'react';
import styled from 'styled-components';



const HeaderStyles = styled.h1`
    color: var(--pink);
`;

export default function Header() {


    return(
        <div>
        <HeaderStyles>This is the header component</HeaderStyles>
        </div>
    )
}