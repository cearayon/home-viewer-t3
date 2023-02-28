import { type NextPage } from "next";
import Head from "next/head";
import { Footer } from "~/components/core/Footer";
import { Header } from "~/components/core/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Viewer</title>
        <meta name="description" content="home viewer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div>
          <Header />
          <div>This is the homepage</div>
          <Footer />
        </div>
      </body>
    </>
  );
};

export default Home;
