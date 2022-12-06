import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

export default function useSchools(zip?: string) {
  const isValidZip = /^[0-9]{5}$/.test(zip ?? "");

  const { data, error } = useSWR(
    isValidZip ? `/api/find-schools?zip=${zip}` : null,
    fetcher
  );

  return {
    data,
    isLoading: isValidZip && !error && !data,
    isError: error,
  };
}
