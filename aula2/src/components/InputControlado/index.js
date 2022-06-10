import { useState } from "react";

const InputControlado = (props) => {
  const [nome, setNome] = useState("Vinicios");

  const handleConsole = (e) => {
    return console.log(e.target.value);
  };

  return (
    <>
      <p>nome:{props.meuNome}</p>
      <input type="text" onChange={(e) => setNome(handleConsole(e))} />
    </>
  );
};
export default InputControlado;
