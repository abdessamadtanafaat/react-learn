import { useState } from "react";


type TodoInputProps = {
    addTodo: (text: string) => void; 
}; 

const TodoInput: React.FC<TodoInputProps> = ({addTodo}) => {
    const [inputValue, setInputValue] = useState(""); 

    const handleAdd = () => {
        if(inputValue.trim()) {
            addTodo(inputValue); 
            setInputValue(""); 
        }
    }; 

    return (
        <div>

            <input
                type="text"
                placeholder="add new task"
                value={inputValue} 
                onChange={(e)=> setInputValue(e.target.value)}
                style={{ padding: "5px", width:"70%"}}   
            />
            <button onClick={handleAdd} style={{marginLeft: "10px"}}> Add </button>
        </div>
    )

}

export default TodoInput; 