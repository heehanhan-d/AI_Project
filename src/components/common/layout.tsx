import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { colors } from "../../Styles/colors";
import LogoImg from "../../Img/logo.png";

const YouIf = "유기견을 입양해요, 유입(You, if)";

const NavStyle = {color: "black", fontSize: "20px", textDecoration: "none"}

const Slogan = styled.div`
    { Text };
    color: ${colors.white};
`

const Logo = styled.img`
    width: 200px;
    height: auto;
`

const Header = styled.header`
    background-color: #FED519;
    display: flex;
    flex-direction: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 120px;
`;

const Nav = styled.nav`
    background-color: #FEE59F;
    color: ${colors.black};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    flex-direction: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
`
const Body = styled.body`
    font-family: 'Dovemayo_gothic';
    background-color: #ffffff;
    color: #000000;
    text-align: center;
`;

const Footer = styled.footer`
    background-color: #94B5EA;
    color: #000000;
    position: absolute;
    display: flex;
    flex-basis: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 120px;
    bottom: 0; 
`;

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        // <div>
        //     <Link rel="shortcut icon" href="img/favicon.ico" />
        // </div>
        <div>
            <Header>
                <Link to="/">
                    <Logo src={LogoImg} alt={ YouIf } />
                </Link>
            </Header>
            <Nav>
                <Link to="/about" style={ NavStyle }>About</Link>
                <Link to="/search" style={ NavStyle }>AI Search</Link>
                <Link to="/list" style={ NavStyle }>Underdogs</Link>
            </Nav>
            <Body>
                {children}
            </Body>
            <Footer>
                <div>
                    <Slogan>
                        { YouIf }
                    </Slogan>
                    <p>
                        엘리스 AI 6기 3차 프로젝트 - 7팀(Underdog)
                    </p>
                </div>
            </Footer>
        </div>
    );
};