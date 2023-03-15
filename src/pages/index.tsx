import { type NextPage } from "next";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import Head from "next/head";

const Home: NextPage = ({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) => {
  return (
    <>
      <Head>
        <title>Intro to Git</title>
        <meta name="description" content="A generic app to help with git" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal md:text-[5rem]">
          <span className="text-white">Intro to </span>
          <span className="text-orange-600">
            <ins>GIT</ins>
          </span>
        </h1>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
		props: {},
	};
};