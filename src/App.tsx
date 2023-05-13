import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Component/common/layout";
import { MainPage } from "./Pages/MainPage";
import { AboutPage } from "./Pages/AboutPage";
import { AiSearchPage } from "./Pages/AiSearchPage";
import { DogListPage } from "./Pages/DogListPage";
import { SignUpPage } from "./Pages/SignUpPage";
    
import './App.css';


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route element={<MainPage />} path="/" />
                    <Route element={<AboutPage />} path="/about" />
                    <Route element={<AiSearchPage />} path="/search" />
                    <Route element={<DogListPage />} path="/list" />
                    <Route element={<SignUpPage />} path="/sign-up" />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
