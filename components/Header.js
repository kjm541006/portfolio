import Image from "next/image";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [isNavbarWhite, setIsNavbarWhite] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      console.log("y 값:", y);

      if (y >= 100) {
        setIsNavbarWhite(true);
      } else {
        setIsNavbarWhite(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <Image className={styles.header_img} src={"/images/img.jpg"} layout="fill" objectFit="cover" objectPosition="center" />
      <nav className={`${styles.navbar} ${isNavbarWhite ? styles.navbar_white : ""}`}>
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
