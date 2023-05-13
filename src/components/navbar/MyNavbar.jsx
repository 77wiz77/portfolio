import styles from './MyNavbar.module.scss';
import { useState } from 'react';

const MyNavbar = () => {
  const [burgerSpan, setBurgerSpan] = useState(`${styles.burger__span}`);
  const [isList, setList] = useState(`${styles.navbar__list}`);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerSpan(`${styles.burger__span} ${styles.clicked}`);
      setList(`${styles.navbar__list} ${styles.navbar__list_show}`);
      document.body.classList.add(`${styles.navbar__list_show}`);
    } else {
      setBurgerSpan(`${styles.burger__span} ${styles.unclicked}`);
      setList(`${styles.navbar__list}`);
      document.body.classList.remove(`${styles.navbar__list_show}`);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <header>
      <div className={styles.offset}></div>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.navbar_left}>
            <div className={styles.navbar__logo}>Артур Ким</div>
          </div>
          <div className={styles.navbar_right}>
            <ul className={isList}>
              <li>
                <a href='#about' onClick={updateMenu}>
                  Обо мне
                </a>
              </li>
              <li>
                <a href='#myprojects' onClick={updateMenu}>
                  Проекты
                </a>
              </li>
              <li>
                <a href='#myskills' onClick={updateMenu}>
                  Скиллы
                </a>
              </li>
              <li>
                <a href='#myform' onClick={updateMenu}>
                  Контакты
                </a>
              </li>
              <li>
                <ul className={styles.social}>
                  <li>
                    <a href='https://github.com/77wiz77'>
                      <img
                        src='assets/social icons/github-icon.svg'
                        alt='github-icon'
                      />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:arturkim30@gmail.com?subject='Предложение о работе!'&body='Добрый день, Артур!'">
                      <img
                        src='assets/social icons/gmail-icon.svg'
                        alt='gmail-icon'
                      />
                    </a>
                  </li>
                  <li>
                    <a href='https://t.me/ArthurKimDev'>
                      <img
                        src='assets/social icons/telegram-icon.svg'
                        alt='telegram-icon'
                      />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className={styles.burger} onClick={updateMenu}>
              <div className={burgerSpan}></div>
              <div className={burgerSpan}></div>
              <div className={burgerSpan}></div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MyNavbar;
