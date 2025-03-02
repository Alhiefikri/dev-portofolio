import About from "./About/About";
import Hero from "./Hero.tsx/Hero";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
    </div>
  );
};
export default Home;
