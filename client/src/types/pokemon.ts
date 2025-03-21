export interface PokemonType {
  pokemon_v2_type: {
    name: string;
  };
}

export interface PokemonSprite {
  sprites: {
    front_default: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  pokemon_v2_pokemonsprites: PokemonSprite[];
  pokemon_v2_pokemontypes: PokemonType[];
}

export interface FavoritePokemon {
  id: number;
  name: string;
  sprite: string;
}

export interface ErrorPokemonListProps {
  error: {
    message: string;
  };
}

export interface PokemonListProps {
  loading: boolean;
  error?: {
    message: string;
  };
  pokemons: Pokemon[];
}

export interface Favorites {
  id: number;
  name: string;
}

export interface PokemonType {
  pokemon_v2_type: {
    name: string;
  };
}

export interface PokemonSprite {
  sprites: {
    front_default: string;
  };
}

export interface PokemonDetailsType {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  pokemon_v2_pokemonsprites: PokemonSprite[];
  pokemon_v2_pokemontypes: PokemonType[];
}
