import { useRef, useState } from "react";
import TodoList from "../basics_React/TodoList";
import TodoInput from "./TodoInput";


type Todo = {
    id: number;
    text:string; 
    completed: boolean; 
    important: boolean; 
}; 

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]); 
    const lastAddedRef = useRef<string>(""); 

    // function to add a new todo 
    const addTodo = (text: string) => {
        setTodos((prevTodos) => [...prevTodos, {id: Date.now(), text, completed: false, important: false}]); 
        lastAddedRef.current = text; //  store last added todo without re rendering
    }; 

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

    return(
        <div
        style = {{ textAlign: "center", maxWidth: "400px", margin:"auto" }}>
            <h1> Todo App </h1>
            <TodoInput addTodo ={addTodo} />
            <p> Last Added : {lastAddedRef.current}</p>
            <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    )

}

export default TodoApp; 