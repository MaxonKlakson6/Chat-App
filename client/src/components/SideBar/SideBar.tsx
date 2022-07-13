import { Box } from '@chakra-ui/react';
import classNames from 'classnames';

import FormInput from 'src/components/UI/FormInput';
import ChatList from 'src/components/ChatList/ChatList';
import SlideMenu from 'src/components/SlideMenu/SlideMenu';

import styles from 'src/components/SideBar/SideBar.module.scss';

const SideBar = (): JSX.Element => {
    return (
        <>
            <Box className={classNames(styles.sideBar)}>
                <Box
                    className={classNames(
                        styles.chatListNavigationAndSettingsMenu,
                    )}
                >
                    <SlideMenu />
                    <FormInput
                        className={classNames(styles.chatSearcher)}
                        placeholder='Search'
                    />
                </Box>
                <ChatList className={classNames(styles.chatList)} />
            </Box>
            <Box className={classNames(styles.sideBarRightSide)}></Box>
        </>
    );
};

export default SideBar;
