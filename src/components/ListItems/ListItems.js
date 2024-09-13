import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import cn from 'classnames';
import { Spinner } from '../Spinner/Spinner';
import Item from '../Item/Item';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import classes from './ListItems.module.scss';
const ListItems = () => {
    const { articles, loading } = useTypedSelector((state) => state.articles);
    const { fetchArticles } = useActions();
    useEffect(() => {
        fetchArticles();
    }, []);
    if (loading)
        return _jsx(Spinner, {});
    const articlesList = articles.map((item) => {
        return (_jsx("li", { className: cn(classes['list-items__item']), children: _jsx(Item, { slug: item.slug, author: item.author, createdAt: item.createdAt, description: item.description, tagList: item.tagList, title: item.title, favoritesCount: item.favoritesCount, favorited: item.favorited }) }, item.slug));
    });
    return _jsx("ul", { className: cn(classes['main__list-items']), children: articlesList });
};
export default ListItems;
