import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, HeaderLinkStyle, LinkStyle } from './Styles';
import LogoImg from '../../Img/Logo.png';
import { ABOUT_PATH, LIST_PATH, MAIN_PATH, SEARCH_PATH, SIGNIN_PATH, SIGNUP_PATH, ADMIN_PATH } from './Path';
import { UpScroll } from './Ref';
import { AdminLink } from '../Admin/AdminLinkComponent';


export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {/* <Div> */}
            <Header>
                <Link to={MAIN_PATH}>
                    <Logo src={LogoImg} alt={ YouIf } />
                </Link>
            </Header>
            <HeaderLink>
                <HeaderLinkStyle to={SIGNIN_PATH}>로그인</HeaderLinkStyle>
                <HeaderLinkStyle to={SIGNUP_PATH}>회원가입</HeaderLinkStyle>
            </HeaderLink>
            <Nav>
                <LinkStyle to={ABOUT_PATH}>About</LinkStyle>
                <LinkStyle to={SEARCH_PATH}>Ai Search</LinkStyle>
                <LinkStyle to={LIST_PATH}>Underdogs</LinkStyle>
            </Nav>
                <UpScroll>
                    <Body>
                        {children}
                    </Body>
                </UpScroll>
            <Footer>
                <div>
                    <Slogan>
                        { YouIf }
                    </Slogan>
                    <Copyright>
                        <AdminLink adminPath={ADMIN_PATH}>ⓒ</AdminLink>{Underdog}
                    </Copyright>
                </div>
            </Footer>
        {/* </Div> */}
    </>
    );
};


const Logo = styled.img`
    width: auto;
    height: 55px;
`

const Header = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 90px;
    background-color: ${Colors.main};
    z-index: 10;
`;

const HeaderLink = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: 100px 100px;
    background-color: ${Colors.main};
    height: 40px;
    justify-content: end;
    text-align: start;
`

const Nav = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: 160px 160px 160px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 65px;
    font-family: "Logo";
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    background-color: ${Colors.sub};
    color: ${Colors.b};
    z-index: 10;
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
    width: 100%;
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
    height: 100px;
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
const Underdog = "  7팀(Underdog) - 엘리스 AI 6기 3차 프로젝트"

