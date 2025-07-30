import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import Logo from "../../components/Logo";
import Profile from "../../components/Profile";
import { defaultUser } from "../../DB/DefaultUser";
import type { User } from "../../Type";
import LogOut from "../../components/LogOut";

const Menu = () => {
  const [filterValue, setFilterValue] = useState("");
  const searchFunction = () => {};
  const user: User = defaultUser[1];

  return (
    <div className="flex items-center justify-center mt-4 mb-4 gap-2">
      <Logo />
      <div className="md:mr-8 md:ml-8">
        <SearchBar
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          searchFunction={searchFunction}
        />
      </div>
      <Profile user={user} />
      <LogOut />
    </div>
  );
};

export default Menu;
