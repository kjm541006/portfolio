import ProjectDetail from "./ProjectDetail";
import styles from "../Projects.module.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const ProjectInfo = ({ info }) => (
  <div className={styles.projects_info_project}>
    <div className={styles.projects_info_project_title}>
      {" "}
      <a href={info.url} target="_blank" rel="noopener noreferrer">
        {info.title}
      </a>
    </div>
    <div className={styles.projects_info_project_subtitle}>{info.subtitle}</div>
    <div className={styles.projects_info_project_content}>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {info.images?.map((image) => (
          <div key={image}>
            <Image className={styles.projects_img} src={image} width="2560" height="1440" alt={image} />
          </div>
        ))}
      </Carousel>
      {/* <div className={styles.projects_info_project_content_detail}></div> */}
    </div>
    <ProjectDetail info={info} />
  </div>
);

export default ProjectInfo;
