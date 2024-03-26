import Image from "next/image";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [isNavbarWhite, setIsNavbarWhite] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(null);

  useEffect(() => {
    let checkScreenSize;
    let handleScroll;

    if (typeof window !== "undefined") {
      checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth <= 1023);
      };

      handleScroll = () => {
        const y = window.scrollY;
        if (y >= 100 || isSmallScreen) {
          setIsNavbarWhite(true);
        } else {
          setIsNavbarWhite(false);
        }
      };

      checkScreenSize();
      handleScroll();

      window.addEventListener("resize", checkScreenSize);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", checkScreenSize);
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isSmallScreen, isNavbarWhite]);

  const toggleHamburgerMenuVisible = () => {
    let hamburgerMenu = document?.querySelector(`.${styles.nav_content_mobile}`);
    hamburgerMenu?.classList.toggle(`${styles.nav_content_mobile_visible}`);
  };

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  const goToAboutme = () => {
    let topAboutMe = document.getElementById("aboutme");
    topAboutMe.scrollIntoView();
    toggleHamburgerMenuVisible();
  };

  const goToContact = () => {
    let topContact = document.getElementById("contact");
    topContact.scrollIntoView();
    toggleHamburgerMenuVisible();
  };

  const goToSkills = () => {
    let topSkills = document.getElementById("skills");
    topSkills.scrollIntoView();
    toggleHamburgerMenuVisible();
  };

  const goToProjects = () => {
    let topProjects = document.getElementById("projects");
    topProjects.scrollIntoView();
    toggleHamburgerMenuVisible();
  };

  return (
    <header className={styles.header}>
      <Image className={styles.header_img} src={"/images/img.jpg"} width={2400} height={1350} alt="헤더이미지" />
      <nav className={`${styles.navbar} ${isNavbarWhite ? styles.navbar_white : ""}`}>
        <div className={styles.nav_content}>
          <div className={styles.name} onClick={goToTop}>
            주민의 포트폴리오
          </div>
          {!isSmallScreen ? (
            <div className={styles.menu}>
              <div onClick={() => goToAboutme()}>About me</div>
              <div onClick={() => goToContact()}>Contact</div>
              <div onClick={() => goToSkills()}>Skills</div>
              <div onClick={() => goToProjects()}>Projects</div>
            </div>
          ) : (
            <div className={styles.hamburger} onClick={() => toggleHamburgerMenuVisible()}>
              <Image src={"/images/hamburger.svg"} width={40} height={40} />
            </div>
          )}
        </div>
        {isSmallScreen ? (
          <div className={styles.nav_content_mobile}>
            <div onClick={() => goToAboutme()}>About me</div>
            <div onClick={() => goToContact()}>Contact</div>
            <div onClick={() => goToSkills()}>Skills</div>
            <div onClick={() => goToProjects()}>Projects</div>
          </div>
        ) : null}
      </nav>
      <div className={styles.header_main}>
        <div className={styles.header_main_content}>
          <div className={styles.header_main_title}>
            안녕하세요
            <br />
            김주민의 포트폴리오 입니다
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
