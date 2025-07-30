import type { User } from "../Type";
import { FaUserCircle } from "react-icons/fa";

interface ProfilProps {
  user: User;
}
const Profile = ({ user }: ProfilProps) => {
  return (
    <div className="flex items-center gap-2">
      <FaUserCircle className="size-8 fill-primaryWhite" />
      <button className="text-primaryWhite">{user.userName}</button>
    </div>
  );
};

export default Profile;
