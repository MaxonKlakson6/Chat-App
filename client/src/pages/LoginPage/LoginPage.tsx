import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

import LoginForm from 'src/components/login-form/LoginForm';
import imageSvg from 'src/images/login-page/logo.svg';
import 'src/pages/LoginPage/LoginPage.scss';

const LoginPage = (): JSX.Element => {
    return (
        <Box className='login-page'>
            <Box className='login-page-container'>
                <Box>
                    <Image src={imageSvg} />
                    <Text className='text-under-logo'>
                        Join and chat with friends
                    </Text>
                </Box>
                <LoginForm />
            </Box>
        </Box>
    );
};

export default LoginPage;
