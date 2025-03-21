/* eslint-disable @typescript-eslint/no-explicit-any */
import PokemonCard from "./PokemonCard";

export default function PokemonList({ loading, error, pokemons }: any) {
  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {pokemons.map((pokemon: any) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
