import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import CategoryPreview from "../../components/CategoryPreview";
import Layout from "../../components/Layout";
import ProductPage from "../../components/ProductPage";
import { useProductCheckoutContext } from "../../context/ProductCheckoutContext";
import { supabaseAdmin } from "../../lib/supabaseAdmin";
import { Product } from "../../types";

function Category() {
  return (
    <>
      <Layout title={`CAtegory Test`} desc={`  CAtegory Test`}>
        <div className="mx-auto max-w-7xl px-4 xl:px-0">
          <CategoryPreview />
        </div>
      </Layout>
    </>
  );
}

export default Category;
