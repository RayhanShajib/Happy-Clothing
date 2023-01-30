import Directory from "../../components/directory/directory";
import Hero from "../../components/hero-section/hero-section";
import HomeProducts from "../../components/home-products/home-products";

const Home = () => {

  return (
    <div className="home">
      <Hero />
      <Directory />
      <HomeProducts />
    </div>
  );
};

export default Home;
