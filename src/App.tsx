import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PokemonListing from "./components/PokemonListing/PokemonListing";
import "./index.scss";
import { useAppDispatch } from "./redux/hooks";
import { addPokemons } from "./redux/pokemonsSlice";
import data from "./assets/pokedex.json";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addPokemons(data));
  }, [dispatch]);

  return (
    <div className="container">
      <Header></Header>
      <PokemonListing></PokemonListing>
      <Footer></Footer>
    </div>
  );
}

export default App;
