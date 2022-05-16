import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Projects from "./components/Projects/Projects.js";
import Skills from "./components/Skills/Skills.js";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
