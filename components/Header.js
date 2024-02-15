import Image from "next/image";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [isNavbarWhite, setIsNavbarWhite] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
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

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  const goToAboutme = () => {
    let topAboutMe = document.getElementById("aboutme");
    topAboutMe.scrollIntoView();
  };

  const goToContact = () => {
    let topContact = document.getElementById("contact");
    topContact.scrollIntoView();
  };

  const goToSkills = () => {
    let topSkills = document.getElementById("skills");
    topSkills.scrollIntoView();
  };

  const goToProjects = () => {
    let topProjects = document.getElementById("projects");
    topProjects.scrollIntoView();
  };

  return (
    <header className={styles.header}>
      <Image className={styles.header_img} src={"/images/img.jpg"} layout="fill" objectFit="cover" objectPosition="center" />
      <nav className={`${styles.navbar} ${isNavbarWhite ? styles.navbar_white : ""}`}>
        <div className={styles.nav_content}>
          <div className={styles.name} onClick={goToTop}>
            주민의 포트폴리오(개발중)
          </div>
          <div className={styles.menu}>
            <div onClick={() => goToAboutme()}>About me</div>
            <div onClick={() => goToContact()}>Contact</div>
            <div onClick={() => goToSkills()}>Skills</div>
            <div onClick={() => goToProjects()}>Projects</div>
            <div>
              <a href="#"></a>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className={`${styles.menu} ${isMenuActive ? styles.menu_active : ""}`}>
        <nav className={styles.hamburger_menu} onClick={toggleMenu}>
          <div className={styles.nav_content}>
            <div className={styles.name}>주민의 포트폴리오</div>
            <div className={styles.hamburger}>
              <Image
                className={styles.hamburger_img}
                src={"/images/hamburger.png"}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              안녕
            </div>
            <div>
              <a href="#aboutme">About me</a>
            </div>
            <div>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <a href="#skills">Skills</a>
            </div>
            <div>
              <a href="#projects">Projects</a>
            </div>
            <div>
              <a href="#">띠용</a>
            </div>
          </div>
        </nav>
      </div> */}
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
