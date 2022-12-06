import type { NextPage } from "next";
import HomepageHeroSection from "../components/HomepageHeroSection";
import Layout from "../components/Layout";
import Usps from "../components/Usps";

const Home: NextPage = () => {
  return (
    <Layout
      title="Geparts - Pneumatik & Hydraulik Ersatzteile B2B Onlineshop"
      desc="Sofort lieferbar über Nacht. Frei-Haus deutschlandweit. Technische Beratung."
    >
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        <HomepageHeroSection />
        <Usps />
      </div>
    </Layout>
  );
};

export default Home;
