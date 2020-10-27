import React from 'react';
import styles from './index.less';
import { MicroApp } from 'umi';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <MicroApp name="module2" history={{ type: 'browser', basename: '/overview/t3' }} autoSetLoading />
      {/*<MicroApp name="module1" />*/}
    </div>
  );
}
