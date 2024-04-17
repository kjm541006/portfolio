import React, { Fragment } from "react";
import styles from "./Projects.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectInfo from "./projectComponents/ProjectsInfo";

const Projects = () => {
  const COINS_INFO = {
    title: "Coin Tracker",
    id: "cointracker",
    subtitle: "2022.10 (개인 프로젝트)",
    images: ["/images/coin.png", "/images/coin2.png", "/images/coin3.png"],
    background: [
      "가상화폐가 한창 인기가 많아지면서 관심을 가지게 되어 만든",
      <span className={styles.red}>가상화폐 시세를 확인</span>,
      "할 수 있는 웹사이트 입니다. 사용자가 원하는 가상화폐를 선택하여 시세를 확인할 수 있으며, 가상화폐의 시세 변동을 확인할 수 있습니다.",
    ],
    learned: [
      "React와 Typescript를 이용하여 개발하면서 ",
      <span className={styles.red}>React와 Typescript, 외부 API 호출, 비동기</span>,
      "에 대한 이해도를 높일 수 있었습니다.",
    ],
    tech: "React, Redux, Axios",
    url: "https://kjm541006.github.io/coin-tracker/",
    github: "https://github.com/kjm541006/coin-tracker",
  };

  const TODOS_INFO = {
    title: "Todos",
    id: "todos",
    subtitle: "2022 (개인 프로젝트)",
    images: ["/images/todos.png", "/images/todos2.png", "/images/todos3.png", "/images/todos4.png"],
    background: [
      "React를 이용하여 만든 ",
      <span className={styles.red}>TodoList 웹사이트</span>,
      "입니다. 사용자가 할 일을 추가하고 삭제할 수 있으며, 완료한 일을 체크하여 완료한 일을 확인할 수 있습니다.",
    ],
    learned: [
      "React를 이용하여 개발하면서 ",
      <span className={styles.red}>React와 Recoil, Styled-components</span>,
      "를 사용하여 개발하였으며, ",
      <span className={styles.red}>상태관리 및 CSS-in-JS</span>,
      "에 대한 이해도를 높일 수 있었습니다.",
    ],
    tech: "React, Recoil, Styled-components",
    url: "https://kjm541006.github.io/todo-list/",
    github: "https://github.com/kjm541006/todo-list",
  };

  const CATCHJOB_INFO = {
    title: "Catch Job",
    id: "catchjob",
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
    id: "portfolio",
    subtitle: "2023.11 (개인 프로젝트)",
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

  const projectInfos = [COINS_INFO, TODOS_INFO, CATCHJOB_INFO, PORTFOLIO_INFO];

  return (
    <Fragment>
      <div className={styles.projects_wrapper} id="projects">
        <div className={styles.projects_title}>
          <div className={styles.projects_title_text}>Projects</div>
        </div>
        <div className={styles.projects_info}>
          {projectInfos.map((info) => (
            <ProjectInfo key={info.id} info={info} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
