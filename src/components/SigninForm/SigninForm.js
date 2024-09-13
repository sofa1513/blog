import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { useAuth } from '../../hooks/useAuth';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Spinner } from '../Spinner/Spinner';
import classes from './SigninForm.module.scss';
const SignInForm = () => {
    var _a, _b;
    const formSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email address is required')
            .matches(/^[0-9a-z][a-z0-9._\-^s]*@[a-z]*\.[a-z]+/, 'Email address is not valid: example@mail.com.'),
        password: Yup.string().required('Password is required'),
    });
    const { register, formState: { errors }, handleSubmit, reset, setError, } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(formSchema),
    });
    const navigate = useNavigate();
    const location = useLocation();
    const { signIn } = useAuth();
    const isUser = useTypedSelector((state) => state.userData.user.username);
    const serverError = useTypedSelector((state) => state.userData.errors);
    const loading = useTypedSelector((state) => state.userData.loading);
    const fromPage = ((_b = (_a = location.state) === null || _a === void 0 ? void 0 : _a.from) === null || _b === void 0 ? void 0 : _b.pathname) || '/';
    useEffect(() => {
        if (isUser)
            navigate(fromPage, { replace: true });
        if (serverError['email or password']) {
            setError('email', {
                type: 'server',
                message: 'Email or password is invalid.',
            });
            setError('password', {
                type: 'server',
                message: 'Email or password is invalid.',
            });
        }
    }, [isUser, serverError, navigate, fromPage, setError]);
    const onSubmit = (data) => {
        const user = {
            user: {
                email: data.email,
                password: data.password,
            },
        };
        signIn(user, () => null);
        reset();
    };
    return (_jsxs("div", { className: cn(classes['main__sign-in-form']), children: [_jsx("h2", { className: cn(classes['sign-in-form__title']), children: "Sign In" }), _jsxs("form", { className: cn(classes['sign-in-form__form']), onSubmit: handleSubmit(onSubmit), children: [_jsx("label", { htmlFor: "email", className: cn(classes['form-label']), children: "Email address" }), _jsx("input", Object.assign({}, register('email'), { className: cn(classes['form-input']), placeholder: "Email address", autoComplete: "email", id: 'email' })), errors.email && _jsx("span", { className: cn(classes['form__error']), children: errors.email.message }), _jsx("label", { htmlFor: "password", className: cn(classes['form-label']), children: "Password" }), _jsx("input", Object.assign({}, register('password'), { className: cn(classes['form-input']), type: "password", placeholder: "Password", autoComplete: 'current-password', id: 'password' })), errors.password && _jsx("span", { className: cn(classes['form__error']), children: errors.password.message }), _jsxs("div", { className: cn(classes['form__actions']), children: [loading ? _jsx(Spinner, { size: 25 }) : _jsx("input", { className: classes['submit'], type: "submit", value: "Login" }), _jsxs("span", { className: classes['form__signup'], children: ["Don\u2019t have an account?", ' ', _jsx(Link, { to: "/sign-up", className: cn(classes['signup-link']), children: "Sign Up." })] })] })] })] }));
};
export default SignInForm;
