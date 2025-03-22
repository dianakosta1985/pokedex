const DOMAIN_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

export const getPokenonImage = (id: number) => {
  return `${DOMAIN_URL}/${id}.png`;
};
