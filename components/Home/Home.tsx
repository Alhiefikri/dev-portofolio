import About from "./About/About";
import Hero from "./Hero.tsx/Hero";
import Project from "./Project/Project";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Project />
    </div>
  );
};
export default Home;
