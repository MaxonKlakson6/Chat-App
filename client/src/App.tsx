import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import MainPage from './MainPage/MainPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/mainpage" element={<MainPage />} />
        </Routes>
    );
};

export default App;
