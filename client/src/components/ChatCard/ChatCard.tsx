import { Box, ListItem, Avatar, Heading, Text, Badge } from '@chakra-ui/react';
import classNames from 'classnames';

import avatar from 'src/static/images/avatar/Cacodemon.webp';
import styles from 'src/components/ChatCard/ChatCard.module.scss';

const ChatCard = (): JSX.Element => {
    return (
        <ListItem className={classNames(styles.chatItem)}>
            <Avatar src={avatar} />
            <Box>
                <Heading as='h6' className={classNames(styles.chatName)}>
                    Chat Name
                </Heading>
                <Text>last message</Text>
            </Box>
            <Box className={classNames(styles.chatInfo)}>
                <Badge className={classNames(styles.timeLastSendMessage)}>
                    10:30
                </Badge>
                <Badge className={classNames(styles.noReadMessages)}>20</Badge>
            </Box>
        </ListItem>
    );
};

export default ChatCard;
