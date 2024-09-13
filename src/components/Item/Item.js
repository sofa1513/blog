import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Like } from '../Like/Like';
import { transformDate, formatDescription, formatTitle } from '../../services/BlogFunctions';
import Avatar from './Avatar';
import Tags from './Tags';
import classes from './item.module.scss';
const Item = ({ slug, author, createdAt, description, tagList, title, favoritesCount, favorited, }) => {
    const formattedDate = transformDate(createdAt);
    const formattedDescription = formatDescription(description);
    const titleArticle = formatTitle(title);
    return (_jsxs("div", { className: cn(classes.item), children: [_jsxs("div", { className: cn(classes.item__header), children: [_jsxs("div", { className: cn(classes['header__div-title-tag']), children: [_jsxs("div", { className: cn(classes['div-title-tag__title']), children: [_jsx(Link, { className: cn(classes['title__title-article']), to: `/articles/${slug}`, children: titleArticle }), _jsx(Like, { slug: slug, favorited: favorited, favoritesCount: favoritesCount })] }), _jsx(Tags, { tags: tagList })] }), _jsxs("div", { className: cn(classes['header__div-user-date']), children: [_jsxs("div", { className: cn(classes['div-user-date__wrapper-name-date']), children: [_jsx("span", { className: cn(classes['div-user-date__user-name']), children: author.username }), _jsx("span", { className: cn(classes['div-user-date__date']), children: formattedDate })] }), _jsx(Avatar, { imageUrl: author.image })] })] }), _jsx("span", { className: cn(classes.item__text), children: formattedDescription })] }));
};
export default Item;
