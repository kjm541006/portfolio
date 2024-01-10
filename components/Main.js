import AboutMe from "./AboutMe";
import styles from "./Main.module.css";
import Projects from "./Projects";
import Skills from "./Skills";

const Main = () => {
  return (
    <div className={styles.main}>
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
};

export default Main;
