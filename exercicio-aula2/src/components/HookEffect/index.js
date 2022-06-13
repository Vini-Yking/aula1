import { useEffect, useState } from "react";

const HookEffect = () => {

    const [stateEffect, setStateEffect] = useState(true)
    useEffect(() => {
        console.log("Use Effect");
    }, [stateEffect])

    return (
        <>
            <h1>Hookeffect</h1>
            <input type="button" value="Clique aqui" onClick={() => {
                setStateEffect(!stateEffect)
                console.log(stateEffect)
            }} />
        </>
    )
}



export default HookEffect;

/*
    criar todo list
    state no array de tarefas
    input para receber a tarefa
    um botão para adicionar a tarefa na lista
    exibir lista com um map em um componente novo

    botao para limpar a lista
    versionar e mandar o link
 */