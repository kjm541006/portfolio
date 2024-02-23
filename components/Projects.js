import React from "react";
import styles from "./Projects.module.css";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
              <Carousel autoPlay infiniteLoop>
                <div>
                  <img className={styles.projects_img} src={"/images/catchjob.png"} width="450" height="300" />
                </div>
                <div>
                  <img className={styles.projects_img} src={"/images/catchjob.png"} width="450" height="300" />
                </div>
                <div>
                  <img className={styles.projects_img} src={"/images/catchjob.png"} width="450" height="300" />
                </div>
              </Carousel>
              <div className={styles.projects_info_project_content_detail}></div>
            </div>
            <div className={styles.projects_info_detail}>
              <div className={styles.projects_info_detail_background}>
                <div className={styles.projects_info_detail_title}>
                  <b>개발배경</b>
                </div>
                <div className={`${styles.projects_info_detail_content} ${styles.break_word}`}>
                  취업준비생의 입장에서 만든 취업준비생들을 위한 <span className={styles.red}>취업활동에 도움을 주는 웹사이트</span>입니다.
                  취업 준비 시 필요한 정보와 같은 직무 희망자들 간의 정보 공유 및 스터디 등 정보공유를 하며 취업에 도움이 되는 활동을 할 수
                  있도록 개발하였습니다.
                </div>
              </div>
              <div className={styles.projects_info_detail_learned}>
                <div className={styles.projects_info_detail_title}>
                  <b>배운점</b>
                </div>
                <div className={`${styles.projects_info_detail_content} ${styles.break_word}`}>
                  프론트엔드, 백엔드, 데이터베이스 등 여러가지 기술을 활용해{" "}
                  <span className={styles.red}>전체적인 개발과정을 경험하는 좋은 계기</span>가 되었고 팀프로젝트를 진행하면서{" "}
                  <span className={styles.red}>협업 능력</span>을 키울 수 있었습니다. 또한, 새로운 기술을 배우고 적용하는 과정에서 마주치는
                  여러 문제들을 해결하며 <span className={styles.red}>문제해결 능력</span>을 키울 수 있었습니다.
                </div>
              </div>
              <div className={styles.projects_info_detail_tech}>
                <div className={styles.projects_info_detail_title}>
                  사용기술 : <span className={styles.projects_info_detail_content}>React, Springboot, MariaDB, AWS, Figma</span>
                </div>
              </div>
              <div className={styles.projects_info_detail_url}>
                <div className={styles.projects_info_detail_title}>
                  URL :{" "}
                  <a
                    className={`${styles.projects_info_detail_content} ${styles.break_word}`}
                    href="http://43.202.98.45:8090/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    바로가기
                  </a>
                </div>
              </div>
              <div className={styles.projects_info_detail_github}>
                <div className={styles.projects_info_detail_title}>
                  Github :{" "}
                  <a
                    className={styles.projects_info_detail_content}
                    href="https://github.com/kjm541006/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    바로가기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
