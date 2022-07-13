import { Box, Slide, useDisclosure } from '@chakra-ui/react';
import classNames from 'classnames';

import ClickableIcon from 'src/components/UI/ClickableIcon/ClickableIcon';

import settingsMenu from 'src/static/images/chat-window/bars-solid.svg';
import styles from 'src/components/SlideMenu/SlideMenu.module.scss';

const SlideMenu = (): JSX.Element => {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Box>
            <ClickableIcon imageSource={settingsMenu} onClick={onToggle} />
            <Slide
                className={classNames(styles.slide)}
                direction='left'
                in={isOpen}
            >
                <Box className={classNames(styles.slideMenu)}></Box>
                <Box
                    className={classNames(styles.slideShadow)}
                    onClick={onToggle}
                ></Box>
            </Slide>
        </Box>
    );
};

export default SlideMenu;
