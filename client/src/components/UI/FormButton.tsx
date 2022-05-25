import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

interface ButtonProps {
    [key: string]: string;
}

const FormButton = ({
    className,
    innerText,
    pathTo,
}: ButtonProps): JSX.Element => {
    return (
        <Link to={pathTo}>
            <Button className={className}>{innerText}</Button>
        </Link>
    );
};

export default FormButton;
