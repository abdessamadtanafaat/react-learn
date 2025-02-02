import { useMemo, useState } from "react"


const FactorialCalculatorWithUseMemo = () => {
    const [number, setNumber] = useState(5); 
    const [count, setCount] = useState(0); // Dummy state to trigger re-renders
    
    const factorial = (n: number): number => (n <= 1 ? 1 : n* factorial(n-1)); 

    // Memomoize factorial calculation
    const memoizedFactorial = useMemo(()=>{
        console.log("Calculating factorial..."); 
        return number <= 1 ? 1 : number * factorial(number - 1); 
    },[number])

    // Now the factorial is only recalculated when the input number changes ! 

    return (
        <div>
            <h1> Factorial : {memoizedFactorial}</h1>
            <input
            type="number"
            value={number}
            onChange={(e)=> setNumber(Number(e.target.value))}
            />
            <button onClick={()=>setCount(count+1)}>Re - render</button>
        </div>
    )
}

export default FactorialCalculatorWithUseMemo; 