import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// ColorStyle
export const Colors = {
    w: "#ffffff",
    b: "#000000",
    s: "#c0c0c0",
    c: "#dc143c",
    main: "#FED159",
    sub: "#FEE59F",
    footer: "#94B5EA"
};    
 
// ButtonStyle
export const Button = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
    display: flex;
`;

// FindText
export const FindUnderdog = `PLEASE FIND MY UNDERDOG`

// LinkStyle
export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: inherit;
`