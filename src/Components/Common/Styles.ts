import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// ColorStyle
export const Colors = {
    w: "#ffffff",
    b: "#000000",
    s: "#c0c0c0",
    c: "#dc143c",
    p: '#FFABAB',
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

// ModalStyle
export const Modal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: ${Colors.w};
    font-family: "Text";
    font-size: 20px;
    margin-top: 300px;
    margin-bottom: 300px;
`;

export const ModalContent = styled.div`
    background-color: ${Colors.w};
    padding-bottom: 20px;
    border-radius: 5px;
`;


export const ModalButton = styled(Button)`
    margin-top: 10px;
    padding: 12px 24px;
    background-color: ${Colors.main};
    color: ${Colors.w};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: "Logo";
    font-size: 15px;
    margin-left: auto;
    margin-right: auto;
`;
