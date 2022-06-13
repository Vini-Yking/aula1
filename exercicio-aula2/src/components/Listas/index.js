import { useState } from "react";

const Listas = () => {
  const [nomes, setNomes] = useState(["Vinicios", "Olivia", "Eliza", "Ana"]);
  return (
    <>
      <ul>
        {nomes.map(
          (
            nome,
            index //a cada iteração esse nome vai receber um elemento do array
          ) => (
            <li>
              {index + 1} -{nome}
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Listas;
