
export type Task = {
    id: number; 
    text: string;
    completed: boolean; 
}; 


type TaskAction = 
    | {type: "ADD TASK"; payload: string} 
    | {type: "TOGGLE_TASK"; payload: number}
    | {type: "DELETE_TASK"; payload: number}
    | {type: "CLEAR_TASKS"}

export const taskReducer = (state: Task[], action: TaskAction): Task[] => {

    switch (action.type) {
            case "ADD TASK" : return [...state, {id: Date.now(), text: action.payload, completed: false}]; 
            case "TOGGLE_TASK" : return state.map((task) => task.id === action.payload ? {...task, completed: !task.completed} : task);  
            case "DELETE_TASK" : return state.filter((task) => task.id !== action.payload); 
            case "CLEAR_TASKS" : return []; 
            default            : return state; 
    }
}
