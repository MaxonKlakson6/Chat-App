import React from 'react';
import { Link } from 'react-router-dom';
import FormButton from '../UI/FormButton';
import FormInput from '../UI/FormInput';
import './LoginForm.scss';

const LoginForm = () => {
    return (
        <div className="login-form">
            <form action="" className="d-flex flex-column p-3">
                <FormInput
                    className="login-input p-2 mb-2"
                    type="email"
                    placeholder="Email"
                />
                <FormInput
                    className="login-input p-2 mb-2"
                    type="password"
                    placeholder="Password"
                />
                <FormButton
                    pathTo="/mainpage"
                    className="form-button btn-primary fs-4 border-0 mb-3"
                    innerText="Log in"
                />
                <Link
                    to="/"
                    className="text-center mb-3 text-decoration-none fs-6"
                >
                    Forgot password?
                </Link>
                <hr className="mb-3" />
                <FormButton
                    pathTo="/"
                    className="form-button-green form-button btn-primary btn-primary fs-6 border-0"
                    innerText="Create new acc"
                />
            </form>
        </div>
    );
};

export default LoginForm;
