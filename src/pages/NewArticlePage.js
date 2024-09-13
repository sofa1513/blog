import { jsx as _jsx } from "react/jsx-runtime";
import { ArticleCreater } from '../components/ArticleCreater/ArticleCreater';
const NewArticlePage = () => {
    localStorage.removeItem('kataBlogSlug');
    return _jsx(ArticleCreater, {});
};
export { NewArticlePage };
