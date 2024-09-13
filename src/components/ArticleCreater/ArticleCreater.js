import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import { ArticleFormFields } from '../ArticleFormFields/ArticleFormFields';
import classes from './ArticleCreater.module.scss';
const ArticleCreater = () => {
    return (_jsxs("div", { className: cn(classes['main__article-creator']), children: [_jsx("span", { className: cn(classes['article-creator__title']), children: "Create new article" }), _jsx(ArticleFormFields, { slug: "" })] }));
};
export { ArticleCreater };
