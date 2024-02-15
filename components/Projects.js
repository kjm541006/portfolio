import React from "react";
import styles from "./Projects.module.css";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <div className={styles.projects_wrapper} id="projects">
        <div className={styles.projects_title}>
          <div className={styles.projects_title_text}>Projects</div>
        </div>
        <div className={styles.projects_info}>
          <div className={styles.projects_info_project}>
            <div className={styles.projects_info_project_title}>Catch Job</div>
            <div className={styles.projects_info_project_subtitle}>2023.08 (팀 프로젝트)</div>
            <div className={styles.projects_info_project_content}>
              {/* <div className={styles.projects_info_project_content_img}> */}
              {/* </div> */}
              <Image className={styles.projects_img} src={"/images/catchjob.png"} width="450" height="300" />
              <div className={styles.projects_info_project_content_detail}></div>
            </div>
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
        </div>
      </div>
      <div className={styles.contact_wrapper} id="contact">
        <div className={styles.contact_title}>
          <div className={styles.contact_title_text}>Contact</div>
        </div>
        <div className={styles.contact_info}>
          <div className={styles.contact_info_phone}>
            <div className={styles.contact_info_phone_title}>연락처</div>
            <div className={styles.contact_info_phone_content}>
              <a href="tel:010-2831-7006" className={styles.contact_phone}>
                010-2831-7006
              </a>
            </div>
          </div>
          <div className={styles.contact_info_email}>
            <div className={styles.contact_info_email_title}>이메일</div>
            <div className={styles.contact_info_email_content}>
              <a href="mailto:kjm541113@gmail.com" className={styles.contact_email}>
                kjm541113@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
