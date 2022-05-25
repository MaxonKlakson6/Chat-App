import React from 'react';

interface InputProps {
    className: string;
    type: string;
    placeholder: string;
}

const FormInput = ({ className, placeholder, type }: InputProps) => {
    return (
        <input type={type} className={className} placeholder={placeholder} />
    );
};

export default FormInput;
