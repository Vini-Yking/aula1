import "./App.css";
import Cadastro from "./components/Cadastro.js";
import img from "./assets/logo192.png";
import { useState } from "react";
import Listas from "./components/Listas";
import Frutas from "./components/Frutas/index.js";
import HookEffect from "./components/HookEffect";

function App() {
  const [condicao, setCondicao] = useState(true);

  const rendere = () => {
    return <h1>Funcao render</h1>;
  };
  return (
    <>
      {/*<Cadastro />*/}
      <img src={img} alt="Imagem react"></img>
      {/*condicao && <p>apareci pois a conficao era verdadeira</p>*/}
      {/*rendere()*/}
      {/* {<Listas />} */}
     { <Frutas />}
     {/* {<HookEffect/>} */}
    </>
  );
}

export default App;

