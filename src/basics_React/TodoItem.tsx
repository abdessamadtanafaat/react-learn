

type Todo = {
    id: number; 
    text: string; 
    completed: boolean; 

}; 

type TodoItemProps = {
    todo: Todo; 
    toggleTodo: (id: number) => void; 
    removeTodo: (id: number) => void; 
}; 


const TodoItem: React.FC<TodoItemProps> = ({todo, toggleTodo, removeTodo }) => {
    const {id, text, completed } = todo; 

    return (
        <li
            style={{
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                margin: "10px 0", 
            }}
            >
                <span
                    style={{
                        textDecoration: completed ? "line-through" : "none", 
                        cursor: "pointer",
                    }}

                    onClick={() => toggleTodo(id)} 
                    >
                    {text}
                    </span>
                    <button
                        onClick={()=> removeTodo(id)} //call the parent function via props
                        style={{
                            backgroundColor: "red",
                            color: "white",
                            border: "none", 
                            padding: "5px 10px",
                        }}
                    >
                    Remove
                    </button>
                    </li>
    ); 
}

export default TodoItem; 