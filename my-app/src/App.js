import "./css/app.css";
import NavBar from "./comps/NavBar";
import Hero from "./comps/Hero";
import Menu from "./comps/Menu";
import WhyUs from "./comps/WhyUs";
import Footer from "./comps/Footer";
import Buggy from "./comps/Buggy";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Menu />
      <Buggy />
      <WhyUs />
      <Footer />
    </div>
  );
}
