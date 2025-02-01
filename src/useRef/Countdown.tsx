import { useRef, useState } from "react";


const Countdown: React.FC = () => {
    const [time, setTime] = useState(10); // start countdown at 10 seconds
    const timerRef = useRef<NodeJS.Timeout | null>(null); 

    const startCountdown = () => {
        if(!timerRef.current && time > 0) {
            timerRef.current = setInterval(() => {
                setTime((prevTime) => {
                    if(prevTime <= 1) {
                        clearInterval(timerRef.current!); // dire a typescript que tu es sur que timerRef.current n'est pa null ou undefined. 
                        timerRef.current = null; 
                        return 0;  // stop at 0
                    }
                    return prevTime -1; 
                })
            },1000)
        }
    }; 

    const stopCountdown = () => {
        if(timerRef.current) {
            clearInterval(timerRef.current); 
            timerRef.current  = null; 
        }
    }; 

    const resetCountdown = () => {
        stopCountdown(); 
        setTime(10); 
    }; 

    return (
        <div
        style={{textAlign: "center"}}
        >
        <h1>Countdown: {time}s</h1>
        <button onClick={startCountdown}>Start</button>
        <button onClick={stopCountdown}>Stop</button>
        <button onClick={resetCountdown}>Reset</button>
        </div>
    )
}

export default Countdown; 