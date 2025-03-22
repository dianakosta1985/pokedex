import { Suspense } from "react";
import SkeletonLoader from "../components/SkeletonLoader";
import styles from "./styles.module.scss";
import usePokemonStore from "../store/usePokemonStore";
import CardsLayout from "../components/CardsLayout";
import useSearch from "../hooks/useSearch";
import PaginationWrapper from "../components/Pagination/PaginationWrapper";
import SearchInput from "../components/SearchInput";

export default function FavoritePage() {
  const { loading, error, favorites } = usePokemonStore();
  const { search, setSearch, filteredItems } = useSearch(favorites, "name");

  return (
    <div className={styles.homeContainer}>
      <SearchInput value={search} onSearch={setSearch} />
      {!loading ? (
        <Suspense fallback={<>{error}</>}>
          <PaginationWrapper
            items={favorites}
            search={search}
            filteredItems={filteredItems}
          >
            {(paginatedPokemon) => (
              <CardsLayout pokemonLst={paginatedPokemon} />
            )}
          </PaginationWrapper>
        </Suspense>
      ) : (
        <SkeletonLoader />
      )}
    </div>
  );
}
