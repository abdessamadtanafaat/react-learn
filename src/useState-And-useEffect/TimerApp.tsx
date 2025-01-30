import { useEffect, useState } from "react"


const TimerApp: React.FC = () => {
    const [time, setTime] = useState(0); 
    const [isRunning, setIsRunning] = useState(false);
    const [currentTime, setCurrentTime] = useState(""); 
    const [renderCount, setRenderCount] = useState(0);  // Track how many times the component re-renders


    // Effect for starting/stopping the timer 

    useEffect(()=> {
        let timer : NodeJS.Timeout; 
        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1);  // increment time every second 
            }, 1000); 
        }

        // Cleanup when the timer is stopped or unmounted 
        return () => clearInterval(timer); 

    },[isRunning]) 

    // Effect to update Morocco's current time 
    useEffect(() => {
        const updateMoroccoTime = () => {
            const moroccoTime = new Date().toLocaleTimeString("en-GB", {timeZone: "Africa/Casablanca",}); 
            setCurrentTime(moroccoTime); 
            console.log("Time updated:", moroccoTime); // Log every time the time is updated

        }; 

        console.log("Setting up interval...");  // Log every time an interval is set

        const timer = setInterval(updateMoroccoTime, 1000);  // update every second
        updateMoroccoTime();  // initial update

        // Cleanup the interval on component unmout
        return () => {
            console.log("Cleaning up interval...");  // Log when the interval is cleared
            clearInterval(timer); 
        }
    },[])
    
    useEffect(() => {
        console.log(`Component rendered ${renderCount + 1} times`);  // Track re-renders
        setRenderCount(prev => prev + 1);
    },[]);

    // format time in mm:ss format 

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds/60); 
        const secs = seconds % 60; 
        return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2,"0")}`; 
    }
    
    // Handlers 
    const handleStartPause = () => {
        setIsRunning(!isRunning); 
    }

    const handleReset = () => {
        setIsRunning(false); 
        setTime(0); 
    }; 

    return (
        <div style={{textAlign: "center", margin: "20px auto", maxWidth: "300px"}}>
            <h1> Timer/StopWatch</h1>

            {/* Current Time in Morocco */}
            <p><strong>Current Time - Morocco</strong></p> {currentTime}
            {/* StopWatch display*/}
            <h2> {formatTime(time)}</h2>

            {/* Controls */}
            <div>
                <button
                    onClick={handleStartPause}
                    style={{
                        padding: "10px 20px",
                        marginRight: "10px",
                        backgroundColor: isRunning ? "orange" : "green", 
                        color : "white",
                        border: "none", 
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}              
                >
                    {isRunning ? "Pause" : "Start"}
                </button>
                <button
                    onClick={handleReset}
                    style={{
                        padding: "10px 20px", 
                        backgroundColor: "red", 
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default TimerApp; 