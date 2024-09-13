import { jsx as _jsx } from "react/jsx-runtime";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import classes from './Spinner.module.scss';
const Spinner = ({ size = 40 }) => {
    const antIcon = _jsx(LoadingOutlined, { style: { fontSize: size }, spin: true });
    return (_jsx(Spin, { className: classes.form__spin, indicator: antIcon }));
};
export { Spinner };
