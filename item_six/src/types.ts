export type pokemon = {
  name: string;
  number: number;
  types: string[];
  weight: number;
  height: number;
  image: string;
};
export type pokemonTypeData = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
