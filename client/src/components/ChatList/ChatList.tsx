import { UnorderedList } from '@chakra-ui/react';

import ChatCard from 'src/components/ChatCard/ChatCard';

interface ChatListProps {
    className: string;
}

const some = new Array(20);
some.fill('string');

const ChatList = ({ className }: ChatListProps): JSX.Element => {
    return (
        <UnorderedList className={className}>
            {some.map((_, index) => (
                <ChatCard key={index} />
            ))}
        </UnorderedList>
    );
};

export default ChatList;
