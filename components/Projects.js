import React from "react";
import styles from "./Projects.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const ProjectInfo = ({ info }) => (
  <div className={styles.projects_info_project}>
    <div className={styles.projects_info_project_title}>{info.title}</div>
    <div className={styles.projects_info_project_subtitle}>{info.subtitle}</div>
    <div className={styles.projects_info_project_content}>
      <Carousel autoPlay infiniteLoop>
        {info.images?.map((image, index) => (
          <div key={index}>
            <Image className={styles.projects_img} src={image} width="2560" height="1440" />
          </div>
        ))}
      </Carousel>
      <div className={styles.projects_info_project_content_detail}></div>
    </div>
    <div className={styles.projects_info_detail}>
      <div className={styles.projects_info_detail_background}>
        <div className={styles.projects_info_detail_title}>
          <b>개발배경</b>
        </div>
        <div className={`${styles.projects_info_detail_content} ${styles.break_word}`}>{info.background}</div>
      </div>
      <div className={styles.projects_info_detail_learned}>
        <div className={styles.projects_info_detail_title}>
          <b>배운점</b>
        </div>
        <div className={`${styles.projects_info_detail_content} ${styles.break_word}`}>{info.learned}</div>
      </div>
      <div className={styles.projects_info_detail_tech}>
        <div className={styles.projects_info_detail_title}>
          사용기술 : <span className={styles.projects_info_detail_content}>{info.tech}</span>
        </div>
      </div>
      <div className={styles.projects_info_detail_url}>
        <div className={styles.projects_info_detail_title}>
          URL :{" "}
          <a
            className={`${styles.projects_info_detail_content} ${styles.break_word}`}
            href={info.url}
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
          <a className={styles.projects_info_detail_content} href={info.github} target="_blank" rel="noopener noreferrer">
            바로가기
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const CATCHJOB_INFO = {
    title: "Catch Job",
    subtitle: "2023.08 (팀 프로젝트)",
    images: ["/images/catchjob.png", "/images/catchjob2.png", "/images/catchjob3.png"],
    background: [
      "취업준비생의 입장에서 만든 취업준비생들을 위한 ",
      <span className={styles.red}>취업활동에 도움을 주는 웹사이트</span>,
      "입니다. 취업 준비 시 필요한 정보와 같은 직무 희망자들 간의 정보 공유 및 스터디 등 정보공유를 하며 취업에 도움이 되는 활동을 할 수 있도록 개발하였습니다.",
    ],
    learned: [
      "프론트엔드, 백엔드, 데이터베이스 등 여러가지 기술을 활용해 전체적인 개발과정을 경험하는 좋은 계기가 되었고 팀프로젝트를 진행하면서 협업 능력을 키울 수 있었습니다. 또한, ",
      <span className={styles.red}>
        새로운 기술을 배우고 적용하는 과정에서 마주치는 여러 문제들을 해결하며 문제해결 능력을 키울 수 있었습니다.
      </span>,
    ],
    tech: "React, Springboot, MariaDB, AWS, Figma",
    url: "http://43.202.98.45:8090/",
    github: "https://github.com/kjm541006/portfolio",
  };

  const PORTFOLIO_INFO = {
    title: "Portfolio",
    subtitle: "2023.08 (개인 프로젝트)",
    images: ["/images/portfolio1.png", "/images/portfolio2.png", "/images/portfolio3.png"],
    background: [
      "여러 프로젝트들을 경험하면서 만든 ",
      <span className={styles.red}>프로젝트들을 보기 좋게 정리</span>,
      "하기 위해 개발하게 되었습니다. Next.js를 활용하여 제작하였으며, ",
      <span className={styles.red}>반응형으로 제작</span>,
      "하여 모바일 사용자도 고려하여 제작하였습니다. 또한 프론트엔드 배포를 경험하기 위해 serverless 아키텍처 기반인 ",
      <span className={styles.red}>Vercel을 사용하여 배포하였습니다.</span>,
    ],
    learned: [
      "Next.js를 활용하여 제작하면서 ",
      <span className={styles.red}>Next.js에 대한 이해도</span>,
      "를 높일 수 있었으며, ",
      <span className={styles.red}>반응형 웹에 대한 이해도</span>,
      "를 높일 수 있었습니다. 또한 serverless 배포 방식인 Vercel을 사용하여 배포하면서 서버를 신경쓰지 않고 ",
      <span className={styles.red}>프론트엔드 배포</span>,
      "에만 신경 쓸 수 있었습니다.",
      // 반응형 구현 테스트 하고 배운점에 추가
    ],
    tech: "Next.js, React, CSS, Vercel",
    url: "https://jumin-portfolio.vercel.app/",
    github: "https://github.com/kjm541006/portfolio",
  };

  const projectInfos = [CATCHJOB_INFO, PORTFOLIO_INFO];

  return (
    <>
      <div className={styles.projects_wrapper} id="projects">
        <div className={styles.projects_title}>
          <div className={styles.projects_title_text}>Projects</div>
        </div>
        <div className={styles.projects_info}>
          {projectInfos.map((info, index) => (
            <ProjectInfo key={index} info={info} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
