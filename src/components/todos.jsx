import { useEffect , useState } from 'react';
const Todos = () =>{
    const url = "https://jsonplaceholder.typicode.com/todos";
    const [todos, setTodos] = useState([]);
   const [input, setInput] = useState("");
    useEffect(()=>{
        const getTodos = async () =>{
            const res = await fetch(url);
            const todos = await res.json();
            setTodos(todos);
        }
        getTodos();
    },[input]);
    console.log(todos);
    return(
    <div>
       <h1>Todos</h1>
       {
        todos.length <= 0 
        ? <h1>No Todos Found</h1> 
        : (
            <div> 
                {
                    todos.map((todos) => (
                        <div key={todos.id}>{todos.title}</div>
                    ))
                }
            </div>
        )
       }
    </div>
    )
}

export default Todos;