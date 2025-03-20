export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Rechercher un Pokémon..."
      className="w-full p-3 border rounded-lg mb-6"
      value={search}
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
    />
  );
}
