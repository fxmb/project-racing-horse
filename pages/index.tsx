import type { NextPage } from "next";
import {
  ProductHits,
  HomepageHeroSection,
  Layout,
  Usps,
  SearchItemsButton,
} from "../components";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks-web";
import CategoryPreviewHomepage from "../components/CategoryPreviewHomepage";

const searchClient = algoliasearch(
  "C9W94GI98R",
  "e3e9a01ae4d81d928057e9f027891efe"
);

const Home: NextPage = () => {
  return (
    <Layout
      title="Flixpart - Hydraulik & Pneumatik Ersatzteile Onlineshop"
      desc="Sofort lieferbar über Nacht. Frei-Haus deutschlandweit. Technische Beratung."
    >
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        <InstantSearch
          searchClient={searchClient}
          indexName="project-racing-horse"
        >
          <SearchItemsButton />
          <ProductHits />
          <HomepageHeroSection />

          <CategoryPreviewHomepage />
          <Usps />
        </InstantSearch>
      </div>
    </Layout>
  );
};

export default Home;
