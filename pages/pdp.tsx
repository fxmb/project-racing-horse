import type { NextPage } from "next";
import Layout from "../components/Layout";
import ProductPage from "../components/ProductPage";

const Pdp: NextPage = () => {
  return (
    <>
      <Layout
        title="Geparts - Pneumatik & Hydraulik Ersatzteile B2B Onlineshop"
        desc="Sofort lieferbar über Nacht. Frei-Haus deutschlandweit. Technische Beratung."
      >
        <div className="mx-auto max-w-7xl px-4 xl:px-0">
          <ProductPage />
        </div>
      </Layout>
    </>
  );
};

export default Pdp;
