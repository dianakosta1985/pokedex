type StatsType = {
  base_stat: number;
};

export type PokemonDetailsType = {
  id: number;
  name: string;
  types: string[];
  height: number;
  weight: number;
  base_experience: number;
  stats: StatsType[];
  sprites: any;
  abilities: string[];
  image: string;
};
