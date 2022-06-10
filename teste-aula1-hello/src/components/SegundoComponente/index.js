import "./styles.css";

const SegundoComponente = () => {
  /*const handleLogin = (e) => {
    console.log(e);
  };*/
  return (
    <div>
      <input className="email" type="text" placeholder="seu melhor email" />
      <input className="senha" type="password" placeholder="sua senha" />
      <input
        className="button"
        type="button"
        value="logar"
        onClick={() => console.log("Cliquei") /*handleLogin*/}
      />
    </div>
  );
};

export default SegundoComponente;
