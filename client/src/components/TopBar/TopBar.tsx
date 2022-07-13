import { memo } from 'react';
import { Menu, Box, Heading, Text } from '@chakra-ui/react';
import classNames from 'classnames';

import ClickableIcon from 'src/components/UI/ClickableIcon/ClickableIcon';
import search from 'src/static/images/chat-window/magnifying-glass-solid.svg';
import chatInfo from 'src/static/images/chat-window/address-book-solid.svg';
import chatSettings from 'src/static/images/chat-window/ellipsis-vertical-solid.svg';
import styles from 'src/components/TopBar/TopBar.module.scss';

const TopBar = (): JSX.Element => {
    return (
        <Menu>
            <Box className={classNames(styles.navbarMenu)}>
                <Box className={classNames(styles.chatTitle)}>
                    <Heading as='h5' className={classNames(styles.chatName)}>
                        Chat name
                    </Heading>
                    <Text className={classNames(styles.userSessionInfo)}>
                        last seen 1 hour ago
                    </Text>
                </Box>
                <Box className={classNames(styles.iconHolder)}>
                    <ClickableIcon imageSource={search} />
                    <ClickableIcon imageSource={chatSettings} />
                    <ClickableIcon imageSource={chatInfo} />
                </Box>
            </Box>
        </Menu>
    );
};

export default memo(TopBar);
