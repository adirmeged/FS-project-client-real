import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <img
      src={"/images/IMDB_Logo_2016.svg.png"}
      className="h-8 cursor-pointer"
      alt="logo"
      onClick={() => {
        navigate("/");
      }}
    />
  );
};

export default Logo;
