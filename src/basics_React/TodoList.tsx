import React from "react";
import TodoItem from "./TodoItem";


type Todo = {
    id: number; 
    text: string; 
    completed: boolean; 
    important: boolean; 
}; 

type TodoListProps = {
    todos: Todo[]
    toggleTodo: (id: number) => void; 
    removeTodo: (id: number) => void; 
}

const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo, removeTodo}) => {
    return (
        <ul style = {{listStyleType: "none", padding: 0}}>
            {todos.map((todo)=> (
                <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
                />
            
            ))}
        
        </ul>
    )
}
export default TodoList; 