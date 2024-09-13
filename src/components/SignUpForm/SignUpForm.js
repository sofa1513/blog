import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import cn from 'classnames';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Spinner } from '../Spinner/Spinner';
import classes from './SignUpForm.module.scss';
const SignUpForm = () => {
    var _a, _b, _c, _d, _e;
    const formSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username is required')
            .min(3, 'Username length should be at least 3 characters')
            .max(20, 'Username cannot exceed more than 20 characters.'),
        email: Yup.string()
            .required('Email address is required')
            .matches(/^[0-9a-z][a-z0-9._\-^s]*@[a-z]*\.[a-z]+/, 'Email address is not valid: example@mail.com.'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password length should be at least 6 characters')
            .max(40, 'Password cannot exceed more than 40 characters'),
        cpassword: Yup.string()
            .required('Confirm Password is required')
            .min(6, 'Password length should be at least 6 characters')
            .max(40, 'Password cannot exceed more than 40 characters')
            .oneOf([Yup.ref('password')], 'Passwords do not match'),
        termOfService: Yup.boolean().oneOf([true], 'You must accept the terms and conditions')
            .required('Term of Service is required'),
    });
    const { register, formState: { errors }, handleSubmit, reset, setError, } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(formSchema),
    });
    const { fetchSignUpUser } = useActions();
    const user = useTypedSelector((state) => state.userData.user.username);
    const serverError = useTypedSelector((state) => state.userData.errors);
    const loading = useTypedSelector((state) => state.userData.loading);
    useEffect(() => {
        if (serverError.email) {
            setError('email', {
                type: 'server',
                message: 'Email is already taken.',
            });
        }
        if (serverError.username) {
            setError('username', {
                type: 'server',
                message: 'Username is already taken.',
            });
        }
    }, [serverError]);
    function onSubmit(data) {
        const user = {
            user: {
                username: data.username,
                email: data.email,
                password: data.password,
            },
        };
        fetchSignUpUser(user);
        reset();
    }
    if (user)
        return _jsx(Navigate, { to: "/", replace: true });
    const isSpinner = loading ? _jsx(Spinner, { size: 25 }) : null;
    return (_jsxs("div", { className: cn(classes['main__sign-up-form']), children: [_jsx("span", { className: cn(classes['sign-up-form__title']), children: "Create new account" }), _jsxs("form", { className: cn(classes['sign-up-form__form']), onSubmit: handleSubmit(onSubmit), children: [_jsx("label", { htmlFor: "username", className: cn(classes['form__label-username'], classes['form-label']), children: "Username" }), _jsx("input", Object.assign({}, register('username'), { className: cn(classes['form__input-username'], classes['form-input']), placeholder: "Username", id: 'username', autoComplete: 'username' })), _jsx("span", { className: cn(classes['form__span-error']), children: (errors === null || errors === void 0 ? void 0 : errors.username) && ((_a = errors === null || errors === void 0 ? void 0 : errors.username) === null || _a === void 0 ? void 0 : _a.message) }), _jsx("label", { htmlFor: 'email', className: cn(classes['form__label-email form-label'], classes['form-label']), children: "Email address" }), _jsx("input", Object.assign({}, register('email'), { className: cn(classes['form__input-email'], classes['form-input']), placeholder: "Email address", id: 'email', autoComplete: 'email' })), _jsx("span", { className: cn(classes['form__span-error']), children: (errors === null || errors === void 0 ? void 0 : errors.email) && ((_b = errors === null || errors === void 0 ? void 0 : errors.email) === null || _b === void 0 ? void 0 : _b.message) }), _jsx("label", { htmlFor: 'password', className: cn(classes['form__label-password form-label'], classes['form-label']), children: "Password" }), _jsx("input", Object.assign({}, register('password'), { className: cn(classes['form__input-password'], classes['form-input']), type: "password", placeholder: "Password", id: 'password' })), _jsx("span", { className: cn(classes['form__span-error']), children: (errors === null || errors === void 0 ? void 0 : errors.password) && ((_c = errors === null || errors === void 0 ? void 0 : errors.password) === null || _c === void 0 ? void 0 : _c.message) }), _jsx("label", { htmlFor: 'repeat-password', className: cn(classes['form__label-repeat-pwd form-label'], classes['form-label']), children: "Repeat Password" }), _jsx("input", Object.assign({}, register('cpassword'), { className: cn(classes['form__input-repeat-pwd'], classes['form-input']), type: "password", placeholder: "Repeat Password", id: 'repeat-password' })), _jsx("span", { className: cn(classes['form__span-error']), children: (errors === null || errors === void 0 ? void 0 : errors.cpassword) && ((_d = errors === null || errors === void 0 ? void 0 : errors.cpassword) === null || _d === void 0 ? void 0 : _d.message) }), _jsxs("div", { className: cn(classes['form__div-agrement']), children: [_jsx("input", Object.assign({}, register('termOfService'), { className: cn(classes['div-agrement__checkbox']), type: "checkbox", id: 'agrement' })), _jsx("label", { htmlFor: 'agrement', className: cn(classes['div-agrement__label']), children: "I agree to the processing of my personal information" })] }), _jsx("span", { className: cn(classes['form__span-error']), children: (errors === null || errors === void 0 ? void 0 : errors.termOfService) && ((_e = errors === null || errors === void 0 ? void 0 : errors.termOfService) === null || _e === void 0 ? void 0 : _e.message) }), _jsxs("div", { className: cn(classes['form__div-wrapper-submit']), children: [isSpinner || _jsx("input", { className: cn(classes['div-wrapper-submit__submit']), type: "submit", value: "Create" }), _jsxs("span", { className: cn(classes['div-wrapper-submit__span-under-create']), children: ["Already have an account?", _jsx(Link, { to: "/sign-in", className: cn(classes['span-under-create__a-sign-in']), children: "Sign In." })] })] })] })] }));
};
export default SignUpForm;
