import styles from './MyCard.module.scss';
import PropTypes from 'prop-types';

const MyCard = ({ name, text, img, alt, link, code }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <a href={link}>
          <img src={img} alt={alt} loading='lazy' />
        </a>
      </div>
      <div className={styles.card__title}>
        <h3>{name}</h3>
      </div>
      <div className={styles.card__code}>
        <a href={code}>Исходный код проекта</a>
      </div>
      <div className={styles.card__text}>{text}</div>
    </div>
  );
};

MyCard.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.string,
  code: PropTypes.string,
};

export default MyCard;
