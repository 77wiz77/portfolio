import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <ul className={styles.footer}>
        <li>
          <a href='https://github.com/77wiz77'>MyGithub</a>
        </li>
        <li>
          <a href='https://t.me/ArthurKimDev'>telegram</a>
        </li>
        <li>
          <a href="mailto:arturkim30@gmail.com?subject='Предложение о работе!'&body='Добрый день, Артур!'">
            arturkim30@gmail.com
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
