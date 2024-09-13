import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { message } from 'antd';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Spinner } from '../Spinner/Spinner';
import classes from './EditProfileForm.module.scss';
const loader = (_jsx("div", { className: classes.form__spin, children: _jsx(Spinner, { size: 25 }) }));
const EditProfileForm = () => {
    var _a, _b, _c, _d;
    const formSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        email: Yup.string()
            .required('Email address is required')
            .email('Email address is not valid'),
        password: Yup.string()
            .min(6, 'Password length should be at least 6 characters')
            .max(40, 'Password cannot exceed more than 40 characters')
            .required('Password is required'),
        image: Yup.string()
            .url('Image URL is not valid')
            .matches(/\.(jpeg|jpg|gif|png|svg)$/, 'Image URL should link to an image file'),
    });
    const { register, formState: { errors }, handleSubmit, reset, setError, } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(formSchema),
    });
    const { fetchEditProfile, setIsUpdatedToDefault } = useActions();
    const loading = useTypedSelector((state) => state.editProfile.loading);
    const serverErrors = useTypedSelector((state) => state.editProfile.errors);
    const isUserUpdated = useTypedSelector((state) => state.editProfile.user.updated);
    useEffect(() => {
        if (isUserUpdated) {
            message.success('Profile is updated successfully');
            setIsUpdatedToDefault();
            reset();
        }
    }, [isUserUpdated]);
    useEffect(() => {
        if (serverErrors.email) {
            setError('email', {
                type: 'server',
                message: `This email ${serverErrors.email}`,
            });
        }
        if (serverErrors.username) {
            setError('username', {
                type: 'server',
                message: `This username ${serverErrors.username}`,
            });
        }
    }, [serverErrors]);
    const onSubmit = (data) => {
        const user = {
            user: {
                username: data.username,
                email: data.email,
                password: data.password,
                image: data.image,
            },
        };
        fetchEditProfile(user);
    };
    const isSpinner = loading ? loader : null;
    return (_jsxs("div", { className: cn(classes['main__edit-profile-form']), children: [_jsx("span", { className: cn(classes['edit-profile-form__title']), children: "Edit Profile" }), _jsxs("form", { className: cn(classes['edit-profile-form__form']), onSubmit: handleSubmit(onSubmit), children: [_jsx("label", { className: cn(classes['form__label-username'], classes['form-label']), children: "Username" }), _jsx("input", Object.assign({}, register('username'), { className: cn(classes['form__input-username'], classes['form-input']), placeholder: "Username" })), _jsx("span", { className: cn(classes['form__span-error']), children: (errors === null || errors === void 0 ? void 0 : errors.username) && ((_a = errors === null || errors === void 0 ? void 0 : errors.username) === null || _a === void 0 ? void 0 : _a.message) }), _jsx("label", { className: cn(classes['form__label-email'], classes['form-label']), children: "Email address" }), _jsx("input", Object.assign({}, register('email'), { className: cn(classes['form__input-email'], classes['form-input']), placeholder: "Email address" })), _jsx("span", { className: cn(classes['form__span-error']), children: (errors === null || errors === void 0 ? void 0 : errors.email) && ((_b = errors === null || errors === void 0 ? void 0 : errors.email) === null || _b === void 0 ? void 0 : _b.message) }), _jsx("label", { className: cn(classes['form__label-password'], classes['form-label']), children: "New password" }), _jsx("input", Object.assign({}, register('password'), { className: cn(classes['form__input-password'], classes['form-input']), type: "password", placeholder: "New password" })), _jsx("span", { className: cn(classes['form__span-error']), children: (errors === null || errors === void 0 ? void 0 : errors.password) && ((_c = errors === null || errors === void 0 ? void 0 : errors.password) === null || _c === void 0 ? void 0 : _c.message) }), _jsx("label", { className: cn(classes['form__label-repeat-pwd'], classes['form-label']), children: "Avatar image (url)" }), _jsx("input", Object.assign({}, register('image'), { className: cn(classes['form__input-repeat-pwd'], classes['form-input']), placeholder: "Avatar image" })), _jsx("span", { className: cn(classes['form__span-error']), children: (errors === null || errors === void 0 ? void 0 : errors.image) && ((_d = errors === null || errors === void 0 ? void 0 : errors.image) === null || _d === void 0 ? void 0 : _d.message) }), isSpinner || _jsx("input", { className: cn(classes['form__submit']), type: "submit", value: "Save" })] })] }));
};
export default EditProfileForm;
