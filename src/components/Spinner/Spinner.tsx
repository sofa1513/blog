import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import classes from './Spinner.module.scss';

interface ISpinProps {
  size?: number;
}

const Spinner = ({ size = 40 }: ISpinProps) => {
  const antIcon = <LoadingOutlined style={{ fontSize: size }} spin />;

  return (
    <Spin className={classes.form__spin} indicator={antIcon} />
  );
};

export { Spinner };
