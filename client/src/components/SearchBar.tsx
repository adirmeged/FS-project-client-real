import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  filterValue: string;
  setFilterValue: (value: string) => void;
  setIsSearchClicked: (clicked: boolean) => void;
}

const SearchBar = ({
  filterValue,
  setFilterValue,
  setIsSearchClicked,
}: SearchBarProps) => {
  return (
    <div className="relative w-120  flex items-center text-white">
      <input
        type="text"
        placeholder="Search..."
        className=" bg-custumGrayfilterBG h-10 px-5 pr-10 rounded-xl text-sm focus:outline-none w-full border border-black  shadow-sm" //ריקע
        value={filterValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") setIsSearchClicked(true);
        }}
        onChange={(e) => {
          setFilterValue(e.target.value);
        }}
      />

      <button
        type="button"
        className="absolute right-0 mr-4 focus:outline-none"
        onClick={() => {
          setIsSearchClicked(true);
        }}
        aria-label="חיפוש"
      >
        <FaSearch className="size-4 fill-custumGray stroke-white  "/>

       
      </button>
    </div>
  );
};

export default SearchBar;
