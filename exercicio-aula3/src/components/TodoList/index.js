const TodoOList = (props) =>{
    return( 
        <ul>
       { props.lista.filter(item => item.nome!=="").map((item)=>(
                <li key={item.id}>{item.id} - <input type="checkbox"/>{item.nome}</li>))}
        </ul>                   
        )
}
export default TodoOList;


{/* <ul>

                    {
                   todo.filter(item => item.nome!=="").map((item)=>(<>
                         <li key={item.id}>{item.id} - <input type="checkbox"/>{item.nome}</li>
                        </>
                    ))}
            </ul> */}