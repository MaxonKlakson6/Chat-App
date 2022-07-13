import { ReactNode, useEffect, useRef, useState } from 'react';

import ChatMessage from 'src/components/UI/ChatMessage/ChatMessage';

interface MessageAreaProps {
    getMessage: (message: ReactNode) => void;
    className: string;
}

const MessageArea = ({
    getMessage,
    className,
}: MessageAreaProps): JSX.Element => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [message, setMessage] = useState('');
    const [textAreaHeight, setTextAreaHeight] = useState('55px');

    useEffect(() => {
        setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
    }, [message]);

    const resizeInputField = (): void => {
        setTextAreaHeight('55px');
    };

    const handleMessage = (event: React.BaseSyntheticEvent): void => {
        setMessage(event.target.value);
        resizeInputField();
    };

    const clearInput = (event: React.KeyboardEvent): void => {
        event.preventDefault();
        setMessage('');
        resizeInputField();
    };

    const pushMessage = (event: React.KeyboardEvent): void => {
        const trimmedMessage = message.trim();
        const isReadyToPush =
            event.key === 'Enter' &&
            !event.shiftKey &&
            trimmedMessage.length !== 0;
        const isEmptyField =
            event.key === 'Enter' && trimmedMessage.length === 0;
        if (isReadyToPush) {
            getMessage(<ChatMessage senderName='name' messageText={message} />);
            clearInput(event);
        } else if (isEmptyField) {
            clearInput(event);
        }
    };
    return (
        <textarea
            style={{ height: textAreaHeight }}
            ref={textAreaRef}
            className={className}
            placeholder='Write a message...'
            value={message}
            onChange={handleMessage}
            onKeyDown={pushMessage}
        ></textarea>
    );
};

export default MessageArea;
