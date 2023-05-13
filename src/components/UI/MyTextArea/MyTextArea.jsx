import React from 'react';
import styles from './MyTextArea.module.scss';

const MyTextArea = React.forwardRef((props, ref) => {
  return <textarea ref={ref} {...props} className={styles.myTextArea} />;
});

MyTextArea.displayName = 'Search';

export default MyTextArea;
