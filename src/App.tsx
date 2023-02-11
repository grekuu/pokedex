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

  // useEffect(() => {

  // }, []);

  let initialized = false;

  useEffect(() => {
    if (!initialized) {
      initialized = true;

      dispatch(addPokemons(data));
    }
  }, []);

  return (
    <>
      <Header></Header>
      <PokemonListing></PokemonListing>
      <Footer></Footer>
    </>
  );
}

export default App;
