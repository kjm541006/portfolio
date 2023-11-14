import Head from "next/head";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>주민의 포트폴리오</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Main />
    </>
  );
}
