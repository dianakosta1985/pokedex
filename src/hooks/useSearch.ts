import { useEffect, useMemo, useState } from "react";
import { NUM_PER_PAGE } from "../api";

const useSearch = <T>(items: T[], searchKey: keyof T, delay = 1000) => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, delay);

    return () => clearTimeout(handler);
  }, [search, delay]);

  const filteredItems = useMemo(() => {
    if (!debouncedSearch) return items;

    const lowercasedSearch = debouncedSearch.toLowerCase();
    return (
      items
        .filter((item) =>
          String(item[searchKey]).toLowerCase().includes(lowercasedSearch)
        )
        .slice(0, NUM_PER_PAGE) || items
    );
  }, [debouncedSearch, items]);

  return { search, setSearch, filteredItems };
};

export default useSearch;
