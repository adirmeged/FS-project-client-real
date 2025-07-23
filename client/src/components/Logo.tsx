import ImdbLogoImage from "../images/IMDB_Logo_2016.svg.png";

const Logo = () => {
  return (
    <div className="">
      <a target="_blank" href="">
        <img src={ImdbLogoImage} className="h-10 w-auto " alt="IMDB Logo" />
      </a>
    </div>
  );
};

export default Logo;
