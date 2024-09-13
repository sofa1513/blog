import { jsx as _jsx } from "react/jsx-runtime";
import cn from 'classnames';
import { isTagsValid } from '../../services/BlogFunctions';
import classes from './item.module.scss';
const Tags = ({ tags }) => {
    const validTags = isTagsValid(tags);
    if (!validTags || validTags.length === 0)
        return null;
    return (_jsx("div", { className: cn(classes['div-title-tag__div-tags']), children: validTags.map((tag, index) => (_jsx("div", { className: cn(classes['div-tags__tag']), children: tag }, index))) }));
};
export default Tags;
