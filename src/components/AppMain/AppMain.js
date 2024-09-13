import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import ListItems from '../ListItems/ListItems';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ArticlesPagination } from '../ArticlesPagination/ArticlesPagination';
import classes from './AppMain.module.scss';
const AppMain = () => {
    const loading = useTypedSelector((state) => state.articles.loading);
    const isLoading = loading ? null : _jsx(ArticlesPagination, {});
    return (_jsxs("main", { className: cn(classes.app__main), children: [_jsx(ListItems, {}), isLoading, _jsx("div", { className: cn(classes.main__article) })] }));
};
export default AppMain;
