import { useEffect, useMemo, useState } from "react";

const useSearch = <T>(items: T[], searchKey: keyof T, delay = 300) => {
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
    return items.filter((item) =>
      String(item[searchKey]).toLowerCase().includes(lowercasedSearch)
    );
  }, [debouncedSearch, items, searchKey]);

  return { search, setSearch, filteredItems };
};

export default useSearch;
