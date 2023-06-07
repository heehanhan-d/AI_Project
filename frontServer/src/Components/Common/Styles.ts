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

// HeaderLinkStyle
export const HeaderLinkStyle = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-family: 'UI';
`
// ModalStyle
export const Modal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    background-color: ${Colors.w};
    font-family: "Text";
    font-size: 20px;
    bottom: 100px;
    // margin-top: 200px;
    // margin-bottom: 250px;
`;

export const ModalContent = styled.div`
    background-color: ${Colors.w};
    padding-bottom: 20px;
    border-radius: 5px;
`;


export const ModalButton = styled(Button)`
    margin-top: 10px;
    padding: 12px 24px;
    background-color: ${Colors.footer};
    color: ${Colors.w};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: "Logo";
    font-size: 15px;
    margin-left: auto;
    margin-right: auto;
`;