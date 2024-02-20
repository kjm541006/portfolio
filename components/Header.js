import Image from "next/image";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [isNavbarWhite, setIsNavbarWhite] = useState(null);
  // const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(null);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  // useEffect(() => {
  //   const checkScreenSize = () => {
  //     setIsSmallScreen(window.innerWidth <= 1023);
  //   };

  //   const handleScroll = () => {
  //     const y = window.scrollY;
  //     if (y >= 100) {
  //       setIsNavbarWhite(true);
  //     } else {
  //       setIsNavbarWhite(false);
  //     }
  //   };

  //   window.addEventListener("resize", checkScreenSize);
  //   window.addEventListener("scroll", handleScroll);

  //   // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
  //   return () => {
  //     window.removeEventListener("resize", checkScreenSize);
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    let checkScreenSize;
    let handleScroll;

    if (typeof window !== "undefined") {
      checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth <= 1023);
      };

      handleScroll = () => {
        const y = window.scrollY;
        if (y >= 100) {
          setIsNavbarWhite(true);
        } else {
          setIsNavbarWhite(false);
        }
      };

      // 컴포넌트가 마운트될 때 현재 윈도우 너비를 설정합니다.
      checkScreenSize();
      handleScroll();

      window.addEventListener("resize", checkScreenSize);
      window.addEventListener("scroll", handleScroll);
    }

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", checkScreenSize);
        window.removeEventListener("scroll", handleScroll);
      }
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
      <Image className={styles.header_img} src={"/images/img.jpg"} width={640} height={360} />
      <nav className={`${styles.navbar} ${isNavbarWhite ? styles.navbar_white : ""}`}>
        <div className={styles.nav_content}>
          <div className={styles.name} onClick={goToTop}>
            주민의 포트폴리오(개발중)
          </div>
          <div className={`${isSmallScreen ? styles["hamburger_menu"] : styles.menu}`}>
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
      <div className={styles.header_main}>
        <div className={styles.header_main_content}>
          <div className={styles.header_main_title}>
            <div>안녕하세요</div>
            <div>김주민의 포트폴리오 입니다</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
