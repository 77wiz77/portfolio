import MyCard from '../UI/MyCard/MyCard';
import styles from './MyProjects.module.scss';
import data from './projects.json';

const MyProjects = () => {
  const firstHalf = (value) => {
    if (value.id <= 2) {
      return true;
    }
  };
  const secondHalf = (value) => {
    if (value.id > 2) {
      return true;
    }
  };
  return (
    <div id='myprojects' className={styles.container}>
      <div className={styles.myProjects_close}>
        <h2 className={styles.myProjects__title}>Мои проекты</h2>
      </div>
      <div className={styles.myProjects}>
        <div className={styles.myProjects_left}>
          <div className={styles.myProjects__cards}>
            {data.nodes.filter(firstHalf).map((project) => (
              <MyCard
                key={project.id}
                name={project.name}
                text={project.text}
                img={project.img}
                alt={project.alt}
                link={project.link}
                code={project.code}
              />
            ))}
          </div>
        </div>
        <div className={styles.myProjects__line}></div>
        <div className={styles.myProjects_right}>
          <div className={styles.myProjects__cards}>
            {data.nodes.filter(secondHalf).map((project) => (
              <MyCard
                key={project.id}
                name={project.name}
                text={project.text}
                img={project.img}
                alt={project.alt}
                link={project.link}
                code={project.code}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
