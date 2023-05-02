import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/common/layout";
import { MainPage } from "./pages/MainPage";
import { AboutPage } from "./pages/AboutPage";
import { AISearchPage } from "./pages/AISearchPage";
import { DogListPage } from "./pages/DogListPage";
import { SignUpPage } from "./pages/SignUpPage";
    
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route element={<MainPage />} path="/" />
                    <Route element={<AboutPage />} path="/about" />
                    <Route element={<AISearchPage />} path="/search" />
                    <Route element={<DogListPage />} path="/list" />
                    <Route element={<SignUpPage />} path="/sign-up" />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
