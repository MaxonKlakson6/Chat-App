import { FC, ReactNode, useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import classNames from 'classnames';

import styles from 'src/components/MessagesHolder/MessagesHolder.module.scss';

interface MessageHolderProps {
    children: ReactNode[];
}

const MessagesHolder: FC<MessageHolderProps> = ({ children }) => {
    const scrollToBottom = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollToBottom.current?.scrollIntoView({ behavior: 'smooth' });
    }, [children]);
    return (
        <Box className={classNames(styles.messageHolderContainer)}>
            <Box>
                <Box>
                    <Box className={classNames(styles.messageHolder)}>
                        {children}
                    </Box>
                    <Box ref={scrollToBottom} />
                </Box>
            </Box>
        </Box>
    );
};

export default MessagesHolder;
