import styles from './MyBanner.module.scss';
import MyButton from '../UI/MyButton/MyButton';

const MyBanner = () => {
  return (
    <div id='mybanner' className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.banner__info}>
          <h1 className={styles.banner__title}>
            Привет, я Артур, <br /> Frontend-разработчик
          </h1>
          <p className={styles.banner__text}>Это мой сайт-портфолио</p>
          <ul className={styles.banner__social}>
            <li>
              <a href='https://github.com/77wiz77'>
                <img
                  className={styles.social__icon}
                  src='assets/social icons/github-icon.svg'
                  alt='github-icon'
                />
              </a>
            </li>
            <li>
              <a href="mailto:arturkim30@gmail.com?subject='Предложение о работе!'&body='Добрый день, Артур!'">
                <img
                  className={styles.social__icon}
                  src='assets/social icons/gmail-icon.svg'
                  alt='gmail-icon'
                />
              </a>
            </li>
            <li>
              <a href='https://t.me/ArthurKimDev'>
                <img
                  className={styles.social__icon}
                  src='assets/social icons/telegram-icon.svg'
                  alt='telegram-icon'
                />
              </a>
            </li>
          </ul>
          <a href='#myform'>
            <MyButton>Связаться</MyButton>
          </a>
        </div>
        <div className={styles.banner__illustration}>
          <img
            className={styles.img_animate}
            src='assets/illustration.svg'
            loading='lazy'
            alt='illustration'
          />
        </div>
      </div>
    </div>
  );
};

export default MyBanner;
