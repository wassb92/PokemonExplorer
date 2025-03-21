/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from "@apollo/client";
import client from "../../lib/apolloClient";

const GET_POKEMON_DETAILS = gql`
  query GetPokemon($id: Int!) {
    pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      height
      weight
      base_experience
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

export async function getServerSideProps({ params }: any) {
  const { data } = await client.query({
    query: GET_POKEMON_DETAILS,
    variables: { id: parseInt(params.id) },
  });

  return { props: { pokemon: data.pokemon_v2_pokemon_by_pk } };
}

export default function PokemonDetails({ pokemon }: any) {
  const sprite =
    pokemon.pokemon_v2_pokemonsprites[0]?.sprites?.front_default ||
    "/placeholder.png";

  console.log("pokemon = ", pokemon);

  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-indigo-700 capitalize">
        {pokemon.name}
      </h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={sprite} alt={pokemon.name} className="w-32 h-32 mx-auto my-4" />
      <p className="text-lg text-gray-600">
        Type{pokemon.pokemon_v2_pokemontypes.length > 1 ? "s" : ""}:{" "}
        {pokemon.pokemon_v2_pokemontypes
          .map((t: any) => t.pokemon_v2_type.name)
          .join(", ")}
      </p>
      <p className="text-lg">Taille : {pokemon.height / 10} m</p>
      <p className="text-lg">Poids : {pokemon.weight / 10} kg</p>
      <p className="text-lg">Expérience de base : {pokemon.base_experience}</p>
      <p className="text-lg">ID : {pokemon.id}</p>
    </div>
  );
}
