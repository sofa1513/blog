import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Item from '../Item/Item';
import { ArticleBtns } from '../ArticleBtns/ArticleBtns';
import { Spinner } from '../Spinner/Spinner';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { useAuth } from '../../hooks/useAuth';
import { bodyToValid } from '../../services/BlogFunctions';
import classes from './Article.module.scss';
const Article = ({ slug }) => {
    const article = useTypedSelector((state) => state.anArticle.article);
    const loading = useTypedSelector((state) => state.anArticle.loading);
    const { fetchAnArticle } = useActions();
    const { newUser } = useAuth();
    const { author } = article;
    const isUserAuthor = (newUser === null || newUser === void 0 ? void 0 : newUser.username) === author.username;
    useEffect(() => {
        fetchAnArticle(slug);
    }, []);
    if (loading)
        return _jsx(Spinner, {});
    const isAuthBtns = isUserAuthor ? _jsx(ArticleBtns, { slug: slug }) : null;
    return (_jsx("ul", { className: classes['main__list-items'], children: _jsxs("li", { className: classes['list-items__item'], children: [_jsx(Item, { slug: article.slug, author: article.author, createdAt: article.createdAt, description: article.description, tagList: article.tagList, title: article.title, favoritesCount: article.favoritesCount, favorited: article.favorited }), isAuthBtns, _jsx(ReactMarkdown, { className: classes.item__markdown, children: bodyToValid(article.body) })] }) }));
};
export default Article;
