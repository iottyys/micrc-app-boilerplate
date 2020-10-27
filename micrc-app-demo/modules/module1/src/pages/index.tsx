import React from 'react';
import styles from './index.less';
import { Link } from 'umi';

export default () => {
  return (
    <div>
      <b>首页</b>
      <Link to="/test">Go to list page</Link>
      <h1 className={styles.title}>Page index 1</h1>
    </div>
  );
}
