import React from "react";
import styles from "./styles.module.scss";

const prev = "<<";
const next = ">>";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 8; // Number of visible pages around the current page

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`${styles.pageButton} ${
              i === currentPage ? styles.active : ""
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      pages.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className={`${styles.pageButton} ${
            currentPage === 1 ? styles.active : ""
          }`}
        >
          1
        </button>
      );

      if (currentPage > 3) {
        pages.push(
          <span key="start-dots" className={styles.dots}>
            ...
          </span>
        );
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`${styles.pageButton} ${
              i === currentPage ? styles.active : ""
            }`}
          >
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - 2) {
        pages.push(
          <span key="end-dots" className={styles.dots}>
            ...
          </span>
        );
      }

      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`${styles.pageButton} ${
            currentPage === totalPages ? styles.active : ""
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={styles.paginationButton}
      >
        {prev}
      </button>
      <div className={styles.pageNumbers}>{renderPageNumbers()}</div>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={styles.paginationButton}
      >
        {next}
      </button>
    </div>
  );
};

export default Pagination;
