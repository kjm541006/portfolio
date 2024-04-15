import styles from "../Projects.module.css";

const ProjectDetail = ({ info }) => (
  <div className={styles.projects_info_detail}>
    <div className={styles.projects_info_detail_background}>
      <div className={styles.projects_info_detail_title}>
        <b className={styles.b}>{info.title}</b>
      </div>
      <div className={`${styles.projects_info_detail_content} ${styles.break_word}`}>{info.background}</div>
    </div>
    <div className={styles.projects_info_detail_learned}>
      <div className={styles.projects_info_detail_title}>
        <b>LEARNED</b>
      </div>
      <div className={`${styles.projects_info_detail_content} ${styles.break_word}`}>{info.learned}</div>
    </div>
    <div className={styles.projects_info_detail_tech}>
      <div className={styles.projects_info_detail_title}>
        TECH : <span className={styles.projects_info_detail_content}>{info.tech}</span>
      </div>
    </div>
    <div className={styles.projects_info_detail_url}>
      <div className={styles.projects_info_detail_title}>
        URL :{" "}
        <span className={`${styles.projects_info_detail_content} ${styles.break_word}`}>
          <a href={info.url} target="_blank" rel="noopener noreferrer">
            {info.url}
          </a>
        </span>
      </div>
    </div>
    <div className={styles.projects_info_detail_github}>
      <div className={styles.projects_info_detail_title}>
        Github :{" "}
        <span className={styles.projects_info_detail_content}>
          <a href={info.github} target="_blank" rel="noopener noreferrer">
            {info.github}
          </a>
        </span>
      </div>
    </div>
  </div>
);

export default ProjectDetail;
