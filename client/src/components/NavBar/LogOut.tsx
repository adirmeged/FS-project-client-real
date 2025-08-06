import { IoIosLogOut } from "react-icons/io";

const LogOut = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <IoIosLogOut className="fill-baseText size-8" />
      <button className="text-baseText cursor-pointer">Logout</button>
    </div>
  );
};

export default LogOut;
