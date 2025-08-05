import { CiStar } from "react-icons/ci";
import { FaSearch, FaStar, FaUserCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TbPointFilled } from "react-icons/tb";

const Icons = {
  EmptyStar: () => {
    return <CiStar className=" size-6 fill-primaryGray" />;
  },
  FullStar: () => {
    return <FaStar className=" size-5 fill-yellow-400" />;
  },
  YellowPoint: () => {
    return <TbPointFilled className="fill-yellow-300" />;
  },
  GrayPoint: () => {
    return <TbPointFilled className="fill-primaryWhite size-2" />;
  },

  Search: () => {
    return <FaSearch className="size-4 fill-primaryGray" />;
  },
  Close: () => {
    return <IoClose className="ml-5 mt-5" />;
  },
  Proflie: () => {
    return <FaUserCircle className="size-8 fill-primaryWhite" />;
  },
  
};
export default Icons;

