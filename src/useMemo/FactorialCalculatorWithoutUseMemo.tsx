import { useState } from "react"

const FactorialCalculatorWithoutUseMemo = () => {
    const [number, setNumber] = useState(5); 
    const [count, setCount] = useState(0); // A dummy state


    const factorial = (n: number) : number => {
        console.log("Calculating factorial..."); 
        return n <= 1 ? 1 : n * factorial (n-1);  
    }; 

    return (
        <div>
            <h1> Factorial : {factorial(number)}</h1>
            <input 
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            />
            <button onClick={()=> setCount(count+1)}> Re-Render </button>
        </div>
    )
}
// the issue is the factorial is recalculated even when clicking the Re Render button even though the number hasn't changed .
export default FactorialCalculatorWithoutUseMemo;