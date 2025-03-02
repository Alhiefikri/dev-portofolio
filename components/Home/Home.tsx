import About from "./About/About";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
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
      <Contact />
    </div>
  );
};
export default Home;
