import cn from 'classnames';

import { ArticleFormFields } from '../ArticleFormFields/ArticleFormFields';
import { Slug } from '../Article/Article';

import classes from './ArticleEditer.module.scss';

const ArticleEditer = ({ slug }: Slug) => {
  return (
    <div className={cn(classes['main__article-creator'])}>
      <span className={cn(classes['article-creator__title'])}>Edit article</span>
      <ArticleFormFields slug={slug} />
    </div>
  );
};

export default ArticleEditer;
