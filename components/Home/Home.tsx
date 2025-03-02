import About from "./About/About";
import Blog from "./Blog/Blog";
import Hero from "./Hero.tsx/Hero";
import Project from "./Project/Project";
import Reviews from "./Reviews/Reviews";
import Services from "./Services/Services";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Project />
      <Skills />
      <Reviews />
      <Blog />
    </div>
  );
};
export default Home;
