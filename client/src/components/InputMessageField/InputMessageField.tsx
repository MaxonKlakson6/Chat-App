import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import classNames from 'classnames';

import MessageArea from 'src/components/MessageArea/MessageArea';
import ClickableIcon from 'src/components/UI/ClickableIcon/ClickableIcon';
import clip from 'src/static/images/chat-window/paperclip-solid.svg';
import smile from 'src/static/images/chat-window/face-smile-solid.svg';
import microphone from 'src/static/images/chat-window/microphone-solid.svg';
import styles from 'src/components/InputMessageField/InputMessageField.module.scss';

interface InputMessageFieldProps {
    getMessage: (message: ReactNode) => void;
}

const InputMessageField = ({
    getMessage,
}: InputMessageFieldProps): JSX.Element => {
    return (
        <Box className={classNames(styles.inputHolder)}>
            <ClickableIcon imageSource={clip} />
            <MessageArea
                getMessage={getMessage}
                className={classNames(styles.inputMessages)}
            />
            <ClickableIcon imageSource={smile} />
            <ClickableIcon imageSource={microphone} />
        </Box>
    );
};

export default InputMessageField;
