import { defaultMovies } from "../../DB/DefaultMovies";
import type { Movie } from "../../Type";

const HomePageHero = () => {
  const movies:Movie[]  = defaultMovies;

  return (
    <div className="h-170 bg-blue-300 p-4">

<div className=" relative flex ml-60">
      <img src={ movies[0].Image[1].url} className=" w-160 h-140 rounded-xl brightness-65" alt="logo" /> 
      <img src={ movies[0].Image[0].url} className="absolute bottom-10 left-4 w-48 h-55 rounded-xl " alt="logo" />
      <div className="absolute rounded-xl  bottom-15 left-60 ">{movies[1].plot}</div>

      <div className="px-10 py-25 ">


        <div className="relative w-65 h-35 ">
        <img src={ movies[1].Image[1].url} className="w-full h-full rounded-xl brightness-35" alt="logo" /> 
        <img src={ movies[1].Image[0].url} className="absolute w-20 h-30 rounded-xl  left-4 top-3 " alt="logo" /> 
        <div className="absolute rounded-xl  left-30 top-5 ">{movies[1].plot}</div>
        </div>


        <div className="relative w-65 h-35 mt-4 ">
        <img src={ movies[2].Image[1].url} className="w-full h-full rounded-xl brightness-35" alt="logo" /> 
        <img src={ movies[2].Image[0].url} className="absolute w-20 h-30 rounded-xl  left-4 top-3 " alt="logo" /> 
        <div className="absolute rounded-xl  left-30 top-5 ">{movies[2].plot}</div>
        </div>

 <div className="relative w-65 h-35 mt-4 ">
        <img src={ movies[0].Image[1].url} className="w-full h-full rounded-xl brightness-35" alt="logo" /> 
        <img src={ movies[0].Image[0].url} className="absolute w-20 h-30 rounded-xl  left-4 top-3 " alt="logo" /> 
        <div className="absolute rounded-xl  left-30 top-5 ">{movies[0].plot}</div>
        </div>


        
      </div>
    </div>


    </div>
  );
};

export default HomePageHero;

