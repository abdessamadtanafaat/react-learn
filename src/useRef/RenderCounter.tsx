import { useEffect, useRef, useState } from "react"


const RenderCounter: React.FC = () => {
    const [count, setCount] = useState(0); 

    // this commented code cause an infinite loop because of the useState: 
    // const [renderCount, setRenderCount] = useState(1);  
    // useEffect(() => {
    //     setRenderCount(renderCount + 1);  
    // })

    const renderCount = useRef(1);  // start at 1 since the component renders at least once

    useEffect(() => {
        renderCount.current += 1;  // increment the count on every render
    })

    return (
        <div
        style = {{textAlign: "center"}}
        >
            <h1>Count : {count}</h1>
             <h2>Component Re-renders : {renderCount.current} </h2>
            {/* <h2>Component Re-renders : {renderCount} </h2> it's a state gonna cause rerender so inifinite loop  */}
            <button onClick={()=> setCount(count + 1)}> Increment </button>
        </div>
    )

}

export default RenderCounter; 