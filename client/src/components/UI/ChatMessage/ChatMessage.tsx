import { Box, Heading, Text } from '@chakra-ui/react';
import classNames from 'classnames';

import styles from 'src/components/UI/ChatMessage/ChatMessage.module.scss';

interface ChatMessageProps {
    senderName: string;
    messageText: string;
}

const ChatMessage = ({
    senderName,
    messageText,
}: ChatMessageProps): JSX.Element => {
    return (
        <Box className={classNames(styles.chatMessage)}>
            <Heading className={classNames(styles.senderName)} as='h5'>
                {senderName}
            </Heading>
            <Text>{messageText}</Text>
        </Box>
    );
};

export default ChatMessage;
