import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import CustomCursor from "./components/CustomCursor";
import "./App.css";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
      <CustomCursor />
    </div>
  );
}

export default App;