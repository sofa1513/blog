import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import { ArticleFormFields } from '../ArticleFormFields/ArticleFormFields';
import classes from './ArticleEditer.module.scss';
const ArticleEditer = ({ slug }) => {
    return (_jsxs("div", { className: cn(classes['main__article-creator']), children: [_jsx("span", { className: cn(classes['article-creator__title']), children: "Edit article" }), _jsx(ArticleFormFields, { slug: slug })] }));
};
export default ArticleEditer;
