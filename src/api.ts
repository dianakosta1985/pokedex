const API_URL = "https://pokeapi.co/api/v2/pokemon";
export const NUM_PER_PAGE = 12;

export const fetchPokemonAPI = async (offset: number, limit: number = 20) => {
  const response = await fetch(`${API_URL}?offset=${offset}&limit=${limit}`);
  const data = await response.json();
  return data;
};

export const fetchPokemonDetailsAPI = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
};
