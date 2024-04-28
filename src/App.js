import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Exames from "./components/Exames";
import Especialidades from "./components/Especialidades";
import Unidades from "./components/Unidades";
import About from "./components/About";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Exames" element={<Exames />} />
        <Route path="/Especialidades" element={<Especialidades />} />
        <Route path="/Unidades" element={<Unidades />} />
        <Route path="/Quem Somos" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
