import { IoIosLogOut } from "react-icons/io";

const LogOut = () => {
  return (
    <div className="flex items-center gap-2">
        <IoIosLogOut className="fill-primaryWhite size-8" />
      <div className="text-primaryWhite">Logout</div>  
    </div>

  )
};

export default LogOut;
