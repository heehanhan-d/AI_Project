import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// ColorStyle
export const Colors = {
    w: "#ffffff",
    b: "#000000",
    r: 'ff000',
    g: "#c0c0c0",
    s: '#dadada',
    hot: "#dc143c",
    pink: '#FFABAB',
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