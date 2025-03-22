import { useEffect, useState } from "react";
import Pagination from "./index";
import { NUM_PER_PAGE } from "../../api";

interface PaginationWrapperProps<T> {
  items: T[];
  search: string;
  filteredItems: T[];
  children: (paginatedItems: T[]) => React.ReactNode;
}

export default function PaginationWrapper<T>({
  items,
  search,
  filteredItems,
  children,
}: PaginationWrapperProps<T>) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginatedItems, setPaginatedItems] = useState<T[]>([]);

  useEffect(() => {
    if (items.length > 0) {
      const startIndex = (currentPage - 1) * NUM_PER_PAGE;
      const endIndex = startIndex + NUM_PER_PAGE;
      const shownItems =
        filteredItems.length === items.length || search === ""
          ? items
          : filteredItems;
      setPaginatedItems(shownItems.slice(startIndex, endIndex));
    }
  }, [currentPage, items, search]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {children(paginatedItems)}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredItems.length / NUM_PER_PAGE)}
        onPageChange={handlePageChange}
      />
    </>
  );
}
