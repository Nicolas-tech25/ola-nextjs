import Menu from "@/components/Menu";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu app Next.js</title>
        <meta name="description" content="Página serviços..."></meta>
      </Head>
      <h1>Olá next.js!</h1>
      <Menu />

      <h2>Serviços</h2>
      <ol>
        <li>bla bla</li>
        <li>bla bla</li>
        <li>bla bla</li>
      </ol>
    </>
  );
}
