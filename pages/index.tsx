import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout
      title="Geparts - Pneumatik & Hydraulik Ersatzteile B2B Onlineshop"
      desc="Sofort lieferbar über Nacht. Frei-Haus deutschlandweit. Technische Beratung."
    >
      <div className="max-w-7xl mx-auto">Project Racing Horse</div>
    </Layout>
  );
};

export default Home;
