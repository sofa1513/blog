import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { message } from 'antd';
import { useForm, useFieldArray } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Spinner } from '../Spinner/Spinner';
import classes from './ArticleFormFields.module.scss';
const loader = (_jsx("div", { className: classes.form__spin, children: _jsx(Spinner, { size: 25 }) }));
const ArticleFormFields = ({ slug }) => {
    var _a, _b, _c, _d, _e, _f;
    const tagListSchema = {
        name: Yup.string()
            .required('If you don not want to add tag, please delete this field')
            .max(14, 'Tag length cannot exceed more than 14 characters'),
    };
    const formSchema = Yup.object().shape({
        title: Yup.string().required('Title is required').max(54, 'Text length cannot exceed more than 54 characters'),
        description: Yup.string()
            .required('Description is required')
            .max(231, 'Description length cannot exceed more than 231 characters'),
        body: Yup.string().required('Text is required'),
        tagList: Yup.array().of(Yup.object().shape(tagListSchema)),
    });
    const { fetchCreateArticle, fetchEditArticle, fetchArticles } = useActions();
    const navigate = !slug ? () => null : useNavigate();
    const typeOfFetch = !slug ? fetchCreateArticle : fetchEditArticle;
    const needFetchArticles = !slug ? () => null : fetchArticles;
    const { article } = useTypedSelector((state) => state.anArticle);
    const { loading } = useTypedSelector((state) => state.createArticle);
    const { title, description, body, tagList } = article;
    const defaultTitle = !slug ? '' : title;
    const defaultDescription = !slug ? '' : description;
    const defaultBody = !slug ? '' : body;
    const formatedTagList = tagList.map((tag) => {
        return { name: tag };
    });
    const defaultTagList = !slug ? [] : formatedTagList;
    const createdMsg = 'Article created successfully';
    const editedMsg = 'Article edited successfully';
    const typeOfMessage = !slug ? createdMsg : editedMsg;
    const tagsIndexesForErrors = [];
    const { register, formState: { errors }, handleSubmit, reset, control, } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(formSchema),
        defaultValues: {
            title: defaultTitle,
            description: defaultDescription,
            body: defaultBody,
            tagList: defaultTagList,
        },
    });
    const { fields, append, remove } = useFieldArray({
        name: 'tagList',
        control,
    });
    function onSubmit(data) {
        const article = {
            article: {
                title: data.title,
                description: data.description,
                body: data.body,
                tagList: data.tagList ? data.tagList.map((tag) => tag.name) : [],
            },
        };
        typeOfFetch(article, slug);
        needFetchArticles();
        reset();
        remove();
        navigate('/', { replace: true });
        message.success(typeOfMessage);
    }
    const spinner = loading ? loader : null;
    return (_jsxs("form", { className: cn(classes['article-creator__form']), onSubmit: handleSubmit(onSubmit), children: [_jsx("label", { className: cn(classes['form__label-title'], classes['form-label']), children: "Title" }), _jsx("input", Object.assign({}, register('title'), { className: cn(classes['form__input-title'], classes['form-input']), placeholder: "Title" })), _jsx("span", { className: cn(classes['form__span-error']), children: (errors === null || errors === void 0 ? void 0 : errors.title) && ((_a = errors === null || errors === void 0 ? void 0 : errors.title) === null || _a === void 0 ? void 0 : _a.message) }), _jsx("label", { htmlFor: "description", className: cn(classes['form__label-description'], classes['form-label']), children: "Short description" }), _jsx("input", Object.assign({}, register('description'), { className: cn(classes['form__input-description'], classes['form-input']), placeholder: "Short description", id: 'description' })), _jsx("span", { className: cn(classes['form__span-error']), children: (errors === null || errors === void 0 ? void 0 : errors.description) && ((_b = errors === null || errors === void 0 ? void 0 : errors.description) === null || _b === void 0 ? void 0 : _b.message) }), _jsx("label", { htmlFor: "body", className: cn(classes['form__label-text'], classes['form-label']), children: "Text" }), _jsx("textarea", Object.assign({}, register('body'), { className: cn(classes['form__text-area-text'], classes['form-input']), placeholder: "Text", id: 'body' })), _jsx("span", { className: cn(classes['form__span-error']), children: (errors === null || errors === void 0 ? void 0 : errors.body) && ((_c = errors === null || errors === void 0 ? void 0 : errors.body) === null || _c === void 0 ? void 0 : _c.message) }), _jsx("label", { className: cn(classes['form__label-tags'], classes['form-label']), children: "Tags" }), _jsxs("div", { className: cn(classes['form__div-tags']), children: [_jsx("div", { className: cn(classes['div-tags__new-tag'], classes['div-tag']), children: fields.map((field, index) => {
                            var _a, _b, _c;
                            tagsIndexesForErrors.push(index);
                            return (_jsxs("section", { className: cn(classes['new-tag__wrapper']), children: [_jsxs("div", { className: cn(classes['wrapper__div-wrap']), children: [_jsx("input", Object.assign({}, register(`tagList.${index}.name`), { className: cn(classes['div-wrap__input-tag'], classes['form-input']), type: "text", placeholder: "Tag" })), _jsx("button", { className: cn(classes['div-wrap__delete-btn'], classes['tag-delete-btn']), type: "button", onClick: () => remove(index), children: "Delete" })] }), _jsx("span", { className: cn(classes['wrapper__span-error-tags']), children: (errors === null || errors === void 0 ? void 0 : errors.tagList) && ((_c = (_b = (_a = errors === null || errors === void 0 ? void 0 : errors.tagList) === null || _a === void 0 ? void 0 : _a[index]) === null || _b === void 0 ? void 0 : _b.name) === null || _c === void 0 ? void 0 : _c.message) })] }, field.id));
                        }) }), _jsxs("div", { className: cn(classes['div-tags__wrapper-add-btn']), children: [_jsx("button", { className: cn(classes['wrapper-add-btn__add-btn'], classes['tag-add-btn']), type: "button", onClick: () => append({ name: '' }), children: "Add tag" }), _jsx("span", { className: cn(classes['wrapper-add-btn__span-error']), children: (errors === null || errors === void 0 ? void 0 : errors.tagList) && (_jsx("span", { className: cn(classes['span-error__add-btn-error']), children: (_f = (_e = (_d = errors === null || errors === void 0 ? void 0 : errors.tagList) === null || _d === void 0 ? void 0 : _d[tagsIndexesForErrors.length - 1]) === null || _e === void 0 ? void 0 : _e.name) === null || _f === void 0 ? void 0 : _f.message })) })] })] }), spinner || _jsx("input", { className: cn(classes['form__submit']), type: "submit", value: "Send" })] }));
};
export { ArticleFormFields };
