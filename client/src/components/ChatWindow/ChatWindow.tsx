import { ReactNode, useState } from 'react';
import { Box } from '@chakra-ui/react';
import classNames from 'classnames';

import TopBar from 'src/components/TopBar/TopBar';
import InputMessageField from 'src/components/InputMessageField/InputMessageField';
import MessagesHolder from 'src/components/MessagesHolder/MessagesHolder';
import background from 'src/static/images/chat-window/background.png';
import styles from 'src/components/ChatWindow/ChatWindow.module.scss';

const ChatWindow = (): JSX.Element => {
    const [messageList, setMessageList] = useState<ReactNode[]>([]);

    const getMessage = (newMessage: ReactNode): void => {
        setMessageList([...messageList, newMessage]);
    };

    return (
        <Box
            className={classNames(styles.chatWindowWrapper)}
            style={{ background: `url(${background})` }}
        >
            <Box className='ChatWindow'></Box>
            <Box className={classNames(styles.chatWindow)}>
                <TopBar />
                <MessagesHolder>{messageList}</MessagesHolder>
                <InputMessageField getMessage={getMessage} />
            </Box>
            <Box className={classNames(styles.chatWindowRightSide)}></Box>
        </Box>
    );
};

export default ChatWindow;
