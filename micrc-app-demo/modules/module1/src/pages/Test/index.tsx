import React from 'react';
import styles from './index.less';

import JsImgSrc from './js-img.png';
import { ReactComponent as Svg } from './svg_ shopping_bag.svg';

export default () => {
  return (
    <div>
      <h2 className={styles.title}>Page Test</h2>
      <h3>js里使用图片</h3>
      <img src={JsImgSrc} alt="js image" />
      <h3>js里使用svg</h3>
      <img src={require('./svg.png').default} alt="js svg img" />
      <Svg width={90} height={120} />
      <h3>css里使用图片1</h3>
      <div className={styles.img1} style={{ width: 600, height: 380 }} />
      <h3>css里使用图片2</h3>
      <div className={styles.img2} style={{ width: 600, height: 380 }} />
    </div>
  );
}
