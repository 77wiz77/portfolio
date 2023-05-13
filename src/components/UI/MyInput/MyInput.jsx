import React, { Component } from 'react';
import styles from './MyInput.module.scss';
import PropTypes from 'prop-types';

const MyInput = React.forwardRef(({ ref, ...props }) => {
  return (
    <input
      ref={ref}
      {...props}
      value={props.value || ''}
      className={styles.myInput}
    />
  );
});

MyInput.displayName = 'Search';

MyInput.propTypes = {
  value: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Component) }),
  ]),
};

export default MyInput;
