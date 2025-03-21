/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

export default function PokemonCard({ pokemon }: any) {
  const sprite =
    pokemon.pokemon_v2_pokemonsprites[0]?.sprites?.front_default ||
    "/placeholder.png";

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("localStorage:", localStorage.getItem("favorites"));
    }
  }, []);

  useEffect(() => {
    console.log("pokemon?.id = ", pokemon?.id);
    if (pokemon?.id) {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setIsFavorite(favorites.some((fav: any) => fav.id === pokemon.id));
    }
  }, [pokemon?.id]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      favorites = favorites.filter((fav: any) => fav.id !== pokemon.id);
    } else {
      favorites.push({
        id: pokemon.id,
        name: pokemon.name,
        sprite: sprite,
      });
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div
      whileHover={{
        background:
          "linear-gradient(90deg, rgba(255,165,0,0.2) 0%, rgba(75,0,130,0.2) 100%)",
      }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg p-4 text-center relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden cursor-pointer"
      onClick={() => window.open(`/pokemon/${pokemon.id}`, "_blank")}
    >
      <motion.img
        src={sprite}
        alt={pokemon.name}
        className="w-24 h-24 mx-auto mb-2 cursor-pointer transition-all duration-200 hover:scale-110"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <h2 className="text-lg font-bold capitalize text-indigo-700 transition-all duration-200 hover:text-indigo-900">
        {pokemon.name}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        {pokemon.pokemon_v2_pokemontypes
          .map((t: any) => t.pokemon_v2_type.name)
          .join(", ")}
      </p>

      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite();
        }}
        className="absolute top-2 right-2 cursor-pointer"
        whileTap={{ scale: 0.8 }}
        animate={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {isFavorite ? (
          <HeartSolid className="w-8 h-8 text-red-500 transition-all duration-200 drop-shadow-md" />
        ) : (
          <HeartOutline className="w-8 h-8 text-gray-400 hover:text-red-500 transition-all duration-200 drop-shadow-md" />
        )}
      </motion.button>
    </motion.div>
  );
}
