import { memo } from 'react';
import { Button, Image } from '@chakra-ui/react';
import classNames from 'classnames';

import styles from 'src/components/UI/ClickableIcon/ClickableIcon.module.scss';

interface ClickableIconProps {
    imageSource: string;
    onClick?: () => void;
}

const ClickableIcon = ({
    imageSource,
    onClick,
}: ClickableIconProps): JSX.Element => {
    return (
        <Button className={classNames(styles.clickableIcon)} onClick={onClick}>
            <Image src={imageSource} boxSize='20px' />
        </Button>
    );
};

export default memo(ClickableIcon);
