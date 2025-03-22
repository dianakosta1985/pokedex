import { create } from "zustand";
import { fetchPokemonAPI, fetchPokemonDetailsAPI, NUM_PER_PAGE } from "../api";
import { Pokemon } from "../types/Pokemon";
import { PokemonDetailsType } from "../types/PokemonDetails";

interface PokemonState {
  pokemon: Pokemon[];
  favorites: Pokemon[];
  pokemonDetails: PokemonDetailsType | null;
  loading: boolean;
  error: string | null;
  offset: number;
  fetchPokemon: () => Promise<void>;
  fetchPokemonDetails: (id: number) => Promise<void>;
  setFavoritePokemon: (pokemon: Pokemon) => void;
}

const usePokemonStore = create<PokemonState>((set, get) => ({
  pokemon: [],
  favorites: [],
  pokemonDetails: null,
  favoritePokemon: [],
  loading: false,
  error: null,
  offset: 0,

  fetchPokemon: async () => {
    set({ loading: true });
    try {
      const data = await fetchPokemonAPI(get().offset, -1);
      set({
        pokemon: data.results,
        error: null,
      });
    } catch (err) {
      set({ error: "Failed to fetch Pokémon" });
    } finally {
      set({ loading: false });
    }
  },
  fetchPokemonDetails: async (id: number) => {
    try {
      const details = await fetchPokemonDetailsAPI(id);
      set({ pokemonDetails: details });
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    }
  },
  setFavoritePokemon: (pokemon: Pokemon) => {
    const { favorites } = get();
    const isFavorite = favorites.some((fav) => fav.id === pokemon.id);
    if (isFavorite) {
      set({ favorites: favorites.filter((fav) => fav.id !== pokemon.id) });
    } else {
      set({ favorites: [...favorites, pokemon] });
    }
  },
}));

export default usePokemonStore;
