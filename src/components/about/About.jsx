import styles from './About.module.scss';

const About = () => {
  return (
    <div id='about' className={styles.container}>
      <div className={styles.about}>
        <div className={styles.about_left}>
          <h2>О себе</h2>
        </div>
        <div className={styles.about_right}>
          <p>
            Меня зовут Артур – я front-end разработчик. Владею различными
            инструментами веб-разработки от HTML до JavaScript (REST API). Начал
            увлекаться этим с 2019 года. До этого я 2 года занимался разработкой
            графического и полиграфического дизайна (буклеты, визитки,
            разработка фирменного стиля), а также UI/UX дизайна (дизайн
            мобильного приложения и веб-сайта), благодаря чему освоил
            современные графические редакторы. Имею опыт работы в коммерческой
            деятельности. Готов учиться чему-то новому.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
