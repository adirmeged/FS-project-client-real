import Icons from "../Icons";
import type { User } from "../../Type";

interface ProfilProps {
  user: User;
}
const Profile = ({ user }: ProfilProps) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <Icons.Proflie />
      <button className="text-baseText cursor-pointer">{user.userName}</button>
    </div>
  );
};

export default Profile;
