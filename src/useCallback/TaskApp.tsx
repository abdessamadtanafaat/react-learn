import { useCallback, useEffect, useReducer } from "react"
import { taskReducer } from "./TaskReducer"
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";

const TaskApp: React.FC = () => {
    const [tasks, dispatch] = useReducer(taskReducer, [], () => {
        const savedTaks = localStorage.getItem("tasks"); 
        return savedTaks ? JSON.parse(savedTaks) : []; 
    }); 


    // persist tasks in local storage
useEffect (() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
},[tasks])

const addTask = useCallback((text: string) => {
    dispatch ({type: "ADD TASK", payload: text }); 
}, []) ; 

const toggleTask = useCallback((id: number)=> {
    dispatch({type: "TOGGLE_TASK", payload: id });
}, []); 

const deleteTask = useCallback((id:number) => {
    dispatch({type: "DELETE_TASK", payload: id});
},[]); 

const clearTasks = useCallback(() => {
    dispatch ({type: "CLEAR_TASKS"});
},[]);  // empty dependencies array means the function won't change on re-renders. 


return (
    <div style={{textAlign: "center", maxWidth: "400px", margin: "auto"}}>
        <h1> Task Manager </h1>
        {/* this a memoized component  */}
        <TaskInput addTask={addTask}/> 
        {/* this also a memoized component  */}
        <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />

        {tasks.length > 0 && (
            <button
                onClick={clearTasks}
                style={{
                    marginTop: "10px", 
                    padding: "10px 20px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none", 
                    borderRadius: "5px", 
                    cursor: "pointer",
                }}
            >
                Clear All Tasks
            </button>
        )}

    </div>
)
}

export default TaskApp; 