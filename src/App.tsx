import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Common/Layout";
import { MainPage } from "./Pages/MainPage";
import { AboutPage } from "./Pages/AboutPage";
import { AiSearchPage } from "./Pages/AiSearchPage";
import { DogListPage } from "./Pages/DogListPage";
import { SignUpPage } from "./Pages/SignUpPage";
import { SignInPage } from "./Pages/SignInPage";
import { DogDetailPage } from "./Pages/DogDetailPage";
import { AdminPage } from "./Pages/AdminPage";
import { AdoptPage } from './Pages/AdoptPage';
    
import './App.css';
import { ABOUT_PATH, ADMIN_PATH, DETAIL_PATH, LIST_PATH, MAIN_PATH, SEARCH_PATH, SIGNUP_PATH, ADOPT_PATH, SIGNIN_PATH, MYPAGE_PATH, CHECK_PATH, STATE_PATH } from "./Components/Common/Path";
import MyPagePage from "./Pages/MyPagePage";
import { FormManagement } from "./Components/Admin/FormManagementComponent";
import { FormState } from "./Components/Admin/FormStateComponent";


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route element={<MainPage />} path={MAIN_PATH} />
                    <Route element={<AboutPage />} path={ABOUT_PATH} />
                    <Route element={<AiSearchPage />} path={SEARCH_PATH} />
                    <Route element={<DogListPage />} path={LIST_PATH} />
                    <Route element={<DogDetailPage />} path={DETAIL_PATH} />
                    <Route element={<SignUpPage />} path={SIGNUP_PATH} />
                    <Route element={<AdminPage />} path={ADMIN_PATH} />
                    <Route element={<AdoptPage />} path={ADOPT_PATH} />
                    <Route element={<SignInPage />} path={SIGNIN_PATH} />
                    <Route element={<MyPagePage />} path={MYPAGE_PATH} />
                    <Route element={<FormState />} path={STATE_PATH} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
