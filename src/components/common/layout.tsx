import React from "react";
import { Link } from "react-router-dom";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <header>나는 헤더</header>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/search">AI Search</Link>
                <Link to="/list">Underdog</Link>
            </nav>
            {children}
            <footer>나는 푸터</footer>
        </div>
    );
};