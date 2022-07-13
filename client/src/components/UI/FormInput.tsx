import { Input } from '@chakra-ui/react';

type InputProps = Record<string, string>;

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
