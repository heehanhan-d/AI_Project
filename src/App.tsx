import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Common/Layout";
import { MainPage } from "./Pages/MainPage";
import { AboutPage } from "./Pages/AboutPage";
import { AiSearchPage } from "./Pages/AiSearchPage";
import { DogListPage } from "./Pages/DogListPage";
import { SignUpPage } from "./Pages/SignUpPage";
    
import './App.css';
import { ABOUT_PATH, LIST_PATH, MAIN_PATH, SEARCH_PATH, SIGNUP_PATH } from "./Components/Common/Path";


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route element={<MainPage />} path={MAIN_PATH} />
                    <Route element={<AboutPage />} path={ABOUT_PATH} />
                    <Route element={<AiSearchPage />} path={SEARCH_PATH} />
                    <Route element={<DogListPage />} path={LIST_PATH} />
                    <Route element={<SignUpPage />} path={SIGNUP_PATH} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
