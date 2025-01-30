import React from "react";


type Task = {
    id: number; 
    text: string; 
    completed: boolean; 

}; 

type TaskItemProps = {
    task: Task; 
    toggleTask: (id: number) => void; 
    deleteTask: (id: number) => void; 
}; 

const TaskItem: React.FC<TaskItemProps> = React.memo(({ task, toggleTask, deleteTask }) => {
    console.log(` Rendering TaskItem: ${task.text}`); 
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
                    textDecoration: task.completed ? "line-through" : "none", 
                    cursor: "pointer",
                }}
                onClick={()=> toggleTask(task.id)}
            >
                {task.text}
            </span>
                <button
                    onClick={()=> deleteTask(task.id)}
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
}); 
export default TaskItem; 
