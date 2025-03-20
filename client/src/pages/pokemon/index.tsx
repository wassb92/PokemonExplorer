import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import SearchBar from "../../components/pokemon/SearchBar";
import PokemonList from "../../components/pokemon/PokemonList";
import Link from "next/link";

const GET_POKEMONS = gql`
  query GetPokemons($name: String, $type: String) {
    pokemon_v2_pokemon(
      limit: 10
      where: {
        _or: [
          { name: { _ilike: $name } }
          {
            pokemon_v2_pokemontypes: {
              pokemon_v2_type: { name: { _ilike: $type } }
            }
          }
        ]
      }
    ) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

export default function PokemonPage() {
  const [search, setSearch] = useState("");

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: {
      name: `%${search}%`,
      type: `%${search}%`,
    },
  });

  const bgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png";

  return (
    <div className="mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Pokémon Explorer</h1>
        <Link href="/pokemon/favorites">
          <button className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            ❤️ Mes Favoris
          </button>
        </Link>
      </div>
      <SearchBar search={search} setSearch={setSearch} />
      <PokemonList
        loading={loading}
        error={error}
        pokemons={data?.pokemon_v2_pokemon}
      />
    </div>
  );
  // return (
  //   <div className="bg-gray-100 min-h-screen">
  //     <div
  //       className="bg-cover bg-center bg-no-repeat h-60 flex items-center justify-center"
  //       style={{ backgroundImage: `url(${bgUrl})` }}
  //     >
  //       <h1 className="text-3xl font-bold text-white">Pokémon Explorer</h1>
  //     </div>
  //     <div className="container mx-auto p-6">
  //       <SearchBar search={search} setSearch={setSearch} />
  //       <PokemonList
  //         loading={loading}
  //         error={error}
  //         pokemons={data?.pokemon_v2_pokemon}
  //       />
  //     </div>
  //   </div>
  // );
}
