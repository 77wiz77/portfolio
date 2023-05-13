import styles from './MyCheckbox.module.scss';
import { PropTypes } from 'prop-types';

const MyCheckbox = ({ id, name, value, children, ...props }) => {
  return (
    <div className={styles.myCheckbox}>
      <input
        className={styles.myCheckbox__checkbox}
        type='checkbox'
        id={id}
        name={name}
        value={value}
        {...props}
      />
      <label className={styles.myCheckbox__label} htmlFor={id}></label>
      <label className={styles.label}>
        <div className={styles.label__text}>Я принимаю условия &nbsp;</div>
        <a className={styles.myCheckbox__a} href='https://pageclip.co/privacy'>
          {children}
        </a>
      </label>
    </div>
  );
};

MyCheckbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
};

export default MyCheckbox;
