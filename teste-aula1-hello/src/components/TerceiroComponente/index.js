import "./styles.css";
const TerceiroComponente = () => {
  let a = 0;
  let b = 0;

  const Soma = (a, b) => {
    return parseInt(a + b);
  };
  const Potencia = () => {
    a = document.querySelector(".numero1").value;
    a = a === "" ? 0 : parseInt(a);
    b = document.querySelector(".numero2").value;
    b = b === "" ? 0 : parseInt(b);
    a + b === 0
      ? console.log("os campos estão vazios ou zerados")
      : console.log(
          `Soma: ${Soma(a, b)}\nPotencia ao quadrado: ${Math.pow(
            Soma(a, b),
            2
          )}\nPotencia ao cubo ${Math.pow(Soma(a, b), 3)}`
        );
  };

  const Limpar = () => {
    console.clear();
    document.querySelector(".numero1").value = "";
    document.querySelector(".numero2").value = "";
  };
  return (
    <>
      <input className="numero1" type="text" placeholder="numero1" />
      <input className="numero2" type="text" placeholder="numero2" />
      <button className="button" type="button" onClick={Potencia}>
        Soma e potencializa
      </button>

      <button className="button" type="button" value="" onClick={Limpar}>
        Limpar
      </button>
    </>
  );
};

export default TerceiroComponente;
