import { useState } from "react";

const Frutas = () => {
    const [frutas, setFrutas] = useState([
        { id: 1, nome: "Banana" },
        { id: 2, nome: "Morango" },
        { id: 3, nome: "Manga" },
        { id: 4, nome: "Abacate" },
    ]);
    const [frutaNova, setFrutaNova] = useState("");
    const adicionaFruta = () => {
        setFrutas([...frutas, { id: frutas.length + 1, nome: frutaNova }]); //...=spread operator adiciona um novo elemento ao array destruindo um array e montando um novo
        setFrutaNova("");
    };
    return (
        <>
            <ul>
                {frutas.map((item) => (
                    <li key={item.id}>
                        {item.id} - {item.nome}
                    </li>
                ))}
            </ul>

            <input
                type="text"
                value={frutaNova}
                onChange={(e) => setFrutaNova(e.target.value)}
            />
            <button value="Adicionar" onClick={adicionaFruta}>
                Adicionar
            </button>
        </>
    );
};

export default Frutas;



/*
    criar todo list
    state no array de tarefas
    input para receber a tarefa
    um botão para adicionar a tarefa na lista
    exibir lista com um map em um componente novo

    botao para limpar a lista
    versionar e mandar o link
 */