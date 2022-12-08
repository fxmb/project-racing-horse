import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "../../components/Layout";
import ProductPage from "../../components/ProductPage";
import { supabaseAdmin } from "../../lib/supabaseAdmin";
import { Product } from "../../types";

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, error } = await supabaseAdmin.from("products").select("slug");
  return {
    paths:
      data?.map((product) => ({ params: { product_id: product.slug } })) || [],
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const result = await supabaseAdmin
    .from("products")
    .select()
    .eq("slug", context.params?.product_id);

  if (result.error || !result.data) {
    return {
      props: { product: undefined },
    };
  }

  return {
    props: {
      product: result.data[0].data,
    },
    revalidate: 10, // In seconds
  };
};

function Pdp({ product }: { product: Product }) {
  console.log("PRODUCT", product);
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
}

export default Pdp;
