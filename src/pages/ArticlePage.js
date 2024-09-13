import { jsx as _jsx } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import Article from '../components/Article/Article';
const ArticlePage = () => {
    const { slug } = useParams();
    return _jsx(Article, { slug: slug });
};
export { ArticlePage };
