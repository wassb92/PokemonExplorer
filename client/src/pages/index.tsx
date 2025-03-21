import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-l from-yellow-400 via-red-500 to-pink-500 text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold text-center mb-6"
      >
        Pokémon Explorer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-center max-w-xl"
      >
        Découvrez et explorez les Pokémons avec une recherche avancée et la
        possibilité de sauvegarder vos favoris !
      </motion.p>

      <div className="mt-8 flex space-x-4">
        <Link href="/pokemon">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg cursor-pointer"
          >
            Explorer les Pokémons
          </motion.button>
        </Link>

        <Link href="/pokemon/favorites">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg cursor-pointer"
          >
            🤍 Mes Favoris
          </motion.button>
        </Link>
      </div>

      <div
        className="relative mt-10 flex justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          alt="Pikachu"
          className="w-40 drop-shadow-lg"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.8 : 1 }}
          transition={{ duration: 0.3 }}
        />

        {isHovered && (
          <>
            <motion.div
              className="absolute w-20 h-20 bg-yellow-300 rounded-full opacity-50 blur-xl mt-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.5 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="https://static.wikia.nocookie.net/smashbracket/images/2/24/08_pikachu_lightning_smash_bros_ultimate_by_elevenzm_ddkmi8n-414w-2x.png"
              alt="Pikachu Attaque"
              className="absolute w-40 drop-shadow-lg mt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.4 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
