import { useHits, UseHitsProps } from "react-instantsearch-hooks-web";
import { Product } from "../types";
import type { Hit, BaseHit } from "instantsearch.js/es/types";

type x = Hit<BaseHit> & Product;

export default function ProductHits(props: UseHitsProps) {
  const { hits } = useHits(props);
  console.log(hits);
  return (
    <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
      {hits.map(
        (hit: Hit<BaseHit> & Product) => hit.product_details.description_short
      )}
    </div>
  );
}
