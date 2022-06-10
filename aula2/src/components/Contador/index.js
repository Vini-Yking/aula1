import { useState } from "react";

const Contador = (props) => {
  const [nome, setNome] = useState(["Marcos", "Vinicios"]);
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setCount((prevState) => prevState + 1); //acessar o estado atual

    index === 0 ? setIndex(1) : setIndex(0);
  };
  return (
    <>
      <h2>{nome[index]}</h2>
      <p>{count}</p>
      <p>{props.meuNome}</p>
      <input type="button" value="Mudar Nome" onClick={handleClick} />
    </>
  );
};

export default Contador;
