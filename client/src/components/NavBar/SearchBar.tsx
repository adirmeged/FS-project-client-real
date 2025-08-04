import Icons from "../Icons";

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
    <div className="relative lg:w-2xl  md:w-lg ms:w-md flex items-center">
      <input
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
        className="absolute right-0 mr-4 focus:outline-none"
        onClick={() => {
          searchFunction();
        }}
      >
        <Icons.Search />
      </button>
    </div>
  );
};

export default SearchBar;
