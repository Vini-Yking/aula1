const Propriedades = ({ name, idade }) => {
  console.log(name);
  return (
    <>
      <h1>Propriedades</h1>
      <label>
        nome:
        <input
          className="input"
          placeholder="digite seu nome"
          type="text"
          value="meu nome"
        />
      </label>
    </>
  );
};
export default Propriedades;
