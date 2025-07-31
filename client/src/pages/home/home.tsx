import ListMovie from "../../components/ListMovie";
import HomePage from "../../components/homePage";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <ListMovie />
    </div>
  );
};

export default Home;
