import { memo, useState } from "react";


type TaskInputProps = {
    addTask: (text: string) => void; 
}; 

const TaskInput: React.FC<TaskInputProps> = memo(({ addTask }) =>  {

    const [inputValue, setInputValue] = useState(""); 

    const handleAdd = () => {
        if(inputValue.trim()) {
            addTask(inputValue); 
            setInputValue(""); 
        }
    }; 

    return (
        <div>
            <input
                type="text"
                placeholder="Add new Task."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{padding: "5px", width: "70%"}}
            />
            <button onClick={handleAdd} style={{marginLeft: "10px"}}>
            Add
            </button>
        </div>
    ); 
}); 

export default TaskInput; 