import algoliasearch from "algoliasearch/lite";
import { useSearchBox, UseSearchBoxProps } from "react-instantsearch-hooks-web";

export default function SearchItemsButton(props: UseSearchBoxProps) {
  const { query, refine } = useSearchBox(props);

  return (
    <div className="pt-8 overflow-auto w-full lg:max-w-xl mx-auto p-2 md:p-4">
      <form action="#" method="POST" className="mt-3 sm:flex">
        <label htmlFor="produktsuche" className="sr-only">
          Produktsuche
        </label>
        <input
          type="text"
          name="produktsuche"
          id="produktsuche"
          className="block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:flex-1"
          placeholder="Art.-Nr. / Suchbegriff"
          onChange={(e) => refine(e.target.value)}
        />
      </form>
    </div>
  );
}
