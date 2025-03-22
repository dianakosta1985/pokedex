import { useParams } from "react-router-dom";
import usePokemonStore from "../store/usePokemonStore";
import PokemonDetails from "../components/PokemonDetails";
import { useEffect } from "react";

export default function DetailsPage() {
  const { id } = useParams();
  const { pokemonDetails, fetchPokemonDetails } = usePokemonStore();

  useEffect(() => {
    if (id) {
      fetchPokemonDetails(Number(id));
    }
  }, [id, fetchPokemonDetails]);

  if (!pokemonDetails) return <>Not Found</>;
  return <PokemonDetails {...pokemonDetails} />;
}
