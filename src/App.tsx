import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PokemonListing from "./components/PokemonListing/PokemonListing";
import "./index.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<PokemonListing />}></Route>
          <Route path="/:name" element={<PokemonDetail />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
