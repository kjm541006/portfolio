import AboutMe from "./AboutMe";
import styles from "./Main.module.css";
import Skills from "./Skills";

const Main = () => {
  return (
    <div className={styles.main}>
      <AboutMe />
      <Skills />
    </div>
  );
};

export default Main;
