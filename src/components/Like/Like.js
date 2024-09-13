var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import cn from 'classnames';
import { useActions } from '../../hooks/useActions';
import { useAuth } from '../../hooks/useAuth';
import likeIcon from './like.svg';
import redLikeIcon from './redLike.svg';
import classes from './like.module.scss';
const Like = ({ slug, favorited, favoritesCount }) => {
    const [isLiked, setIsLiked] = useState(favorited);
    const [likeCount, setLikeCount] = useState(favoritesCount);
    const { fetchFavoriteArticle, fetchUnfavoriteArticle } = useActions();
    const { newUser } = useAuth();
    const username = newUser === null || newUser === void 0 ? void 0 : newUser.username;
    useEffect(() => {
        setIsLiked(favorited);
        setLikeCount(favoritesCount);
    }, [favorited, favoritesCount]);
    const toggleLike = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (isLiked) {
                yield fetchUnfavoriteArticle(slug);
                setIsLiked(false);
                setLikeCount((prevCount) => prevCount - 1);
            }
            else {
                yield fetchFavoriteArticle(slug);
                setIsLiked(true);
                setLikeCount((prevCount) => prevCount + 1);
            }
        }
        catch (error) {
            console.error('Error handling like:', error);
        }
    });
    const likeIconSrc = isLiked ? redLikeIcon : likeIcon;
    const handleClick = username ? toggleLike : () => null; // Запрет кликаесли  не авторизован
    const cursorClass = username ? classes['like-cursor'] : '';
    return (_jsxs("div", { className: cn(classes['title__div-likes']), children: [_jsx("img", { className: cn(classes['div-likes__icon-like'], cursorClass), src: likeIconSrc, alt: "like-icon", onClick: handleClick }), _jsx("span", { className: cn(classes['div-likes__counter-likes']), children: likeCount })] }));
};
export { Like };
