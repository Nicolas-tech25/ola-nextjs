import Menu from "@/components/Menu";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu app Next.js</title>
        <meta name="description" content="Página equipe..."></meta>
      </Head>

      <h1>Olá next.js!</h1>
      <Menu />

      <h2>Equipe</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        laborum maxime sunt voluptatum? Autem ullam mollitia quibusdam, velit
        sapiente, perferendis fugiat aliquid doloremque, nam facere labore
        voluptatum? Enim pariatur beatae vero error repudiandae aliquid nemo.
      </p>
    </>
  );
}
