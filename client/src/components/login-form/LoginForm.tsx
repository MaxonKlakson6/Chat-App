import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Divider, FormControl } from '@chakra-ui/react';
import FormButton from 'src/components/UI/FormButton';
import FormInput from 'src/components/UI/FormInput';
import 'src/components/login-form/LoginForm.scss';

const LoginForm = (): JSX.Element => {
    return (
        <Box className='login-form'>
            <FormControl className='login-form-container'>
                <FormInput
                    className='login-input'
                    type='email'
                    placeholder='Email'
                />
                <FormInput
                    className='login-input'
                    type='password'
                    placeholder='Password'
                />
                <FormButton
                    pathTo='/mainpage'
                    className='form-button'
                    innerText='Log in'
                />
                <Link to='/' className='link-forgot-password'>
                    Forgot password?
                </Link>
                <Divider marginBottom='1rem' opacity={0.3} />
                <FormButton
                    pathTo='/'
                    className='form-button-green form-button'
                    innerText='Create new acc'
                />
            </FormControl>
        </Box>
    );
};

export default LoginForm;
