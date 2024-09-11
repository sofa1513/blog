import cn from 'classnames';

import { ArticleFormFields } from '../ArticleFormFields/ArticleFormFields';

import classes from './ArticleCreater.module.scss';

const ArticleCreater = () => {
  return (
    <div className={cn(classes['main__article-creator'])}>
      <span className={cn(classes['article-creator__title'])}>Create new article</span>
      <ArticleFormFields slug="" />
    </div>
  );
};

export { ArticleCreater };
