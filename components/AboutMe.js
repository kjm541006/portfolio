import styles from "./AboutMe.module.css";

const InfoSection = ({ sectionClass, title, content, link, linkClass, titleClass, contentClass }) => (
  <div className={sectionClass}>
    <div className={titleClass}>{title}</div>
    <div className={contentClass}>
      {link ? (
        <a href={link} className={linkClass}>
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  </div>
);

const AboutMe = () => {
  return (
    <>
      <div className={styles.aboutme_wrapper} id="aboutme">
        <div className={styles.aboutme_title}>
          <div className={styles.aboutme_title_text}>About me</div>
        </div>
        <div className={styles.aboutme_info}>
          <InfoSection
            sectionClass={styles.aboutme_info_name}
            title="이름"
            content="김주민"
            titleClass={styles.aboutme_info_name_title}
            contentClass={styles.aboutme_info_name_content}
          />
          <InfoSection
            sectionClass={styles.aboutme_info_birth}
            title="생년월일"
            content="1997.05.04"
            titleClass={styles.aboutme_info_birth_title}
            contentClass={styles.aboutme_info_birth_content}
          />
          <InfoSection
            sectionClass={styles.aboutme_info_loc}
            title="거주"
            content="서울시 광진구"
            titleClass={styles.aboutme_info_loc_title}
            contentClass={styles.aboutme_info_loc_content}
          />
          <InfoSection
            sectionClass={styles.aboutme_info_edu}
            title="학력"
            content="가톨릭대학교 컴퓨터정보공학부"
            titleClass={styles.aboutme_info_edu_title}
            contentClass={styles.aboutme_info_edu_content}
          />
        </div>
      </div>
      <div className={styles.contact_wrapper} id="contact">
        <div className={styles.contact_title}>
          <div className={styles.contact_title_text}>Contact</div>
        </div>
        <div className={styles.contact_info}>
          <InfoSection
            sectionClass={styles.contact_info_phone}
            title="연락처"
            content="010-2831-7006"
            link="tel:010-2831-7006"
            linkClass={styles.contact_phone}
            titleClass={styles.contact_info_phone_title}
            contentClass={styles.contact_info_phone_content}
          />
          <InfoSection
            sectionClass={styles.contact_info_email}
            title="이메일"
            content="kjm541113@gmail.com"
            link="mailto:kjm541113@gmail.com"
            linkClass={styles.contact_email}
            titleClass={styles.contact_info_email_title}
            contentClass={styles.contact_info_email_content}
          />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
