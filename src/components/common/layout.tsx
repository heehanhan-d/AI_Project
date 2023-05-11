import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { colors } from "../../Styles/colors";
import LogoImg from "../../Img/logo.png";


export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Div>
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
        </Div>
    );
};

const YouIf = "유기견을 입양해요, 유입(You, if)";

const NavStyle = {color: "black", fontSize: "20px", textDecoration: "none" }

const Slogan = styled.div`
    { Text };
    color: ${colors.w};
`

const Logo = styled.img`
    width: 12.5rem;
    height: auto;
`

const Div = styled.div`
    display: absolute;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 62.5rem;
`


const Header = styled.div`
    background-color: ${colors.main};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    // min-width: 62.5rem;
    height: 7.5rem;
`;


const Nav = styled.div`
    background-color: ${colors.sub};
    color: ${colors.b};
    display: grid;
    place-items: center;
    grid-template-columns: 10rem 10rem 10rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    // min-width: 62.5rem;
    height: 5rem;
    font-family: "Logo";
    font-size: 1.5rem;
`

export const Body = styled.div`
    background-color: ${colors.w};
    color: ${colors.b};
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: auto;
    padding: 0 2.5rem;
    padding-bottom: 5rem; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Footer = styled.div`
    background-color: ${colors.footer};
    color: ${colors.b};
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 7.5rem;
    bottom: 0;
    flex-basis: auto;
`;
