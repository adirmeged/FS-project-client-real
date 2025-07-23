import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import Logo from "../../components/Logo";
import Profil from "../../components/Profil";
import { defaultUser } from "../../DB/DefaultUsers";
import type { User } from "../../Type";

const Menu = () => {
  const [filterValue, setFilterValue] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  if (isSearchActive) {
    console.log("do the filtring");
    setIsSearchActive(false);
  }
  const x: User = defaultUser[1];
  return (
    <div className=" flex justify-center p-8">
      <Logo />
      <div className="mr-8 ml-8">
        <SearchBar
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          setIsSearchClicked={setIsSearchActive}
        />
      </div>

      <Profil user={x} />
    </div>
  );
};

export default Menu;
