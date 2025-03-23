import { useEffect, Suspense } from "react";
import SkeletonLoader from "../components/SkeletonLoader";
import styles from "./styles.module.scss";
import usePokemonStore from "../store/usePokemonStore";
import CardsLayout from "../components/CardsLayout";
import SearchInput from "../components/SearchInput";
import useSearch from "../hooks/useSearch";
import PaginationWrapper from "../components/Pagination/PaginationWrapper";

export default function HomePage() {
  const { pokemon, loading, error, fetchPokemon } = usePokemonStore();
  const { search, setSearch, filteredItems } = useSearch(pokemon, "name");

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <SearchInput value={search} onSearch={setSearch} />
      {!loading ? (
        <Suspense fallback={<>{error}</>}>
          <PaginationWrapper
            items={pokemon}
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
