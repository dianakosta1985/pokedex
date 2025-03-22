import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { PokemonDetailsType } from "../../types/PokemonDetails";

export default function PokemonDetails(pokemon: PokemonDetailsType) {
  const { id, name, height, weight, types, stats, abilities, base_experience } =
    pokemon;

  const image = pokemon.sprites.other["official-artwork"].front_default;

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link className={styles.noDecoration} to="/">
          Pokemon
        </Link>
        &nbsp; &gt; <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.card}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.details}>
          <div className={styles.id}>#{id}</div>
          <div className={styles.name}>{name}</div>
          <div className={styles.types}>
            {types.map((type: any) => (
              <span key={type.type.name} className={styles.type}>
                {type.type.name}
              </span>
            ))}
          </div>
          <div className={styles.line}></div>
          <div className={styles.statsContainer}>
            <div className={styles.statsColumn}>
              <p>
                <strong>HP:</strong> {stats[0].base_stat}
              </p>
              <p>
                <strong>Height:</strong> {height}
              </p>
              <p>
                <strong>Weight:</strong> {weight}
              </p>
              <p>
                <strong>Base Experience:</strong> {base_experience}
              </p>
              <p>
                <strong>Speed:</strong> {stats[5].base_stat}
              </p>
            </div>
            <div className={styles.statsColumn}>
              <p>
                <strong>Attack:</strong> {stats[1].base_stat}
              </p>
              <p>
                <strong>Defence:</strong> {stats[2].base_stat}
              </p>
              <p>
                <strong>Special Attack:</strong> {stats[3].base_stat}
              </p>
              <p>
                <strong>Special Defence:</strong> {stats[4].base_stat}
              </p>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.abilities}>Abilities:</div>
          <ul>
            {abilities.map((ability: any) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
