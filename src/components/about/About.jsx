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
            Меня зовут Артур – я front-end разработчик. Владею cледующим стеком
            технологий: HTML, CSS3/SASS/SCSS modules, JS/TS, React,
            Redux/MobX/Recoil, MUI, React-router-dom, Axios. Начал увлекаться
            этим с 2020 года. До этого я 2 года занимался разработкой
            графического и полиграфического дизайна (буклеты, визитки и т.д.),
            UI/UX дизайна (дизайн мобильного приложения и веб-сайта), благодаря
            чему освоил современные графические редакторы. Имею опыт работы в
            коммерческой деятельности.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
