import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { Pokemon } from "../../types/Pokemon";
import usePokemonStore from "../../store/usePokemonStore";

export default function PokemonCard(pokemon: Pokemon) {
  const { id, name, imageUrl } = pokemon;
  const { favorites, setFavoritePokemon } = usePokemonStore();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon/${id}`);
  };

  const setFavorite = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    setFavoritePokemon(pokemon);
  };

  const StarIcon = () => {
    if (favorites.findIndex((fav) => fav.id === id) !== -1) {
      return (
        <img src="/icons/star.svg" alt="star" onClick={(e) => setFavorite(e)} />
      );
    } else {
      return (
        <img
          src="/icons/star-outline.svg"
          alt="star"
          onClick={(e) => setFavorite(e)}
        />
      );
    }
  };

  return (
    <div className={styles.pokemonCard} onClick={handleClick}>
      <img src={imageUrl} alt={name} className={styles.pokemonImage} />
      <div className={styles.pokemonName}>
        <div>{name}</div>
        <div className={styles.star}>
          <StarIcon />
        </div>
      </div>
    </div>
  );
}
