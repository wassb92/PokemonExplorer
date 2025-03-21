/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import PokemonCard from "./PokemonCard";

const Loading = ({ limit = 12 }: { limit?: number }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[...Array(limit)].map((_, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-4 text-center relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
        >
          <div className="animate-pulse bg-gray-200 h-24 w-24 mx-auto mb-2 rounded-full"></div>
          <div className="animate-pulse bg-gray-200 h-4 w-24 mx-auto mb-2 rounded-full"></div>
          <div className="animate-pulse bg-gray-200 h-4 w-24 mx-auto mb-2 rounded-full"></div>
        </div>
      ))}
    </div>
  );
};

const ErrorPokemonList = ({ error }: { error: any }) => {
  return (
    <div className="text-center py-12">
      <div className="text-4xl mb-4">⚠️</div>
      <h2 className="text-xl font-semibold text-red-600 mb-2">
        Une erreur est survenue
      </h2>
      <p className="text-gray-700">
        {error.message || "Impossible de charger les Pokémon."}
      </p>
      <p className="mt-4 text-sm text-gray-500">
        Veuillez réessayer plus tard.
      </p>
    </div>
  );
};

export default function PokemonList({ loading, error, pokemons }: any) {
  if (loading) return <Loading />;
  if (error) return <ErrorPokemonList error={error} />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {pokemons.map((pokemon: any) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
