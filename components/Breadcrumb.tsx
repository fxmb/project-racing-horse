import { HomeIcon } from "@heroicons/react/20/solid";
import { ProductParents } from "../types/Product";

export default function Breadcrumb(product_parents: ProductParents) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol
        role="list"
        className="flex space-x-4 rounded-md bg-white px-6 shadow overflow-hidden"
      >
        <li className="flex">
          <div className="flex items-center">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {Object.keys(product_parents).forEach(function (key, index) {
          <li key={key} className="flex">
            <div className="flex items-center">
              <svg
                className="h-full w-6 flex-shrink-0 text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <a
                href={`/${key}`}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={key ? "page" : undefined}
              >
                {key}
              </a>
            </div>
          </li>;
        })}
      </ol>
    </nav>
  );
}
