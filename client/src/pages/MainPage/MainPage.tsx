import { Box } from '@chakra-ui/react';
import classNames from 'classnames';

import SideBar from 'src/components/SideBar/SideBar';
import ChatWindow from 'src/components/ChatWindow/ChatWindow';
import styles from 'src/pages/MainPage/MainPage.module.scss';

const MainPage = (): JSX.Element => {
    return (
        <Box className={classNames(styles.mainPage)}>
            <SideBar />
            <ChatWindow />
        </Box>
    );
};

export default MainPage;
