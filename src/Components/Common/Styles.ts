import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';


export const Colors = {
    w: "#ffffff",
    b: "#000000",
    s: "#c0c0c0",
    c: "#dc143c",
    main: "#FED159",
    sub: "#FEE59F",
    footer: "#94B5EA"
};    
    
export const Button = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
    display: none;
`;

export const FindUnderdog = `PLEASE FIND MY UNDERDOG`
