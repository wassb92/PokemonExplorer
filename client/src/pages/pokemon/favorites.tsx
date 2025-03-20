import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [isRemoving, setIsRemoving] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (id) => {
    setIsRemoving(id);

    setTimeout(() => {
      const updatedFavorites = favorites.filter((pokemon) => pokemon.id !== id);
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsRemoving(null);
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-gray-800 rounded shadow cursor-pointer"
        >
          ⬅ Retour
        </button>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-center flex-grow"
        >
          Mes Pokémon Favoris
        </motion.h1>
      </div>

      {favorites.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          Aucun favori pour le moment.
        </motion.p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence>
            {favorites.map((pokemon) => (
              <motion.div
                key={pokemon.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.4 } }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white shadow-md rounded-lg p-4 text-center relative cursor-pointer"
                onClick={() => {
                  if (isRemoving !== pokemon.id) {
                    window.open(`/pokemon/${pokemon.id}`, "_blank");
                  }
                }}
              >
                <motion.img
                  src={pokemon.sprite}
                  alt={pokemon.name}
                  className="w-24 h-24 mx-auto mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <h2 className="text-lg font-bold capitalize text-red-500">
                  {pokemon.name}
                </h2>

                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFavorite(pokemon.id);
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className="absolute top-2 right-2 text-white p-1 cursor-pointer"
                >
                  ❌
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}
