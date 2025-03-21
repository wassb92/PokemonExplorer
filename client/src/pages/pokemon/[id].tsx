import { GetServerSideProps } from "next";
import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import { PokemonDetailsType } from "@/types/pokemon";
import Image from "next/image";

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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = parseInt(params?.id as string);

  if (isNaN(id)) return { notFound: true };

  const { data } = await client.query({
    query: GET_POKEMON_DETAILS,
    variables: { id },
  });

  if (!data.pokemon_v2_pokemon_by_pk) return { notFound: true };

  return { props: { pokemon: data.pokemon_v2_pokemon_by_pk } };
};

const PokemonDetails = ({ pokemon }: { pokemon: PokemonDetailsType }) => {
  const sprite =
    pokemon.pokemon_v2_pokemonsprites[0]?.sprites?.front_default ||
    "/placeholder.png";

  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-indigo-700 capitalize">
        {pokemon.name}
      </h1>
      {/* <img src={sprite} alt={pokemon.name} className="w-32 h-32 mx-auto my-4" /> */}
      <Image
        src={sprite}
        alt={pokemon.name}
        width={128}
        height={128}
        className="mx-auto my-4"
      />
      <p className="text-lg text-gray-600">
        Type{pokemon.pokemon_v2_pokemontypes.length > 1 ? "s" : ""}:{" "}
        {pokemon.pokemon_v2_pokemontypes
          .map((t) => t.pokemon_v2_type.name)
          .join(", ")}
      </p>
      <p className="text-lg">Taille : {pokemon.height / 10} m</p>
      <p className="text-lg">Poids : {pokemon.weight / 10} kg</p>
      <p className="text-lg">Expérience de base : {pokemon.base_experience}</p>
      <p className="text-lg">ID : {pokemon.id}</p>
    </div>
  );
};

export default PokemonDetails;
