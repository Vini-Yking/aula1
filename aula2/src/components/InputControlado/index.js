import { useState } from "react";

const InputControlado = (props) => {
  const [nome, setNome] = useState("Vinicios");

  const handleConsole = (e) => {
    setNome(e.target.value);
    return console.log(e.target.value);
  };

  return (
    <>
      <p>nome:{props.meuNome}</p>
      <input type="text" onChange={handleConsole} />
    </>
  );
};
export default InputControlado;
