import React from 'react';
import { useParams } from 'react-router-dom';

import ArticleEditor from '../components/ArticleEditer/ArticleEditer';

const EditArticlePage = () => {
  const { slug } = useParams();

  localStorage.setItem('kataBlogSlug', String(slug));

  return <ArticleEditor slug={slug} />;
};

export { EditArticlePage };
