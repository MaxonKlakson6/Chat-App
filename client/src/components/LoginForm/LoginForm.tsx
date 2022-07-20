import { Link } from 'react-router-dom';
import { Box, Divider, FormControl } from '@chakra-ui/react';
import classNames from 'classnames';

import FormButton from 'src/components/UI/FormButton';
import FormInput from 'src/components/UI/FormInput';
import styles from 'src/components/LoginForm/LoginForm.module.scss';

const LoginForm = (): JSX.Element => {
    return (
        <Box className={classNames(styles.loginForm)}>
            <FormControl className={classNames(styles.loginFormContainer)}>
                <FormInput
                    className={classNames(styles.loginInput)}
                    type='email'
                    placeholder='Email'
                />
                <FormInput
                    className={classNames(styles.loginInput)}
                    type='password'
                    placeholder='Password'
                />
                <FormButton
                    pathTo='/mainpage'
                    className={classNames(styles.formButton)}
                    innerText='Log in'
                />
                <Link to='/' className={classNames(styles.linkForgotPassword)}>
                    Forgot password?
                </Link>
                <Divider marginBottom='1rem' opacity={0.3} />
                <FormButton
                    pathTo='/'
                    className={classNames(
                        styles.formButton,
                        styles.formButtonGreen,
                    )}
                    innerText='Create new acc'
                />
            </FormControl>
        </Box>
    );
};

export default LoginForm;
