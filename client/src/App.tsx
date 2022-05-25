import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import LoginPage from 'src/pages/LoginPage/LoginPage';
import MainPage from 'src/pages/MainPage/MainPage';

const App = (): JSX.Element => {
    return (
        <ChakraProvider>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/mainpage' element={<MainPage />} />
            </Routes>
        </ChakraProvider>
    );
};

export default App;
