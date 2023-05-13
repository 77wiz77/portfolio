import styles from './MyButton.module.scss';
import { PropTypes } from 'prop-types';

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.myBtn}>
      {children}
    </button>
  );
};

MyButton.propTypes = {
  props: PropTypes.string,
  children: PropTypes.node,
};

export default MyButton;
