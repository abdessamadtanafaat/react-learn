import { useRef, useState } from "react"


const StopWatch: React.FC = () => {
    const [time, setTime] = useState(0); 
    const intervalRef = useRef<NodeJS.Timeout | null>(null); 

    const startTimer = () => {
        if(!intervalRef.current){
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1); 
            }, 1000); 
        }
    }; 

    const stopTimer = () => {
        if(intervalRef.current) {
            clearInterval(intervalRef.current); 
            intervalRef.current = null; 
        }
    }; 

    const resetTimer = () => {
        stopTimer(); 
        setTime(0);
    }; 

    return (
        <div
        style = {{textAlign: "center"}}
        >
            <h1>StopWatch : {time}</h1>
            <button onClick={startTimer}>   Start   </button>
            <button onClick={stopTimer}>   Stop   </button>
            <button onClick={resetTimer}>   Reset   </button>
        </div>
    )
}

export default StopWatch; 