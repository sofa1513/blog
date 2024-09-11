import React from 'react';

import { ArticleCreater } from '../components/ArticleCreater/ArticleCreater';

const NewArticlePage = () => {
  localStorage.removeItem('kataBlogSlug');

  return <ArticleCreater />;
};

export { NewArticlePage };
