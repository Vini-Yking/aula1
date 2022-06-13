import { useState } from "react";
import "./style.css";
import TodoOList from "../TodoList";
const TodoList = () => {
    const [inicio, setInicio] = useState("Sua tarefa aqui!!")
    
    const [todo, setTodo] = useState([{id:1,nome:""
    }]);

    const AddTodo = () =>{
        
        setTodo([...todo,{id:todo.length,nome:inicio}]);
        setInicio("Continue informando :)");
        
    }
    const RemoveTodo = () =>{
       
        setInicio("Deletado :(");
        todo.pop()
        
    }
    return (
        <>
            <label>
                insira a tarefa queirá incluir: <br/>
                <input type="text" placeholder= {inicio} onChange={(e)=> setInicio(e.target.value)} value={inicio} onClick={()=>setInicio("")}  />
            </label>
           
            <button onClick={AddTodo}>adicionar tarefa</button><br/>
            <TodoOList lista={todo} ></TodoOList>
            <button onClick={RemoveTodo}>remover tarefa</button><br/>
        </>);
};

export default TodoList;





/*
    criar todo list
    state no array de tarefas
    input para receber a tarefa
    um botão para adicionar a tarefa na lista
    exibir lista com um map em um componente novo

    botao para limpar a lista
    versionar e mandar o link
 */