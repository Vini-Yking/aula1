import "./App.css";
import Contador from "./components/Contador";
import Propriedades from "./components/propriedades/index.js";
import InputControlado from "./components/InputControlado";

const App = () => {
  /* aqui vai a logica */
  let nome = "Vinicios";
  return (
    <>
      {/*<Estado />*/}
      {/* {<Propriedades name={nome} idade={31} />} */}
      <Contador meuNome={nome} />
      <InputControlado meuNome={nome} />
    </>
  );
};

export default App;
