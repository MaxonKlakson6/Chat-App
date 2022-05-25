import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
    className: string;
    innerText: string;
    pathTo: string;
}

const FormButton = ({ className, innerText, pathTo }: ButtonProps) => {
    return (
        <Link to={pathTo} className={className}>
            {innerText}
        </Link>
    );
};

export default FormButton;
