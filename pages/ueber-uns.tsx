import type { NextPage } from "next";
import AboutUs from "../components/AboutUs";
import Layout from "../components/Layout";

const UeberUns: NextPage = () => {
  return (
    <Layout
      title="Das Project Racing Horse Team"
      desc="Das Project Racing Horse Team stellt sich vor "
    >
      <AboutUs />
    </Layout>
  );
};

export default UeberUns;
