import { IoIosLogOut } from "react-icons/io";

const LogOut = () => {
  return (
    <div className="flex items-center gap-2">
        <IoIosLogOut className="fill-primaryWhite size-8" />
        <button className="text-primaryWhite">Logout </button>
    </div>

  )
};

export default LogOut;
