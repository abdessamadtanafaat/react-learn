import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";


type Todo = {
    id: number; 
    text: string; 
    completed: boolean; 
    important: boolean; 
}; 

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]); 
    const [loading, setLoading] = useState(true); 

    // fetch initial todos (mounting phase)

    useEffect(()=> {
        console.log("Component mounted. Fetching initial todos...");

        const fetchTodos = () => {
            setTimeout(()=> {
                const initialTodos: Todo[] = [
                    {id: 1, text: "Learn React", completed: false, important: false},
                    {id: 2, text: "Master TypeScript", completed: false, important: false},
                ]; 
                setTodos(initialTodos); 
                setLoading(false); 

            },2000);  
        }
        fetchTodos(); 

        // Cleanup logic (Unmounting phase)
        return () => {
            console.log("Component unmounted. Cleaning Up..."); 
        }; 
    },[]); 

    // log changes to the todos array (updating phase)
    useEffect(()=> {
        console.log("Todos updated:", todos); 
    },[todos]); 

    // function to add new todo 
    const addTodo = (text: string) => {
        const newTodo: Todo = { id: Date.now(), text, completed: false, important: false};
        setTodos([...todos, newTodo]); 
    }

    // function to remove a todo 
    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo)=> todo.id !== id)); 
    }; 

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo)=>
                todo.id === id ? { ...todo, completed: !todo.completed} : todo 
            )
        )
    }

    return (
        <div
            style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center"}} >
                <h1> Todo List </h1>
                {/* Show a loading spinner while loading...*/}
                {loading ? (
                    <p>Loading...</p>
                ):(
                <>
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
                    <TodoInput addTodo={addTodo} />   
                </>
            )}
            </div>



    )
}

export default TodoApp; 