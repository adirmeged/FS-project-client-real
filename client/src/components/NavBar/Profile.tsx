import Icons from "../../icon";
import type { User } from "../../Type";

interface ProfilProps {
  user: User;
}
const Profile = ({ user }: ProfilProps) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <Icons.Proflie />
      <button className="text-primaryWhite cursor-pointer">
        {user.userName}
      </button>
    </div>
  );
};

export default Profile;
