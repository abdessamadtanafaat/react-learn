import { useRef } from "react";


type TodoInputProps = {
    addTodo: (text: string) => void
}; 

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
    const inputRef = useRef<HTMLInputElement>(null); 

    const handleAdd = () => {
        if(inputRef.current && inputRef.current.value.trim()) {
            addTodo(inputRef.current.value); 
            inputRef.current.value = ""; // clear the input without re-rendering
            inputRef.current.focus(); // autoFocus input
        }
    }; 
    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Add a new Task" />
            <button onClick={handleAdd}>    Add     </button>
        </div>
    )
}

export default TodoInput; 