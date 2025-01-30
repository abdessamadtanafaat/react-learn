import React from "react";
import TaskItem from "./TaskItem";


type TaskListProps = {
    tasks: {id: number, text: string; completed: boolean } []
    toggleTask : (id: number) => void; 
    deleteTask : (id: number) => void; 
}; 

// memoized component to avoid uncessary re-renders 

const TaskList: React.FC<TaskListProps> = React.memo(({ tasks, toggleTask, deleteTask }) => {
    console.log("Task list rendered");
    
    return (
        <ul style={{ listStyleType: "none", padding: 0}}>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
            ))}
        </ul>
    ); 
}); 

export default TaskList; 