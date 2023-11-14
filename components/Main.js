import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.aboutme_wrapper}>
        <div className={styles.aboutme_title}>
          <div className={styles.aboutme_title_text}>About me</div>
        </div>
        <div className={styles.aboutme_info}>
          <div className={styles.aboutme_info_name}>
            <div className={styles.aboutme_info_name_title}>이름</div>
            <div className={styles.aboutme_info_name_content}>김주민</div>
          </div>
          <div className={styles.aboutme_info_birth}>
            <div className={styles.aboutme_info_birth_title}>생년월일</div>
            <div className={styles.aboutme_info_birth_content}>1997.05.04</div>
          </div>
          <div className={styles.aboutme_info_loc}>
            <div className={styles.aboutme_info_loc_title}>거주</div>
            <div className={styles.aboutme_info_loc_content}>서울시 광진구</div>
          </div>
          <div className={styles.aboutme_info_edu}>
            <div className={styles.aboutme_info_edu_title}>학력</div>
            <div className={styles.aboutme_info_edu_content}>가톨릭대학교 컴퓨터정보공학부</div>
          </div>
          <div className={styles.aboutme_info_contact}>
            <div>연락처</div>
            <div>010-2831-7006</div>
          </div>
          <div className={styles.aboutme_info_email}>
            <div>이메일</div>
            <div>kjm541113@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
