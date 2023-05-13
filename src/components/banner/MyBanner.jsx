import styles from './MyBanner.module.scss';
import MyButton from '../UI/MyButton/MyButton';

const MyBanner = () => {
  return (
    <div id='mybanner' className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.banner__info}>
          <h1 className={styles.banner__text}>
            Привет, я Артур, <br /> Frontend-разработчик
          </h1>
          <p>Это мой сайт-портфолио</p>
          <a href='#myform'>
            <MyButton>Связаться</MyButton>
          </a>
        </div>
        <div className={styles.banner__illustration}>
          <img
            className={styles.img_animate}
            src='assets/illustration.svg'
            alt='illustration'
          />
        </div>
      </div>
    </div>
  );
};

export default MyBanner;
