import React from 'react';
import { Input } from '@chakra-ui/react';

interface InputProps {
    [key: string]: string;
}

const FormInput = ({
    className,
    placeholder,
    type,
}: InputProps): JSX.Element => {
    return (
        <Input type={type} className={className} placeholder={placeholder} />
    );
};

export default FormInput;
