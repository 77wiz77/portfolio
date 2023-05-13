import styles from './MySkills.module.scss';

const MySkills = () => {
  return (
    <div id='myskills' className={styles.container}>
      <div className={styles.skills}>
        <div className={styles.skills_left}>
          <h2>Скиллы</h2>
        </div>
        <div className={styles.skills_right}>
          <ul>
            <li>
              <sup>1</sup> &nbsp; HTML5 / CSS3 Modules / SASS/SCSS Modules
            </li>
            <li>
              <sup>2</sup> &nbsp; JavaScript / TypeScript
            </li>
            <li>
              <sup>3</sup> &nbsp; React
            </li>
            <li>
              <sup>4</sup> &nbsp; Redux / MobX / Recoil
            </li>
            <li>
              <sup>5</sup> &nbsp; MUI
            </li>
            <li>
              <sup>6</sup> &nbsp; React-Router-Dom
            </li>
            <li>
              <sup>7</sup> &nbsp; Axios
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
