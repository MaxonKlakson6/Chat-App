import { Box, Text, Image } from '@chakra-ui/react';
import classNames from 'classnames';

import LoginForm from 'src/components/LoginForm/LoginForm';
import imageSvg from 'src/static/images/login-page/logo.svg';
import styles from 'src/pages/LoginPage/LoginPage.module.scss';

const LoginPage = (): JSX.Element => {
    return (
        <Box className={classNames(styles.loginPage)}>
            <Box className={classNames(styles.loginPageContainer)}>
                <Box>
                    <Image src={imageSvg} />
                    <Text className={classNames(styles.textUnderLogo)}>
                        Join and chat with friends
                    </Text>
                </Box>
                <LoginForm />
            </Box>
        </Box>
    );
};

export default LoginPage;
