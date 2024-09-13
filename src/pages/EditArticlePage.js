import { jsx as _jsx } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import ArticleEditor from '../components/ArticleEditer/ArticleEditer';
const EditArticlePage = () => {
    const { slug } = useParams();
    localStorage.setItem('kataBlogSlug', String(slug));
    return _jsx(ArticleEditor, { slug: slug });
};
export { EditArticlePage };
