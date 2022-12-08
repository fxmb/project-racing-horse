import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "../../components/Layout";
import ProductPage from "../../components/ProductPage";
import { useProductCheckoutContext } from "../../context/ProductCheckoutContext";
import { supabaseAdmin } from "../../lib/supabaseAdmin";
import { Product } from "../../types";

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, error } = await supabaseAdmin.from("products").select("slug");
  return {
    paths: [],
    fallback: "blocking",
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
      revalidate: 10, // In seconds
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
  return (
    <>
      <Layout
        title={`${product.product_features[1]?.reference_feature_group_name} ${product.product_details.description_short} | Flixpart | Hydraulik & Pneumatik`}
        desc={`${product.product_features[1]?.reference_feature_group_name} ${product.supplier_pid[0]["#text"]}: ${product.product_parents.parent_1} -  Bestellen bis 21:00, Versand am gleichen Tag`}
      >
        <div className="mx-auto max-w-7xl px-4 xl:px-0">
          <ProductPage product={product} />
        </div>
      </Layout>
    </>
  );
}

export default Pdp;
