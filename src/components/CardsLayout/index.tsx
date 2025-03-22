import { useMemo } from "react";
import { Pokemon } from "../../types/Pokemon";
import PokemonCard from "./PokemonCard";
import styles from "./styles.module.scss";
import { getPokenonImage } from "../../utils";

const CardsLayout = ({ pokemonLst }: { pokemonLst: Pokemon[] }) => {
  const pokemonPreviewLst = useMemo(() => {
    return pokemonLst.map((pokemon) => {
      const { id, name, url, imageUrl } = pokemon;
      if (url) {
        const id = Number(url.split("/")[6]);
        const imageUrl = getPokenonImage(id);
        return { id, name, imageUrl };
      }
      return { id, name, imageUrl };
    });
  }, [pokemonLst]);

  return (
    <div className={styles.pokemonList}>
      {pokemonPreviewLst.map((pokemon) => (
        <PokemonCard key={pokemon.name} {...pokemon} />
      ))}
    </div>
  );
};

export default CardsLayout;
