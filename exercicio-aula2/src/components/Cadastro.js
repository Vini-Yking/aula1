import { useState } from "react";
import "./Cadastro.css";
const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [cidade, setCidade] = useState("");

  const [data, setData] = useState({
    nome: "",
    idade: "",
    sexo: "",
    cidade: "",
  });

  const handleData = () => {
    console.log(`${nome} e ${idade} e ${sexo} , ${cidade}`);
    alert(`${nome} e ${idade} e ${sexo} , ${cidade} feito com sucesso`);

    setNome("");
    setIdade("");
    setSexo("");
    setCidade("");
  };

  return (
    <div className="formulario">
      <label>
        Nome
        <input
          className="nome"
          value={nome}
          type="text"
          placeholder="informe seu nome"
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <label>
        Idade:
        <input
          className="idade"
          type="number"
          min="10"
          max="99"
          value={idade}
          placeholder="anos"
          onChange={(e) => setIdade(e.target.value)}
        />
      </label>
      <label>
        cidade:
        <input
          value={cidade}
          className="cidade"
          type="text"
          onChange={(e) => setCidade(e.target.value)}
        />
      </label>
      <label>
        Sexo: masculino
        <input
          type="radio"
          name="sexo"
          value="masculino"
          onClick={() => setSexo("Masculino")}
        />
      </label>
      <label>
        feminino
        <input type="radio" name="sexo" onClick={() => setSexo("Feminino")} />
      </label>
      <button type="button" onClick={handleData}>
        Enviar dados
      </button>
    </div>
  );
};

export default Cadastro;
