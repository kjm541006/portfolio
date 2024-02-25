// import styles from "./AboutMe.module.css";

// const AboutMe = () => {
//   return (
//     <>
//       <div className={styles.aboutme_wrapper} id="aboutme">
//         <div className={styles.aboutme_title}>
//           <div className={styles.aboutme_title_text}>About me</div>
//         </div>
//         <div className={styles.aboutme_info}>
//           <div className={styles.aboutme_info_name}>
//             <div className={styles.aboutme_info_name_title}>이름</div>
//             <div className={styles.aboutme_info_name_content}>김주민</div>
//           </div>
//           <div className={styles.aboutme_info_birth}>
//             <div className={styles.aboutme_info_birth_title}>생년월일</div>
//             <div className={styles.aboutme_info_birth_content}>1997.05.04</div>
//           </div>
//           <div className={styles.aboutme_info_loc}>
//             <div className={styles.aboutme_info_loc_title}>거주</div>
//             <div className={styles.aboutme_info_loc_content}>서울시 광진구</div>
//           </div>
//           <div className={styles.aboutme_info_edu}>
//             <div className={styles.aboutme_info_edu_title}>학력</div>
//             <div className={styles.aboutme_info_edu_content}>가톨릭대학교 컴퓨터정보공학부</div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.contact_wrapper} id="contact">
//         <div className={styles.contact_title}>
//           <div className={styles.contact_title_text}>Contact</div>
//         </div>
//         <div className={styles.contact_info}>
//           <div className={styles.contact_info_phone}>
//             <div className={styles.contact_info_phone_title}>연락처</div>
//             <div className={styles.contact_info_phone_content}>
//               <a href="tel:010-2831-7006" className={styles.contact_phone}>
//                 010-2831-7006
//               </a>
//             </div>
//           </div>
//           <div className={styles.contact_info_email}>
//             <div className={styles.contact_info_email_title}>이메일</div>
//             <div className={styles.contact_info_email_content}>
//               <a href="mailto:kjm541113@gmail.com" className={styles.contact_email}>
//                 kjm541113@gmail.com
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AboutMe;

import styles from "./AboutMe.module.css";

const InfoSection = ({ title, content, link, linkClass }) => (
  <div className={styles.info_section}>
    <div className={styles.info_section_title}>{title}</div>
    <div className={styles.info_section_content}>
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
          <InfoSection title="이름" content="김주민" />
          <InfoSection title="생년월일" content="1997.05.04" />
          <InfoSection title="거주" content="서울시 광진구" />
          <InfoSection title="학력" content="가톨릭대학교 컴퓨터정보공학부" />
        </div>
      </div>
      <div className={styles.contact_wrapper} id="contact">
        <div className={styles.contact_title}>
          <div className={styles.contact_title_text}>Contact</div>
        </div>
        <div className={styles.contact_info}>
          <InfoSection title="연락처" content="010-2831-7006" link="tel:010-2831-7006" linkClass={styles.contact_phone} />
          <InfoSection title="이메일" content="kjm541113@gmail.com" link="mailto:kjm541113@gmail.com" linkClass={styles.contact_email} />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
