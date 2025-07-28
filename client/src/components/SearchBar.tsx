import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  filterValue: string;
  setFilterValue: (value: string) => void;
  searchFunction: () => void;
}

const SearchBar = ({
  filterValue,
  setFilterValue,
  searchFunction,
}: SearchBarProps) => {
  return (
    <div className="relative md:w-lg flex items-center">
      <input
        type="text"
        placeholder="Search"
        className="bg-custumGrayfilterBG h-10 px-5 pr-10 rounded-xl text-sm focus:outline-none w-full border border-black shadow-sm" 
        value={filterValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") searchFunction();
        }}
        onChange={(e) => {
          setFilterValue(e.target.value);
        }}
      />

      <button
        type="button"
        className="absolute right-0 mr-4 focus:outline-none"
        onClick={() => {
          searchFunction();
        }}
      >
        <FaSearch className="size-4 fill-primaryGray"/>
      </button>
    </div>
  );
};

export default SearchBar;
