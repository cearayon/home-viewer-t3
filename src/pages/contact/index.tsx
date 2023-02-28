import { NextPage } from "next";
import { Footer } from "~/components/core/Footer";
import { Header } from "~/components/core/Header";

const Contact: NextPage = () => {
  return (
    <div>
      <Header />
      <h1>This is the contact page</h1>
      <Footer />
    </div>
  );
};

export default Contact;
