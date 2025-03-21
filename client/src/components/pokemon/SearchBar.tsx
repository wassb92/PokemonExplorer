interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  return (
    <input
      type="text"
      placeholder="Rechercher un Pokémon..."
      className="w-full p-3 border rounded-lg mb-6"
      value={search}
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
    />
  );
};

export default SearchBar;
