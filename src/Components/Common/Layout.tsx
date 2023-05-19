import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, LinkStyle } from './Styles';
import LogoImg from '../../Img/Logo.png';
import { ABOUT_PATH, LIST_PATH, MAIN_PATH, SEARCH_PATH } from './Path';


export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header>
                <Link to={MAIN_PATH}>
                    <Logo src={LogoImg} alt={ YouIf } />
                </Link>
            </Header>
            <Nav>
                <LinkStyle to={ABOUT_PATH}>About</LinkStyle>

                <LinkStyle to={SEARCH_PATH}>Ai Search</LinkStyle>
                <LinkStyle to={LIST_PATH}>Underdogs</LinkStyle>
            </Nav>
            <Wrapper>
                <Body>
                    {children}
                </Body>
            </Wrapper>
            <Footer>
                <div>
                    <Slogan>
                        { YouIf }
                    </Slogan>
                    <Copyright>
                        { Underdog }
                    </Copyright>
                </div>
            </Footer>
        </div>
    );
};


const Logo = styled.img`
    width: 12.5rem;
    height: auto;
`

const Wrapper = styled.div`
    display: absolute;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 1000px;
    padding-bottom: 120px;
`

const Header = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 1000px;
    height: 120px;
    background-color: ${Colors.main};
    z-index: 10;
`;


const Nav = styled.div`
    position: fixed;
    display: grid;
    place-items: center;
    grid-template-columns: 10rem 10rem 10rem;
    align-items: center;
    justify-content: center;
    margin-top: 120px;
    left: 0;
    width: 100%;
    min-width: 1000px;
    height: 50px;
    font-family: "Logo";
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    background-color: ${Colors.sub};
    color: ${Colors.b};
    z-index: 10;
`

const NavLink = styled(Link)`
    color: ${Colors.b};
    font-size: 20px;
    text-decoration: none;
`

export const Body = styled.div`
    background-color: ${Colors.w};
    color: ${Colors.b};
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 119.8rem;
    height: 120rem;
    padding: 0 2.5rem;
    padding-bottom: 7.5rem;
    margin-top: 80px; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Footer = styled.div`
    background-color: ${Colors.footer};
    color: ${Colors.b};
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    min-width: 1000px;
    height: 120px;
    bottom: 0;
    left: 0;
    flex-basis: auto;
    z-index: 10;
    font-family: "Text";
`;

const Slogan = styled.div`
    color: ${Colors.w};
    font-family: "Logo";
    font-size: 15pt;    
`
const YouIf = "유기견을 입양해요, 유입(You, if)";

const Copyright = styled.div`
    color: ${Colors.b};
    font-family: "Text";
    margin-top: 10px;
`
const Underdog = "ⓒ 7팀(Underdog) - 엘리스 AI 6기 3차 프로젝트"
