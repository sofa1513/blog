import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Popconfirm } from 'antd';
import { useActions } from '../../hooks/useActions';
import classes from './ArticleBtns.module.scss';
const ArticleBtns = ({ slug }) => {
    const { fetchDeleteArticle, fetchArticles } = useActions();
    const navigate = useNavigate();
    const confirm = () => {
        fetchDeleteArticle(slug);
        fetchArticles();
        navigate('/');
        message.success('Article deleted successfully');
    };
    const cancel = () => {
        message.error('Deletion was canceled');
    };
    return (_jsxs("div", { className: classes['item__div-article-btns'], children: [_jsx(Popconfirm, { title: "Are you sure to delete this article?", onConfirm: confirm, onCancel: cancel, okText: "Yes", cancelText: "No", children: _jsx(Button, { danger: true, children: "Delete" }) }), _jsx(Link, { to: "edit", children: _jsx(Button, { className: classes['div-article-btns__edit-btn'], children: "Edit" }) })] }));
};
export { ArticleBtns };
