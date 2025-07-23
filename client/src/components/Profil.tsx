import type { User } from "../Type";
import { FaUserCircle } from "react-icons/fa";

interface ProfilProps {
  user: User;
}
const Profil = ({ user }: ProfilProps) => {
  return (
    <div className=" flex">
      <FaUserCircle className="size-8  fill-custumGray Stroke-custumGray"/>
      <h1 className="text-custumGray mt-1 mx-2 ">{user.userName}</h1>
    </div>
  );
};

export default Profil;
