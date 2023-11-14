import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.nav_content}>
          <div className={styles.name}>주민의 포트폴리오</div>
          <div className={styles.menu}>
            <div>About me</div>
            <div>Contact</div>
            <div>Skills</div>
            <div>Projects</div>
            <div>띠용</div>
          </div>
        </div>
      </nav>
      <div className={styles.header_main}>
        <div className={styles.header_main_content}>
          <div className={styles.header_main_title}>
            <span>안녕하세요</span> <br />
            <span>김주민의 포트폴리오 입니다</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
